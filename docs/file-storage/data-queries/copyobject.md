---
sidebar_position: 1
title: Copy Objects
---

import Thumbnail from '@site/src/components/Thumbnail';

DronaHQ File Storage simplifies the process of copying files within your Amazon S3 buckets. You can use the `CopyObject` query from the File Storage library to set up this feature in DronaHQ.

## Copying Objects with DronaHQ File Storage

DronaHQ File Storage allows you to copy objects stored in your Amazon S3 buckets. Follow the steps below to configure the object copying functionality using the `CopyObject` feature in DronaHQ.

## Structuring the Query

This query requires details about the destination file path and the source file path to work. Start by providing a name and opt for the option when the query should run. Then configure the details.

<figure>
  <Thumbnail src="/img/file-storage/queries/copyobject.jpeg" alt="Copy Object Query" />
  <figcaption align='center'><i>Copy Object Query</i></figcaption>
</figure>

### Configuration Details

| Parameter             | Description                                                                                                          | 
|-----------------------|----------------------------------------------------------------------------------------------------------------------|
| Destination File  | Specify the destination file path where the file should be copied. Use placeholders to dynamically set the file path. | 
| Copy Source       | Provide the source file path that needs to be copied. Use placeholders to dynamically set the file path.              |
