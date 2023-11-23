---
sidebar_position: 1
title: Profile Group
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Profile Group control is a Display control used to showcase user profiles grouped together.

<figure>
  <Thumbnail src="/img/reference/controls/profile-group/preview.png" alt="Profile Group Preview" />
  <figcaption align="center"><i>Profile Group Preview</i></figcaption>
</figure>

## Binding Data Options

The Profile Group Control utilizes an array of URL strings to represent user profile images.

```json
[  
    "https://dronamobilepublic.s3.amazonaws.com/DRONA5_Team108/content/app/images/public/Rectangle 1_1AqQT.png",  
    "https://dronamobilepublic.s3.amazonaws.com/DRONA5_Team108/content/app/images/public/Rectangle -1_8uTVr.png",  
    "https://dronamobilepublic.s3.amazonaws.com/DRONA5_Team108/content/app/images/public/Rectangle -2_I6L5o.png",  
    "https://dronamobilepublic.s3.amazonaws.com/DRONA5_Team108/content/app/images/public/Rectangle -3_6YXeI.png"
]
```


## Properties

| Property           | Description                                                                               |
|--------------------|-------------------------------------------------------------------------------------------|
| Overlay by         | Specifies the overlay distance between pictures in units like pixels, em, vh, or %.      |
| Alignment          | Sets the alignment of pictures - left, right, or center.                                   |
| Background color   | Sets the color of the last image in a group.                                               |
| Text color         | Sets the text color in the last image in a group.                                          |
| Border             | Adjusts the border size of each user, Sets the border color of the user, Sets the border color of the user image. image.                                            |
| Maximum elements   | Defines the maximum number of visible images in the profile group.                          |
| Image column       | Specifies the initially displayed property in the profile group control - Image or Name.   |
| Fallback column    | Selects the fallback property used when the default selection fails to render.              |



## Events

| Trigger         | Description                               |
|-----------------|-------------------------------------------|
| Image_clicked   | Triggers upon clicking a profile image.    |