---
sidebar_position: 1
title: Sortable
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';


The Sortable control is a display control that is used to display individual data in the form of a collection of cards or list. End users can also sort these cards by drag and drop method.

<figure>
  <Thumbnail src="/img/reference/controls/sortable/preview.png" alt="Sortable" />
  <figcaption align = "center"><i>Sortable</i></figcaption>
</figure>

## Binding Data Options

The Sortable control allows you to display data in the form of an array of objects. Each object must contain properties such as fullname, email, department, and avatar.

### Static Data Option

To display static data in the Sortable control, you need to provide an array of objects in JSON format. Each object should have the following properties:

- fullname: Represents the full name of the individual.
- email: Represents the email address of the individual.
- department: Represents the department to which the individual belongs.
- avatar: Represents the URL of the avatar image associated with the individual.

Example:

```js
[
  {
    "fullname": "Maria Gerhold",
    "email": "maria81@example.com",
    "department": "IT",
    "avatar": "https://avatar.com/hyy45302.jpeg"
  },
  {
    "fullname": "John Doe",
    "email": "john.doe@example.com",
    "department": "HR",
    "avatar": "https://avatar.com/abc12345.jpeg"
  },
  {
    "fullname": "Jane Smith",
    "email": "jane.smith@example.com",
    "department": "Marketing",
    "avatar": "https://avatar.com/xyz67890.jpeg"
  }
]
```

:::info
 Please ensure that the properties for the avatar image and title might vary based on your data source. In such cases, you can bind them again using the respective column dropdowns in the properties menu.
:::

## Properties

| Property                    | Description                                                                                                                                                          |
|-----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Layout                      | This option allows you to set the layout format, which can be either List or Cards.                                                                                |
| Cover Image                 | Specifies the cover image (URL) of a person.                                                                                                                         |
| Title                       | Specifies the title (name) of a person.                                                                                                                              |
| Data                        | Specifies data (email) of a person.                                                                                                                                 |
| Tag                         | Specifies tags (department) of a person.                                                                                                                             |
| Spacing between properties  | This option is used for vertical spacing between the properties of each card.                                                                                       |
| Visible                     | This option is used to set the number of visible columns on the control.                                                                                             |
| Max Width (Card)            | Sets the maximum width of the card in the card layout.                                                                                                               |
| Spacing (Card)              | Sets the spacing between the cards.                                                                                                                                  |
| Card in Rows (Card)         | Sets the number of cards visible. You can configure different numbers of cards for Desktop and iPad/tablet.                                                         |
| Headers (Display)           | Toggles visibility of Headers.                                                                                                                                      |
| Cover Image (Display)       | Toggles visibility of the cover image.                                                                                                                              |
| Title (Display)             | Toggles visibility of the title.                                                                                                                                    |
| Detailed View (Display)     | Toggles visibility of the detailed view option.                                                                                                                     |
| Column Name (Cover Image)   | Binds the column that contains the cover image.                                                                                                                     |
| Position (Cover Image)      | Sets the position of the cover image, which can be top, bottom, left, or right.                                                                                     |
| Full Size (Cover Image)     | Toggles the full-size display of the cover image.                                                                                                                   |
| Object Fit (Cover Image)    | Sets the image fit size, which can be either "cover" or "contain".                                                                                                  |
| Max Width (Cover Image)     | Sets the maximum width of the image.                                                                                                                                 |
| On Error (Cover Image)      | Sets the default image in case an error arises. The user can either show a default image or hide the image.                                                         |
| Column Name (Title)         | Binds the column that contains the title.                                                                                                                           |
| Font Size (Title)           | Sets the font size of the title text.                                                                                                                                |
| Font Weight (Title)         | Sets the font weight (boldness) of the title text.                                                                                                                   |
| Font Color (Title)          | Sets the font color of the title text.                                                                                                                               |
| Font Size (Data)            | Sets the font size of the data text.                                                                                                                                 |
| Font Weight (Data)          | Sets the font weight (boldness) of the data text.                                                                                                                    |
| Font Color (Data)           | Sets the font color of the data text.                                                                                                                                |
| Text Alignment (Data)       | Sets the text alignment, which can be left, center, or right aligned.                                                                                               |
| Actions (UI)                | Introduces specific actions that can be performed on tasks. For action styling, you can configure the following properties:                                          |
| Show (Actions)              | Toggles visibility of the action.                                                                                                                                   |
| Text (Actions)              | Sets the text for the action.                                                                                                                                       |
| Color (Actions)             | Sets the text color of the action.                                                                                                                                  |
| Icon (Actions)              | Sets the icon for the action.                                                                                                                                       |

## Control Output



| Output                      | Description                                                                                                       |
|-----------------------------|-------------------------------------------------------------------------------------------------------------------|
| {{sortable.[attribute_name]}} | Represents the value of the specified attribute (e.g., department, fullname, department, avatar) from the selected card in the Sortable control. |

In this updated version, the `[attribute_name]` is a placeholder that represents the actual attribute name (e.g., department, fullname, department, avatar) from the data in the Sortable control. With this placeholder, you can dynamically access and utilize different attribute values based on the data provided.


## Events 

| Trigger   | Description                                                                                                              |
|-----------------|--------------------------------------------------------------------------------------------------------------------------|
| Order_changed   | This event is triggered when the user sorts any card by dragging and dropping them.                                     |
| Action_click    | This action is triggered when the user clicks the custom-designed action button. At most, there can be 4 actions for a card. |