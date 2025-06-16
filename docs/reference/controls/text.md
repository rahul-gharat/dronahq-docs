---
sidebar_position: 1
title: Text
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

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

Consider an example where you want to display an introductory paragraph:

```json

"Welcome to our new app! We aim to provide you with an unparalleled user experience."

```

### Markdown

Markdown a lightweight markup language used to format text with plain syntax. It converts easily to HTML for styled content.

#### Markdown Extension supported
 - [Admonition](https://docusaurus.io/docs/markdown-features/admonitions)                                
 - [Extended Tables](https://www.markdownguide.org/extended-syntax/)                          
 - [Footnote](https://www.codecademy.com/resources/docs/markdown/footnotes)                          
 - [Highlight](https://www.markdownguide.org/extended-syntax/)                                                
 - [Mermaid](https://github.blog/developer-skills/github/include-diagrams-markdown-files-mermaid/)                                      

#### Standard Markdown

Standard Markdown is a lightweight markup language used to format plain text. It allows easy conversion to HTML and supports basic formatting features.
```json
# H1  
## H2  
### H3  
#### H4  
##### H5  
###### H6
```
<figcaption align = "center"><i>Syntax</i></figcaption>

<figure>
  <Thumbnail src="/img/reference/controls/text/Standard output.png"  />
  <figcaption align = "center"><i>Output</i></figcaption>
</figure>

#### Marked Admonition

Adds support for styled admonition blocks (e.g., Note, Tip, Warning) in Markdown. These visually highlight important content such as alerts or instructions using a block-style layout.
```json
> [!NOTE]
> This is an **admonition** block using the `marked-admonition.js` plugin.
```
<figcaption align = "center"><i>Syntax</i></figcaption>

<figure>
  <Thumbnail src="/img/reference/controls/text/Admonition output.png"  />
  <figcaption align = "center"><i>Output</i></figcaption>
</figure>

#### Marked Extended Tables

Enhances default Markdown tables by enabling advanced features such as cell merging (rowspan and colspan), nested elements, and improved layout flexibility.
```json
## 📊 Extended Table

| Feature   | Support | Notes           |
|---------: |:--------|:----------------|
| Tables    | Yes     | GFM-style       |
| Footnotes | Yes     | With plugin     |
```
  <figcaption align = "center"><i>Syntax</i></figcaption>


<figure>
  <Thumbnail src="/img/reference/controls/text/Extended Tables output.png"  />
  <figcaption align = "center"><i>Output</i></figcaption>
</figure>

#### Marked Footnote

Enables GitHub-style footnotes in Markdown for referencing additional information. Footnotes appear as superscripted links with definitions listed at the bottom of the content.
```json
This is a sentence with a footnote reference[^1].

[^1]: This is the actual footnote text explaining something in detail.
```
  <figcaption align = "center"><i>Syntax</i></figcaption>


<figure>
  <Thumbnail src="/img/reference/controls/text/Footnote output.png"  />
  <figcaption align = "center"><i>Output</i></figcaption>
</figure>

#### Marked Highlight

Adds syntax highlighting for code blocks in Markdown using libraries like highlight.js or shiki, making code snippets easier to read and visually appealing.
```json
```js
function greet(name) {
  return "Hello, " + name;
}
```

<figure>
  <Thumbnail src="/img/reference/controls/text/Highlight output.png"  />
  <figcaption align = "center"><i>Output</i></figcaption>
</figure>

#### Marked Mermaid

Integrates Mermaid.js support into Markdown, allowing users to embed and render flowcharts, sequence diagrams, and other visualizations using simple text-based syntax.
```json
  <```mermaid
graph LR
A[Square Rect] -- Link text --> B((Circle))
A --> C(Round Rect)
B --> D{Rhombus}
C --> D
```
  <figcaption align = "center"><i>Syntax</i></figcaption>


<figure>
  <Thumbnail src="/img/reference/controls/text/Mermaid output.png"  />
  <figcaption align = "center"><i>Output</i></figcaption>
</figure>

## Appearance

* Visibility: Toggle the visibility of the control at runtime.
* Letter Spacing: Configures the space between characters.
* Line Height: Sets the height of each line of text.
* Font Options: Customize font size, font-weight, font color and font allignment for the font in the text.

<figure>
  <Thumbnail src="/img/reference/controls/text/appearance.png" />
</figure>

:::info PLEASE NOTE
The Properties `Line Height`, `Letter Spacing`, `Font Options` are configurable for plain text type data only.
:::

## Advanced Settings

- External CSS: Add custom styles to the Input text control.
- Trigger Dependents: Automatically invoke linked controls or workflows.
- Caching: Enable caching to store frequently used inputs.

<figure>
  <Thumbnail src="/img/reference/controls/text/advanced.png" />
</figure>


