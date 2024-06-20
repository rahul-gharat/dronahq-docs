---
sidebar_position: 1
title: Stripe
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Stripe control would be useful in Apps that are typically built for online transactions like E-commerce sites, subscribing to e-learning sites, and any other scenario where online card payments are required.

<figure>
  <Thumbnail src="/img/reference/controls/stripe/stripe.jpeg" alt="stripe" />
  <figcaption align = "center"><i>Stripe</i></figcaption>
</figure>

## Binding Data Options


The Stripe control allows you to bind both static and dynamic data for various fields required during payment transactions. Below are the fields that can be bound:

### Static Data Option

You can statically define values for each field in the Stripe control:

- Amount: Specify the transaction amount statically, e.g., `100`.
- Currency: Define the currency code statically, e.g., `"USD"`.
- Name: Provide the customer's name, e.g., `"John Doe"`.
- Email: Set the customer's email address, e.g., `"john.doe@example.com"`.
- Phone: Enter the customer's phone number, e.g., `"+1234567890"`.
- Description: Describe the purpose of the payment, e.g., `"Product purchase"`.
- Address Line 1: Include the first line of the customer's address, e.g., `"123 Main St"`.
- Address Line 2: Include the second line of the customer's address, if applicable, e.g., `"Apt 4"`.
- City: Specify the city of the customer's address, e.g., `"New York"`.
- State: Specify the state or region of the customer's address, e.g., `"NY"`.
- ZIP Code: Provide the postal code of the customer's address, e.g., `"10001"`.
- Country: Specify the country of the customer's address using the ISO 3166-1 alpha-2 code, e.g., `"US"`.
- Response Token: Placeholder for the transaction response token.




## Properties

| Property       | Description                                                                                       |
|--------------------|-------------------------------------------------------------------------------------------------------|
| Token          | Account identifier or token linked to the Stripe Account, auto-populated with valid credentials.       |
| Button text    | Label displayed on the payment action button (e.g., "Pay", "Pay now").                                 |
| Font Properties| Customize font attributes (size, weight, alignment, color) for text within the control.                |
| Background properties | Configure button background color, type, and font size.                                             |


## Events

| Trigger         | Description                                                                                       |
|-----------------|---------------------------------------------------------------------------------------------------|
| payment_success | Triggered when a payment transaction is successfully processed and acknowledged by the system.   |

### Preview


<figure>
  <Thumbnail src="/img/reference/controls/stripe/preview.png" alt="stripe" />
</figure>