---
sidebar_position: 5
title: Query JSON using SQL
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

# Query JSON using SQL

You can seamlessly query data from non-SQL sources as SQL using DronaHQ's built-in Query JSON with SQL. It harnesses the power of AlaSQL, which employs its own syntax that differs from traditional SQL. For instance, AlaSQL uses square brackets or backticks to enclose column names containing whitespace, in contrast to double quotes. To explore further details, you can refer to the [AlaSQL docs.](https://github.com/agershun/alasql/wiki/Sql)

To get started, simply choose 'Query JSON with SQL' in the Data query section. The Query JSON with SQL resource readily accepts an array of JSON objects within its FROM clause, making data retrieval and manipulation a breeze.

<figure>
  <Thumbnail src="/img/data-queries/query-json-sql.png" alt="Query JSON using SQL" width='100%'/>
  <figcaption align = "center"><i>Query JSON using SQL</i></figcaption>
</figure>

### Example1: Query Raw JSON

  ```sql
    select * 
    from {{ [{ age: 5, name: John }, { age: 8, name: Doe }] }} 
    where age > 6
```

### Example2: Join JSON arrays

  ```sql
select *
from {{ programs.data }} as programs
join {{ centers.data }} as centers
on programs.id = centers.id
```

