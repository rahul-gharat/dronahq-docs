---
sidebar_position: 1
title: Share
---

import Thumbnail from '@site/src/components/Thumbnail';


Share action allows to share text, images, files, and links via native sharing dialogs on Android/iOS mobile app.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/share/share.png" alt="Share Action" />
<figcaption align='center'><i>Share Action</i></figcaption>
</figure> 

1. Navigate to `Native` in your action flow and select the `Share` task.
2. Configure the following options in the Action Configuration section:
   - Message : Enter the message you want to share. Note: This may not appear in certain apps like Facebook or Instagram.
   - Subject : Enter the subject line. This is mainly used for sharing via email.
   - Files : Enter an array of file paths or URLs you want to share (e.g., images, documents). You can use both local and remote files.
   - URL : Enter the link to be shared along with the message. This is supported by most apps.
   - Chooser Title : (Android only) Enter the title to show in the app picker (share sheet). This overrides the default title.
   - App Package Name : (Android only) Provide the package name of the specific app you want to target for sharing (e.g., com.whatsapp, com.facebook.katana).
3. Save your configuration.


### Configuration Overview  

| Configuration Field       | Platform       | Description                                                                                       |
|---------------------------|---------------|---------------------------------------------------------------------------------------------------|
| message            | Android, iOS          | The message content to share. May not be supported on some apps like Facebook or Instagram. |
| subject            | Android, iOS          | Subject line used for sharing via email or other compatible apps. |
| files              | Android, iOS          | An array of file paths or URLs to be shared (e.g., images, documents). Supports both local and remote files.  |
| url                | Android, iOS          | A URL to include in the shared content. Widely supported across most apps. |
| chooser title      | Android only          | Custom title for the native share sheet (app picker). Overrides the default system title. |
| app package name  | Android only          | Package name of a specific app to directly share with (e.g., com.whatsapp). |


<figure>
<Thumbnail src="/img/reference/actionflow-blocks/share/share-config.png" alt="Share Action Configuration" />
<figcaption align='center'><i>Share Action Configuration</i></figcaption>
</figure>