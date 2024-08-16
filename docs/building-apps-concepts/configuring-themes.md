---
sidebar_position: 1
title: Configuring Themes
---

# Introduction

DronaHQ allows users to customize the appearance and style of their applications through theme configuration. Themes provide a way to control the visual aspects of the user interface, such as colors, fonts, scale and other design elements. This documentation will guide you through the process of configuring themes in DronaHQ.

## Getting Started


Configuring themes in the DronaHQ is a straightforward process. Utilizing our theme creator interface, users can generate an unlimited number of themes. The platform comes equipped with two predefined theme configurations: one for default DronaHQ light Small and another for default DronaHQ dark Small. Users have the flexibility to designate any custom themes they create as the default for either light or dark mode. Additionally, they can select a single theme to serve as the default for both dark and light modes. Themes marked as defaults will automatically be applied to any newly created applications.

### Creating Themes
 Below is a walk-through of creating themes: 

<div style={{ position: 'relative', paddingBottom: 'calc(46.33333333333333% + 41px)', height: 0 }}> 
    <iframe 
        src="https://demo.arcade.software/SjFZuYRtHBe3oAbLLyZR?embed" 
        title="Theme Creation" 
        frameborder="0" 
        loading="lazy" 
        webkitallowfullscreen 
        mozallowfullscreen 
        allowfullscreen 
        style= {{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', colorScheme: 'light' }} >
    </iframe>
</div>
# Theme Configurations: Detailed Guide

## Theme Configurations

:::info NOTE
All changes can be viewed as a preview on the left-hand side in real-time, except for Font and Loader settings for now.
:::

### Scale Value

The scale value automatically adjusts the size of controls, fonts, spacing, padding, and other UI elements. Adjusting the scale can make the interface more compact or larger, depending on the user's needs.

### Colors

Colors play a crucial role in defining the visual identity of the theme. The following table lists the configurable color properties.

#### Backgrounds

| Property             | Description                                                       |
|----------------------|-------------------------------------------------------------------|
| Screen Background    | Sets the background color of the entire screen.                   |
| Container Background | Defines the background color of containers.                       |
| Control Background   | Sets the background color for input controls and inputs.          |
| Header Background    | Defines the background color of screen headers.                   |

#### Controls

| Property         | Description                                                           |
|------------------|-----------------------------------------------------------------------|
| Brand            | Main theme color for controls, typically the brand color.             |
| Selected Bg      | Background color for selected controls.                               |
| Hover Bg         | Background color for controls on hover (e.g., table grid).            |
| Border           | Color for borders within the application.                             |
| Scrollbar        | Color of all scrollbar sliders in the application.                    |
| Control Header Bg| Background color for control headers (e.g., table grid headers).      |

#### Fonts

Font colors are crucial for readability and aesthetic consistency. The following table details the configurable font properties.

| Property              | Description                                                                  |
|-----------------------|------------------------------------------------------------------------------|
| Screen Header Font    | Font color for screen headers, ensuring contrast with the header background. |
| Primary Font          | Default font color, contrasting with background colors.                      |
| Secondary Font        | Font color for subtext, contrasting with background colors.                  |
| Font on Brand Bg      | Font color for text on brand-colored backgrounds.                            |

#### Messages and Tags


| Property                | Description                                                      |
|-------------------------|------------------------------------------------------------------|
| Success Bg              | Background color for success notifications and controls.         |
| Success Action Font     | Font color for success notifications and controls.               |
| Error Bg                | Background color for error notifications and controls.           |
| Error Action Font       | Font color for error notifications and controls.                 |
| Warning Bg              | Background color for warning notifications and controls.         |
| Warning Action Font     | Font color for warning notifications and controls.               |
| Information Bg          | Background color for informational notifications and controls.   |
| Information Action Font | Font color for informational notifications and controls.         |
| Note Bg                 | Background color for note notifications and controls.            |
| Note Action Font        | Font color for note notifications and controls.                  |
| Neutral Tag Bg          | Background color for neutral tag notifications and controls.     |
| Neutral Tag Action Font | Font color for neutral tag notifications and controls.           |

#### Palette

Additional colors can be configured and used as themes within the application.


### Typography

Typography settings allow for customization of text sizes and spacing within the application.

#### Control Text

| Property          | Description                                                              |
|-------------------|--------------------------------------------------------------------------|
| Control Title     | Font size for control labels, recommended in rem for scalability.        |
| Control Description| Font size for control descriptions, recommended in rem for scalability. |

#### Content Text

| Property            | Description                                                              |
|---------------------|--------------------------------------------------------------------------|
| Large               | Font size for large text, recommended in rem for scalability.            |
| Medium              | Font size for medium text, recommended in rem for scalability.           |
| Normal              | Font size for normal text, recommended in rem for scalability.           |
| Small Font          | Font size for small text, recommended in rem for scalability.            |
| Extra Small Font    | Font size for extra small text, recommended in rem for scalability.      |
| Letter Spacing      | Spacing between letters.                                                 |
| Line Height         | Height of lines in text.                                                 |

### General

General settings include properties that affect the overall appearance and behavior of the application. This section is divided into three main categories: Size, Sizing Loader, and Styling Fonts.

#### Size

| Property      | Description                                                                     |
|---------------|---------------------------------------------------------------------------------|
| Border        | Size of the border around the application.                                       |
| Border Radius | Radius of borders, unless explicitly specified otherwise.                        |
| Box Shadow    | Default box shadow for application controls.                                     |

#### Sizing Loader

The Sizing Loader allows users to select and customize the loader animation used in the application.

| Property          | Description                                                  |
|-------------------|--------------------------------------------------------------|
| Selected Loader   | Displays the currently selected loader.                      |
| Available Loaders | List of available loaders to choose from.                    |

#### Styling Fonts

Styling Fonts provides options for selecting and configuring fonts used in the application. This section is divided into two subsections: Google Fonts and Custom Fonts.

1. Google Fonts

   Users can select from available Google Fonts and choose specific font weights.

   | Property       | Description                              |
   |----------------|------------------------------------------|
   | Font-Family    | Default font family for the application. |
   | Add Fonts      | Option to add fonts from Google Fonts.   |
   | Font Variants  | Select font weights (e.g., 500, 600, 700)|

2. Custom Fonts

   Users can upload their own custom fonts and save the configuration.

   | Property       | Description                                                         |
   |----------------|---------------------------------------------------------------------|
   | Upload Fonts   | Option to upload custom font files.                                 |

#### Custom Theme

Custom Theme is a flexible block within the application where users can provide their own theme configurations in JSON format. The custom themes are designed to allow users to easily adjust various CSS variables for styling their applications.

The custom theme should be provided in the following JSON format:
```json
{
  "--css-var-font-size": "16px",
  "--css-var-font-weight": "400",
  "--css-var-font-color": "#333333",
  "--css-var-bg-color": "#ffffff",
  "--application-tag-font-color": "#666666",
  "--application-tag-bg-color": "#f0f0f0"
}
```

**Key:** Represents the name of the CSS variable.  
**Value:** Represents the corresponding value for the CSS theme variable.

##### Configurable Variables

Each configurable variable will be visible in the properties section based on the suffix of the variable name:

- **-font-size:** Appears under Font Size.
- **-font-weight:** Appears under Font Weight.
- **-font-color:** Appears under Font Color.
- **-bg-color:** Appears under Background Color.
- **-tag-font-color** and **-tag-bg-color:** These should have the same prefix to act as corresponding pairs (e.g., `--studio-tag-font-color` and `--studio-tag-bg-color`). This ensures that the tag font and background colors are applied consistently.

:::info NOTE
The variable names must start with `--`.
:::

At the end, there is a button to save the custom font configuration after uploading fonts.
## Applying Themes

The themes generated in the DronaHQ are applicable within the application through the adjustment of the application's theme settings. Each application is equipped with its own theme configuration, providing users with the capability to manage the visual presentation of individual applications.

 Below is a walk-through of how to use themes: 
<div style={{ position: 'relative', paddingBottom: 'calc(46.33333333333333% + 41px)', height: 0 }}> 
    <iframe 
        src="https://demo.arcade.software/JAQDxU3RPTsjFcAkq631?embed" 
        title="Builder Themes" 
        frameborder="0" 
        loading="lazy" 
        webkitallowfullscreen 
        mozallowfullscreen 
        allowfullscreen 
        style= {{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', colorScheme: 'light' }} >
    </iframe>
</div>

## Changing themes dynamically

The application allows dynamic modification of configured themes during runtime, even after the application has been published. This functionality is achieved through the utilization of the `set theme` action within the action flow. Key elements such as KEYWORDS `AVAILABLETHEMES` and `STUDIOTHEMEMODE` play a crucial role in this process. STUDIOTHEMEMODE provides information about the presently active theme, while AVAILABLETHEMES furnishes a comprehensive list of all available themes within the DronaHQ. This information can be leveraged to develop a user interface for theme selection. The `set theme` action facilitates the seamless alteration of themes during runtime, enhancing the overall flexibility and adaptability of the application. Once the theme is selected it persists for the application. To understand in detail how it works you can read the [set theme article](/reference/actionflow-blocks/set-theme/)

