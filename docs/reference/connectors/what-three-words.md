---
sidebar_position: 1
title: What 3 Words
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';


You can integrate What3Words with DronaHQ. With this feature you will be able to use the powerful digital geocoding system of What3Words. What3words doesn’t simply utilize addresses however whole areas that are set apart in three-by-three meters squares and allocate three remarkable words to it.

## Prerequisite 

1. What 3 Words API Key: Obtain an API key from What 3 Words by signing up for an account and creating a new API key. This key is required to authenticate your requests when using the What 3 Words Connector.

2. Environment Setup: Ensure you have a development environment capable of making HTTP requests to external APIs. This could involve using programming languages like Python, JavaScript, or any language that supports HTTP requests.

## Configuring API Connector in DronaHQ

Add a `Account name`. Then add the `API key` for the connector account. Once all details are added, click `Save`. Your connector configuration is now done.

<figure>
  <Thumbnail src="/img/reference/connectors/what3word/details.png" alt="What 3 Words with configuration details." />
  <figcaption align = "center"><i>What 3 Words with configuration details.</i></figcaption>
</figure>

You can get your API key from [here](https://auth.what3words.com/?continue=https%3A%2F%2Faccounts.what3words.com%2Fcreate-api-key%3Freferrer%3D%2Fpublic-api).


After successfully configuring and saving the connector settings, you can easily access your newly connected account by navigating to the `connected accounts` list. You can find this option from the `Connector -> Manage Account` section. This centralized location allows you to conveniently monitor and manage your connected accounts.


## Supported API endpoints

| Action       | Description                                            |
|--------------|--------------------------------------------------------|
| GetLocation  | Retrieve the geographical location for given words.   |
| Get3Words    | Obtain a three-word address for a given geographical location. |

## Using What3Words connector

### Get location from three words

We will use map control and set its data from the What3Words connector and use the `GetLocation` endpoint. This will convert 3-word addresses to coordinates and return you a location for your three words.

1. Put `map` control and `input text` control in your app.

2. We will add actionflow in input control’s `value_change` event In that, we will call the endpoint of What3Words, reconstruct the required data from the endpoint, and set the values for the Map control.

3. Add the server-side action of What3Words and bind its 3 Words section to the input text control’s keyword.

<figure>
  <Thumbnail src="/img/reference/connectors/what3word/getlocation.png" alt="keywords" />
</figure>

4. Click Continue and in the next step add variables to the required responses to use it later. Then click Finish.

5. In the next step, we will add a client-side action of JS Code which will help to reconstruct the output from the What3Words endpoint into the expected format of the map control.

<figure>
  <Thumbnail src="/img/reference/connectors/what3word/getlocation.png" alt="keywords" />
</figure>

6. Use JavaScript on the output of the API call and restruct it into an array format with two attributes of location and name which has data of latitude and longitude and the name of the place respectively.

7. Click `Continue` and `save` the output in a variable then click Finish.

8. Set the output as data to the map control by using the `Set Control Value` action.


9. Save the app and click preview and enter three words.

:::info NOTE
Every word should have `.`  between them.
:::


### Get three words from the location

We will use text input control and bind its data to the What3Words connector and use the `Get3Words` Location endpoint. This will convert coordinates to 3-word addresses and return you three words for your location. We will also be needing GPS control to get the latitude and longitude of a location.

1. Put `GPS` control and `input text` in your app.

2. Go to the `Bind Data Option -> Quick Select -> Connector`.

3. Click the `Get3Words` endpoint and then select your environment.

4. In the next step fill the section of Co-ordinates with latitude and longitude which we will receive from the GPS control using its keyword. You can also bind it with keywords of some other input control.

:::info NOTE
Pair of co-ordinates should have “,” between them.
:::

5. Do a Refresh Response. Then bind the connector keys.

7. Click Test & Finish.

<figure>
  <Thumbnail src="/img/reference/connectors/what3word/getword.png" alt="keywords" />
</figure>

<figure>
  <Thumbnail src="/img/reference/connectors/what3word/word.png" alt="keywords" />
</figure>

