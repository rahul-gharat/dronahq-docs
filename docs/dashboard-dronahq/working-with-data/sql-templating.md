---
sidebar_position: 2
title: SQL Templating
---

import VersionedLink from '@site/src/components/VersionedLink';
import Basics from '@site/static/icons/features/basics.svg';
import ArrowRight from '@site/static/icons/arrow_right.svg';
import Image from '@site/src/components/Image'; 
import Thumbnail from '@site/src/components/Thumbnail';
 

## Jinja Templates

In Dashboard's SQL Lab Editor, Jinja templating is supported within queries. To activate templating, you need to enable the `ENABLE_TEMPLATE_PROCESSING` feature in your DronaHQ configuration. Once enabled, you can embed Python code within virtual datasets and Custom SQL, particularly in filter and metric controls in the Explore interface.

By default, the following variables are accessible within the Jinja context:

- `columns`: Columns used for grouping in the query
- `filter`: Filters applied in the query
- `from_dttm`: Start datetime of the selected time range (None if not defined)
- `to_dttm`: End datetime of the selected time range (None if not defined)
- `groupby`: Deprecated; columns used for grouping in the query
- `metrics`: Aggregate expressions in the query
- `row_limit`: Row limit of the query
- `row_offset`: Row offset of the query
- `table_columns`: Columns available in the dataset
- `time_column`: Temporal column of the query (None if not defined)
- `time_grain`: Selected time grain (None if not defined)

For instance, to apply a time range filter in a virtual dataset, you can write:

```sql
SELECT *
FROM tbl
WHERE dttm_col > '{{ from_dttm }}' AND dttm_col < '{{ to_dttm }}'
```

Additionally, you can use Jinja logic to ensure your query handles scenarios where the time range filter might be cleared:

```sql
SELECT *
FROM tbl
WHERE (
    {% if from_dttm is not none %}
        dttm_col > '{{ from_dttm }}' AND
    {% endif %}
    {% if to_dttm is not none %}
        dttm_col < '{{ to_dttm }}' AND
    {% endif %}
    true
)
```

Notice that Jinja parameters are invoked with double brackets in the query and without brackets in the logic blocks.

To introduce custom functionality into the Jinja context, you can extend the default context by defining `JINJA_CONTEXT_ADDONS` in your configuration. The objects in this dictionary are then available for use where Jinja templating is supported.

```python
JINJA_CONTEXT_ADDONS = {
    'my_custom_macro': lambda x: x * 2,
}
```

Default values for Jinja templates can be set through the Parameters menu in the SQL Lab interface. Parameters are assigned as a JSON object and become accessible in your SQL code using Jinja syntax.

```json
{
  "my_table": "foo"
}
```

You can then refer to these parameters in your queries:

```sql
SELECT * FROM {{ my_table }}
```

These parameters are stored with the dataset as TEMPLATE PARAMETERS.

There's a special `_filters` parameter that allows testing filters used within the Jinja template.

```json
{
  "_filters": [
    {
      "col": "action_type",
      "op": "IN",
      "val": ["sell", "buy"]
    }
  ]
}
```

For example:

```sql
SELECT action, count(*) as times
FROM logs
WHERE action in {{ filter_values('action_type') | where_in }}
GROUP BY action
```

Note that `_filters` is not stored with the dataset and is only used within the SQL Lab interface.

#### Custom Template Processors

Besides default Jinja templating, SQL Lab supports custom template processors. You can define your own template processor by setting the `CUSTOM_TEMPLATE_PROCESSORS` configuration. This allows you to override the default Jinja template processors for specific database connector. For instance, you could create a custom template processor for Presto that uses a different syntax, such as `$` instead of Jinja’s `{{ }}`.

```python
def DATE(ts: datetime, day_offset: int = 0, hour_offset: int = 0) -> str:
    offset_day = (ts + timedelta(days=day_offset, hours=hour_offset)).date()
    return str(offset_day)

class CustomPrestoTemplateProcessor(PrestoTemplateProcessor):
    engine = "presto"

    def process_template(self, sql: str, `kwargs) -> str:
        macros = {
            "DATE": partial(DATE, datetime.utcnow())
        }
        macros.update(self.context)
        macros.update(kwargs)

        def replacer(match):
            macro_name, args_str = match.groups()
            args = [a.strip() for a in args_str.split(",")]
            f = macros[macro_name[1:]]
            return f(*args)

        macro_names = ["$" + name for name in macros.keys()]
        pattern = r"(%s)\s*\(([^()]*)\)" % "|".join(map(re.escape, macro_names))
        return re.sub(pattern, replacer, sql)

CUSTOM_TEMPLATE_PROCESSORS = {
    CustomPrestoTemplateProcessor.engine: CustomPrestoTemplateProcessor
}
```

#### SQL Validation

SQL Lab also includes live query validation with pluggable backends. You can specify which validation implementation to use for different database connectors by configuring the `SQL_VALIDATORS_BY_ENGINE` in your configuration file:

```python
FEATURE_FLAGS = {
    'SQL_VALIDATORS_BY_ENGINE': {
        'presto': 'PrestoDBSQLValidator',
    }
}
```

The available validators and their names can be found in the `sql_validators` module.

#### Predefined Jinja Macros

##### Current Username

The `{{ current_username() }}` macro retrieves the username of the currently logged-in user. If caching is enabled, this value is used by default in the cache key calculation. To exclude the username from the cache key, use:

```jinja
{{ current_username(add_to_cache_keys=False) }}
```

##### Current User ID

The `{{ current_user_id() }}` macro returns the ID of the currently logged-in user. Like the username, this value is included in the cache key by default. To exclude it:

```jinja
{{ current_user_id(add_to_cache_keys=False) }}
```

##### Current User Email

The `{{ current_user_email() }}` macro retrieves the email address of the currently logged-in user, which is also included in the cache key by default. To exclude it:

```jinja
{{ current_user_email(add_to_cache_keys=False) }}
```

##### Custom URL Parameters

The `{{ url_param('custom_variable') }}` macro allows you to define and reference arbitrary URL parameters in your SQL code.

For example:

```sql
SELECT count(*)
FROM ORDERS
WHERE country_code = '{{ url_param('countrycode') }}'
```

This query will adapt based on the `countrycode` parameter passed in the URL.

##### Explicitly Including Values in Cache Key

Use the `{{ cache_key_wrapper() }}` function to explicitly include a value in the cache key calculation. This is useful for custom functions that return values that need to be included in the cache key.

##### Filter Values

The `{{ filter_values() }}` macro retrieves the value of a specific filter as a list, which is useful for queries where the filter component column name differs from the one in the select statement.

```sql
SELECT action, count(*) as times
FROM logs
WHERE action in {{ filter_values('action_type') | where_in }}
GROUP BY action
```

##### Filters for a Specific Column

The `{{ get_filters() }}` macro returns filters applied to a given column, including the operator used in the Explore UI. This is useful for handling custom SQL conditions for filters or when the filter inside the main query needs to be optimized for performance.

For example:

```sql
WITH RECURSIVE
    superiors(employee_id, manager_id, full_name, level, lineage) AS (
    SELECT
        employee_id,
        manager_id,
        full_name,
        1 as level,
        employee_id as lineage
    FROM
        employees
    WHERE 1=1
    {%- for filter in get_filters('full_name', remove_filter=True) -%}
        {%- if filter.get('op') == 'IN' -%}
            AND full_name IN {{ filter.get('val') | where_in }}
        {%- elif filter.get('op') == 'LIKE' -%}
            AND full_name LIKE {{ "'" + filter.get('val') + "'" }}
        {%- endif -%}
    {%- endfor -%}
    UNION ALL
    SELECT
        e.employee_id,
        e.manager_id,
        e.full_name,
        s.level + 1 as level,
        s.lineage
    FROM
        employees e, superiors s
    WHERE s.manager_id = e.employee_id
    )
SELECT
    employee_id, manager_id, full_name, level, lineage
FROM
    superiors
ORDER BY lineage, level
```

#### Querying Datasets

You can query both physical and virtual datasets using the `{{ dataset() }}` macro. This is particularly useful when you want to reuse computed columns and metrics in ad-hoc SQL Lab queries.

To query a dataset:

```sql
SELECT * FROM {{ dataset(42) }} LIMIT 10
```

To include metrics in the query:

```sql
SELECT * FROM {{ dataset(42, include_metrics=True) }} LIMIT 10
```

You can also specify which columns to group by:

```sql
SELECT * FROM {{ dataset(42, include_metrics=True, columns=["ds", "category"]) }} LIMIT 10
```

#### Metrics

The `{{ metric('metric_key', dataset_id) }}` macro allows you to retrieve metric SQL syntax from a dataset. This is helpful for:

- Overriding metric labels at the chart level
- Combining multiple metrics in calculations
-

 Using existing metrics in ad-hoc SQL queries in SQL Lab

The metric name is stored in the metric key and typically includes a label for charts or an alias for SQL queries. To use a metric with a custom alias, provide the alias as the third argument:

```sql
SELECT SUM(value)
FROM {{ dataset(42) }}
WHERE {{ metric('revenue', 42) }} > 0
```

You can also use macros in datasets, metrics, and filters to create dynamic and flexible queries.
