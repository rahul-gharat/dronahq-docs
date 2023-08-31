---
sidebar_position: 1
title: Connector library
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

# Connector library

DronaHQ provides you with a comprehensive platform to consolidate information from various tables in a datasource when building applications. With the ability to create queries, you can effortlessly fetch data from different tables/documents and seamlessly present it in a cohesive manner. Beyond just fetching data, queries empower you to perform essential tasks such as inserting, updating, or removing data from a datasource. Additionally, you can easily bind this data to widgets, enabling a dynamic and interactive user experience.

## Using connector library in data queries

You can navigate and click on `Data queries -> + -> Connector library` to add a new data query. You will see a list of added connectors in your account followed by the queries or APIs created under each connector as a library which can be used across multiple apps. 

<figure>
  <Thumbnail src="/img/data-queries/connector-library.png" alt="Connector library" width='100%'/>
  <figcaption align = "center"><i>Connector Library</i></figcaption>
</figure>

You can select any of the query added in the library and you will see a model with the following sections:

- [Meta](../connector-library/#meta) - Details of the data query including the name using which it can be referenced.
- [Environments](../connector-library/#environments) - For ready APIs provided by DronaHQ you can configure different accounts for different environments.
- [Variables](../connector-library/#variables) - All dynamic variables are here which can be configured with the value that you want to pass.
- [Transform response](../connector-library/#transform-response) - Different options to transform the response received from the connector query.
- [Response Raw](../connector-library/#raw-response) - Raw response received from the connector query.
- [Response Transformed](../connector-library/#transformed-response) - Response after the transformation is run on the raw data.
- [Advanced](../connector-library/#advanced) - Advanced configurations while running this data query.

<figure>
  <Thumbnail src="/img/data-queries/configure-library.png" alt="Connector library" width='100%'/>
  <figcaption align = "center"><i>Configure from the Connector Library</i></figcaption>
</figure>

## Meta

You can configure the unique name of your data query here and also check the actual API call or Database query which has been configured in the connector library. There is another dropdown of `Run query` which has the options for the query to auto execute on change of the variables or manually trigger the execution.

<figure>
  <Thumbnail src="/img/data-queries/connector-library-meta.png" alt="Meta info" width='100%'/>
  <figcaption align = "center"><i>Data query meta</i></figcaption>
</figure>

## Environments

This section is visible only with third party ready APIs provided by DronaHQ and you can select any of the accounts added in that connector and map it to a specific environment. This will make sure that the particular account is used when the app is running in the specified environment. 

<figure>
  <Thumbnail src="/img/data-queries/connector-library-environments.png" alt="Environments" width='100%'/>
  <figcaption align = "center"><i>Environments</i></figcaption>
</figure>

## Variables

All the dynamic variables used while creating a query will be listed here and you can map the actual values that should be passed along with a test value that you can use to test during the configuration stage. For e.g. you might want to configure the `offset` and `limit` of the tablegrid control and map it to the offset and limit in the SQL query you have to run pagination.

<figure>
  <Thumbnail src="/img/data-queries/connector-library-variables.png" alt="Variables" width='100%'/>
  <figcaption align = "center"><i>Dynamic variables</i></figcaption>
</figure>

:::info Please Note

You can refresh the raw response with the test values and check the response that is fetched to make sure your queries are running fine.

:::

## Transform response

This section allows you to transform the raw data received from the server and manipulate it to get it in the format of your choice. You can make use of the [JS libraries](../../../app-scripting-and-code/import-js-libraries) and [JS objects](../../../app-scripting-and-code/import-js-libraries) here as well. The output of this transformation will be seen in the transformed response section and will be the final output of the Data query for the rest of the app. 

<figure>
  <Thumbnail src="/img/data-queries/transform-response.png" alt="Transform response" width='100%'/>
  <figcaption align = "center"><i>Transform response</i></figcaption>
</figure>

You can transform the response in 4 different ways:

- [Write Javascript](../connector-library/#write-javascript)
- [Filter objects](../connector-library/#filter-objects)
- [Filter keys](../connector-library/#filter-keys)
- [Write DQL | DronaHQ Query Language](../../data-queries/dronahq-query-language) (Coming soon)

### Write Javascript

You can write your own JS script here which can utilize the JS Libraries (inbuilt and imported), JS objects and transform the raw response. In this example I am fetching limited keys from the google sheet raw response and also converting one of the comma separated values into an array.

<figure>
  <Thumbnail src="/img/data-queries/write-js.png" alt="Writing JS" width='100%'/>
  <figcaption align = "center"><i>Writing Javascript</i></figcaption>
</figure>

The following example is of a raw response and the JS written to transform it into the required JSON output in the transformed section. 

**Raw Response**
```json
{
  "range": "Sheet1!A2:Z10",
  "majorDimension": "ROWS",
  "values": [
    {
      "A": "John Doe",
      "B": "John",
      "C": "9",
      "D": "XL",
      "E": "Men",
      "F": "Batsman,Fielder",
      "G": "Non Veg",
      "H": "B",
      "I": "605",
      "J": "9820000000",
      "K": "Yes",
      "L": "No",
      "M": "18 - 55",
      "N": "John",
      "O": "2000",
      "RowNumber": 2
    }
  ]
}
```


**JS code**
```javascript
function transform( data ) {
 data = data.values.map(value => {
  return {
    name: value.A,
    "diet.plan": value.G,
    "type.of.player": value.F.split(",")
  };
});
return data;
```

**Transformed Response**
```json
[
  {
    "name": "John Doe",
    "type.of.player": [
      "Batsman",
      "Fielder"
    ],
    "diet_plan": "Non Veg"
  },
```

### Write DQL expressions

DQL or DronaHQ Query Language serves as an efficient query and transformation tool for JSON data, drawing inspiration from the 'location path' concepts found in XPath 3.1. This connection enables the formulation of complex queries through a condensed and user-friendly notation. The language includes a comprehensive assortment of pre-established operators and functions that facilitate the manipulation and amalgamation of the extracted information. Furthermore, the results of these queries can be molded into any desired JSON output arrangement, utilizing well-known JSON object and array constructs. Along with the capability to formulate user-specific functions, this allows for the crafting of advanced expressions designed to handle any conceivable JSON query or transformation challenge.

[You can read more about it here](../data-queries/dronahq-query-language.md)


<figure>
  <Thumbnail src="/img/data-queries/dql-transform.png" alt="DQL in transformation" width='100%'/>
  <figcaption align = "center"><i>DQL in transform section</i></figcaption>
</figure>

**DQL Expression**
```json
data.Player_name
```

**Transformed Response**
```json
[
  "Raujesh Agarrwal",
  "Kalpesh Jain",
  "Vinod beriwal",
  "Faraz",
  "Abrar Kherani",
  "Ruchir tiwari",
  "Tanveer Madaan",
]
```


### Filter Objects

You can define your conditions here in the following format to filter out the objects from your raw response. This will filter and get only those objects from the array which meet this defined criteria. 
```javascript
{{data.id > 10}}
```
<figure>
  <Thumbnail src="/img/data-queries/filter-objects.png" alt="Filter Objects" width='100%'/>
  <figcaption align = "center"><i>Filter Objects</i></figcaption>
</figure>

:::info Please Note

This filtering will work only if the raw response is in an object of an array format.

:::

### Filter Keys

In this section you can select the keys from the dropdown which you want to be filtered and the final transformed response will contain only those keys and the rest will be ignored. 

<figure>
  <Thumbnail src="/img/data-queries/filter-keys.png" alt="Filter Keys" width='100%'/>
  <figcaption align = "center"><i>Filter Keys</i></figcaption>
</figure>

:::info Please Note

There are times when the keys might not be present while testing and you would still be able to configure them using the option `keys missing?`. Also this will work only on JSON data which isn't too nested.

:::

With the above configurations in the filter objects and keys we can transform the Raw response below to the required transformed response:

**Raw Response**
```json
[
    {
    "id": 10,
    "avatar": "https://dronamobilepublic.s3.amazonaws.com/DRONA5_Team2050/content/app/images/public/dictaipsamet_V4FmM.png",
    "fullname": "Santino Wyman",
    "department": "Event Managemen",
    "address": "jaipur",
    "email": "santino.wyman@example.com",
    "birthdate": "19-Jan-85"
  },
  {
    "id": 12,
    "avatar": "https://dronamobilepublic.s3.amazonaws.com/DRONA5_Team2050/content/app/images/public/laborumvoluptasporro_1kxD1.png",
    "fullname": "Candace Kunze test",
    "department": null,
    "address": "81455 Lindgren Spurs test",
    "email": "candace.kunze@example.com",
    "birthdate": "19-Jan-78"
  }
  ]
```

**Transformed Response**
```json
[
  {
    "id": 12,
    "fullname": "Candace Kunze test",
    "department": null
  }
]
```

## Raw Response

This tab will save and show you the actual response received from the API or Database query. 

<figure>
  <Thumbnail src="/img/data-queries/raw-response.png" alt="Raw Response" width='100%'/>
  <figcaption align = "center"><i>Raw Response</i></figcaption>
</figure>

:::info Please Note

DronaHQ by default converts the Database responses in JSON format. 

:::

## Transformed Response

This tab shows the transformed response after the transformations have been run. This will be the output of the data query that will be available across the app.

<figure>
  <Thumbnail src="/img/data-queries/transformed-response.png" alt="Transformed Response" width='100%'/>
  <figcaption align = "center"><i>Transformed Response</i></figcaption>
</figure>

## Advanced

In the advanced section you can write a condition when you dont want to execute this query. This is generally used in places where if there are dependant dynamic variables which send values like null on which you dont want to run the query. Also when you have JSON objects with keys which have special characters or emojis and you want to sanitize those keys you can toggle `ON` the `Sanitize keys` property. 

<figure>
  <Thumbnail src="/img/data-queries/advanced.png" alt="Advanced" width='100%'/>
  <figcaption align = "center"><i>Advanced</i></figcaption>
</figure>
