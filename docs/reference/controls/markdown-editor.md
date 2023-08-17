---
sidebar_position: 1
title: Markdown Editor
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The DronaHQ offers a control called Markdown Editor, which enables the composition of formatted lightweight
text. Markdown is a straightforward syntax used to format text as headers, lists, boldface, and more.

With the Markdown Editor, you can easily write markdown syntax and preview the output if desired. The control generates
a markdown string as its output, allowing you to incorporate formatted text into your application.

<figure>
  <Thumbnail src="/img/reference/controls/markdown-editor/preview.jpeg" alt="Markdown Editor control" />
  <figcaption align = "center"><i>Markdown Editor Control</i></figcaption>
</figure>


## Binding Data Options

Markdown Editor control accepts markdown formatted string.
There are different ways in which you can bind data to the Markdown Editor control.

### Static Data Options

To display static data alredy in a Markdown Editor control, you can use the Bind Data option.

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

| Property            | Description                                                                |
|-----------------------|-----------------------------------------------------------------------------|
| Theme                 | Allows you to select the color theme for the screen.                         |
| Fit to Screen         | Enables the screen to automatically adjust its content to fit the screen size. |


## Events


| Trigger                   | Description                                                                             |
|--------------------------|-----------------------------------------------------------------------------------------|
| value_change                | Occurs when there is a modification in the respective control's value. To control the frequency or speed of the change event, you can utilize the `debounce` property associated with the control. |


