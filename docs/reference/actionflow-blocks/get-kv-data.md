---
sidebar_position: 1
title: Get From LocalStorage
---
import Thumbnail from '@site/src/components/Thumbnail';

## Introduction to Get From LocalStorage
The Get From LocalStorage action retrieves a value which is stored in the localstorage mapped to the provided key. If the key exists, it returns the associated value, which can be parsed back to its original form if necessary. If the key does not exist, it returns an empty string. This function is ideal for accessing data which is stored using `Set To LocalStorage` action. In case of web, this action utilizes localstorage to access and get the data.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/get-key-val/getkeyval-1.png" alt="Get From LocalStorage 1" />
</figure>

## Parameters for Get From LocalStorage

Here are the key components of the `Get From LocalStorage` action:

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `key`      | string  | any string value                                   |
| `Accessible across multiple microapps` |  checkbox |  checked/unchecked        |

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/get-key-val/getkeyval-2.png" alt="Get From LocalStorage 2" />
</figure>

- Key: Provide the key whose value needs to be retrieved.

## Accessing the output

The output data returned by Get From LocalStorage action can be accessed using the following syntax:
```
{{action_unique_name.output}}
```

For example if the action unique name is `Getlocalstorage_2`, then the output can be accessed as follows:
```
{{Getlocalstorage_2.output}}
```
<figure>
<Thumbnail src="/img/reference/actionflow-blocks/get-key-val/getkeyval-3.png" alt="Get From LocalStorage 3" />
</figure>


By using the `Get From LocalStorage` action, you can retrieve any key value pairs that might stored using the `Set To LocalStorage` action.