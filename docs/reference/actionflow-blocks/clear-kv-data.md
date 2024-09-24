---
sidebar_position: 1
title: Clear KV Data
---
import Thumbnail from '@site/src/components/Thumbnail';

## Introduction to Clear KV Data
The Clear KV Data action deletes a key-value pair stored in KV Store. This is useful when you need to clear specific data, such as when a user logs out or changes a setting. By removing unnecessary data, this function helps manage storage space and maintain data relevance. In case of web, this action utilizes localstorage to access and clear the data.


<figure>
<Thumbnail src="/img/reference/actionflow-blocks/remove-key-val/removekeyval-1.png" alt="Clear KV Data 1" />
</figure>

## Parameters for Clear KV Data

Here are the key components of the `Clear KV Data` action:

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `key`      | string  | any string value                                   |
| `Accessible across multiple microapps` |  checkbox |  checked/unchecked        |

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/remove-key-val/removekeyval-2.png" alt="Clear KV Data 2" />
</figure>


By using the `Clear KV Data` action, you can effectively managed the removal of unwanted data stored using the `Set KV Data` action.