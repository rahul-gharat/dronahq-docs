---
sidebar_position: 1
title: OCRSpace
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

OCR.space is an online OCR (Optical Character Recognition) service that converts images or scanned documents into editable text, making it convenient to extract text from images and use it for various purposes.

## Configuring API Connector in DronaHQ

Add a `Account name`. Then add the `API key` for the connector account. Once all details are added, click `Save`. Your connector configuration is now done.

<figure>
  <Thumbnail src="/img/reference/connectors/ocr/details.png" alt="OCRSpace with configuration details." />
  <figcaption align = "center"><i>OCRSpace with configuration details.</i></figcaption>
</figure>


After successfully configuring and saving the connector settings, you can easily access your newly connected account by navigating to the `connected accounts` list. You can find this option from the `Connector -> Manage Account` section. This centralized location allows you to conveniently monitor and manage your connected accounts.

## Supported API endpoints

| Action       | Description                                               |
|--------------|-----------------------------------------------------------|
| DetectText   | Detects and extracts text content from an image.          |
| DetectTextV2 | Enhanced version of text detection with improved accuracy. |