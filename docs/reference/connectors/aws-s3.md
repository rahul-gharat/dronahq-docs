---
sidebar_position: 1
title: AWS S3
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

Amazon S3 (Simple Storage Service) is a service from Amazon Web Services offering object storage through a web service interface. Amazon S3 can be used to store and retrieve any amount of data from anywhere. 

## Prerequisite

Before configuring the AWS S3 Connector to interact with your Amazon S3 storage resources, ensure you have the following:

1. Amazon Web Services (AWS) Account: Have an active AWS account and access to the AWS Management Console.

2. Access and Secret Access Keys: Obtain your AWS Access Key ID and Secret Access Key from the AWS IAM (Identity and Access Management) service. These credentials will be used to authenticate the connector with your AWS account.

3. Bucket and Object Information: Identify the specific Amazon S3 bucket(s) and object(s) you intend to work with using the connector. Gather the bucket names and object paths you plan to use during configuration.

4. Region: Be aware of the AWS region where your Amazon S3 resources are located. Different regions might have distinct endpoint URLs.

5. IAM Role and Permissions: If generating IAM (Identity and Access Management) role keys, ensure that the IAM role associated with the AWS account has necessary permissions to access Amazon S3 resources. Permission can be granted through the AWS IAM console by creating a new group or modifying an existing group's permissions.

6. EC2 Instance Access (Optional): For EC2 instances, you can provide the IAM role access to the instance, allowing it to interact with S3 buckets without requiring explicit access keys. This can be accomplished by using EC2 Instance Profile and selecting "Use EC2 IAM Access Role" during configuration.

7. S3 URLs and Custom Endpoints (Optional): If needed, be aware that you have the option to provide S3 URLs to enable path-style access or use custom endpoint base URLs. This is particularly useful for connecting to S3-compatible services like [DigitalOcean Spaces](https://www.digitalocean.com/products/spaces) or [Wasabi](https://wasabi.com/s3-compatible-cloud-storage/).

## Configuring API Connector in DronaHQ

1. Enter an identifiable `Account name`.

2. Provide your `Access Key` and `Secret Key` from your AWS IAM account. Alternatively, you can choose to enable `Use EC2 IAM Access Role` if you want to grant an EC2 instance permission to access S3 resources without explicit credentials.

3. Specify the appropriate `AWS region` where your S3 resources are located.

4. If needed, you can include `S3 URLs` for path style and custom endpoint base URLs, which is useful for connecting to S3-compatible services like Digital Ocean Spaces or Wasabi.

5. After entering all the required information, click `Save` to complete the connector configuration.

<figure>
  <Thumbnail src="/img/reference/connectors/awss3/details.png" alt="AWS S3 with configuration details." />
  <figcaption align = "center"><i>AWS S3 with configuration details.</i></figcaption>
</figure>

After successfully configuring and saving the connector settings, you can easily access your newly connected account by navigating to the `connected accounts` list. You can find this option from the `Connector -> Manage Account` section. This centralized location allows you to conveniently monitor and manage your connected accounts.

## Supported API endpoints

| Action            | Description                                                                                           |
|-------------------|-------------------------------------------------------------------------------------------------------|
| GetPreSignedUrl   | Generate a pre-signed URL for a specified S3 object, providing temporary access to the object.     |
| UploadFile        | Upload a file to a specific S3 bucket, allowing you to store files within your S3 storage.          |
| ListBuckets       | Retrieve a list of all S3 buckets associated with your AWS account.                                 |
| ListObjects       | List objects (files) within a specified S3 bucket, along with their details.                        |
| DeleteObjects     | Delete multiple objects from an S3 bucket using their keys.                                         |
| CopyObject        | Copy an object from one S3 bucket or location to another, retaining metadata and access permissions. |

## Using AWS S3 connector

### List Objects in a Bucket

1. Add a `Tablegrid` control and then Bind Data. Add a connector and select the action as `ListObjects`. Select the Configured account.

2. Provide the Bucket name from where you would list out the objects. 

<figure>
  <Thumbnail src="/img/reference/connectors/awss3/listobj.jpeg" alt="Listing Objects" />
</figure>

3. Test the connection and click `Finish`.

4. Select the Keys to get the data from the connector.

### Uploading files to the bucket

Let us assume that we have a form where we select the Bucket name, the folder name to upload the files to, and the `File upload` control to enable uploading of the file/s. Let us add an action button that triggers the action flow to upload files.

1. On the `button_click` event of the action button, add the `Server-side action > AWS S3 connector` and choose the action `UploadFile`.

2. Select the Connected account and click Continue.

3. Provide Bucket name, add the folder name (which is optional), and provide the Files using the `Fileupload` control’s name from the Use keywords. Click `Continue`.

<figure>
  <Thumbnail src="/img/reference/connectors/awss3/upload.jpeg" alt="Listing Objects" />
</figure>

4. Add the action name and provide the variable that returns the URL

<figure>
  <Thumbnail src="/img/reference/connectors/awss3/res.jpeg" alt="Listing Objects" />
</figure>
