---
sidebar_position: 1
title: File Storage
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';


File storage built on top of Amazon Web Services' Simple Secure Storage (AWS S3). DronaHQ File Storage comes with a built-in File Explorer for storing and managing your files in a simple and friendly way. You can also interact with File Storage using a dedicated connector which allows you to upload files, get a list of uploaded objects, get signed URLs of files, and get the contents of a file.

## Types of Data Queries

###  Upload File


Uploading files allows users to store files, such as images, documents, and videos, on a remote server. In the context of DronaHQ and AWS S3, the Upload File query is essential for enabling users to save their files securely in the cloud. This functionality can be used for various purposes, including user profile pictures, document management systems, and more.


<figure>
  <Thumbnail src="/img/data-queries/file-storage-upload.jpeg" alt="upload File" width='100%'/>
</figure>

#### Query Details:

- Endpoint: `PUT https://{bucket}.s3.us-west-2.amazonaws.com/{folder}/{key}`

#### Variables:

| Name        | Value             | Description  |
|-------------|-------------------|--------------------|
| Folder  | `{{username}}`    | (Optional) Specify the folder your file is placed inside, in your bucket.                                                         |
| Key     | `{{username}}`    | (Optional) Supported filename with extension formats are String for single File and Array of Strings for multiple file uploads. Eg "sample.txt" or ["sample.csv","image.jpg"]. If you are uploading a file with extension other than the one specified in the above key, then file's extension will be added in the above key name's end. For example, if you specify sample.csv but are uploading a file "helptext.txt" then file key would be "sample.csv.txt".|
| Files   | `{{username}}`    | Select your file control for this field (multiple files allowed).                                                                |
| ContentType | `{{username}}` | (Optional) We automatically detect and apply content-type of the files which are uploaded. You can override it by providing your own content-type that will be applied to all the objects uploaded using this connector. You can choose from below or provide your own. Refer here for common content types. |

### Get PreSigned URL


Generating pre-signed URLs allows temporary access to files stored in an S3 bucket without requiring AWS credentials. This is useful for securely sharing files with others or enabling temporary access to files for a specified period.

<figure>
  <Thumbnail src="/img/data-queries/file-storage-presign.jpeg" alt="upload File" width='100%'/>
</figure>

#### Query Details:

- Endpoint: `GET https://{bucket}.s3.us-east-1.amazonaws.com/{folder}/{key}`

#### Variables:

| Name                            | Value            | Test Value                                                                                                 |
|---------------------------------|------------------|------------------------------------------------------------------------------------------------------------|
| Folder                      | `{{username}}`   | (Optional) Specify the folder your file is placed inside, in your bucket.                                  |
| File Name                   | `{{username}}`   | Provide the File name/Key name for a file that exists on S3 bucket. You can use a string value like 'fileName.jpg', or extract it from the returned result of an S3 API (Getting it from Contents.Key from the response of the ListObjects action or extracting the file name as a substring from successes.url from the response of the UploadFile action).|
| Time Before Link Expires    | `3600`           | (Optional) Default expiry of pre-signed URLs is 3600 seconds.                                              |

### List Objects

Listing objects in an S3 bucket is essential for retrieving a list of all the files stored in a specified bucket or folder. This is useful for displaying available files to users or for managing file storage.

<figure>
  <Thumbnail src="/img/data-queries/file-storage-list.jpeg" alt="upload File" width='100%'/>
</figure>

#### Query Details:

- Endpoint: `GET https://{bucket}.s3.us-east-1.amazonaws.com/`

#### Variables:

| Name                | Value            | Test Value                                                                                   |
|---------------------|------------------|----------------------------------------------------------------------------------------------|
| Folder Name     | `{{username}}`   | (Optional) Specify which folder you want your files listed from. Nested folders supported (enter path with format "folder1/folder2").|
| Pagination Token| `{{username}}`   | (Optional) Use this property when you have more than 1000 results and need to fetch the rest. Get the variable ListBucketResult.ContinuationToken from the previous result page's response and provide it here.|
| Delimiter       | `/`              | (Optional) Character you use to group keys. "/" is the only supported delimiter. If you specify a delimiter in the request, then the result returns each distinct key prefix containing the delimiter in a CommonPrefixes element. The distinct key prefixes are returned in the Prefix child element.|

### Delete Object

Deleting objects from an S3 bucket is crucial for managing storage and removing files that are no longer needed. This helps in maintaining the organization and optimizing storage usage.

<figure>
  <Thumbnail src="/img/data-queries/file-storage-delete.jpeg" alt="upload File" width='100%'/>
</figure>

#### Query Details:

- Endpoint: `DELETE https://{bucket}.s3.us-west-2.amazonaws.com/{folder}/{key}`

#### Variables:

| Name    | Value            | Test Value                                                                                                                       |
|---------|------------------|----------------------------------------------------------------------------------------------------------------------------------|
| Folder | `{{username}}` | (Optional) Specify the folder your file is placed inside, in your bucket.                                                         |
| Key    | `{{username}}` | Specify the key of the file to be deleted. Single key and Array of keys for multiple deletions. Eg "sample.txt" or ["sample.csv","image.jpg"].|

### Copy Object

Copying objects within an S3 bucket or across different buckets is useful for creating backups, duplicating data, or moving files between different locations. This is essential for data management and ensuring data redundancy.

<figure>
  <Thumbnail src="/img/data-queries/file-storage-copy.jpeg" alt="upload File" width='100%'/>
</figure>

#### Query Details:

- Endpoint: `PUT https://{bucket}.s3.us-west-2.amazonaws.com/{key}`

#### Variables:

| Name                  | Value            | Test Value                                                                                                                       |
|-----------------------|------------------|----------------------------------------------------------------------------------------------------------------------------------|
| Destination File Key | `{{username}}` | Specify the destination key (file path) where the file should be copied to.                                                      |
| Copy Source       | `{{username}}`   | Specify the source path of the file to be copied. Eg: /bucket/directory/key.txt                                                   |
