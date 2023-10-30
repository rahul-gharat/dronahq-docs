---
sidebar_position: 1
title: File Upload
---

import VideoEmbed from "@site/src/components/VideoEmbed";
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';


The File Upload control is used to upload files like documents, pictures, audio files, videos, and so on. This control provides the features to limit the quantity and size of the files being uploaded.

<figure>
  <Thumbnail src="/img/reference/controls/file-upload/preview.jpeg" alt="File Upload" />
  <figcaption align = "center"><i>File Upload</i></figcaption>
</figure>



## Properties

| Property               | Description                                                                                                     |
|------------------------|-----------------------------------------------------------------------------------------------------------------|
| Annotation             | Enabled when File Type is Image. Allows annotation of images for highlighting and changes. Available in mobile apps. Edit file option is available. |
| Multiple Files         | Toggle ON to allow multiple files to be uploaded.                                                              |
| No. of Files           | Specify the maximum number of files that can be uploaded.                                                      |
| Upload from            | Choose File Manager or Camera as the upload source.                                                            |
| Upload                 | Specify whether files are uploaded on selection or on form submission.                                         |
| File Type              | Choose the type of files that can be uploaded.                                                                 |
| Size Per File          | Set a limit on the size of uploaded files.                                                                     |
| Whitelist File Type    | Toggle ON to specify specific file types, extensions, and magic numbers.                                      |
| Valid File Type        | List of file type extensions to restrict uploads.                                                             |
| Allowed Extensions     | List of additional extensions allowed in addition to valid file types.                                        |
| Allowed Magic Numbers  | Specify numeric or string constants representing file types.                                                  |


#### Style

| Property               | Description                                                                                                     |
|------------------------|-----------------------------------------------------------------------------------------------------------------|
| Text                   | Text displayed on the upload button for the control.                                                           |
| Theme                  | Choose the color of the control using custom hex code or predefined themes.                                   |
| Layout                 | Select the layout of the File Upload control: Filled, Outlines, Dashed Outline.                               |
| Close Button color     | Set the color of the Close button.                                                                             |
| Font                   | Customize the upload button text: size, weight (Light, Normal, Bold, Extra Bold, X Extra Bold), and color.   |


### Allowed File Types

The "Allowed File Types" property of the File Upload control enables you to define the types of files that users can upload using the Filepicker widget. This property accepts an array of wildcards, MIME types, or specific file extensions, providing you with fine-grained control over the accepted file formats.

You have the following options:

- Any: This option allows users to upload files of all the mentioned file types.
- Images: Users can upload image files (e.g., .jpg, .jpeg, .png, .gif).
- Videos: Users can upload video files.
- Audio: Users can upload audio files.
- MS Office: Users can upload Microsoft Office files (e.g., .docx, .xlsx, .pptx).
- PDF: Users can upload PDF documents.

When JavaScript (JS) is enabled, you can provide the data as an array of strings to specify the accepted file types. For instance, if you want to allow users to upload audio, text, and video files, you can use the following example:

```javascript
[
  "audio/*",
  "text/*",
  "video/*"
]

```
## Control Output

The File Upload control offers important outputs that enable you to work with the uploaded files programmatically. These outputs can be accessed using the control's unique name, such as `fileupload`.

### Files Array

The `files` property stores an array of file objects that the user has selected. Each file object contains information about the selected file, which can be accessed through its properties.

Example:

| Output              | Description                                                             |
|---------------------|-------------------------------------------------------------------------|
| `fileupload.files` | An array of selected file objects containing various file properties.  |

To access the data of the first selected file:
```javascript
{{ FilePicker1.files[0].data }}

```

## Events


| Trigger     | Description                                                                                                                              |
|--------------|------------------------------------------------------------------------------------------------------------------------------------------|
| value_select | Occurs when there is a change in the value of the respective control, typically triggered by selecting another option or inputting a new value. |
