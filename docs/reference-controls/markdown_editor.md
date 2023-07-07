---
sidebar_position: 1
title: Markdown Editor
---

import Image from '@site/src/components/Image'; 

import Thumbnail from '@site/src/components/Thumbnail';

The DronaHQ Studio offers a control called `Markdown Editor`, which enables the composition of formatted lightweight text. Markdown is a straightforward syntax used to format text as headers, lists, boldface, and more.

With the Markdown Editor, you can easily write markdown syntax and preview the output if desired. The control generates a markdown string as its output, allowing you to incorporate formatted text into your application.

<!-- <figure>
  <Image src="img/reference/controls/markdown-editor/control.png" alt="Markdown Editor control" />
  <figcaption align = "center"><i>Markdown Editor Control</i></figcaption>
</figure> -->

## UI Properties

<!-- <figure>
  <Thumbnail src="img/reference/controls/markdown-editor/ui-properties.png" alt="UI propertiesl" />
</figure> -->

### Info

- Type: The Type field is automatically generated based on the type of control utilized. In this case, it is of the
  `dhq_markdown_editor` type.

- Unique Name: A Unique Name is assigned to each control in your DronaHQ App, allowing for unique identification. The
  system generates a Unique Name based on the Label assigned to the control.

- Label: The text that is displayed helps the user to understand the type of control it represents.

- Hide Label: This option enables the hiding of the control's label from view.

- Tooltip: You can add a Tooltip text that provides users with hints or additional information for input. The Tooltip
  icon becomes visible when the "Show tooltip icon" toggle property is enabled.

- Description: The description allows you to provide additional information or instructions for the control. The
  Description is visible when the "Show Description" toggle property is enabled.

- External CSS: This property enables the application of custom CSS to the controls. You can customize the appearance of
  the control by selecting the appropriate class or ID. Further information can be found here. **HERE#**

- Generic:

  - Caching: When the caching option is selected and a LOOKUP formula is applied to this control, the state returned by
    the LOOKUP is cached. This allows the user to view the field's state even when accessing the microapp offline. This
    option is useful when offline accessibility is required and real-time data from the sheets is not critical.

  - Hidden: The hidden option allows you to hide the field from the user. This can be helpful when performing
    computations that should not be visible to the user or when displaying certain fields based on specific conditions.

  - Trigger dependents: Disabling Trigger Dependents reduces or optimizes the unnecessary evaluation of dependent
    control formulas. By default, Trigger dependents is enabled. However, in complex apps, disabling it can limit the
    evaluation in the dependent control, resulting in quicker response times. For more details, refer to this article.
    **HERE#**

- Grid Configuration:

  - Hide on desktop: This option hides the selected control in the desktop view.

  - Hide on Mobile: This option hides the selected control in the mobile view.

  - Dynamic Height: This option dynamically adjusts the height of the text control based on the content provided.

  - Maintain space when hidden: This option preserves the specified space between controls when a particular control is
    hidden. When a control is hidden, the space it occupied is maintained for the subsequent control.

:::note 

The properties of Dynamic height, Hide on Mobile, Hide on Desktop, and Maintain space when hidden are applicable
in the Freeflow Editor only. 

:::

### Properties

<!-- <figure>
  <Image src="img/reference/controls/markdown-editor/properties.png" alt="properties" />
</figure> -->

One can provide the theme to this control and make it fit to screen.

## How to use Markdown Editor

Select `Markdown Editor` from `Controls`.

<!-- <figure>
    <Thumbnail src="/img/reference/controls/typeahead/control-list.jpeg" alt="properties" width="100%"/>
    <figcaption align = "center"><i>Select Markdown Editor from the list of controls.</i></figcaption>
</figure> -->

## Bind data to Markdown Editor

There are different ways in which you can bind data to the Typeahead control.

<!-- <figure>
    <Image src="/img/reference/controls/typeahead/bind-data.jpeg" alt="properties" width="100%"/>
</figure> -->

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

<!-- <figure>
  <Image src="img/reference/controls/typeahead/control-event.png" alt="typeahead control" />
</figure> -->

**value_change :**

The `value_change` event occurs when there is a modification in the Markdown Editor control. This event triggers subsequent actions, following the same action flow as other controls such as action buttons and list controls. You can utilize both on-screen and server-side actions to respond to this event.

To control the frequency or speed of the change event, you can utilize the `debounce` property associated with the control. Adjusting the debounce property allows you to manage the delay between consecutive value changes, ensuring optimal performance and responsiveness.

## Markdown Editor - Control features

To view the full feature of the control, we have to view it in preview mode. There are list of properties and tools available in the control itself.

<!-- <figure>
  <Thumbnail src="img/reference/controls/typeahead/control-feature1.png" alt="typeahead control" />
</figure> -->

- Bold (B)/ Italic (I) - These help in to provide a bold and italic attribute respectively.

- Heading (H) - This on-click will give the whole line a heading attribute. It starts with heading 1, then heading 2, and goes on, on repeated clicks on the same line.

- Quote (“) - This on-click will make the sentence as quoted.

- General List/Control List – This click makes each line in bullet and numbered list format respectively.

- Link – This on click, enables you to add a link to a word(s).

- Insert Image – This on-click enables you to insert an image by providing the image URL.

<!-- <figure>
  <Thumbnail src="img/reference/controls/typeahead/control-feature2.png" alt="typeahead control" />
</figure> -->

`Toggle Preview` – This click enables you to toggle between the markdown editor mode and the preview screen mode with formatted text.

<!-- <figure>
  <Thumbnail src="img/reference/controls/typeahead/control-feature3.png" alt="typeahead control" />
</figure> -->

`Toggle Side by Side` – This on click will split the control screen and one section will be the markdown editor and the other part would be a preview window of the formatted texts.

<!-- <figure>
  <Thumbnail src="img/reference/controls/typeahead/control-feature4.png" alt="typeahead control" />
</figure> -->

`Fullscreen` – This on click will make the control full screen.

`Markdown Guide` – To know more about markdown formats, you can click here and redirect to markdown guide.