---
sidebar_position: 1
title: Set Theme
---

import Thumbnail from '@site/src/components/Thumbnail';

`Set Themes` action is a powerful action that allows users to change between available themes in the application and also persists the user's preferred theme choice. It is available under the `Data and Keywords block` of the action flow as shown below. 

<figure>
  <Thumbnail src="/img/reference/actionflow-blocks/set-theme/set-theme-action-icon.png" alt="Set Language" />
</figure>

## Configuring Set Theme action block

Configuring a theme is a straightforward task.

* Choose any desired event on which you want to change the theme
* Add the set `theme block`
* Configure the theme name you want to change to, you can also `use keywords` to provide value.

<figure>
  <Thumbnail src="/img/reference/actionflow-blocks/set-theme/configuring-theme.png" alt="Set Language" />
</figure>

## Tips and Tricks

Two studio keywords are associated with the themes
* AVAILABLETHEMES: 
  * All the themes configured in the app are added to this list of available themes keyword.
  * This can be used as data source for any control which will allow user to choose theme and then use it to provide value in the set theme action.
  
* STUDIOTHEMEMODE: 
  * The current active theme name is stored in this keyword.
  * Useful if you want to display an active theme anywhere in the app or provide a default selected value for your controls displaying the list of available themes.

