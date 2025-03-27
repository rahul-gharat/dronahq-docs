---
sidebar_position: 1
---

import Thumbnail from '@site/src/components/Thumbnail';

# Reading query params in public apps

Query string parameters are key-value pairs which store values in the URL such as search terms or page translation data that can be referenced inside the Web App. Using DronaHQ's `Query String` config option, you can configure custom query string parameters to perform certain actions on page load or prefill data to input controls within the app.

## Configure Query String Parameters

Navigate to `Config Options -> Query String`. Click on `Add query string` and define your query strings name and value. Once done, click on `Save Query String`.

<figure>
  <Thumbnail src="/img/building-apps-concepts/reading_query_params_in_public_apps/query-string-config-options.png" alt="Query String Config Options Modal" />
  <figcaption align='center'><i>Query string config screen</i></figcaption>
</figure>

## Accessing Query String Values

The query string parameter values can be accessed through the `QUERYSTRING("paramName")` function where `paramName` is the name of the query string parameter you want to access. The query string value can be statically binded to any control using the Formula Box available in Data Bind Section or can be accessed in the Actionflow using the Compute action block.

### Using the variable

You can simply bind query string value to the control, by using parameter name as variable. Click on the control, and then `Content > Bind Data` to mention `{{paraName}}`.

<figure>
  <Thumbnail src="/img/building-apps-concepts/reading_query_params_in_public_apps/data-bind-variable-query-string.png" alt="Query String Config Options Modal" />
  <figcaption align='center'><i>Data bind through variable</i></figcaption>
</figure>

### Using Data Bind Section

You can bind query string value to the control, by clicking on the `Control -> Content ->Quick Select -> FX -> Edit` and then specify the query string parameter within the `QUERYSTRING("paramName")` function in the formula box as shown below. In our example, it is `QUERYSTRING("Name")`.

<figure>
  <Thumbnail src="/img/building-apps-concepts/reading_query_params_in_public_apps/data-bind-formula-box-query-string.png" alt="Query String Config Options Modal" />
  <figcaption align='center'><i>Data bind formula box</i></figcaption>
</figure>

### Using Actionflow

You can pass on the query parastring in the action flow for various purposes according to need. Since, we have a variable for the query string parameter, we can simply use the variable name as keyword to pass into various action blocks.


- **Bind Variable to Control** - Within the `Set Control Value` block, select the control you want to bind data with, and set the control value as the variable created.

<figure>
  <Thumbnail src="/img/building-apps-concepts/reading_query_params_in_public_apps/action-flow-setControlValue-query-string.png" alt="Action Flow Set Control Value - Query String" />
  <figcaption align='center'><i>Variable value binded to control</i></figcaption>
</figure>