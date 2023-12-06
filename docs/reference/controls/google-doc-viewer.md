---
sidebar_position: 1
title: Google Doc Viewer 
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Google Doc Viewer control is a versatile media control allowing you to seamlessly embed online documents such as PDF files, Google Docs, Sheets, and more into your forms.

<figure>
  <Thumbnail src="/img/reference/controls/doc-viewer/preview.jpeg" alt="Doc Viewer" />
  <figcaption align="center"><i>Doc Viewer</i></figcaption>
</figure>

It proves to be highly beneficial when integrating PDF files for terms and conditions, reference materials, and various other documents into your app interface.

## Binding Data Options

The Google Doc Viewer control accepts a string URL format, enabling the embedding of external content into the application. There are different ways to bind data to this control.

### Static Data Option

You can utilize a single URL string to display static content within the Google Doc Viewer control. For instance:

```json
"https://www.example.com/embedded_content"
```

## Properties


| Property      | Description                                                                               |
|---------------|-------------------------------------------------------------------------------------------|
| Show Border   | Specifies whether a border should appear around the Google Doc Viewer frame.              |
| Document URL  | Defines the URL of the document (PDF/DOC/TXT/XLS) to be embedded within the control.     |
