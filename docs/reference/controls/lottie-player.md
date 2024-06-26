---
sidebar_position: 1
title: Lottie Player
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Lottie Player control is an essential addition for incorporating Lottie animations seamlessly into your app, ensuring high-quality animations across various user devices.

Lottie animations serve as an excellent tool for creating visually engaging and interactive user experiences, enhancing the intuitiveness of apps and websites. These animations effectively communicate features and functionalities, offering an appealing alternative to static elements. For instance, they can be used for actions like Google Assistant prompts, cloud uploading, and more.

<figure>
  <Thumbnail src="/img/reference/controls/lottie-player/preview.jpeg" alt="Lottie Player Control" />
  <figcaption align="center"><i>Lottie Player Control</i></figcaption>
</figure>

## Binding Data Options

The Lottie Player control accepts a string URL format as the binding data option. Provide the URL pointing to the desired animation file.

There are two ways to define the URL of your Lottie animation:

1. Static Value:  Provide the URL directly in the `Bind Data` section. This is suitable if the URL remains constant.
2. Dynamic URL:  Fetch the URL using a Data Query. This approach allows for retrieving the URL from external sources.

Additionally, if the URL resides within another control or variable, you can reference it dynamically using the `{{keyword}}` syntax within the `Bind Data` section. This enables you to leverage existing data sources for flexible animation control.


<figure>
  <Thumbnail src="/img/reference/controls/lottie-player/variable.jpeg" alt="Lottie Player Control" />
</figure>


### Properties

The Lottie Player control provides customization through various properties:

| Property   | Description                                               |
|------------|-----------------------------------------------------------|
| Background | Alters the background color of the Lottie Player           |
| URL        | URL pointing to the Lottie animation file or asset         |
| Speed      | Specifies the speed at which the animation should run      |



