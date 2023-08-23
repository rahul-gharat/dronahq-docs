---
sidebar_position: 8
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

# Multiscreen apps with navigations

## Overview
DronaHQ allows users to create multi screen apps with seamless navigation capabilities, enhancing the user experience and ensuring smooth transitions between different sections of the application. This use case explores various ways of screen navigation in DronaHQ, empowering app creators to build intuitive and user-friendly interfaces for their applications.

## Benefits

1. **Improved User Experience**: Multiscreen apps with navigations offer a user-friendly experience, as users can easily access different functionalities and content through clear and organized screen transitions.

2. **Logical Information Flow**: Screen navigations ensure that users can access information in a logical sequence, guiding them through the app's various features and functionalities.

3. **Enhanced App Functionality**: By dividing the app into multiple screens, users can focus on specific tasks and information, making the app more efficient and user-centric.

4. **Flexibility and Customization**: DronaHQ provides various navigation options, allowing app creators to customize the navigation flow to suit their app's requirements and branding.

5. **Screen Types**: DronaHQ provides different types of screens as `Screen`, `Header`, `Tray`, `Popup`, `Menu` allowing app creators to use as per there requirements.

## Key Navigation Methods

### NavigateTo Dropdowns in properties
- This feature in DronaHQ is available at many places like `Left` or `Right` icons in `Header section`, as well as many controls alos have this in there properties section to configure navigation flow.

### Options available for Navigation
- `NavigateTo (with validation)` Basically while navigating to the desired screen current screen will be validated for all type to validation conditions configured by the app creator.
- `NavigateTo (without validation)` Basically in this case navigation will happen without validating the current page.
- `NavigateTo URL` App creators can use hyperlinks to navigate users to different apps or sites, allowing for flexible and contextual navigation based on user interactions.
- `Exit App` when and application is opened in DronaHQ end user portal the exit app action can be used to exit that app and move to main app selection screen.

### Navigate actions in Action Flow
- DronaHQ has a range of different action blocks that you can use to build different on-screen actions. These actions happen on the client-side and thus enable you to get a response immediately. There are navigation actions like opening a URL or navigating to a page from the current app, that are grouped under the Navigate block.

<figure>
  <Thumbnail src="/img/guides/multiscreen-apps-with-navigations/multiscreen-apps-with-navigations-actions-navigation-options.png" alt="Simple Database GUI" />
  <figcaption align='center'><i>Navigate section options.</i></figcaption>
</figure>

  - `NavigateTo` This action enables you to navigate to a specific form. like Tray screen, Popup screen, etc.
  - `Exit App` This action enables you to exit the App  on completion of all the tasks
  - `Open URL` This enables you to specify the URL that you want to open on completion of an action.
  - `Logout` This allows you to Log out of the current app.
  - `Microapp nav` This allows you to specify the app to navigate to from the current app.
  - `Close Overlay Screens` Enables you to close the overlying screens like Menus, Pop-up menus, and trays.
  - `Redirect Parent Window` Enables you to navigate to the parent website page from your embedded app.
  - `Navigate To Authentication screen` This action allows you to redirect you to the authentication screen.

## Use Case Scenario

Let's consider a project management app that helps users manage tasks, track progress, and collaborate with team members. The app is divided into multiple sections, including a task list, project details, team members, and settings.

So we can use a menu screen for a left or right side sticky menu or header screen to create a header section nav type menu for navigating to different screens in the app.

For showing details for individual team member we can use Tray type screen and a button where we can write navigation action to open tray screen and show details.

In settings nav options we can use a logout button and use Logout action to end a session.

By doing this we can achieve a seamless experience for every one who is intended to use this application.

## Conclusion

The Multiscreen Apps with Navigations use case in DronaHQ demonstrates the diverse navigation methods available to create intuitive and efficient app interfaces. By choosing the most appropriate navigation approach for their app, developers can enhance the user experience, encourage app exploration, and ensure smooth interactions between various app sections. This use case highlights how DronaHQ's navigation capabilities contribute to building engaging and user-friendly apps across diverse industries and use cases.


Work in progress...