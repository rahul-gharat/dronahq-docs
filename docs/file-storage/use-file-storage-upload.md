---
sidebar_position: 153
title: Using File Storage
---

import Thumbnail from '@site/src/components/Thumbnail';

### Using to Fetch and Show Data

Fetching and displaying data from File Storage involves a straightforward process of selecting files from various controls. For instance, suppose you have an image uploaded in File Storage. Here's how you can utilize it within an application:

1. Begin by adding an image control to your application interface.
2. Access the properties of the image control.
3. Within the properties, locate the option labeled `Select Image`.
4. Click on `Select Image` to open the File Storage interface.
5. Navigate through the File Storage to find the desired image file.
6. Select the file and confirm by clicking `Use`.

<figure>
  <Thumbnail src="/img/file-storage/use-storge.jpeg" alt="Select static files." />
  <figcaption align='center'><i>Select static files.</i></figcaption>
</figure>



### Configuring Data Variables for Uploading Files in DronaHQ File Storage

To integrate file upload functionality into your DronaHQ applications, follow these steps to configure data variables:

1. Define Data Query: Specify a data query for File Storage, using the `UploadFiles` library.

2. Fill in Details:

   - Folder: Enter the folder where your file is located within the bucket.
   
   - Key: Provide a file name or file names for upload.
   
   - Files: Select your file control here. Multiple files can be uploaded. Use `{{}}` to select controls which will contain your file initially.
   
   - Content Type: Optionally specify the content type, otherwise, it will be detected automatically.

By completing these fields, you can effectively set up data variables for uploading files to DronaHQ File Storage within your applications.



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
