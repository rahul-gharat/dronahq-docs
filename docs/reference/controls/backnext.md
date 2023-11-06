---
sidebar_position: 1
title: Back Next 
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Back Next control serves as a user-friendly interface to navigate through a sequence of steps or pages in a guided process, commonly used in multi-step forms or guided interfaces.

<figure>
  <Thumbnail src="/img/reference/controls/back-next/preview.jpeg" alt="Back Next Control" />
  <figcaption align="center"><i>Back Next Control</i></figcaption>
</figure>

## Binding Data Options

The Back Next control offers data binding through two primary data options, `Back` and `Next.` These options facilitate the text for back and next.


## Properties


| Property        | Description                                                 |
|-----------------|-------------------------------------------------------------|
| Card Background | Sets the background color for the Back Next control.         |
| Background      | Sets the color for the control's primary background.         |



## Events



| Trigger       | Description                                                                |
|---------------|----------------------------------------------------------------------------|
| card_click    | Occurs when a user interacts with the Back Next control's primary card area. |
| back          | Triggers when a user selects the "Back" button to navigate to the previous step. |
| next          | Triggers when a user selects the "Next" button to navigate to the subsequent step. |

