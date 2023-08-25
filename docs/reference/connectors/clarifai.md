---
sidebar_position: 1
title: Clarifai
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';


Clarifai Inc. is an artificial intelligence (AI) company that specializes in computer vision and uses machine learning and deep neural networks to identify and analyze images and videos. 

## Prerequisite

1. Create your account on [Clarifai](https://clarifai.com/login?utm_source=clarifai&utm_medium=referral) and create an application.

2. Open the application go to `App Setting` and copy the key of your application. This will be used to configure the connection of the Clarifai connector.

<figure>
  <Thumbnail src="/img/reference/connectors/clarifai/keys.png" alt="AWS Lambda with configuration details." />
</figure>


## Configuring API Connector in DronaHQ

Add a `Account name`. Then add the `API key` for the connector account. Once all details are added, click `Save`. Your connector configuration is now done.


<figure>
  <Thumbnail src="/img/reference/connectors/clarifai/details.png" alt="Clarifai with configuration details." />
  <figcaption align = "center"><i>Clarifai with configuration details.</i></figcaption>
</figure>


After successfully configuring and saving the connector settings, you can easily access your newly connected account by navigating to the `connected accounts` list. You can find this option from the `Connector -> Manage Account` section. This centralized location allows you to conveniently monitor and manage your connected accounts.

## Supported API endpoints

| Action        | Description                                                               |
|---------------|---------------------------------------------------------------------------|
| GetModels     | Retrieve a list of available models for image and video predictions.     |
| PredictImage  | Perform image prediction using a specific model and input image data.    |
| PredictVideo  | Perform video prediction using a specific model and input video data.    |


## Using Clarifai Connector

### Predicting image
You can predict various features and attributes of objects present in an image URL by the means of different existing models of Clarifai used for image prediction.

Simply integrate the server-side action or the data-bind option of the Clarifai connector and select the `PredictImage` endpoint. Provide the required details such as `Model` and `image URL`.

We have selected `Image Recognition (General Image recognition) `as the model and used a cat image URL.

<figure>
  <Thumbnail src="/img/reference/connectors/clarifai/predict.jpeg" alt="Predicting Image" />
  <figcaption align = "center"><i>Predicting Image</i></figcaption>
</figure>

In this way, you can perform various analyses and predictions on image/video URLs using various models.