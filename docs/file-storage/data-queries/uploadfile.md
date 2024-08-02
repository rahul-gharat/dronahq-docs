---
sidebar_position: 1
title: Upload Files
---


import Thumbnail from '@site/src/components/Thumbnail';

DronaHQ File Storage provides a convenient way to manage file uploads within your applications, enabling interaction with Amazon S3 buckets. There is a dedicated query in the File Storage library of `UploadFile` to configure the file upload functionality in DronaHQ.


## Uploading Files with DronaHQ File Storage

DronaHQ File Storage provides a convenient way to manage file uploads within your applications, enabling seamless interaction with Amazon S3 buckets. Follow the steps below to configure the file upload functionality using the UploadFiles feature in DronaHQ.


## Structuring the Query

This query, requires a destination and location of uploaded file to work. This is quite simple, start by providing a name and opt the option when the query should run. Then coonfigure the details

<figure>
  <Thumbnail src="/img/file-storage/queries/uploadfile.jpeg" alt="UploadFile Query" />
  <figcaption align='center'><i>UploadFile Query</i></figcaption>
</figure>


### Configuration Details



| Parameter      | Description         | 
|----------------|----------------------
| Folder     | Specify the folder path within your S3 bucket where the uploaded files will be stored.                                                            | 
| Key        | Provide the file name or file names for upload. Use placeholders to dynamically set the file path based on user-specific data.                    | 
| Files      | Select your file control for this field. Enable multi-file upload by using the appropriate control.                                               | 
| ContentType| Optionally specify the content type of the files being uploaded. If left blank, it will be automatically detected based on the file's extension.  | 



You can follow the [steps](/file-storage/use-file-storage-upload/#configuring-data-variables-for-uploading-files-in-dronahq-file-storage) to implement UploadFile query in your app.


<div style={{ position: 'relative', paddingBottom: 'calc(46.33333333333333% + 41px)', height: 0 }}>
  <iframe
    src="https://demo.arcade.software/JosMZkibNLTakmTsw5T1?embed"
    title="DronaHQ Database - Access & Activation flow"
    frameBorder="0"
    loading="lazy"
    allowFullScreen
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', colorScheme: 'light' }}
    webkitallowfullscreen
    mozallowfullscreen
  ></iframe>
</div>
