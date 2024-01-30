---
sidebar_position: 1
title: Configuring Themes
---

# Introduction

DronaHQ Studio allows users to customize the appearance and style of their applications through theme configuration. Themes provide a way to control the visual aspects of the user interface, such as colors, fonts, scale and other design elements. This documentation will guide you through the process of configuring themes in DronaHQ Studio.

## Getting Started


Configuring themes in the studio is a straightforward process. Utilizing our theme creator interface, users can generate an unlimited number of themes. The platform comes equipped with two predefined theme configurations: one for default light and another for default dark. Users have the flexibility to designate any custom themes they create as the default for either light or dark mode. Additionally, they can select a single theme to serve as the default for both dark and light modes. Themes marked as defaults will automatically be applied to any newly created applications.

### Creating Themes
** Below is a walkthrough of creating themes: **

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

### Key Features
* **App Scaling**: By changing the `Base Font Size` user can visually scale the application. lower the value more concise the application will look and vice versa.
* **Color Config**: We have a list of all possible colors used in the studio and are provided as configuration for you to change.
* **Font Property**: A list of font properties is available for you to configure so that you have control over every font in the Studio.


## Applying Themes

The themes generated in the studio are applicable within the application through the adjustment of the application's theme settings. Each application is equipped with its own theme configuration, providing users with the capability to manage the visual presentation of individual applications.

** Below is a walkthrough of how to use themes: **
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

The application allows dynamic modification of configured themes during runtime, even after the application has been published. This functionality is achieved through the utilization of the `set theme` action within the action flow. Key elements such as KEYWORDS `AVAILABLETHEMES` and `STUDIOTHEMEMODE` play a crucial role in this process. STUDIOTHEMEMODE provides information about the presently active theme, while AVAILABLETHEMES furnishes a comprehensive list of all available themes within the studio. This information can be leveraged to develop a user interface for theme selection. The `set theme` action facilitates the seamless alteration of themes during runtime, enhancing the overall flexibility and adaptability of the application. Once the theme is selected it persists for the application. To understand in detail how it works you can read the [set theme article](/reference/actionflow-blocks/set-theme/)

