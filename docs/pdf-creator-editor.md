---
sidebar_position: 122
toc_min_heading_level: 2
toc_max_heading_level: 4
---

import Thumbnail from '@site/src/components/Thumbnail';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# PDF Editor

DronaHQ provides a powerful and feature-rich PDF generation system with support for two types of templates:

- **Regular Templates** are built using a `WYSIWYG editor`, making them ideal for designing custom PDFs from scratch or by modifying existing templates. They offer full control over the layout, support dynamic data binding, and allow you to add components such as text, tables, images, and summaries—enabling highly customizable and visually rich PDF outputs.

- **Fillable Templates** are based on existing, pre-designed fillable PDFs (such as government forms or standardized documents). These templates do not support layout modifications but allow you to populate the form fields using JSON data. This makes them ideal for automating the generation of standardized forms where structure must remain unchanged, but values need to be filled dynamically.

## Regular Templates
PDF Editor supports several components to add content like text, images, or table data to the page and also to organize the layout of those content. You can work with dynamic data inside the template by creating variables and binding them to the components. 

The look and feel of specific pages can be changed by adding headers, footers, background colors, or images to it. Additionally, you can modify the page size, orientation, and margins to meet your design expectations. Miscellaneous settings like Zoom In, Zoom Out, and Page Reset make the design experience a breeze.

It is possible to create multiple versions of the same template. A new version of the template is created every time you publish and you can switch to any version using the rollback feature.

### PDF Editor Elements

#### Configuration

<Tabs groupId="configuration">
<TabItem value="global-settings" label="Global Settings">
Global settings applies to all the pages at once and has the following fields as listed below.
<br/>
<br/>

| Field       | Description                                                                                                                                                                                    |
|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Page Size   | A dropdown to choose from over 18 page sizes, which includes A4, Legal, Letter, Tabloid, to name a few. By default, the page size is A4.                                                       |
| Orientation | You can either choose Portrait or Landscape mode to work on. By default, the page orientation is Portrait.                                                                                     |
| Margin      | The margin for each side can be configured separately. Page dpi has a fixed value of `96`, so this means `1 cm` is equivalent to `37.8 pixels` and `1 inch` is equivalent to `96 pixels`.  |
| Show Common Header For All Pages  | Enable this feature to display a consistent header across all PDF pages. This header will repeat on every page, including those pages with overflowing content. This overcomes the limitation of in-page headers, ensuring your header remains visible throughout. You can add/edit content to the common header from the first page of the pdf only.|
|  Show Common Footer For All Pages  |  Enable this feature to display a consistent footer across all PDF pages. This footer will repeat on every page, including those pages with overflowing content. This overcomes the limitation of in-page footers, ensuring your footer remains visible throughout. You can add/edit content to the common footer from the first page of the pdf only. |

:::note

 It is recommended to use common header and common footer together for better design experience. When common header is used with in-page footers, this may cause alignment issues in the generated PDF.

:::

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
| Header | Add a custom header to a specific page and design it independently. This feature allows you to create unique headers for each page.|   
|  Footer | Add a custom footer to a specific page and design it independently. This feature allows you to create unique footers for each page. |
|Allow Content Overflow |Enable this feature to allow dynamic content to seamlessly continue onto subsequent pages in the PDF. When toggled on, content that exceeds the first page's capacity, such as dynamic tables with numerous rows, will automatically spill over onto the next page(s) until all content is rendered. Conversely, disabling this feature will truncate the content to fit within the first page only.|
| Background Color   | This field takes up all the values that is supported by a [css color property](https://developer.mozilla.org/en-US/docs/Web/CSS/color#syntax) like `white`, `#fff`, `rgb(255, 255, 255)`, `rgba(255, 255, 255, 0.5)`, and so on. By default, the background color is set to `white`.                           |   |
| Background Picture | Any jpeg or png image can be used. Image options include horizontal and vertical alignment, repeat and fill types.                                                                                                                                                                                            |   |

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

#### Converting Between Header/Footer Types in PDF Templates

When working with PDF templates, you may need to switch between in-page and common headers/footers. 

##### Converting In-Page Header/Footer to Common Header/Footer  
To convert an in-page header or footer to a common header or footer, specify the page number of the header/footer you want to apply as common. If you prefer to discard all in-page headers and footers, leave the field blank to create a new common header or footer.

##### Converting Common Header/Footer to In-Page Header/Footer  
If your PDF template currently uses a common header or footer, you can convert them to in-page headers or footers by selecting the option to disable common headers/footers while preserving the existing content. Alternatively, you can remove all headers and footers entirely for a cleaner layout.


#### Components

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
| Dynamic Table | Used to add table data to the page, where number of rows can expand depending upon the dataset.                                                        |
| Image         | Used to add jpeg or png images to the page. You can add a fixed image by selecting the file from your system or add an image at runtime using variable. Dimensions can be made fixed by specifying the width and height. |
| Summary       | Used to display summary report in a tabular manner. A summary variable is needed to pass DronaHQ's Summary Control output to this component.            |

<figure>
    <Thumbnail src="/img/pdf_creator/pdf-editor/content-components.png" alt="Content Components" />
    <figcaption align='center'><i>Content Components</i></figcaption>
</figure>

  </TabItem>
  <TabItem value="layout" label="Layout">
  These components are used to structure the content.
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

#### Rich text editor

DronaHQ offers a large number of formatting options for textual content like changing fonts, its size, weight, style, color, line height and so on.
You can add hyperlink which can be static as well as dynamic url(fetch from variable source). You can also set justification for text and list the items as bullet points.

<figure>
    <Thumbnail src="/img/pdf_creator/pdf-editor/rich-text-editor.png" alt="Rich text editor" />
    <figcaption align='center'><i>Rich text editor</i></figcaption>
</figure>

:::info Rich text editor

The rich text editor is activated when you click or focus on any text component within the template.

:::


## Fillable Templates

Fillable Templates let you upload existing PDFs with fillable form fields (such as those created in Adobe Acrobat) and populate them programmatically using DronaHQ. This is ideal when you want to work with standard government forms, contracts, or any pre-designed document. Miscellaneous settings like Zoom In, Zoom Out enhances the pdf viewing experience.

### Fillable PDF Working

#### Add a Fillable PDF
- Add New Fillable PDF by navigating `PDF Creator Menu` -> `Create` -> `Fillable PDF`.
- Enter a unique name for your template.
- If the PDF is password-protected, input the password.
- Upload or select a valid fillable PDF.
- Click on `Add PDF`.
- A new tab opens with a UI preview of your uploaded fillable PDF.

:::info
Make sure you upload a valid fillable PDF - the system only accepts PDFs with interactive form fields and does not support regular (non-fillable) documents.
:::

#### Preview & JSON Mapping
When a fillable PDF template is clicked from the PDF template listing, it opens in a new tab with the following UI elements:
- **Live Preview:** View the actual fillable PDF.
- **Sidebar:** Displays two JSON objects:
  - **Form JSON:** Defines the structure of the PDF's form fields. Each field typically includes  
    - `name`: Field identifier
    - `type`: Field type (e.g., text, checkbox, dropdown)
    - `options`: (For dropdowns/option lists) Lists all possible field values

  - **Generate PDF JSON:** Used to generate the PDF output by injecting data. Each field typically includes
    - `name`: Matches the field name from the form
    - `type`: Same as the form field type
    - `value`: The actual data to populate
    - `options`: Not required and usually omitted
    
- **Generate PDF Button:** Located at the top, this allows you to test the PDF output using the data from the `Generate PDF JSON`.

<figure>
    <Thumbnail src="/img/pdf_creator/pdf-editor/fillable-pdf-view.png" alt="Fillable Form PDF View" />
    <figcaption align='center'><i>Fillable Form PDF View</i></figcaption>
</figure>

:::info

Whenever you generate a PDF using the **Generate PDF** button from the Fillable PDF Preview, it will **consume tasks**. Make sure to test accordingly and monitor your task usage.

:::