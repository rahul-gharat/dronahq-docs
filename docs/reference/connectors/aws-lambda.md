---
sidebar_position: 1
title: AWS Lambda
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

AWS Lambda is an event-driven, serverless computing platform that runs code in response to events. You can run code without having to manage the server. You can use it to run code of any type of application or backend service.

## Prerequisite 

1. AWS Account: You need an active AWS account with appropriate permissions to create and manage Lambda functions.

2. Lambda Function: Create the Lambda function in your AWS account that you intend to integrate with the connector. Ensure you have the function's ARN (Amazon Resource Name) available.

3. Access and Secret Keys: Obtain the AWS Access Key ID and Secret Access Key associated with the IAM user or role that has access to the Lambda function. These credentials will be used for authentication during connector configuration.

4. Connector Configuration Details: Prepare the necessary information required for connector configuration, such as AWS region, and the appropriate access and secret keys.

## Configuring API Connector in DronaHQ

Add a `Account name`. Then add the necessary details such as `Access and Secret key` and `AWS region` for the connector account. Once all details are added, click `Save`. Your connector configuration is now done.

<figure>
  <Thumbnail src="/img/reference/connectors/awslambda/details.jpeg" alt="AWS Lambda with configuration details." />
  <figcaption align = "center"><i>AWS Lambda with configuration details.</i></figcaption>
</figure>

After successfully configuring and saving the connector settings, you can easily access your newly connected account by navigating to the `connected accounts` list. You can find this option from the `Connector -> Manage Account` section. This centralized location allows you to conveniently monitor and manage your connected accounts.

## Supported API endpoints

| Action              | Description                                                                                     |
|---------------------|-------------------------------------------------------------------------------------------------|
| GetFunctionDetails  | Retrieve detailed information about a specific Lambda function using its ARN.                |
| InvokeFunction      | Trigger the execution of a Lambda function and retrieve its response.                          |
| ListFunctions       | Get a list of Lambda functions available in your AWS account.                                 |


## Using AWS Lambda Connector

### Retrieving a List of Functions

1. Integrate essential interface components in your application, such as buttons or input fields, to initiate actions associated with AWS Lambda.

2. Navigate to `Connector -> Library`.

3. Select the appropriate endpoint according to your needs, like `GetFunctionDetails`, `InvokeFunction`, or `ListFunctions`. Ensure you choose the relevant environment.

4. Set up any necessary parameters or inputs for the chosen endpoint. For instance, if using `ListFunctions`, you may need to define an AWS Lambda account for authentication.

5. Execute a Refresh Response to populate response fields with data retrieved from the connector.

6. Establish connections between the response fields and corresponding controls in your application's interface, enabling the display of fetched information.

7. Click on Test & Finish to conclude the configuration of the connector.

<figure>
  <Thumbnail src="/img/reference/connectors/awslambda/functions.jpeg" alt="Binding Connector Data" />
  <figcaption align="center"><i>Utilizing AWS Lambda connector</i></figcaption>
</figure>

### Invoking functions

The AWS Lambda connector enables you to effectively invoke your customized functions. Let us take an example here to invoke the selected function on the click of the action button. You also have the option to the Invocation type as `Request Response`, `Dry Run`, or `Event`.

- RequestResponse invokes the function synchronously and receives an API response.
- Event type invokes function asynchronously.
- DryRun is used to validate parameter values and verify that the user has permission to invoke the function.


1. On the `button_click` event of the action button, you would add the  AWS Lambda connector action `InvokeFunction`.

2. Select the connected account and click `Continue`.

3. Use the `dropdown` control as the Function list from the Use keywords, add the Invocation type (which is / can be optional) and provide the Invocation type using the Dropdown control’s name from the Use keywords. Click `Continue`.

<figure>
  <Thumbnail src="/img/reference/connectors/awslambda/key.jpeg" alt="Binding Connector Data" />
</figure>


4.  If you want you can use the action name to display the URL in a text area control for the sake of understanding.


5. Now, you can see the function invocation and the response status code whenever you run the form.

<figure>
  <Thumbnail src="/img/reference/connectors/awslambda/result.jpeg" alt="Binding Connector Data" />
</figure>

## Self-Hosted Installation 

To use the AWS Lambda Connector on the on-prem version, follow these steps:

1. Select the Connector: Choose the AWS Lambda Connector from the list.

2. Provide the Necessary Details: Enter the required information, including the Environment/Account Name (alphanumeric, must start with an alphabet, and can include `_` but no spaces), API Base URL (`https://lambda.us-east-2.amazonaws.com`), Access Key, Secret Key, and AWS Region (e.g., `us-east-1`). 

3. Use EC2 IAM Access Role: Type 'Yes' if you are using an EC2 IAM Access Role.

1. Access Key and Secret Key: Copy these from your AWS account and enter them into the respective fields.

2. API Base URL: Ensure the URL is a valid domain name followed by the http/https protocol (e.g., `https://lambda.us-east-2.amazonaws.com`).

3. AWS Region: Specify the region for the AWS account you will use (e.g., `us-east-1`).