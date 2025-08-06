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
| Audio Quality | Allows to configure audio sample rate, number of channels and bit rate.  <br /><br />  `Android` : <br />  Sample Rate : 44.1 kHz (CD quality), or 16 kHz (low quality) <br /> Bit Rate : 96 kbps (high), 64 kbps  (medium), 32 kbps (low) <br /> Channels : 1 (Mono) for smaller size, 2 (Stereo) for better quality <br /><br />  `iOS` : <br /> 1. Sample Rate : 8 kHz, 16 kHz, 24 kHz, 44.1 kHz, 48 kHz <br /> 2. No of Channel : 1 (mono), 2 (stereo) <br /> 3. Bit Rate : <br /> Based on sample rate & no. of channel, bit rate range varies. Please refer the below table for supported bit rate range. |


## Bit Rate Supported Range

| Sample Rate       | Channels       | Bit Rate Range    | Typical Use Case               |
|-------------------|:--------------:|:-----------------:|:------------------------------:|
| 8 kHz             | 1 (Mono)       | 8 to 24 kbps      | Telephone-quality audio        |
| 8 kHz             | 2 (Stereo)     | 16 to 48 kbps     | Basic stereo voice             |
| 16 kHz            | 1 (Mono)       | 16 to 48 kbps     | VoIP, voice recordings         |
| 16 kHz            | 2 (Stereo)     | 24 to 64 kbps     | HD voice calls                 |
| 24 kHz            | 1 (Mono)       | 16 to 64 kbps     | High-quality voice             |
| 24 kHz            | 2 (Stereo)     | 36 to 128 kbps    | FM radio-quality audio         |
| 44.1 / 48 kHz     | 1 (Mono)       | 32 to 256 kbps    | Professional mono recording    |
| 44.1 / 48 kHz     | 2 (Stereo)     | 64 to 320 kbps    | Music streaming quality       |

:::note

For example: Suppose we choose `Sample Rate` as 8 kHz and `No. of Channel` as 1 then the supported `Bit Rate` range is from `8 kbps to 24 kbps`. Bit Rate above or below the mentioned range does not work.

:::

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


