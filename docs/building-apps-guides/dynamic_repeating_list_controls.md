---
sidebar_position: 2
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';
import Image from '@site/src/components/Image';

# Dynamic repeating list of control

## Overview
DronaHQ's List Repeat Control is a powerful feature that allows users to create dynamic repeating lists of control within their applications. This functionality enables users to generate lists of items with varying properties, quantities, or data dynamically. It is particularly useful in scenarios where users need to manage multiple items, such as to-do lists, shopping lists.

:::info
List repeat control has some restrictions on controls that can be added to it. we can drop input or controls that are created using `Control Designer`. It is most preferred for controls created using `Control Designer`.
:::

## Benefits

1. **Flexible Data Representation**: The Dynamic Repeating List of Control provides flexibility in representing data, as users can add functionalities as `Search`, `Refresh`, `Download` and `Pagination`.

2. **Enhanced User Interaction**: Users can interact with the list by filtering items using `search` and `pagination`, creating a seamless and intuitive user experience.

3. **Efficient Data Management**: This feature simplifies the process of managing multiple items by organizing them in a structured list format, streamlining data visibility.

4. **Real-time Updates**: Any changes made to the list, such as refreshing or moving to next page items, are immediately reflected in the user interface, ensuring real-time updates for better visibility.

## Key Features

### List Control
- The List Repeat Control enables users to define a list of control or item that can be repeated dynamically.

### Dynamically Load Data
- Users can refresh or paginate data with ease, providing a seamless way to manage data.

### Data Binding
- Each item in the list is bound to a separate data source, allowing for accurate storage and retrieval of data for each entry also when using pagination.

### Customizable Design
- Users can customize the appearance and layout of the list items to match their app's theme and branding.

### Responsive Design
- The List Repeat Control is designed to be responsive, ensuring a consistent user experience across various devices.

## Customizations in List repeat control

| Property | Explanation |
| ------------------ | -----------------------------------|
| Show Divider | Is the toggle to switch ON or OFF to display the divider. |
| Single Select | Toggle button to enable or disable single select. |
| Background color | Sets the background color for list repeat. |
| Show Search | Is the toggle to switch ON or OFF to display the Search box. |
| Show Refresh | Is the toggle to switch ON or OFF to display the Refresh button. |
| Show Download | Is the toggle to switch ON or OFF to display the Download button. |
| Horizontal scroll | When this option is toggled on, we can scroll horizontally when we have multiple items in the list. |
| Show Dot | Is used to specify whether dots indicating multiple items should be displayed. |
| Allow Pagination | To use this feature you need to toggle on `Allow Pagination`, to use this feature our api should support pagination. There are 2 types of pagination's supported by DronaHQ `limit offset based` and `cursor based`. you can also decide the position where this pagination bar will be displayed by setting `Pagination Bar Location` property. |
| Columns on phone | Using this user can decide the layout for phone and mobile devices. |
| Columns on desktop | Using this user can decide the layout for Desktop device. |

Show arrow on Web: Is used to specify whether an arrow to scroll to next item should be displayed. This is for the Web app.

## Use Case Scenario

Let's consider a task management app where users can create and manage their to-do lists. Traditionally, without the Dynamic Repeating List of a Control, users would have to create a fixed set of cards or components show the list of tasks. This limitation may not cater to users with varying numbers of tasks on their list or those who may add new tasks over time.

By leveraging the List Repeat Control, the app developers can implement a dynamic list of tasks. Users can give a list of tasks as needed, and the app will automatically replicate the task cards of components created in control designer for each new entry. This dynamic repeating list of a control ensures that users can manage an ever-changing number of tasks with ease.

**For example**:

Initially, the user creates a to-do list with three tasks.
If the user wants to add more tasks, they can simply create and different logic and click an `Add Task` button, and a new task inputted will be visible in list repeat section will be dynamically appended to the list.
If the user wants to remove a task, they can create a different logic and click a `Delete` button and load that data again to the list repeat control and it will remove it from the list.
As a result, users can efficiently manage their to-do lists, and the app provides a user-friendly and customizable experience for managing tasks of varying quantities.
It also gives users the ability show large data with pagination and using search to filter out data, as they can use download button to download loaded data in `.csv` format.

## Conclusion

DronaHQ's List Repeat Control empowers users to create dynamic repeating lists of  a control within their applications, providing flexibility and efficiency in data management. This feature enhances user experience, simplifies data entry, and ensures real-time updates for better usability. By incorporating the Dynamic Repeating List of a Control, app developers can create versatile and user-centric solutions for managing various types of data lists, benefiting a wide range of industries and use cases.


Docusaurus can manage multiple versions of your docs.