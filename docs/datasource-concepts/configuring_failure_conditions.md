---
sidebar_position: 12
---

import Thumbnail from '@site/src/components/Thumbnail';

# Configuring failure conditions

While configuring `Rest API/GraphQL Api/Database Query`, there might be scenario where you want your connector response to execute failure flow instead of success flow on certain conditions, in such cases, you can define `failure conditions`.

Failure conditions can be located under `Connectors -> ADD API/ADD QUERY -> Response -> FAILURE CONDITION`

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/failure_condition_default.png" alt="Failure Condition" />
  <figcaption align = "center"><i>Failure Condition</i></figcaption>
</figure>

It consists of three parts -

 | Field | Description  | Keyword |
  | ----------------- |------- |:----:|
| Failure Condition        | It accepts the inline js code within `{{}}` and should output either `true/false`. For eg - `{{OUTPUT.RESP == 1}}` | - |
| Failure Message | Custom failure message that can be displayed to your end user | FAILURE_MESSAGE |
| Failure/Error code |  Custom Error Code that you can define to identify the failure condition.  For eg - `LICENSE_ERR`, `NOT_FOUND`. No space or special charaters are allowed except underscore. | FAILURE_CODE |

:::info PLEASE NOTE
- You can define multiple failure conditions based on your use case.
- Above Keywords you can use in `Error` leg of above connector added in `Action Flow`
:::

## Configuring Failure Conditions

Failure Conditions can be configured for any Api/Query, you have have added.

Let's add a failure condition to a `Database Query` -

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/failure_condition_configured.png" alt="Failure Condition for No Customer Found" />
  <figcaption align = "center"><i>Failure Condition for No Customer Found</i></figcaption>
</figure>

In the above condition, if the given email is not present in the database then we will return a custom error code `NO_DATA` along with custom error message.

Now, lets use this query in our app. 

## Using Failure conditions in BIND Data to Control

Let's have two text input control named - `customeremail` and `customername` for entering Customer Email and Customer Full name respectively. So, when we enter an email in `customeremail` control, we want our query to get executed and get us Customer Full Name that gets populated in `customername` control.

 For Data bind option for `customername` control, we have a data query using `Connector Lirary -> Customer -> GetCustomerByEmail` and assign `customeremail` as input to `Email` dynamic variable for this query.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/failure_condition_data_query_customer_name.png" alt="Data Query for Customer Email Control" />
  <figcaption align = "center"><i>Data Query for Customer Email Control</i></figcaption>
</figure>


Now, when there is no Customer info for given email id then your custom failure message will be visible to end user of your app.
<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/failure_condition_bind_data_error.png" alt="No Customer Data Found" />
  <figcaption align = "center"><i>No Customer Data Found</i></figcaption>
</figure>

Here, in case of success scenario, no error message is visible and Customer data is displayed.
<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/failure_condition_bind_data_success.png" alt="Customer Data Found" />
  <figcaption align = "center"><i>Customer Data Found</i></figcaption>
</figure>


## Using Failure conditions in Action flow

We can utilize the same query for calling it in action flow which gets triggered on, `button_click` event of a button control.

Let's have one text input control named - `customeremail` and one button control named - `getcustomername`.
Now, on `button_click` event of this button, we will call `Customers -> GetCustomerByEmail` Query with `customeremail` as input parameter. We then show `Customer Name` retrieved from the above query response in a `customername` Text Input control in case of a `Success` response. In case of an `Error` response we will show a failure message using a `Toast` action. Error leg will either be called for non `2xx Status Code` response or based on `Failure Conditions` specified for this query. In this case, failure condition will get called when it returns empty value if given email id is not present in the Database.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/failure_condition_action_connector.png" alt="GetCustomerByEmail Query in Actionflow" />
  <figcaption align = "center"><i>GetCustomerByEmail Query in Actionflow</i></figcaption>
</figure>

Here, `Error_Message` is output variable that will be configured in failure scenario and `Name` is the output variable that will be configured in success scenario for set `customername` control's value.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/failure_condition_action_flow.png" alt="Actionflow of button_click event" />
  <figcaption align = "center"><i>Actionflow of button_click event</i></figcaption>
</figure>

Success flow showing Customer Name in `customername` control -
<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/failure_condition_action_flow_success.png" alt="Set Control on Query Success" />
  <figcaption align = "center"><i>Set Control on Query Success</i></figcaption>
</figure>

Error flow showing `Failure message` when  No customer is found for given `email id`  -
<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/failure_condition_action_flow_error.png" alt="Error Message on Query Failure Condition" />
  <figcaption align = "center"><i>Error Message on Query Failure Condition</i></figcaption>
</figure>


:::info PLEASE NOTE
`FAILURE_MESSAGE` and `FAILURE_CODE` are the two keywords that you can use in output variables when failure conditions is met and Error Leg is executed for Connector Action block.
:::