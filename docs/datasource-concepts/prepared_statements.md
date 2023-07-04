---
sidebar_position: 1
---

import Thumbnail from '@site/src/components/Thumbnail';

# Prepared statements

A [Prepared Statement](https://en.wikipedia.org/wiki/Prepared_statement) is a feature provided by Database Management Systems (DBMS), to efficiently execute the same statement with dynamic data bindings. It utilizes pre-compiled SQL code without data, resulting in faster execution.

In this guide, you will discover how to utilize prepared statements in DronaHQ, along with various examples for different data sources. Additionally, you will learn when to use prepared statements and when they may not be necessary.

## Why should you use prepared statements?
Advantages of using prepared statements are:

### Efficiency
Prepared statements utilize pre-compiled SQL code, eliminating the need for compilation during each execution. This significantly speeds up execution, resulting in improved efficiency.

### Security
Prepared statements are parameterized and reusable blocks of code. They enforce separating the SQL command from user input data. The data bindings defined in prepared statements are sent to the server to execute the pre-compiled code block and generate the response. This approach provides a secure environment and helps prevent [SQL injection](https://en.wikipedia.org/wiki/SQL_injection), which is a prevalent web hacking technique.


## Prepared statement in DronaHQ

In DronaHQ, prepared statements are supported by converting user queries into parameterized queries by replacing the bindings. When creating a query with dynamic parameters with values corresponding to control/variable in an App, DronaHQ internally replaces these dynamic bindings with question marks ('?') to create Prepared Statements.


For instance, consider the following query created in DronaHQ:

```sql
SELECT * FROM customers WHERE id = {{Tablegrid1.userId}};
```

DronaHQ internally replaces {{Tablegrid1.userId}} with a question mark (?). The payload inserts parameters one by one, ensuring that the bindings are properly escaped and sanitized before sending the query to the database for execution. This process effectively translates an DronaHQ query into a prepared statement.

:::info NOTE
DronaHQ takes the necessary precautions to sanitize each input, providing protection against SQL injection for the applications you build on the platform.
:::

As an example, let's consider a query with multiple bindings:

```sql
SELECT * FROM customers WHERE id = {{Tablegrid1.userId}} AND name = {{Tablegrid1.name}};
```

In this query, the first binding for `Id ({{Tablegrid1.userId}})` is set as the first parameter, while the second binding for `name ({{Tablegrid1.name}})` is assigned as the second parameter.

:::info NOTE
The DronaHQ queries with multiple bindings are translated into the number of parameters that are supplied to a prepared statement.
:::

### Prepared statement support

Prepared statements can be utilized with the following data sources in DronaHQ:
- [MS SQL](../reference-connectors/mssql)
- [My SQL](../reference-connectors/mysql)
- [PostgreSQL](../reference-connectors/postgresql)
- [Oracle](../reference-connectors/oracle)

### Enable prepared statement

To use prepared statements for a datasource, you'll have to enable the prepared statement for connector configuration.

Go to `Connectors -> + CONNECTOR -> Select Supported DB`, in this case PostgreSQL and `enable` this toggle named `Enable converting queries to prepared statement` to Enable prepared statement.

<Thumbnail src="/img/connecting-datasource/concepts/enable_prepared_statement.png" alt="Simple Database GUI" width="50%" />


While there may be some variations in query creation syntax [among the mentioned data sources](#prepared-statement-support), the capability to enable or disable prepared statements is available for virtually every scenario, as exemplified below.

### When to use prepared statements in DronaHQ

DronaHQ provides support for utilizing prepared statements, allowing dynamic data bindings in the WHERE clause. It's important to keep the query preceding the WHERE clause static and specify the column names used for data filtering. However, the actual data can be dynamically set based on user input.

In the code snippet below, you can observe the dynamic addition of data bindings enclosed within `double curly braces {{}}`, representing user input:

```sql
SELECT * FROM Customers WHERE ID = {{Tablegrid1.Id}}
```

:::info NOTE
Prepared statements in DronaHQ only allow bindings for data supplied to columns within the WHERE clause.
:::

Here are some examples showcasing when and how you can effectively utilize prepared statements:

#### Simple prepared statement
Prepared statements are suitable for performing Create, Read, Update, or Delete (CRUD) operations, enabling manipulation of database table data with dynamic data bindings. For instance, when capturing customer registration details from a registration form in DronaHQ, you can use a simple insert query with prepared statements:

```sql
Insert into customers (name, email) values ({{username}}, {{useremail}});
```

In this example, `username` and `useremail` are the two text input controls of the registration form.


#### In Clause
When implementing a search feature where customers can select different statuses to filter results, you can use the IN clause. You have two scenarios for IN clause queries: dynamic array length and static array length.

Static Array Length: 
When you know the exact number of data bindings for the IN clause, you can specify them directly. For example:

```sql
SELECT * from customers where status in ({{activeStatusOption}} , {{inActiveStatusOption}})
```

### When not to use prepared statements in DronaHQ
There are certain scenarios where using prepared statements is not suitable:

#### Dynamic Table Name
If you dynamically generate a table name based on certain criteria in your code logic and supply it as a binding to the query, prepared statements will not work. For instance:

```sql
Select * from {{Generated_Table_Name.text}}
```

#### Dynamic Queries
When you generate a query on the fly based on parameters and execute it, the prepared statements will not function properly. For example:

```sql
select * from {{Query_to_Execute.text}}
```

#### Dynamic WHERE Clause
If you generate a WHERE clause based on code logic, dynamically adding columns and data based on user input, prepared statements will not be able to execute properly. An example is:

```sql
SELECT * FROM customers WHERE {{DynamicWhereClause}}
```

For such scenarios, it is recommended to disable prepared statements and continue using the query for generating responses.

:::info NOTE
Prepared statements require a static part of the query to understand the type of operation (Create, Read, Update, or Delete) performed on the database table, as well as the columns used in the WHERE clause for data filtering.
:::

## Conclusion
Prepared statements enhance [efficiency](#efficiency) and [security](#security) in data manipulation for apps developed on DronaHQ. With built-in sanitization provided by DronaHQ, you can seamlessly build complex applications that meet your requirements.

