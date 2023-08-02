---
sidebar_position: 3
---

# Native controls

DronaHQ provide various Native Mobile Controls that allows creators to incorporate native components and functionalities into their mobile applications seamlessly. By leveraging this native controls, developers can enhance the user experience and access device-specific features directly from within the app. Native Mobile Control enables the integration of platform-specific capabilities without compromising the app's performance or responsiveness.

:::info PLEASE NOTE

You have to publish your App on DronaHQ in order to access Native controls on DronaHQ End user portal - `Android` and `iOS` Mobile App.

:::

## Caching

When you are binding remote data to a control, you have an option to Cache that data at control level. To enable caching, `Select Control -> Property -> Under Generic, Enable Caching`. This toggle will ensure that when remote data is fecthed to a control, it will get cached in local device's `KV Storage` which leverages Native Mobile device's capability. It is important that atleast once, the data should be return when online. So, when device is offline next time, the control will load data from previously stored local data thereby improving performance of the app.

## Controls List

Following are the list of Native Mobile controls that are supported by DronaHQ End user portal - Android and iOS Mobile App -

- File Upload (Upload from -> Camera / Gallery, Annotation)
    - Upload from -> Camera / Gallery
    - Annotation
- GPS
- [NFC Reader](/reference-controls/nfc_reader) 
