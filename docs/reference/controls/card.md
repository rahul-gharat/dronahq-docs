---
sidebar_position: 1
title: Card controls
---


In the ever-evolving digital sphere, card controls serve as the backbone of content presentation within interfaces like DroaHQ. These controls, ranging from sleek and minimalistic designs to immersive and interactive showcases, redefine how information is shared and engaged with. Exploring these different card types opens doors to a world of creative possibilities, shaping the way we organize and interact with content online.

## Types of Card control

### Single User card

The Single User Card control is designed to display detailed information about a single user, including their name, contact details, and avatar. It offers a comprehensive view of individual user data.

<figure>
  <Thumbnail src="/img/reference/controls/single-user-card/preview.jpeg" alt="Single User Card Preview" />
  <figcaption align="center"><i>Single User Card Preview</i></figcaption>
</figure>

##### Binding Data Options

The Single User Card control accepts data in the form of a single object representing a user's information. Here's an example of the data bind format:

```json
{
  "fullname": "Maria Gerhold",
  "email": "maria81@example.com",
  "avatar": "https://dronamobilepublic.s3.amazonaws.com/DRONA5_Team2050/content/app/images/public/Maria_T4j7j.jpg",
  "_isSelected": false
}
```

### Detailed Card

The Detailed Card control is a versatile tool designed to showcase extensive information or a comprehensive overview of a specific entity or item. It offers a more in-depth view, displaying multiple attributes or details in a structured manner.

<figure>
  <Thumbnail src="/img/reference/controls/card/detailed-card.jpeg" alt="Detailed Card Preview" />
  <figcaption align="center"><i>Detailed Card Preview</i></figcaption>
</figure>

#### Binding Data Options

The Detailed Card control accepts data in an array of objects, where each object represents a detailed card, containing various attributes and information.

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "age": 30,
    "email": "johndoe@example.com",
    "address": "123 Main St",
    "phone": "+1234567890",
    // ... (additional attributes)
  },
  // ... (additional card data)
]
```

### Long card

The Long Card control is tailored to display extended information within a single card structure, accommodating more details without compromising the user experience. It is particularly useful for showcasing comprehensive data sets in a compact yet accessible format.

<figure>
  <Thumbnail src="/img/reference/controls/card/preview.jpeg" alt="Long Card Preview" />
  <figcaption align="center"><i>Long Card Preview</i></figcaption>
</figure>


#### Binding Data Options

The Long Card control functions with data in an array of objects, each object representing a single card containing numerous attributes or information fields.

### Long card with Actions

The Long Card with Action control provides an extended card view, enabling the display of detailed information along with specific action buttons for enhanced user interaction.

<figure>
  <Thumbnail src="/img/reference/controls/card/long-card-with-action.jpeg" alt="Long Card with Action Preview" />
  <figcaption align="center"><i>Long Card with Action Preview</i></figcaption>
</figure>

#### Binding Data Options

This control operates with data structured in an array of objects, each object representing a card containing multiple attributes or information fields.

### Gallery card

The Gallery Card control is designed to showcase multiple images or media files in a card-like format, providing users with an immersive visual experience.

#### Binding Data Options

The Gallery Card control accepts data structured in an array of objects, each representing an image or media file with relevant details.



```json
[
  {
    "id": 1,
    "title": "Nature's Beauty",
    "description": "A stunning view of natural landscapes",
    "image": "https://example.com/image1.jpg",
    // ... (additional attributes)
  },
  // ... (additional card data)
]
``` 

### Galler card with Actions

Similar to Gallery Card but with the addition of the action buttons.

<figure>
  <Thumbnail src="/img/reference/controls/card/gallery-card.jpeg" alt="Gallery Card with action Preview" />
  <figcaption align="center"><i>Gallery Card with action</i></figcaption>
</figure>

### News card

Useful to add news feeds to your apps with a quick preview of the news.

<figure>
  <Thumbnail src="/img/reference/controls/card/news-card.jpeg" alt="news Card Preview" />
  <figcaption align="center"><i>News Card</i></figcaption>
</figure>

### Compact Card

The Compact Card control is designed to display a set of compact cards containing information such as fullname, email, and avatars. Users can interact with these cards by selecting or performing actions.

### Short Card

The Short Card control is a compact representation commonly used for business cards or brief user profiles. It displays essential information about individuals in a concise and easily consumable format.

#### Binding Data Options

The Short Card control accepts data in the form of a single object representing concise information about an individual. Here's an example of the data bind format:

```json
{
  "fullname": "Maria Gerhold",
  "email": "maria81@example.com",
  "avatar": "https://dronamobilepublic.s3.amazonaws.com/DRONA5_Team2050/content/app/images/public/Maria_T4j7j.jpg",
  "_isSelected": false
}
```


## Properties

| Property | Description |
|----------|-------------|
| Theme    | Defines the color scheme or border color of the detailed card. |
| Layout   | Offers layout options for the card display. |
| Max Width | Specifies the maximum width of the card. |
| Spacing  | Determines the space between different elements within the card. |
| Columns  | Defines the number of columns in the card layout. |

### Display

| Property         | Description                                     |
|------------------|-------------------------------------------------|
| Headers          | Allows display options for headers within the card. |
| Image            | Controls the display of images within the card.   |
| Title            | Specifies the title display settings.             |
| Detailed View    | Enables the option to view detailed information.  |
| Action Buttons   | Customizable buttons to perform specific actions. |

### Data

| Property         | Description                                     |
|------------------|-------------------------------------------------|
| Font Size        | Sets the font size for displayed data.           |
| Font Weight      | Adjusts the font weight of displayed text.       |
| Font Color       | Customizes the font color for the card's text.   |
| Spacing          | Controls the spacing between various elements.   |
| Visible Columns  | Specifies the number of visible columns.         |
| Fit to Screen    | Ensures data fits within the card's view.        |

### Pagination

| Property         | Description                                     |
|------------------|-------------------------------------------------|
| Allow            | Enables or disables pagination within the card.  |

## Control Outputs

The Detailed Card control generates detailed information about a selected entity, producing a comprehensive representation of the chosen data.

| Output       | Description                                      |
|--------------|--------------------------------------------------|
| detailedcard | Represents the detailed information displayed within the card. |

## Events

| Trigger           | Description                                                       |
|-------------------|-------------------------------------------------------------------|
| selection_change  | Triggers when there is a change in the selected detailed card(s). |
| action1_click     | Triggers when the first custom action button is clicked.          |