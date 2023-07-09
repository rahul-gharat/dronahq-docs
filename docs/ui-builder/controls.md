---
sidebar_position: 3
title: 'Controls'
---

import Image from '@site/src/components/Image'; import VersionedLink from '@site/src/components/VersionedLink'; import
Thumbnail from '@site/src/components/Thumbnail';

# Controls

Controls are the fundamental building blocks of DronaHQ apps. They serve as prebuilt interface elements that allow you to display data and enable user interactions and manipulations. You can explore the <VersionedLink to="/category/controls/">DronaHQ Controls - Reference </VersionedLink> to discover a wide range of available controls and access reference documentation for each control. These controls empower
you to create dynamic and interactive experiences within your DronaHQ apps.

        
## How to use Control


## Configuration Properties

<figure> 
  <Image src="/img/reference/controls/typeahead/properties.png" />
  <figcaption align = "center"><i>Common property configuration for controls.</i></figcaption>
</figure> 



| Attributes    | Description                                                                                                   |
|-------------|---------------------------------------------------------------------------------------------------------------|
| Type        | The Type field is automatically generated based on the type of control utilized.                                      |
| Unique Name | A Unique Name is assigned to each control in your DronaHQ App, allowing for unique identification. The system generates a Unique Name based on the Label assigned to the control.                                                                                                                     |
| Label       | The label is the text displayed above the control, providing users with an understanding of the purpose of the Control.                                                    |
| Hide Label  | This option enables the hiding of the control's label from view.                                                 |
| Tooltip     | You can add a Tooltip text that provides users with hints or additional information for input. The Tooltip icon becomes visible when the "Show tooltip icon" toggle property is enabled.                                                                                                                              |
| Description | The description allows you to provide additional information or instructions for the control. The Description is visible when the "Show Description" toggle property is enabled.                                                                                                                                                                                                                                     |
| External CSS | This property enables the application of custom CSS to the controls. You can customize the appearance of the control by selecting the appropriate class or ID. Further information can be found [here](#). |

### Generic

| Property          | Description                                                                                                                                                    |
|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Caching           | When the caching option is selected and a LOOKUP formula is applied to this control, the state returned by the LOOKUP is cached. This allows offline accessibility.                                                   |
| Hidden            | The hidden option allows you to hide the field from the user. This can be useful for performing computations that should not be visible or displaying fields based on conditions.                           |
| Trigger Dependents | Disabling Trigger Dependents optimizes the evaluation of dependent control formulas, resulting in quicker response times. Refer to [this article](#) for more details. |


### Grid Configuration

| **Property**               | **Description**                                                                                                 |
|------------------------|-------------------------------------------------------------------------------------------------------------|
| Hide on desktop        | This option hides the selected control in the desktop view.                                                 |
| Hide on Mobile         | This option hides the selected control in the mobile view.                                                  |
| Dynamic Height         | This option dynamically adjusts the height of the text control based on the content provided.               |
| Maintain space when hidden | This option preserves the specified space between controls when a particular control is hidden. When a control is hidden, the space it occupied is maintained for the subsequent control. |

:::info 

The properties of Dynamic height, Hide on Mobile, Hide on Desktop, and Maintain space when hidden are applicable
in the Freeflow Editor only. 

:::
## Data configuration in Control


## Control Events







