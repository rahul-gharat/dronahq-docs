---
sidebar_position: 1
title: Menu List
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Menu List control is a navigation component featuring a list-based menu, where each item allows navigation to various screens or sections within a microapp.

<figure>
  <Thumbnail src="/img/reference/controls/menu-list/preview.jpeg" alt="Menu List" />
  <figcaption align="center"><i>Menu List</i></figcaption>
</figure>

## Properties

| Property           | Description                                                              |
|--------------------|--------------------------------------------------------------------------|
| Text           | Customize menu text by adjusting font size, weight, and color.            |
| Nav Icon       | Set the size and color of the navigation icon displayed in the Menu List. |
| Border Color   | Select the border color for each item in the Menu List.                   |
| Card View      | Toggle to represent each menu item in individual cards.                   |
| Card Background| Choose the background color for the cards.                                |

### Item List


| Property              | Description                                                         |
|-----------------------|---------------------------------------------------------------------|
| Item Label            | Name of the menu item.                                              |
| Action                | Validation requirement for navigation.                               |
| Navigate To           | Screen destination upon selection.                                   |
| Transition            | Transition direction of the new screen.                              |
| Menu Image            | URL of the image to display for the menu item.                       |
| Nav Icon              | Icon selection for the navigation button.                            |
| Reset Target Screen   | Reset option for the target screen upon navigation.                  |
