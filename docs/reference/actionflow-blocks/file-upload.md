---
sidebar_position: 1
title: File Upload
---
import Thumbnail from '@site/src/components/Thumbnail';

## Setting up the File Upload Action 

With `File Upload` Action, you can seamlessly integrate file uploads into your workflows. This feature allows you to upload files from your form's File Upload controls and use them efficiently in your processes. Here's how to set it up:

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/file-upload/file-upload.png" alt="File Upload" />
<figcaption align='center'><i>File Upload</i></figcaption>
</figure>

1. File Upload Control Name or Keywords: Specify the name of the File Upload control from which you want to upload a file. Alternatively, you can use keywords to dynamically fetch the control name.

2. File Upload Output: Keep in mind that only the first file selected in the control will be uploaded. After the upload, the file's link will be available as an output in the form of `image_url`.

3. Condition and Environment: You can set conditions to determine when this action should be executed. Additionally, you can choose the execution environment to control where the action runs.

4. Action Unique Name: Assign a unique name to this action to easily identify and manage it within your Action Flow.


<figure>
<Thumbnail src="/img/reference/actionflow-blocks/file-upload/action.jpeg" alt="file-upload" />
</figure>

By incorporating File Upload into your Action Flows, you can seamlessly handle file-related tasks within your workflows, improving the efficiency and effectiveness of your business processes.
