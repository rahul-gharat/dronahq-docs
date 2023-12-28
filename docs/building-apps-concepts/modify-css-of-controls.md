---
sidebar_position: 1
title: Modify CSS of controls 
---
import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';
import VideoEmbed from "@site/src/components/VideoEmbed";


Microapp controls' appearance and behavior customization is a crucial aspect of creating engaging user interfaces. The External CSS property within the microapp studio allows for extensive customization by enabling the application of tailored CSS directly onto individual controls.

To understand how the External CSS property enhances control customization, watch this insightful tutorial:

<figure>
  <VideoEmbed host='youtube' videoId='FR4ABsWm-sw' />
</figure>


## Exploring External CSS Property

The External CSS property resides conveniently under the Info section for each control. It empowers developers to apply precise CSS styling, offering unparalleled customization possibilities.
We get a toggle button of `Apply` under the `External CSS` property section, which when toggled on, gives us a section of edit with a code editor.


<figure>
  <Thumbnail src="/img/building-apps-concepts/external-css/css-code.jpeg" alt="SEternal CSS code" />
  <figcaption align='center'><i>CSS Code writing</i></figcaption>
</figure>


The process involves a few straightforward steps:

#### 1. Activating the Editor

Upon accessing the External CSS property, toggle the `Apply` button to access the code editor.

#### 2. Unveiling the Code Editor

The code editor interface provides a space to craft and refine CSS styles for the selected control. It supports a wide array of styling attributes and properties.

#### 3. Debugging Made Simple

The editor not only facilitates design but also detects syntax errors. Any mistakes in the code will prompt error messages, aiding in a seamless coding experience.

<figure>
  <Thumbnail src="/img/building-apps-concepts/external-css/eroor.png" alt="Erorr code" />
  <figcaption align='center'><i>Understand the error from editor</i></figcaption>
</figure>

## Writing External CSS

Writing external CSS for controls involves obtaining the class or ID of the targeted element via inspection. You can then provide corresponding CSS attributes within the code editor.

<figure>
  <Thumbnail src="/img/building-apps-concepts/external-css/inspect.png" alt="inspect" />
</figure>

Once CSS styling is set, clicking `Save` showcases immediate changes within the builder view.



### Visualizing the Transformation

The impact of External CSS is evident in before-and-after snapshots:

`Control Preview Without External CSS`

<figure>
  <Thumbnail src="/img/building-apps-concepts/external-css/before.png" alt="Control before applied external CSS" />
  <figcaption align='center'><i>Control before applied external CSS</i></figcaption>
</figure>

`Control Preview With External CSS`

<figure>
  <Thumbnail src="/img/building-apps-concepts/external-css/after.png" alt="Control after applied external CSS" />
  <figcaption align='center'><i>Control after applied external CSS</i></figcaption>
</figure>

The magic of External CSS lies in nuanced control transformations, enhancing both visual aesthetics and functionality.


