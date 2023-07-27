---
sidebar_position: 122
---

import Thumbnail from '@site/src/components/Thumbnail';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# PDF Editor

## Configuration Sidebar

<Tabs groupId="configuration">
  <TabItem value="global-settings" label="Global Settings">
Global settings applies to all the pages at once and has the following fields as listed below.
<br/>
<br/>

| Field       | Description                                                                                                                                                                                    |
|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Page Size   | A dropdown to choose from over 18 page sizes, which includes A4, Legal, Letter, Tabloid, to name a few. By deafult, the page size is A4.                                                       |
| Orientation | You can either choose Portrait or Landscape mode to work on. By default, the page orientation is Portrait.                                                                                     |
| Margin      | The margin for each side can be configured separately. Page dpi has a fixed value of `96`, so this means `1 cm` is equivalent to `37.8 pixels` and `1 inch` is equivalent to `96 pixels`.  |

<figure>
    <Thumbnail src="/img/pdf_creator/pdf-creator-global-configuration.png" alt="Template global config sidebar" />
    <figcaption align='center'><i>Template global config sidebar</i></figcaption>
</figure>

  </TabItem>

  <TabItem value="page-settings" label="Page Settings">
Page settings are only visible if a page is focused and has the following fields as listed below.
<br/>
<br/>

| Field              | Description                                                                                                                                                                                                                                                                                                                      |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Header / Footer    | The header/footer component can be added or removed from the page by switching the toggle switch. The dimensions are not configurable and takes up the entire page width and has a fixed height of 100px. All the content components like Text, Image, Table are supported inside the header/footer component. |
| Background Color   | This field takes up all the values that is supported by a [css color property](https://developer.mozilla.org/en-US/docs/Web/CSS/color#syntax) like `white`, `#fff`, `rgb(255, 255, 255)`, `rgba(255, 255, 255, 0.5)`, and so on. By default, the background color is set to `white`.                                             |
| Background Picture |                                                                                                                                                                                                                                                                                                                                  |

<figure>
    <Thumbnail src="/img/pdf_creator/pdf-creator-page-configuration.png" alt="PDF creator template listing" />
    <figcaption align='center'><i>PDF Creator template listing</i></figcaption>
</figure>
  </TabItem>
  <TabItem value="variables" label="Variables">
    Variables goes here
    <figure>
        <Thumbnail src="/img/pdf_creator/pdf-creator-variables-configuration.png" alt="PDF creator template listing" />
        <figcaption align='center'><i>PDF Creator template listing</i></figcaption>
    </figure>
  </TabItem>
</Tabs>