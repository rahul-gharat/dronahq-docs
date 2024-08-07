---
sidebar_position: 1
title: Get Key Value
---
import Thumbnail from '@site/src/components/Thumbnail';

The Get Key Value action retrieves a value which is stored locally based on the provided key. If the key exists, it returns the associated value, which can be parsed back to its original data type if necessary. If the key does not exist, it returns an empty string. This function is ideal for accessing previously stored data. 

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/get-key-val/getkeyval-1.png" alt="Get key value 1" />
<figcaption align='center'><i>Get Key Value</i></figcaption>
</figure>

Here are the key components of the `Get Key Value` action:

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/get-key-val/getkeyval-2.png" alt="Get key value 2" />
</figure>

- Key: Provide the key whose value needs to be retrieved.

By using the `Get Key Value` action, you can retrieve any key value pairs that might stored and managed locally by the application.