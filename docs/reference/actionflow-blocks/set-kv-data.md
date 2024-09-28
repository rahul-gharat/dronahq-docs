---
sidebar_position: 1
title: Set To LocalStorage
---
import Thumbnail from '@site/src/components/Thumbnail';

## What are LocalStorage Actions ?
LocalStorage actions can be used to store data in the form of key value pairs which persist across page reloads and different routes inside the micro apps. The LocalStorage actions include `Set To LocalStorage`, `Get From LocalStorage` and `Clear From LocalStorage`. These actions leverage localstorage api to store the data. You can also configure the action to store key value pairs in a way that makes them globally accessible across different micro-apps.

## Introduction to Set To LocalStorage
The `Set To LocalStorage` action allows you to store a key-value pair in the localstorage. The key must be a string, while the value can be of any data type, though non-string values will be converted to string for storage.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/set-keyval/setkeyval-1.png" alt="Set To LocalStorage 1" />
</figure>

## Parameters for Set To LocalStorage

The following parameters are expected by the `Set To LocalStorage` action:

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `key`      | string  | any string value                                   |
| `value`     | string  | any string value                                  |
| `Accessible across multiple microapps` |  checkbox |  checked/unchecked        |

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/set-keyval/setkeyval-2.png" alt="Set To LocalStorage 2" />
</figure>



By using the `Set To LocalStorage` action, you can conveniently store key value pairs and access them using `Get From LocalStorage`.