---
sidebar_position: 1
title: Signature
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Signature control is a powerful tool designed to capture users' signatures, storing them as images within the Sheets. It's particularly useful for scenarios requiring user attestation or verification within applications.

<figure>
  <Thumbnail src="/img/reference/controls/signature/preview.jpeg" alt="Signature Control" />
  <figcaption align="center"><i>Signature Control</i></figcaption>
</figure>

## Usage and Purpose

The Signature control serves the purpose of enabling users to provide their signatures as images, recording anything written or drawn on the Signature pad. This can be invaluable in applications that require user attestation for entered data.


## Properties


| Property      | Description                                                       |
|---------------|-------------------------------------------------------------------|
| Theme         | Allows the selection of the color for the Container box. You can either input a custom hex code or choose from available themes in the builder. |
| Button Text   | Adds text to the button that enables users to add their signatures.|




## Control Outputs

The Signature control records the captured signatures as images and stores them in the Sheets. The output can be referenced using the placeholder `{{signature}}`.

| Output         | Description                                                              |
|----------------|--------------------------------------------------------------------------|
| signature      | Represents the captured signature image stored from the Signature control.|

## Events

| Trigger      | Description                                                                               |
|--------------|-------------------------------------------------------------------------------------------|
| value_change | Occurs when there is a change in the value of the respective control.                     |

