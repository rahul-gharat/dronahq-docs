---

sidebar_position: 1
title: Get Pre-Signed URL
---

import Thumbnail from '@site/src/components/Thumbnail';

DronaHQ File Storage provides a convenient way to manage file access within your applications by generating pre-signed URLs for Amazon S3 buckets, this is useful to grant time-limited access to objects . There is a dedicated query in the File Storage library called `GetPreSignedUrl` to configure this functionality in DronaHQ.

## Generating Pre-Signed URLs with DronaHQ File Storage

DronaHQ File Storage allows you to generate pre-signed URLs to access files stored in Amazon S3 buckets securely. Follow the steps below to configure the pre-signed URL generation using the `GetPreSignedUrl` feature in DronaHQ.

## Structuring the Query

This query requires details about the file and the desired expiry time for the pre-signed URL. Start by providing a name and opt for the option when the query should run. Then configure the details.

<figure>
  <Thumbnail src="/img/file-storage/queries/getpresignedurl.jpeg" alt="GetPreSignedUrl Query" />
  <figcaption align='center'><i>GetPreSignedUrl Query</i></figcaption>
</figure>

### Configuration Details

| Parameter            | Description                                                                                              | 
|----------------------|----------------------------------------------------------------------------------------------------------|
| Folder           | Specify the folder path within your S3 bucket where the file is located. (Optional)                      | 
| File Name        | Provide the file name or key name for the file that exists in the S3 bucket.                             |
| Time Before Link Expiry | Specify the time (in seconds) before the pre-signed URL expires. (Optional, defaults to 3600 seconds) | 

## Using Query

Suppose you are developing an application where users need to securely access their uploaded identification documents. Generating a pre-signed URL ensures that the access is temporary and secure.

<div style={{ position: 'relative', paddingBottom: 'calc(46.33333333333333% + 41px)', height: 0 }}>
  <iframe
    src="https://demo.arcade.software/zYMo3Vu8JvszfpS7bOSd?embed"
    title="DronaHQ Database - Access & Activation flow"
    frameBorder="0"
    loading="lazy"
    allowFullScreen
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', colorScheme: 'light' }}
    webkitallowfullscreen
    mozallowfullscreen
  ></iframe>
</div>
