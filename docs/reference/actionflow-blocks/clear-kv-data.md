---
sidebar_position: 1
title: Clear From LocalStorage
---
import Thumbnail from '@site/src/components/Thumbnail';

## Introduction to Clear From LocalStorage

:::info
It is recommended that the keys which are set globally ie. accessible via multiple microapps should only be cleared by the apps which set them.
:::

The Clear From LocalStorage action deletes a key-value pair stored in localstorage. This is useful when you need to clear specific data, such as when a user logs out or changes a setting. By removing unnecessary data, this function helps manage storage space and maintain data relevance. In case of web, this action utilizes localstorage to access and clear the data.


<figure>
<Thumbnail src="/img/reference/actionflow-blocks/remove-key-val/removekeyval-1.png" alt="Clear From LocalStorage 1" />
</figure>

## Parameters for Clear From LocalStorage

Here are the key components of the `Clear From LocalStorage` action:

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `key`      | string  | any string value                                   |
| `Accessible across multiple microapps` |  checkbox |  checked/unchecked        |

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/remove-key-val/removekeyval-2.png" alt="Clear From LocalStorage 2" />
</figure>


By using the `Clear From LocalStorage` action, you can effectively manage the removal of unwanted data stored using the `Set To LocalStorage` action.