---
sidebar_position: 1
title: List Objects
---

import Thumbnail from '@site/src/components/Thumbnail';

DronaHQ File Storage provides a convenient way to list objects within your Amazon S3 buckets, enabling you to fetch and
manage files programmatically. There is a dedicated query in the File Storage library called `ListObjects` to configure
this functionality in DronaHQ.

## Listing Objects with DronaHQ File Storage

DronaHQ File Storage allows you to list objects stored in your Amazon S3 buckets. Follow the steps below to configure
the object listing functionality using the `ListObjects` feature in DronaHQ.

## Structuring the Query

This query requires details about the folder, pagination token, and delimiter for fetching the list of objects. Start by
providing a name and opt for the option when the query should run. Then configure the details.

<figure>
  <Thumbnail src="/img/file-storage/queries/listobject.jpeg" alt="ListObjects Query" />
  <figcaption align='center'><i>ListObjects Query</i></figcaption>
</figure>

### Configuration Details

| Parameter        | Description                  |
| ---------------- | --------------------------------------- |
| Folder Name      | Specify which folder you want your files listed from. Nested folders supported (enter path with format `folder1/folder2`). (Optional)                                                                                                                                                                      |
| Pagination Token | Use this property when you have more than 1000 results and need to fetch the rest. Get the variable `ListBucketResult.ContinuationToken` from the previous result page's response and provide it here. (Optional)                                                                                          |
| Delimiter        | Character you use to group keys. "/" is the only supported delimiter. If you specify a delimiter in the request, then the result returns each distinct key prefix containing the delimiter in a `CommonPrefixes` element. The distinct key prefixes are returned in the `Prefix` child element. (Optional) |

## Using Query

Suppose you are developing an application where you need to list all files uploaded by a user within their designated
folder in the S3 bucket.

<div style={{ position: 'relative', paddingBottom: 'calc(46.33333333333333% + 41px)', height: 0 }}>
  <iframe
    src="https://demo.arcade.software/i8JRZ2duc0aYcaEP815p?embed"
    title="DronaHQ Database - Access & Activation flow"
    frameBorder="0"
    loading="lazy"
    allowFullScreen
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', colorScheme: 'light' }}
    webkitallowfullscreen
    mozallowfullscreen
  ></iframe>
</div>
