---
sidebar_position: 4
---

# Native actionblocks

DronaHQ provide various Native Mobile ActionFlow Blocks that allows creators to incorporate native device functionalities and control the flow of app logic in mobile applications. These blocks allow creators to create seamless and dynamic actionflows by leveraging native capabilities specific to iOS and Android platforms. With Native Mobile ActionFlow Blocks, developers can optimize user experiences, streamline processes, and interact with the device's hardware and software components directly from within the app.

:::info PLEASE NOTE

You have to publish your App on DronaHQ in order to access Native actionblocks on DronaHQ End user portal - `Android` and `iOS` Mobile App.

:::



## Allow offline

When you are calling remote connector in actionflow, you have an option to call even if device is offline. To enable Offline option, `Select Allow offline toggle` present in last step of configuring server side action flow. This toggle will ensure that when device is offline, the connector call is cached locally in  device's `Storage` which leverages Native Mobile device's capability. So, when device is online next time and app is opened, the connector call will get called automatically thereby improving user experience of the app.


## Actionblocks List

Following are the list of Native Mobile ActionFlow blocks that are supported by DronaHQ End user portal - Android and iOS Mobile App -

On-Screen Actions:
- Logout
- Exit App
- Call
- SMS
- Email 
- Install MicroApps
- Write NFC Tag
- Share Via Whatsapp
- Whatsapp Message
- Add to Calendar

Server Side Actions:
- File Upload
- Push Notification