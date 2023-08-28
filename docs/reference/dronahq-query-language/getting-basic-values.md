---
sidebar_position: 1
---

# Getting basic values

DQL uses location path syntax to extract values from JSON structures. The following examples demonstrate several examples of getting basic values from JSON data.

## Contents

- [Example JSON](../getting-basic-values#example-json)
- [Get a top-level field](../getting-basic-values#get-a-top-level-field)
- [Get a nested field](../getting-basic-values#get-a-nested-field)
- [Get an entire object](../getting-basic-values#get-an-entire-object)
- [Select a specific index in an array](../getting-basic-values#select-a-specific-index-in-an-array)
- [Select an entire array](../getting-basic-values#select-an-entire-array)
- [Return one field of every object in an array](../getting-basic-values#return-one-field-of-every-object-in-an-array)
- [Return fields that contain special characters in the key name](../getting-basic-values#return-fields-that-contain-special-characters-in-an-array)
- [Get the number of elements in the list](../getting-basic-values#get-the-number-of-elements-in-the-list)

## Example JSON
The examples below use this JSON data:

```json
{
    "name": "John Smith",
    "address": {
        "street": "123 Park Avenue",
        "city": "Atlanta",
        "state": "GA",
        "zip": "12345"
    },
    "phones": [
        {
            "type": "Home",
            "number": "123-456-7890"
        },
        {
            "type": "Cell",
            "number": "098-765-4321"
        }
    ],
    "display name": "myuser123"
}
```

## Get a top-level field
To access a top-level field with DQL, enter the field's name.
##### DQL
```bash
 name
```
##### Result
```bash
"John Smith"
```

## Get a nested field
To access fields below the top level, use field names separated by dot . delimiters.

##### DQL
```bash
 address.city
```
##### Result
```bash
"Atlanta"
```

## Get an entire object
Enter the name of an object in the JSON file to retrieve all the data within that object.

##### DQL
```bash
 address
```
##### Result
```bash
{
    street: '123 Park Avenue',
    city: 'Atlanta',
    state: 'GA',
    zip: '12345',
}
```

## Select a specific index in an array
To access individual values in an array in a JSON file, specify an index number between square brackets after the array's name.

##### DQL
```bash
 phones[0].number
```
##### Result
```bash
"123-456-7890"
```

## Select an entire array
Enter the name of an array in the JSON file to retrieve all the data within that array.

##### DQL
```bash
 phones
```
##### Result
```bash
[
    {
        "type": "Home",
        "number": "123-456-7890"
    },
    {
        "type": "Cell",
        "number": "098-765-4321"
    }
]
```

## Return one field of every object in an array
To return a specific field from multiple objects in an array, enter the array's name then the field's name, separated by a dot.

##### DQL
```bash
phones.number
```
##### Result
```bash
["123-456-7890","098-765-4321"]
```

## Return fields that contain special characters in an array
If a field in the JSON file contains special characters (like spaces), put the field's name in single quotes.

##### DQL
```bash
'display name'
```
##### Result
```bash
myuser123
```

## Get the number of elements in the list

##### DQL
```bash
$count(phones)
```
##### Result
```bash
2
```


