---
sidebar_position: 1
title: Video Record
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

# Video Record


The Video Record control allows users to capture videos directly within an application. It offers an intuitive interface with essential actions such as starting, stopping, replaying, and re-recording video clips.

To ensure consistent compatibility across platforms, the recorded video is saved in the `MP4` format, making it widely accessible for playback and upload operations.

<figure>
  <Thumbnail src="/img/reference/controls/video-record/video-record.png" alt="Video Record" />
  <figcaption align="center"><i>Video Record</i></figcaption>
</figure>


---


<figure>
  <Thumbnail src="/img/reference/controls/video-record/content.png" alt="Video Record Content" />
</figure>


## Content

### Add-Ons

| Add-on     | Description |
|------------|-------------|
| Tooltip | Displays contextual hints or information on hover over the video recorder. |
| Description | Adds additional information above the control to provide user guidance. |
| Label | Customize the display text including font size, color, position, and alignment. |
| Video Quality | Allows to configure video quality.  <br /> `Android` : Low & High <br /> `iOS` : Low, Medium & High


## Interaction

### Events

You can trigger specific actions based on user interaction with the Video Record control.

| Trigger | Description |
|---------|-------------|
| `on_recording_start` | Triggers an action when the video recording starts. |
| `on_recording_complete` | Triggers an action once the video has been recorded. |

## Appearance

- Visibility: Toggle the visibility of the control.
- Record Style: Modify the appearance such as button color, background, text, size, and layout.
- Permission Error Style: Customize how the control looks when camera or microphone permissions are denied.

## Advanced Settings

- External CSS: Inject custom styles using CSS for further design flexibility.
- Trigger Dependents: Automatically initiate actions or workflows when this control is used.
- Caching: Enable caching to retain previously recorded videos temporarily.

## Control Output

| Output               | Description                                      |
|----------------------|--------------------------------------------------|
| `{{videorecord}}`    | Returns the recorded video file in `MP4` format. |