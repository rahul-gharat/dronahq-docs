---
sidebar_position: 1
title: reCAPTCHA
---
import Image from '@site/src/components/Image';

The reCAPTCHA control is an advanced mechanism used to safeguard websites from fraudulent activities and spam by bots. It serves as a preventive measure against unauthorized access and malicious automated interactions.

<figure>
  <Thumbnail src="/img/reference/controls/recaptcha/preview.jpeg" alt="reCAPTCHA" />
  <figcaption align = "center"><i>reCAPTCHA</i></figcaption>
</figure>


For instance, integrating a reCAPTCHA control into login or registration forms ensures that the user interacting with your system is a legitimate person rather than a bot attempting to compromise or exploit the platform.

## Properties

The primary property for the reCAPTCHA control is:

| Property | Description |
|----------|-------------|
| Sitekey  | Sitekey represents the unique site-specific key that authorizes the integration of reCAPTCHA within your website or application. It serves as an authentication token to validate and enable reCAPTCHA functionality. |



## Events


| Trigger      | Description                                                                                                         |
|--------------|---------------------------------------------------------------------------------------------------------------------|
| value_change | Activates when there is a modification in the value of the respective control, typically upon user interaction with reCAPTCHA, validating human presence and preventing bot interactions. |

<figure>
  <Thumbnail src="/img/reference/controls/recaptcha/usecase.jpeg" alt="reCaptcha" />
</figure>