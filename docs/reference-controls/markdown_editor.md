---
sidebar_position: 1
title: Markdown Editor
---
import Image from '@site/src/components/Image'; import VersionedLink from '@site/src/components/VersionedLink'; import
Thumbnail from '@site/src/components/Thumbnail';

The DronaHQ Studio offers a control called `Markdown Editor`, which enables the composition of formatted lightweight text. Markdown is a straightforward syntax used to format text as headers, lists, boldface, and more.

With the Markdown Editor, you can easily write markdown syntax and preview the output if desired. The control generates a markdown string as its output, allowing you to incorporate formatted text into your application.

<figure>
  <Image src="/img/reference/controls/markdown-editor/control.png" alt="Markdown Editor control" />
  <figcaption align = "center"><i>Markdown Editor Control</i></figcaption>
</figure>

## Properties


<figure>
  <Image src="/img/reference/controls/markdown-editor/properties.png" alt="properties"  />
</figure>

One can provide the theme to this control and make it fit to screen.

## How to use Markdown Editor

Select `Markdown Editor` from `Controls`.

<figure>
    <Thumbnail src="/img/reference/controls/markdown-editor/control-list.png" alt="properties" />
    <figcaption align = "center"><i>Select Markdown Editor from the list of controls.</i></figcaption>
</figure>

## Bind data to Markdown Editor

There are different ways in which you can bind data to the Markdown Editor control.

<figure>
    <Image src="/img/reference/controls/markdown-editor/bind-data.jpeg" alt="properties"/>
</figure>

The expected data format is Markdown:

```md
**Sample Markdown**
# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading


## Horizontal Rules

___
---
***
  
  "Smartypants, double quotes" and 'single quotes'

## Emphasis
**This is bold text**
__This is bold text__
*This is italic text*
_This is italic text_
~~Strikethrough~~

## Blockquotes
> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.

```

# Add to action on Markdown Editor 

<figure>
  <Image src="/img/reference/controls/markdown-editor/control-event.png" alt="Markdown editor control" />
</figure>

**value_change :**

The `value_change` event occurs when there is a modification in the Markdown Editor control. This event triggers subsequent actions, following the same action flow as other controls such as action buttons and list controls. You can utilize both on-screen and server-side actions to respond to this event.

To control the frequency or speed of the change event, you can utilize the `debounce` property associated with the control. Adjusting the debounce property allows you to manage the delay between consecutive value changes, ensuring optimal performance and responsiveness.

## Markdown Editor - Control features

To view the full feature of the control, we have to view it in preview mode. There are list of properties and tools available in the control itself.

<figure>
  <Thumbnail src="/img/reference/controls/markdown-editor/control-feature1.png" alt="Markdown editor control" />
</figure>

| **Formatting Option **      | **Description**                                                                       |
|-------------------------|-----------------------------------------------------------------------------------|
| Bold (B)/Italic (I) | These help provide a bold and italic attribute, respectively.                     |
| Heading (H)         | This on-click gives the whole line a heading attribute.                            |
| Quote (“)           | This on-click makes the sentence appear as a quote.                                |
| General List        | This click formats each line in bullet list format.                                |
| Control List        | This click formats each line in numbered list format.                              |
| Link                | This on-click enables you to add a link to a word(s).                              |
| Insert Image        | This on-click enables you to insert an image by providing the image URL.           |



<figure>
  <Thumbnail src="/img/reference/controls/markdown-editor/control-feature2.png" alt="markdown-editor control" />
</figure>

- Toggle Preview – This click enables you to toggle between the markdown editor mode and the preview screen mode with formatted text.

<figure>
  <Thumbnail src="/img/reference/controls/markdown-editor/control-feature3.png" alt="markdown-editor control" />
</figure>

- Toggle Side by Side – This on click will split the control screen and one section will be the markdown editor and the other part would be a preview window of the formatted texts.

<figure>
  <Thumbnail src="/img/reference/controls/markdown-editor/control-feature4.png" alt="markdown-editor control" />
</figure>

- Fullscreen – This on click will make the control full screen.

- Markdown Guide – To know more about markdown formats, you can click here and redirect to markdown guide.