---
sidebar_position: 1
title: Google Cloud Storage
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

Google Cloud Storage is a highly reliable and secure data storage for organizations of all sizes. DronaHQ provides you with the Google Cloud Storage connector that enables you to easily build apps while using the capabilities of the Cloud Storage to optimize response times, customize data storage, build disaster recovery plans, and so on.

## Prerequisite

1. Authentication Requirements: Before establishing a connection with Google Cloud Storage, ensure you have the necessary authentication credentials, including:
   - Google Cloud Project ID.
   - Service Account Key File: Create a Service Account on the Google Cloud Console and generate a JSON key file. This key file contains the credentials required for authentication.
 <figure>
       <Thumbnail src="/img/reference/connectors/clouddata/serviceacc.jpeg" alt="Service Account" />
       <figcaption align = "center"><i>Service Account</i></figcaption>
</figure>

2. Enable Google Cloud Storage API: In the Google Cloud Console, make sure that the Google Cloud API is enabled for your project. This API allows your application to interact with Google Cloud.

3. Service Account Access: Grant the Service Account associated with your application the necessary permissions to access Google Cloud. Assign the appropriate roles, such as `Google Cloud User` or `Google Cloud Viewer,` to the Service Account.

4. Download and Secure Key: Download the JSON key file generated for the Service Account. Safeguard this key file as it contains essential credentials for authenticating your application's access to Google Cloud.


## Configuring API Connector in DronaHQ

Add a `Account name`. Then add the `Service Account JSON` for the connector account. Once all details are added, click `Save`. Your connector configuration is now done.

<figure>
  <Thumbnail src="/img/reference/connectors/googlecloud/details.jpeg" alt="Google Cloud Storage with configuration details." />
  <figcaption align = "center"><i>Google Cloud Storage with configuration details.</i></figcaption>
</figure>

:::info
Create a Service Account as that is all that you need for your Connector. You can refer to this article here to know how to get started by creating a [Service account](https://cloud.google.com/docs/authentication/client-libraries).
:::

After successfully configuring and saving the connector settings, you can easily access your newly connected account by navigating to the `connected accounts` list. You can find this option from the `Connector -> Manage Account` section. This centralized location allows you to conveniently monitor and manage your connected accounts.

## Using Google Cloud Storage Connector

### Retrieve Buckets and Files

Utilizing the Google Cloud Storage connector, you can easily interact with your storage resources. To retrieve information about buckets and files, follow these steps:

1. Include the necessary controls in your application interface, such as buttons or input fields, to trigger actions related to Google Cloud Storage.

2. Access the `Bind Data Option -> Quick Select -> Connector Library`.

3. Choose the desired endpoint, such as `GetBuckets` or `GetFiles`, based on your requirements, and select the appropriate environment.

4. Configure any required parameters or inputs for the chosen endpoint. For example, if using `GetFiles`, you might specify a bucket name to fetch files from that bucket.

5. Perform a Refresh Response to populate the response fields from the connector.

7. Click on Test & Finish to finalize the connector configuration.



<figure>
  <Thumbnail src="/img/reference/connectors/googlecloud/bucket.jpeg" alt="Binding Keywords" />
  <figcaption align = "center"><i>Retrieving bucket list</i></figcaption>
</figure>

## Uploading Files to Google Cloud Storage Bucket

The Google Cloud Storage connector provides a convenient way to upload files to your storage buckets. This feature can be especially useful for scenarios such as archiving supporting documents, storing images or PDFs, or creating backups.

1. Set up your application interface with relevant controls, such as a dropdown for selecting the bucket name (and optionally, a folder name) and a file upload control to facilitate file uploading.

2. Create an action button in your app that triggers the upload process when clicked. Configure the `button_click` event to initiate a Server-side Connector action.

3. Within the `Connector > Library`, select the Google Cloud Storage connector and choose the `UploadFile` action. Proceed by clicking `Continue`.

4. Select the connected Google Cloud Storage account associated with your application and proceed by clicking `Continue`.

5. Utilize the `dropdown` control to obtain the Bucket name from the appropriate keyword. Optionally, provide the folder name for more organized file storage.

6. Utilize the file upload control's name from the keyword to provide the files you intend to upload. Additionally, you can configure file permissions if required.

<figure>
  <Thumbnail src="/img/reference/connectors/googlecloud/upload-config.jpeg" alt="Upload Configuration" />
</figure>

   :::info NOTE
    The Media link accessibility may vary based on access rights. You can also consider using the GetPre-signed URL action for access.
    :::

7. If desired, you can display the URL in a text control for better understanding and visibility of the uploaded file's location within the selected bucket.


<figure>
  <Thumbnail src="/img/reference/connectors/googlecloud/upload-variable.jpeg" alt="Uploaded File URL" />
</figure>
