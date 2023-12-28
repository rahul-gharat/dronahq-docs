---
sidebar_position: 1
title: Uploading/Downloading Files to S3
---

import Image from '@site/src/components/Image'; import VersionedLink from '@site/src/components/VersionedLink'; import
Thumbnail from '@site/src/components/Thumbnail';

Uploading and downloading files to an Amazon S3 bucket offers various practical use cases, from storing supporting
documentation to backing up crucial files. Leveraging the S3 connector's `UploadFile` action streamlines this process.

Uploading and downloading files to an Amazon S3 bucket offers various practical use cases, from storing supporting documentation to backing up crucial files. Leveraging the S3 connector's `UploadFile` action streamlines this process. To know about the configuration and connection details of the S3 connector enabling these operations, refer to the comprehensive guide available in the <VersionedLink to = "../../reference/connectors/aws-s3/"> AWS S3 connector article Credentials        </VersionedLink>.

## Uploading Files to AWS S3

Consider a scenario where a form allows selection of the `Bucket name` from a dropdown, specifies the folder for file
upload, and utilizes the `File upload` control for uploading files. An action button triggers the upload operation.

1. On the button click event, add a `Server-side action > AWS S3 connector` and select `UploadFile`.

2. Choose the `Connected account` and proceed.
3. Utilize the `Dropdown control` as the `Bucket` and include the folder name (optional). Use the Fileupload control’s
   name for adding files. Proceed.

    <figure>
     <Thumbnail src="/img/connecting-datasource/concepts/uploading-downloading-aws-S3/configure.jpeg" alt="Configure feilds" />
     <figcaption align = "center"><i>Configure feilds</i></figcaption>
    </figure>

4. Define the `action name` and designate the variable returning the URL.

   <figure>
     <Thumbnail src="/img/connecting-datasource/concepts/uploading-downloading-aws-S3/variable.jpeg" alt="Variables" />
    </figure>

5. Optionally, display the URL in a text control to confirm the uploaded file's destination bucket.

   <figure>
     <Thumbnail src="/img/connecting-datasource/concepts/uploading-downloading-aws-S3/sample.jpeg" alt="Configure feilds" />
    </figure>

## Downloading Files

You can initiate the download action using a button or trigger in your application. Follow these steps:

1. Obtain the link or URL from the upload action after a successful file upload to the S3 bucket.

2. Implement this URL in the action flow by configuring an `On-Screen Actions > Download Files` action. Pass the obtained link as a parameter within this action.

By implementing this configuration, users interacting with your application can download the respective file from the S3 bucket by triggering the designated action, ensuring seamless retrieval of uploaded content.

<figure>
     <Thumbnail src="/img/connecting-datasource/concepts/uploading-downloading-aws-S3/download.jpeg" alt="Configure the keyword of URL to download from" />
     <figcaption align = "center"><i>Configure the keyword of URL to download from</i></figcaption>
</figure>
