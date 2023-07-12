---
sidebar_position: 1
title: Markdown Viewer
---

import Image from '@site/src/components/Image'; import VersionedLink from '@site/src/components/VersionedLink'; import
Thumbnail from '@site/src/components/Thumbnail';


The DronaHQ Studio provides a control known as the Markdown Viewer that allows you to compose and display formatted lightweight text using Markdown syntax.

With the Markdown Viewer control, you can effortlessly write markdown syntax and preview the rendered output. The control generates a markdown string as its output, which can be seamlessly incorporated into your application.

<figure>
  <Thumbnail src="/img/reference/controls/markdown-viewer/preview.jpeg" alt="Markdown viewer control" />
  <figcaption align = "center"><i>Markdown Viewer Control</i></figcaption>
</figure>

## Binding Data Option

Markdown Viewer control is a display type control. So, you have to provide it data from various options avaiable in its bind Data option. 

The Bind Data option must be specified as markdown formatted string. For example:

```md
**Sample Markdown**

# h1 Heading

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

## Horizontal Rules

---

---

---

"Smartypants, double quotes" and 'single quotes'

## Emphasis

**This is bold text** **This is bold text** _This is italic text_ _This is italic text_ ~~Strikethrough~~

## Blockquotes

> Blockquotes can also be nested...
>
> > ...by using additional greater-than signs right next to each other...
> >
> > > ...or with spaces between arrows.
```

To know more about writing markdown, you can view the [markdown guide](https://www.markdownguide.org/cheat-sheet/).


## Properties

| Property      | Explanation                                                                                            |
|---------------|--------------------------------------------------------------------------------------------------------|
| Background Color  | Specifies the background color of the element. This property determines the color that appears behind the content.                                                   |
| Font Color        | Sets the color of the text within the element. It defines the color of the text content, allowing you to customize the appearance of the text.    
| Alignment     | Determines the alignment of the element's content within its container.                                 |
| Fit to Screen | When set to "Fit to Screen," the element's content is adjusted to fit the screen dimensions.           |
| Border        | Creates a border around the element. It consists of three properties: size, color, and radius.          |


