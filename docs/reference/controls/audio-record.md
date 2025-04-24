---
sidebar_position: 1
title: Audio Record
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

# Audio Record

The Audio Record control allows users to record audio directly within an application. It provides an intuitive interface with essential functionalities such as starting, pausing, canceling, and replaying recordings. 

To ensure optimal compatibility, the control supports different encoding formats based on the platform. On mobile devices, recordings are stored in `M4A` format, while on web applications, recordings are saved in `WAV` format.

<figure>
  <Thumbnail src="/img/reference/controls/audio-record/audio-record.png" alt="Audio Record" />
  <figcaption align="center"><i>Audio Record</i></figcaption>
</figure>


## Content

<figure>
  <Thumbnail src="/img/reference/controls/audio-record/content.png" alt="Audio Record" />
</figure>

### Add-Ons

| Add-on     | Description |
|------------|-------------|
| Tooltip | Displays additional information or hints when users hover over the recorder component. |
| Description | Adds descriptive text above the component for better user context. |
| Label | Allows customization of text labels, including size, color, alignment, and more. |

---

<figure>
  <Thumbnail src="/img/reference/controls/audio-record/all.png" alt="Audio Record" />
</figure>

## Interaction


### Events

We can trigger actions using the Audio Record control's trigger events during recording actions.

| Trigger | Description |
|---------|-------------|
| `on_recording_start` | It triggers action when the recording starts. |
| `on_recording_complete` | It triggers action when the recording is completed. |



## Appearance

- Visibility: Toggle control visibility.

- Record Style: Customize the text, background, size, color, screen background, and alignment of the control.

- Permission Error Style: Modify how the control appears when a recording permission error occurs. 

## Advanced Settings

- External CSS: Add custom styles to the Audio Record control.
- Trigger Dependents: Automatically invoke linked controls or workflows.
- Caching: Enable caching to store frequently used inputs.


## Control Output



| Output               | Description                                      |
|----------------------|--------------------------------------------------|
| {{audiorecord}}   |        Captures the recorded audio file.                           |

:::tip
To utilize the output of the `Audio Record` control, you can upload the file using AWS or DronaHQ Services. This will generate a link to the recorded audio, which can be used in subsequent actions.
:::


