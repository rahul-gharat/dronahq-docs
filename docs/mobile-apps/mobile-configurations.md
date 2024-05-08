---
sidebar_position: 2
---

import Thumbnail from '@site/src/components/Thumbnail';

# Mobile configurations

Below are the Various App configurations can be set on DronaHQ which are only applicable to DronaHQ End user portal - Android and iOS Mobile App. These settings can be located at `DronaHQ -> Open Any App -> Settings -> All Settings`.

## App Settings
 | Field | Description  | 
  | ----------------- |---------------------------- |
| Display App Icon            | To show/hide App icon from Homescreen Apps listing. Enabled by default. Disable this setting, if you want to hide this App's icon from Homescreen Apps listing. Useful in cases you want to invoke this App from Another App and don't want it to be accessible by default.  |
| Display Close Button (iOS and web Only)           | To show/hide Close App button. Enabled by default. Disable this setting, if you want to hide this App's Close button and you are alternatively exiting app from some other UI element.  |
| Close Button Colour              | Hex color code to be set as close button's background color. |

### App Display and Closer

 | Field | Description  | 
  | ----------------- |---------------------------- |
| Display App Icon            | To show/hide App icon from Homescreen Apps listing. Enabled by default. Disable this setting, if you want to hide this App's icon from Homescreen Apps listing. Useful in cases you want to invoke this App from Another App and don't want it to be accessible by default.  |
| Display Close Button (iOS and web Only)           | To show/hide Close App button. Enabled by default. Disable this setting, if you want to hide this App's Close button and you are alternatively exiting app from some other UI element. Applicable only for iOS and web platform as for Android default back button is overridden to exit an App.  |
| Close Button Colour              | Hex color code to be set as close button's background color. Applicable only if Display Close Button is enabled. |

### UI Customization

 | Field | Description  | 
  | ----------------- |---------------------------- |
| Status Bar            | To show/hide Status Bar at the top on phone when this App is opened. It is Shown by default. Disable this setting, if you want to hide status bar and want App to be opened as fullscreen.  |
| Status Bar Text Colour           | Color of content displayed on the Status Bar. It can be either White or Black. For Dark color status bar background color, you should keep the text as `white` and for light color status bar background color, you should keep this text color as `black`. Enabled by default. Disable this setting, if you want to hide this App's Close button and you are alternatively exiting app from some other UI element. Applicable only if Status Bar is shown. |
| Status Bar Background Colour           | Can be either `Transparent, Gradient or Solid` background color. This will set the Background color of the Status bar.  Applicable only if Status Bar is shown. |
| iPhone X Bottom Bar Color            | Can be either `Transparent, Gradient or Solid` background color. This will set the Background color of the Bottom Bar on ios devices.  |
| Android Bottom Bar Color | Can be either `Device Default or Solid` background color. This will set the Background color of the Bottom Bar on android devices. |

### Supported Platforms

You can enable/disable individual platform to be accessible for your App. By default, all platforms support is enabled, you can individual disable if your app isn't supported/designed for any specific platform. `App Not Supported` error message is displayed on platforms not having this App's support. This is applicable to App opened in DronaHQ End user portal - Android and iOS Mobile App.

 | Field | Description  | 
  | ----------------- |---------------------------- |
| Android mobile            | Enable/Disable support of the current App for all Android phones.  |
| Android tablet           | Enable/Disable support of the current App for all Android tablets. |
| iPhone           | Enable/Disable support of the current App for all iphone devices. |
| iPad            | Enable/Disable support of the current App for all ipad devices. |
| Windows Phone | Enable/Disable support of the current App for all Windows phones. |
| Windows Tablet | Enable/Disable support of the current App for all Windows tablets. |

### Orientation Support

You can enable/disable individual orientation mode support for your App. By default, both orientation support is enabled, you can individual disable if your app isn't supported/designed for any orientation. This is applicable to App opened in DronaHQ End user portal - Android and iOS Mobile App.

 | Field | Description  | 
  | ----------------- |---------------------------- |
| Allow Phone Portrait            | Portrait mode support of the current App for all mobile devices.  |
| Allow Phone Landscape           | Landscape mode support of the current App for all mobile devices. |
| Phone Landscape Safe Area For Notch           | iOS specific only - When Enabled, App gets space of Notch area  as well in Landscape mode. By Default its disabled, so that App content is loaded next to notch area when in landscape mode. If this is enabled, then App needs to handle Notch Area in UI as to avoid app UI getting blocked by notch area. |
| Allow Tablet Portrait | Portrait mode support of the current App for all tablet devices. |
| Allow Tablet Landscape | Landscape mode support of the current App for all tablet devices. |

:::info Please Note

If Portrait only or landscape only support is enabled then App when opened will directly load in that specific orientation only.

:::

