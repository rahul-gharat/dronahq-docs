---
sidebar_position: 4
title: Customizing colors, fonts and loader
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

# Customizing colors, fonts and loader

There are times that the apps built on DronaHQ need to follow a style guide with your own corporate guidelines. You need to navigate to `Settings -> Styling` section in the app builder.
DronaHQ lets your customize the UI of your apps using the following ways:
- Fonts
- Color palette
- Loaders

## Fonts

DronaHQ by default uses Montserrat font in all the apps built on DronaHQ. But you can customize the font of your choice and there are the following options to do it.

- **Upload custom font files** - You only need to upload and install the font files which could be of type TrueType (.ttf), Web Open Font Format (.woff), Web Open Font Format 2 (.woff2) , OpenType format (.otf).
- **Use a google font** - Select from the list of Google fonts in the dropdown and import.

:::caution All styles

Whenever you choose a font, make sure that all the major styles like italic, bold and weights are available for the apps to work well.

:::

<figure>
  <Thumbnail src="/img/building-apps-concepts/fonts-colors-loaders/custom-fonts.png" alt="Custom fonts" width='100%'/>
  <figcaption align = "center"><i>Custom fonts</i></figcaption>
</figure>

<figure>
  <Thumbnail src="/img/building-apps-concepts/fonts-colors-loaders/google-fonts.png" alt="Google fonts" width='100%'/>
  <figcaption align = "center"><i>Google fonts</i></figcaption>
</figure>

## Color Palette

At different places in the app builder of DronaHQ in the properties section of controls and screens, there are options to select the colors or themes. You can customize the palette available or change the default color theme across the app by customizing the palette. Imagine that you have used the color `calm` from your palette across your app, you can change it once in the settings to reflect it across the app.

<figure>
  <Thumbnail src="/img/building-apps-concepts/fonts-colors-loaders/color-palette.png" alt="Color Palette" width='100%'/>
  <figcaption align = "center"><i>Color Palette</i></figcaption>
</figure>

## App Loader

Whenever the app opens it shows a default loader of DronaHQ on your apps. You can customize it by adding your own loader in .svg format or change it from a list of defaults that DronaHQ provides. 

<figure>
  <Thumbnail src="/img/building-apps-concepts/fonts-colors-loaders/app-loader.png" alt="App loader" width='100%'/>
  <figcaption align = "center"><i>App loader</i></figcaption>
</figure>