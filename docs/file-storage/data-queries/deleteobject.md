---
sidebar_position: 1
title: Delete Objects
---

import Thumbnail from '@site/src/components/Thumbnail';

There is a dedicated query in the File Storage library called `DeleteObjects` to configure an efficient way to manage the deletion of files within your Amazon S3 buckets in DronaHQ.

## Deleting Objects with DronaHQ File Storage

DronaHQ File Storage allows you to delete objects stored in your Amazon S3 buckets. Follow the steps below to configure the object deletion functionality using the `DeleteObjects` feature in DronaHQ.

## Structuring the Query

This query requires details about the folder and the key(s) of the objects to be deleted. Start by providing a name and opt for the option when the query should run. Then configure the details.


### Configuration Details

| Parameter   | Description        | 
|-------------|------------------|
| Folder  | Specify the folder your file is placed inside, in your bucket. (Optional)                                                                                        |
| Key     | Single key and Array of keys for Multiple keys. Eg "sample.csv" or `["sample.csv", "image.jpg"]`. Provide the file name/key name for the files to be deleted.     | 


## Using Query

Suppose you are developing an application where you need to allow users to delete their files stored in their designated folder in the S3 bucket.

<figure>
  <Thumbnail src="/img/file-storage/queries/deletekyc.jpeg" alt="Delete Objects Query" />
  <figcaption align='center'><i>Delete Objects Query</i></figcaption>
</figure>