---
sidebar_position: 1
title: Speech Recognition
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Speech Recognition Control enables applications to capture user input via voice and convert it to text. This control is ideal for voice-based commands and inputs, improving accessibility and user experience in mobile apps.

<figure>
  <Thumbnail src="/img/reference/controls/speech-recognition/speech-recognition.png" alt="Speech Recognition" />
  <figcaption align="center"><i>Speech Recognition</i></figcaption>
</figure>

## Properties

The following properties allow customization and control of the SpeechRecognition component:

| Property            | Description                                                                                   |
|---------------------|-----------------------------------------------------------------------------------------------|
| Language        | The language in which the SpeechRecognition processes input (e.g., English).                 |
| Matches         | The maximum number of matches the SpeechRecognition will return (default: 5).                |
| Prompt          | The text displayed in Android devices as a popup prompt for voice input.                     |
| Start Speech Style | Customization options for the style of the "Start Listening" UI.                         |
| Stop Speech Style | Customization options for the style of the "Stop Listening" UI.                          |
| Permission Error Style | Customization for the error message displayed when microphone permissions are denied. |
| Permission Text | The error message shown to users if permissions are denied (e.g., "Permission denied").      |

## Control Outputs

The outputs from the SpeechRecognition Control, represented by the placeholder `{{speechrecognition}}`, can be referenced in other controls, data queries, or JavaScript functions using the control's unique name.

| Output            | Description                                                                                   |
|-------------------|-----------------------------------------------------------------------------------------------|
| speechrecognition | Contains the recognized speech data converted to text.                                      |
