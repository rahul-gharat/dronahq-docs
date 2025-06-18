---
sidebar_position: 1
title: Azure Storage
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

Azure Storage is Microsoft's cloud storage solution offering a variety of services for storing different types of data, including blobs, files, queues, and tables. It provides a secure, scalable, and durable platform for building cloud-native and hybrid applications. 


## Prerequisite

1. Authentication Requirements: Before establishing a connection with Azure Storage, ensure you have the necessary authentication credentials, including:
   - Environment/Account Name
   - Access Key: To obtain an access key for your Azure Storage account, navigate to your storage account in the Azure portal. Under the Security + networking section, select Access keys. Click Show keys to reveal the keys, then copy either key1 or key2 as needed.
 <figure>
   <Thumbnail src="/img/reference/connectors/azure-storage/azureacc.png" alt="Azure Storage Account" />
    <figcaption align = "center"><i>Azure Storage Account</i></figcaption>
</figure>




## Configuring API Connector in DronaHQ

Add a `Environment/Account name`. Then add the `Access Key` and `Storage Account Name` for the connector account. Once all details are added, click `Save`. Your connector configuration is now done.

<figure>
  <Thumbnail src="/img/reference/connectors/azure-storage/details.png" alt="Azure Storage with configuration details." />
  <figcaption align = "center"><i>Azure Storage with configuration details.</i></figcaption>
</figure>


After successfully configuring and saving the connector settings, you can easily access your newly connected account by navigating to the `connected accounts` list. You can find this option from the `Connector -> Manage Account` section. This centralized location allows you to conveniently monitor and manage your connected accounts.

## Using Azure Storage Connector

### Retrieve Files

Utilizing the Azure Storage connector, you can easily interact with your storage resources. To retrieve information about files, follow these steps:

1. Include the necessary controls in your application interface, such as buttons or input fields, to trigger actions related to Azure Storage.

2. Access the `Bind Data Option -> Quick Select -> Connector Library`.

3. Choose the desired endpoint, such as `GetFiles`, based on your requirements, and select the appropriate environment.

4. Configure any required parameters or inputs for the chosen endpoint. For example, if using `GetFiles`, you might specify a folder name to fetch files from that Container.

5. Perform a Refresh Response to populate the response fields from the connector.

7. Click on Test & Finish to finalize the connector configuration.



<figure>
  <Thumbnail src="/img/reference/connectors/azure-storage/get-config.png" alt="Binding Keywords" />
  <figcaption align = "center"><i>Retrieving Files</i></figcaption>
</figure>

## Uploading Files to Azure Storage Bucket

The Azure Storage connector provides a convenient way to upload files to your storage buckets. This feature can be especially useful for scenarios such as archiving supporting documents, storing images or PDFs, or creating backups.

1. Set up your application interface with relevant controls, such as a dropdown for selecting the container name (and optionally, a folder name) and a file upload control to facilitate file uploading.

2. Create an action button in your app that triggers the upload process when clicked. Configure the `button_click` event to initiate a Server-side Connector action.

3. Within the `Connector > Library`, select the Azure Storage connector and choose the `UploadFile` action. Proceed by clicking `Continue`.

4. Select the connected Azure Storage account associated with your application and proceed by clicking `Continue`.

5. Utilize the `dropdown` control to obtain the Container name from the appropriate keyword. Optionally, provide the folder name for more organized file storage.

6. Utilize the file upload control's name from the keyword to provide the files you intend to upload. Additionally, you can configure file permissions if required.

<figure>
  <Thumbnail src="/img/reference/connectors/azure-storage/upload-config.png" alt="Upload Configuration" />
  <figcaption align = "center"><i>Uploading Files</i></figcaption>
</figure>



7. If desired, you can display the URL in a text control for better understanding and visibility of the uploaded file's location within the selected bucket.

<!-- 
<figure>
  <Thumbnail src="/img/reference/connectors/googlecloud/upload-variable.jpeg" alt="Uploaded File URL" />
</figure> -->
