---
sidebar_position: 1
title: Cloud Convert
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The CloudConvert connector enables various file conversion and manipulation tasks. It offers actions such as converting files, merging documents, and more. 

## Configuring API Connector in DronaHQ

Add a `Account name`. Then click `Save`, it will open a pop-up window asking you to sign-in into your HubSpot account. Continue with the steps and give access to DronaHQ to connect with your HubSpot ID and its information.


<figure>
  <Thumbnail src="/img/reference/connectors/cloudconvert/signin.png" alt="Sign-in to your Cloud Convert account" />
  <figcaption align = "center"><i>Sign-in to your Cloud Convert account</i></figcaption>
</figure>


After successfully configuring and saving the connector settings, you can easily access your newly connected account by navigating to the `connected accounts` list. You can find this option from the `Connector -> Manage Account` section. This centralized location allows you to conveniently monitor and manage your connected accounts.

## Supported API endpoints


| Action                 | Description                                                  |
|------------------------|--------------------------------------------------------------|
| AllSupportedFormats    | Retrieves a list of all supported file formats.             |
| FilterFormatsByInput   | Filters supported output formats based on input format.     |
| CreateConvertFileJob   | Initiates a job to convert a file from one format to another.|
| ShowJob                | Fetches details about a specific job.                       |
| WaitForAJob            | Waits for a specific job to complete.                       |
| ListJobs               | Lists all the active and completed jobs.                    |
| CaptureWebsiteJob      | Creates a job to capture a screenshot of a website.         |


## Self-Hosted Installation for CloudConvert

To use the CloudConvert Connector on the on-prem version, follow these steps:

1. Select the Connector: Choose the CloudConvert Connector from the list.

2. Provide the Necessary Details: 

- Environment/Account Name: The name can contain alphanumeric characters, must start with an alphabet, and can include `_` as a special character, but should not contain spaces.

- API Base URL: Enter `https://api.cloudconvert.com` as the base URL of your API endpoint.

- OAuth Redirect URL: Copy the following URL. Use this link in your app's API or developer settings to create a new integration or app to use with DronaHQ. If required, go to your app's admin console and add it to the allowed list.

### Obtaining CloudConvert API Credentials

1. Client ID and Client Secret: Obtain these unique credentials by registering your application in the [CloudConvert Developer Console](https://cloudconvert.com/developers).

2. Scope: Define the specific functionalities your application needs access to within CloudConvert. Choose appropriate scopes from the [CloudConvert documentation](https://cloudconvert.com/api/).

3. Authorization URLs: Refer to the [CloudConvert OAuth documentation](https://cloudconvert.com/api/v2#authentication) for the Authorization Request URL, Access Token Request URL, and Refresh Token Request URL.
