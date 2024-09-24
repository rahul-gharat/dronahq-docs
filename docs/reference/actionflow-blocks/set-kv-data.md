---
sidebar_position: 1
title: Set KV Data
---
import Thumbnail from '@site/src/components/Thumbnail';

## What are KV Actions ?
KV actions can be used to store data in the form of key value pairs which persist across page reloads and different routes inside the micro apps. The KV actions include `Set KV Data`, `Get KV Data` and `Clear KV Data`. These actions leverage a secure localstorage api called `KV Store` to store the data. You can also configure the action to store key value pairs in a way that makes them globally accessible across different micro-apps.

## Introduction to Set KV Data
The `Set KV Data` action allows you to store a key-value pair in the KV store. The key must be a string, while the value can be of any data type, though non-string values will be converted to string for storage.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/set-keyval/setkeyval-1.png" alt="Set KV Data 1" />
</figure>

## Parameters for Set KV Data

Here are the key components of the `Set KV Data` action:

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `key`      | string  | any string value                                   |
| `value`     | string  | any string value                                  |
| `Accessible across multiple microapps` |  checkbox |  checked/unchecked        |

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/set-keyval/setkeyval-2.png" alt="Set KV Data 2" />
</figure>



By using the `Set KV Data` action, you can conveniently store key value pairs and access them using `Get KV Data`.