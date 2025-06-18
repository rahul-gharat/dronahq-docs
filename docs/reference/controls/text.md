---
sidebar_position: 1
title: Text
toc_min_heading_level: 2
toc_max_heading_level: 4
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Text Control is a versatile component designed to display content in either Markdown or Plain Text format. It supports rich text formatting, links, lists, headings, code blocks, and other Markdown syntax. It has additional properties such as dynamic height, Show/Hide on mobile, Show/Hide on Desktop, and Maintain space when hidden property in Freeflow editor.

## Content

<!-- <figure>
  <Thumbnail src="/img/reference/controls/text/content.png" />
</figure>  -->

### Type

| Type       | Description                                                                               |
| -----------| ----------------------------------------------------------------------------------------- |
| Markdown   | A lightweight markup language used to format text with plain syntax. It converts easily to HTML for styled content.                                     |
| Plain Text | Unformatted text that contains no styling or special formatting. It displays exactly as typed, without interpretation.                                       |

### Add-ons  

| Add-on      | Description                                                                               |
| ----------- | ----------------------------------------------------------------------------------------- |
| Tooltip     | Provides helpful hints or extra information on hover.                                     |
| Description | Adds descriptive text beneath options or sections.                                        |
| Label       | Displays labels for specific options or sections.   Configurable with size, weight, and color. |

<figure>
  <Thumbnail src="/img/reference/controls/text/add ons.png" />
</figure>

## Binding Data Options

To populate the Text control with data, you can use the Bind Data option, which accepts an string data format.

<figure>
  <Thumbnail src="/img/reference/controls/text/data bind section.png" />
</figure>

### Plain Text

You can utilize this feature to present fixed text content directly within the control, without any styling or structure. For instance, if you wish to exhibit a predefined piece of text within the Text control, you can simply input the desired content into this section.

Consider an example where you want to display an introductory paragraph.

```json
Welcome to our new app! We aim to provide you with an unparalleled user experience.
```

### Markdown

Markdown a lightweight markup language used to format text with plain syntax. It converts easily to HTML for styled content.

##### Markdown Extension supported
 - [Admonition](https://docusaurus.io/docs/markdown-features/admonitions/)                                
 - [Extended Tables](https://www.markdownguide.org/extended-syntax/#tables)                          
 - [Footnote](https://www.markdownguide.org/extended-syntax/#footnotes)                          
 - [Highlight](https://www.markdownguide.org/extended-syntax/#fenced-code-blocks)                                                
 - [Mermaid](https://mermaid.js.org/intro/)                         

#### Standard Markdown

Standard Markdown is a lightweight markup language used to format plain text. It allows easy conversion to HTML and supports basic formatting features.

<Tabs groupId="standard-markdown">
  <TabItem value="standard-markdown-syntax" label="Syntax">

  ```json
  # H1  
  ## H2  
  ### H3  
  #### H4  
  ##### H5  
  ###### H6
  ```

  </TabItem>
  <TabItem value="standard-markdown-output" label="Output">
    <figure>
      <Thumbnail src="/img/reference/controls/text/Standard output.png"/>
    </figure>
  </TabItem>
</Tabs>

#### Marked Admonition

Adds support for styled admonition blocks (e.g., Note, Tip, Warning) in Markdown. These visually highlight important content such as alerts or instructions using a block-style layout.

<Tabs groupId="marked-admonition">
  <TabItem value="marked-admonition-syntax" label="Syntax">

  ```json
  > **NOTE**
  > This is an **admonition** block using the `marked-admonition.js` plugin.
  ```
  
  </TabItem>
  <TabItem value="marked-admonition-output" label="Output">
    <figure>
      <Thumbnail src="/img/reference/controls/text/Admonition output.png"/>
    </figure>
  </TabItem>
</Tabs>

#### Marked Extended Tables

Enhances default Markdown tables by enabling advanced features such as cell merging (rowspan and colspan), nested elements, and improved layout flexibility.

<Tabs groupId="marked-extended-tables">
  <TabItem value="marked-extended-tables-syntax" label="Syntax">

  ```json
  ## 📊 Extended Table

  | Feature   | Support | Notes           |
  |---------: |:--------|:----------------|
  | Tables    | Yes     | GFM-style       |
  | Footnotes | Yes     | With plugin     |
  ```
  
  </TabItem>
  <TabItem value="marked-extended-tables-output" label="Output">
    <figure>
      <Thumbnail src="/img/reference/controls/text/Extended Tables output.png"/>
    </figure>
  </TabItem>
</Tabs>

#### Marked Footnote

Enables GitHub-style footnotes in Markdown for referencing additional information. Footnotes appear as superscripted links with definitions listed at the bottom of the content.

<Tabs groupId="marked-footnote">
  <TabItem value="marked-footnote-syntax" label="Syntax">

  ```json
  This is a sentence with a footnote reference[^1].

  [^1]: This is the actual footnote text explaining something in detail.
  ```
  
  </TabItem>
  <TabItem value="marked-footnote-output" label="Output">
    <figure>
      <Thumbnail src="/img/reference/controls/text/Footnote output.png"/>
    </figure>
  </TabItem>
</Tabs>

#### Marked Highlight

Adds syntax highlighting for code blocks in Markdown using libraries like highlight.js or shiki, making code snippets easier to read and visually appealing.

<Tabs groupId="marked-highlight">
  <TabItem value="marked-highlight-syntax" label="Syntax">

  ```json
  ```js
  function greet(name) {
    return "Hello, " + name;
  }
  ```
  
  </TabItem>
  <TabItem value="marked-highlight-output" label="Output">
    <figure>
      <Thumbnail src="/img/reference/controls/text/Highlight output.png"/>
    </figure>
  </TabItem>
</Tabs>

#### Marked Mermaid

Integrates Mermaid.js support into Markdown, allowing users to embed and render flowcharts, sequence diagrams, and other visualizations using simple text-based syntax.

<Tabs groupId="marked-mermaid">
  <TabItem value="marked-mermaid-syntax" label="Syntax">

  ```json
  ```mermaid
  graph LR
  A[Square Rect] -- Link text --> B((Circle))
  A --> C(Round Rect)
  B --> D{Rhombus}
  C --> D
  ```
  
  </TabItem>
  <TabItem value="marked-mermaid-output" label="Output">
    <figure>
      <Thumbnail src="/img/reference/controls/text/Mermaid output.png"/>
    </figure>
  </TabItem>
</Tabs>

## Appearance

* Visibility: Toggle the visibility of the control at runtime.
* Letter Spacing: Configures the space between characters.
* Line Height: Sets the height of each line of text.
* Font Options: Customize font size, font-weight, font color and font alignment for the font in the text.

<figure>
  <Thumbnail src="/img/reference/controls/text/appearance.png" />
</figure>

:::note
The properties `Line Height`, `Letter Spacing`, `Font Options` are configurable for plain text type data only.
:::

## Advanced Settings

- External CSS: Add custom styles to the Input text control.
- Trigger Dependents: Automatically invoke linked controls or workflows.
- Caching: Enable caching to store frequently used inputs.

<figure>
  <Thumbnail src="/img/reference/controls/text/advanced.png" />
</figure>
