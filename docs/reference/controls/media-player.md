Certainly! Here's an article template for the Media Player:

```markdown
---
sidebar_position: 1
title: Media Player Control
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Media Player Control is used to play video or audio content within a microapp. It includes standard media player controls such as play/pause, volume adjustment, and fullscreen view.

<figure>
  <Thumbnail src="/img/reference/controls/media-player/preview.png" alt="Media Player Control" />
  <figcaption align="center"><i>Media Player Control</i></figcaption>
</figure>

## Binding Data Options

The Media Player control provides options to configure media files for playback within a microapp. Utilizing binding data, you can define static media content for seamless integration within the player.

### Static Media

Static media binding enables the preloading of specific audio or video content into the Media Player. Here's an example of static data binding for media files:

```json
{
    "videoURL": "https://www.example.com/sample_video.mp4",
    "thumbnail": "https://www.example.com/thumbnail_image.jpg"
}
```



## Properties


| Property     | Description                                                         |
|--------------|---------------------------------------------------------------------|
| Media Type   | Choose between Audio, Video, or Auto for automatic media detection. |


For Video:
- Play on Load: Determines whether the video starts playing automatically on load.

For Audio:
- Loop: Enables looping playback for audio files.

## Control Outputs

The Media Player Control output, represented by the placeholder `{{media-player}}`, handles the playback of the provided media content. This output can be utilized in other controls, data queries, or JavaScript functions using the control's unique name.

| Output         | Description                                                       |
|----------------|-------------------------------------------------------------------|
| media-player   | Manages the playback of the specified video or audio content.      |


