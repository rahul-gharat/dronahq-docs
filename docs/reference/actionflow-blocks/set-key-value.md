---
sidebar_position: 1
title: Set Key Value
---
import Thumbnail from '@site/src/components/Thumbnail';

The Set Key Value action allows you to store a key-value pair which is accessible locally. The key must be a string, while the value can be of any data type, though non-string values will be converted to strings for storage. This function is useful for persisting data across page reloads and browser sessions, such as user settings or preferences.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/set-keyval/setkeyval-1.png" alt="Set Key Value 1" />
<figcaption align='center'><i>Set Key Value</i></figcaption>
</figure>

Here are the key components of the `Set Key Value` action:

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/set-keyval/setkeyval-2.png" alt="Set Key Value 2" />
</figure>

- Key: Provide a key by which acts as an indentifier for the stored value.
- Value: Provide the data which needs to be stored in that particular key.

By using the `Set Key Value` action, you can conveniently store key value pairs locally.