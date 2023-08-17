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

The query string paramter values can be accessed through the `QUERYSTRING("paramName")` function where `paramName` is the name of the query string parameter you want to access. The query string value can be statically binded to any control using the Formula Box available in Data Bind Section or can be accessed in the Actionflow using the Compute action block.

### Using Data Bind Section

You can bind query string value to the control, by clicking on the `Control -> Data Bind Section -> FX -> Edit` and then specify the query string parameter within the `QUERYSTRING("paramName")` function in the formula box as shown below. In our example, it is `QUERYSTRING("Name")`.

<figure>
  <Thumbnail src="/img/building-apps-concepts/reading_query_params_in_public_apps/data-bind-formula-box-query-string.png" alt="Query String Config Options Modal" />
  <figcaption align='center'><i>Data bind formula box</i></figcaption>
</figure>

### Using Actionflow's Compute Block

Binding query string variable is a two step process in Actionflow, where firstly the query string parameter value is stored inside a variable using the `Compute` block and then using `Set Control Value` block the variable's stored value is assigned to a control.

- **Access Query String** - Add a `Compute` block, and create variable(s) by clicking on the `Add Variable` button. In our example, we have set the variable name as `emailVar` and the formula as `QUERYSTRING("Email")`.

<figure>
  <Thumbnail src="/img/building-apps-concepts/reading_query_params_in_public_apps/action-flow-compute-query-string.png" alt="Action Flow Set Control Value - Query String" />
  <figcaption align='center'><i>Actionflow compute block to access query string value</i></figcaption>
</figure>

- **Bind Variable to Control** - Within the `Set Control Value` block, select the control you want to bind data with, and set the control value as the variable created inside the `Compute` block.

<figure>
  <Thumbnail src="/img/building-apps-concepts/reading_query_params_in_public_apps/action-flow-setControlValue-query-string.png" alt="Action Flow Set Control Value - Query String" />
  <figcaption align='center'><i>Variable value binded to control</i></figcaption>
</figure>