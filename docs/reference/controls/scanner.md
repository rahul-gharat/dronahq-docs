---
sidebar_position: 1
title: Scanner
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

# Scanner


The Scanner control in DronaHQ enables QR, barcode, and text scanning directly via the device camera—across web and mobile platforms. It’s built for cross-device support and works in Preview or web test mode, provided camera permissions are granted.


<figure>
  <Thumbnail src="/img/reference/controls/scanner/scanner.png" alt="" />
</figure>


## Content


<figure>
  <Thumbnail src="/img/reference/controls/scanner/content.png" alt="" />
</figure>

| Setting                     | Description |
|-----------------------------|-------------|
| Scan Text               | Set the text to indicate scan. |
| Rescan Text             | Set the text to re-attempt scan. |
| Ignore duplicate codes   | Prevents duplicate scan entries from being processed. |
| Pause after scan         | Stops further scanning after a successful scan until resumed. |
| Start camera by default  | Automatically starts the camera when the scanning function is initialized. |
| Time between scans (ms)  | Sets a delay (in milliseconds) between consecutive scans. |  

### Add-ons


| Add-on                         | Description                                                                                                                                                                   |
|--------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Tooltip                    | Allows you to display additional information or helpful hints.                                                             |
| Description                | Adds descriptive text beneath to provide better context for users.                                                                                      |
| Label                      | Enables the addition of labeling of the control.                                                                         |


## Interaction

<figure>
  <Thumbnail src="/img/reference/controls/scanner/inter.png" alt="" />
</figure>


| Option            | Details                                                                                 |
|-----------------------|---------------------------------------------------------------------------------------------|
| Validation        | Add validation rules like `required` or more to the control.                                                       |
| Read Only         | Makes the control non-editable.                                                            |
| Submit Data       | Determines when data is submitted (Options: Always, Never, Not When Hidden).                                        |
| Events            | Lets you define logic or actions (like bindings or workflows) that should trigger based on user interaction.            |


### Event

| Trigger      | Description                                                                                      |
|--------------|----------------------------------------------------------------------------------------------|
| value_change | Occurs upon modification in the value of the respective control.                              |

---

<figure>
  <Thumbnail src="/img/reference/controls/scanner/adv.png" alt="" />
</figure>


## Appearance



- Visibility – Controls whether the element is shown or hidden in the interface.  
- Theme – Defines the overall appearance, including colors and styles, to match the design system.   
- Layout – Determines the border around the element for visual distinction.  
- Action Button – Adjusts the button’s dimensions, text thickness, and color to match UI preferences.  
- Output Text Style – Defines the appearance of displayed text. Controls the font size, boldness, color, and alignment of the output text.  



## Advanced Settings

- External CSS: Add custom styles to the Scanner control.
- Trigger Dependents: Automatically invoke linked controls or workflows.
- Caching: Enable caching to store frequently used inputs.


## Control Output  

| Output               | Description                                      |
|----------------------|--------------------------------------------------|
| {{scanner}}   |     It provides the output of the control in string type.    |
