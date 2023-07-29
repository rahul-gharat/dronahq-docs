---
sidebar_position: 122
---

import Thumbnail from '@site/src/components/Thumbnail';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# PDF Editor

DronaHQ provides a very powerful and feature-rich `WYSIWYG PDF Editor` where you can create/design a PDF template from either scratch or use a ready template and modify it according to your needs. 

PDF Editor supports several components to add content like text, images, or table data to the page and also to organize the layout of those content. You can work with dynamic data inside the template by creating variables and binding them to the components. 

The look and feel of specific pages can be changed by adding headers, footers, background colors, or images to it. Additionally, you can modify the page size, orientation, and margins to meet your design expectations. Miscellaneous settings like Zoom In, Zoom Out, and Page Reset make the design experience a breeze.

It is possible to create multiple versions of the same template. A new version of the template is created everytime you publish and you can switch to any version using the rollback feature.

## PDF Editor Elements

### Configuration

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
    <Thumbnail src="/img/pdf_creator/pdf-editor/pdf-creator-global-configuration.png" alt="Global configuration" />
    <figcaption align='center'><i>Global configuration</i></figcaption>
</figure>

  </TabItem>

  <TabItem value="page-settings" label="Page Settings">
Page settings are only visible if a page is focused and has the following fields as listed below.
<br/>
<br/>

| Field              | Description                                                                                                                                                                                                                                                                                                    |   |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---|
| Header / Footer    | The header/footer component can be added or removed from the page by switching the toggle switch. The dimensions are not configurable and takes up the entire page width and has a fixed height of 100px. All the content components like Text, Image, Table are supported inside the header/footer component. |   |
| Background Color   | This field takes up all the values that is supported by a [css color property](https://developer.mozilla.org/en-US/docs/Web/CSS/color#syntax) like `white`, `#fff`, `rgb(255, 255, 255)`, `rgba(255, 255, 255, 0.5)`, and so on. By default, the background color is set to `white`.                           |   |
| Background Picture | Any jpeg or png image can be used. Image options includes horizontal and vertical alignment, repeat and fill types.                                                                                                                                                                                            |   |

<figure>
    <Thumbnail src="/img/pdf_creator/pdf-editor/pdf-creator-page-configuration.png" alt="Page configuration" />
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
    <Thumbnail src="/img/pdf_creator/pdf-editor/pdf-creator-variables-configuration.png" alt="Variables configuration" />
    <figcaption align='center'><i>Variable configuration</i></figcaption>
</figure>
  </TabItem>
</Tabs>

### Components

<Tabs  groupId="components">
  <TabItem value="content" label="Content">
  You can add content to the page using this components listed below.
<br/>
<br/>

| Field         | Description                                                                                                                                             |
|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| Title         | Used to add title and subtitle to the page                                                                                                              |
| Text          | Used to add textual data to the page                                                                                                                    |
| Paragraph     | Used to add text paragraph to the page                                                                                                                       |
| Heading 1     | Used to add main heading to the page                                                                                                                    |
| Heading 2     | Used to add small heading to the page                                                                                                                   |
| Table         | Used to add table data to the page, best suited when you have fixed number of rows in your dataset.                                                     |
| Dynamic Table | Used to add table data to the page, where number of rows can expand depeneding upon the dataset.                                                        |
| Image         | Used to add jpeg or png images to the page. You can add a fixed image by selecting the file from your system or add an image at runtime using variable. Dimensions can be made fixed by specifying the width and height. |
| Summary       | Used to display summary report in a tabular manner. A summary variable is needed to pass DronaHQ's Summary Control output to this component.            |

<figure>
    <Thumbnail src="/img/pdf_creator/pdf-editor/content-components.png" alt="Content Components" />
    <figcaption align='center'><i>Content Components</i></figcaption>
</figure>

  </TabItem>
  <TabItem value="layout" label="Layout">
  This components are used to structure the content.
<br/>
<br/>

| Field         | Description                                                                      |
|---------------|----------------------------------------------------------------------------------|
| Column Layout | Upto 4 column data can be added side-by-side. Width of each column is adjustable |
| Separator     | Used to add a horizontal line between components                                 |
| Spacer        | Used to add horizontal space between components. Minimum space height is 50      |

<figure>
    <Thumbnail src="/img/pdf_creator/pdf-editor/layout-components.png" alt="Layout Components" />
    <figcaption align='center'><i>Layout Components</i></figcaption>
</figure>

  </TabItem>
</Tabs>

### Rich text editor

DronaHQ offers a large number of formatting options for textual content like changing fonts, its size, weight, style, color, line height and so on.
You can add hyperlink which can be static as well as dynamic url(fetch from variable source). You can also set justification for text and list the items as bullet points.

<figure>
    <Thumbnail src="/img/pdf_creator/pdf-editor/rich-text-editor.png" alt="Rich text editor" />
    <figcaption align='center'><i>Rich text editor</i></figcaption>
</figure>

:::info Rich text editor

The rich text editor is activated when you click or focus on any text component within the template.

:::