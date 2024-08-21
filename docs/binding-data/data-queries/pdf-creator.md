---
sidebar_position: 1
title: PDF Creator
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';


The PDF creator function is instrumental for generating PDF files on DronaHQ. Here’s a more detailed and technical breakdown of its features:

## GetPDF

To generate a PDF, provide the necessary details, and the system will return the PDF file encoded in Base64 string format. This encoded string can be converted back into a PDF file, which you can then view, download, or manipulate as needed.

| Variable      | Description                                                      |
|-------------------|----------------------------------------------------------------------|
| Template ID   | Select the ID of the template you wish to use for generating the PDF. |
| PDF Name      | Specify the name for the generated PDF. If left blank, an automatic name will be assigned. |
| Password      | Input a password if you want to encrypt the PDF. Leave this field empty if no encryption is needed. |

If the selected template requires additional parameters, they will be incorporated accordingly.

## GetPDFURL

This function provides a URL for the selected PDF template. It utilizes Amazon Web Services’ Simple Storage Service (AWS S3) to store and retrieve the URL, rather than handling Base64 strings directly.

| Variable      | Description                                                      |
|-------------------|----------------------------------------------------------------------|
| Template ID   | Select the ID of the template you wish to use for generating the PDF. |
| PDF Name      | Specify the name for the generated PDF. If left blank, an automatic name will be assigned. |
| Password      | Input a password if you want to encrypt the PDF. Leave this field empty if no encryption is needed. |

If the selected template requires additional parameters, they will be incorporated accordingly.


## Using PDF Creator 

<div style={{ position: 'relative', paddingBottom: 'calc(46.33333333333333% + 41px)', height: 0 }}> 
    <iframe 
        src="https://demo.arcade.software/9RQPP4czVh5Fgq5zez1m?embed" 
        title="Theme Creation" 
        frameborder="0" 
        loading="lazy" 
        webkitallowfullscreen 
        mozallowfullscreen 
        allowfullscreen 
        style= {{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', colorScheme: 'light' }} >
    </iframe>
</div>
<br></br>

Code Used:

```js

  // Decode Base64 string to binary data
  const byteCharacters = atob(data.pdfFile);
  const byteNumbers = new Array(byteCharacters.length);

  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }

  const byteArray = new Uint8Array(byteNumbers);
  
  // Create a Blob from the binary data
  const blob = new Blob([byteArray], { type: 'application/pdf' });
  
  // Create a URL for the Blob
  const url = URL.createObjectURL(blob);
  
  // Open the PDF in a new window/tab
  window.open(url);

  data = url
```