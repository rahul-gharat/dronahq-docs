---
sidebar_position: 1
title: Profile 
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The profile control displays a short description about a person’s information. It can be used to be displayed in dashboards, social networks and so on.

<figure>
  <Thumbnail src="/img/reference/controls/profile/profile.jpeg" alt="profile" />
  <figcaption align = "center"><i>Profile</i></figcaption>
</figure>

## Binding Data Options

The Profile control in DronaHQ allows you to bind data dynamically or statically to display user profiles and related information effectively. 

### Static Data Option

To display static profile information, use the Bind Data option with a data respective to their bind section.
```js
[
  {
    "imgUrl": "https://dronamobilepublic.s3.amazonaws.com/DRONA5_Team108/content/app/images/public/Rectangle 1_1AqQT.png",
    "fallbackText": "AB",
    "name": "Alex Brown",
    "description": "Senior Developer at DronaHQ"
  }
]
```



## Properties

### Profile Image Configuration

| Property             | Description                                                                                         |
|--------------------------|---------------------------------------------------------------------------------------------------------|
| Max Height           | Defines the maximum height of the profile image.                          |
| Background Color     | Sets the background color of the profile image area.         |

### Text Color

| Property             | Description                                                                                         |
|--------------------------|---------------------------------------------------------------------------------------------------------|
| Primary Font         |                                                                                                         |
| Title Font           | Configures the font properties for the profile name.                                                    |
| Size                 | Size of the title font.                                                             |
| Weight               | Weight of the title font.          |
| Color                | Color of the title font.                                                                                |

### Description Font

| Property             | Description                                                                                         |
|--------------------------|---------------------------------------------------------------------------------------------------------|
| Primary Font         |                                                                                                         |
| Description Font     | Configures the font properties for the profile description.                                             |
| Size                 | Size of the description font.  |
| Weight               | Weight of the description font.     |
| Color                | Color of the description font.                                                                          |

### Border

| Property             | Description                                                                                         |
|--------------------------|---------------------------------------------------------------------------------------------------------|
| Size                 | Width of the border around the profile image and text.                          |
| Color                | Color of the border.         |