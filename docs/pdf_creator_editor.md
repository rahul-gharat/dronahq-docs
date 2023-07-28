---
sidebar_position: 122
---

import Thumbnail from '@site/src/components/Thumbnail';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# PDF Editor

DronaHQ provides a very powerful and feature-rich `WYSIWYG PDF Editor` where you can create/design a PDF template from either scratch or use a ready template and modify it according to your needs. 

PDF Editor supports several components to add content like text, images, or table data to the page and also to format the layout of that content. You can work with dynamic data inside the template by creating variables and binding them to the components. 

The look and feel of specific pages can be changed by adding headers, footers, background colors, or images to it. Additionally, you can modify the page size, orientation, and margins to meet your design expectations. Miscellaneous settings like Zoom In, Zoom Out, and Page Reset make the design experience a breeze.

It is possible to create multiple versions of the same template. A new version of the template is created everytime you publish and you can switch to any version using the rollback feature.

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
    <Thumbnail src="/img/pdf_creator/pdf-creator-global-configuration.png" alt="Global configuration" />
    <figcaption align='center'><i>Global configuration</i></figcaption>
</figure>

  </TabItem>

  <TabItem value="page-settings" label="Page Settings">
Page settings are only visible if a page is focused and has the following fields as listed below.
<br/>
<br/>

|   | Field              | Description                                                                                                                                                                                                                                                                                                    |
|---|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|   | Header / Footer    | The header/footer component can be added or removed from the page by switching the toggle switch. The dimensions are not configurable and takes up the entire page width and has a fixed height of 100px. All the content components like Text, Image, Table are supported inside the header/footer component. |
|   | Background Color   | This field takes up all the values that is supported by a [css color property](https://developer.mozilla.org/en-US/docs/Web/CSS/color#syntax) like `white`, `#fff`, `rgb(255, 255, 255)`, `rgba(255, 255, 255, 0.5)`, and so on. By default, the background color is set to `white`.                           |
|   | Background Picture | Any jpeg or png image can be used. Image options includes horizontal and vertical alignment, repeat and fill types.                                                                                                                                                                                            |

<figure>
    <Thumbnail src="/img/pdf_creator/pdf-creator-page-configuration.png" alt="Page configuration" />
    <figcaption align='center'><i>Page configuration</i></figcaption>
</figure>
  </TabItem>
  <TabItem value="variables" label="Variables">
    Variables are used to add dynamic data to the template.
<br/>
<br/>

| Field                  | Description                                                      |
|------------------------|------------------------------------------------------------------|
| Text Variables         | Values can be string, number, or link.                           |
| Image Variables        | Values can be Base64 image data or image url.                    |
| Summary Variables      | Value can be Summary Control's output.                           |
| List Variables (Text)  | Value should be a list/array of strings, numbers, or links.      |
| List Variables (Image) | Value should be a list/array of Base64 image data or image url. |

<figure>
    <Thumbnail src="/img/pdf_creator/pdf-creator-variables-configuration.png" alt="Variables configuration" />
    <figcaption align='center'><i>Variable configuration</i></figcaption>
</figure>
  </TabItem>
</Tabs>