---
sidebar_position: 3
---

import Thumbnail from '@site/src/components/Thumbnail';

# Script tags

DronaHQ provides an advanced feature that allows you to incorporate custom script tags into your published web applications. This functionality proves invaluable when you want to integrate various third-party tools into your application, such as Google Tag Manager or other tools that necessitate the inclusion of custom tags.

By leveraging this feature, you can augment your application with external capabilities, streamline your workflows, and optimize the user experience. For instance, with Google Tag Manager, you can manage marketing, analytics, tracking, and more without having to modify the codebase directly.

Adding custom script tags to your application via DronaHQ is a seamless and straightforward process that adds a layer of flexibility and customization. all you need to do is follow these easy steps


- Open studio app builder
- Hover over Config icon also known as settings icon on the top right corner just before share button.
- From popup menu select the custom script option and it will open settings modal.
- Make sure `tag scripting` tab is selected if not select it. 

once you are done with these two simple step you will see the modal visible in the image below.

<figure>
  <Thumbnail src="/img/app-scripting-and-code/script-tags/script-config-modal.png" alt="Add Custom Scipt modal" />
  <figcaption align = "center"><i>Add Custom Scipt modal</i></figcaption>
</figure>

you can see two input blocks:

- **Tags script to be placed in the head section**: If you add your script tag in this input block then your script tag will be added in the head section of the application. 

- **Tags script to be placed in the body section**: If you add your script tag in this input block then your script tag will be added in the body section of the application.

:::info Info
These tags are only added to the published package not on preview or builder.
:::