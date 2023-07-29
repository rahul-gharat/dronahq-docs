---
sidebar_position: 1
title: OTP
---

The OTP Control is an Advanced control that facilitates the process of accepting One-Time Passwords (OTPs) in a form. It allows users to enter the OTP, and the control captures and returns the OTP value, which can then be utilized for additional authentication purposes.

<figure>
  <Thumbnail src="/img/reference/controls/otp/preview.png" alt="OTP" />
  <figcaption align = "center"><i>OTP</i></figcaption>
</figure>

## Binding Data Options

The OTP (One-Time Password) control is designed to accept only numeric input. It allows users to enter a unique code sent to their mobile device or email for authentication purposes.

### Static Data Option

Since the OTP control accepts only numeric input, you can bind static data in the form of numeric values. For example:

```
OTP Value: 1234
```

In this example, the OTP control is bound to the static value `1234`. Users would need to enter "1234" as their OTP for authentication.

The OTP control is commonly used in two-factor authentication (2FA) and password recovery processes, where users receive a time-sensitive numeric code that they must enter to verify their identity.


## Properties


| Property          | Description                                                                                            |
|-------------------|--------------------------------------------------------------------------------------------------------|
| Underline color   | Allows you to choose the color for the underline of the digits in the OTP.                            |
| Font Style        | Helps you customize the font style for the OTP digits. You can adjust the text size, weight, alignment, and color according to your preference.                                                    |
| OTP Digit         | Specifies the number of digits to be provided for the OTP. It can be either four or six digits long.  |


## Control Output

The outputs from the OTP control, represented by the placeholder `{{otp}}`, can be referenced in other controls, data queries, or JavaScript functions using the control's unique name.

| Output       | Description                                                                                                  |
|--------------|--------------------------------------------------------------------------------------------------------------|
| otp    | Represents the numeric value available in the OTP control.                        |

## Events

| Trigger      | Description                                                                                                                                                    |
|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| value_change | Triggers when you change the value in the OTP control. Initiates subsequent actions with the same flow as used for action buttons, list controls, etc.  |
| focus_out    | Triggers when focus moves to another control, initiating the action flow.                                                                                     |
| enter_press  | Triggers when the Enter key is pressed after inputting data in the OTP control.                                                                           |
