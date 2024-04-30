---
description: Helper methods to perform actions from JS code.
title: Helper Methods
sidebar_position: 50
---

# Helper Methods

:::info
Helper methods are currently available only on Self-Hosted version > 2.4.2
:::

`HELPER` methods can help with data manipulation and transformation operations. These methods can be used to manipulate or transform data in String, Array and Object formats.

## TRANSFORMDATATOARRAY

`HELPER.TRANSFORMDATATOARRAY()` method can be used to transform an object to an array of objects. This method is useful when the data object has key-value pairs that represent the columns of a table. 


<span style={{fontSize: 24}}>Usage</span>

```
HELPER.TRANSFORMDATATOARRAY(inputObject);
```

<span style={{fontSize: 24}}>Example</span>

```
HELPER.TRANSFORMDATATOARRAY({
    id: [1, 2, 3],
    name: ['Jack', 'James', 'John'],
    location: ['New York', 'London', 'Sydney']
});
```

<span style={{fontSize: 24}}>Result</span>

```
[
    { id: 1, name: 'Jack', location: 'New york' },
    { id: 2, name: 'James', location: 'London' },
    { id: 3, name: 'John' , location: 'Sydney' }
]
```

## TRANSFORMDATATOOBJECT

`HELPER.TRANSFORMDATATOOBJECT()` method can be used to transform an array to an object. This method is useful when the data is an *array of objects* where each object has same set of keys.

<span style={{fontSize: 24}}>Usage</span>

```
HELPER.TRANSFORMDATATOOBJECT(inputArray);
```

<span style={{fontSize: 24}}>Example</span>

```
HELPER.TRANSFORMDATATOOBJECT(
    [
        { id: 1, name: 'Jack', location: 'New york' },
        { id: 2, name: 'James', location: 'London' },
        { id: 3, name: 'John' , location: 'Sydney' }
    ]
);
```

<span style={{fontSize: 24}}>Result</span>

```
{
    id: [1, 2, 3],
    name: ['Jack', 'James', 'John'],
    location: ['New York', 'London', 'Sydney']
}
```

## INTERCHANGE

`HELPER.INTERCHANGE()` method can be used to swap the position of two elements in an array.

<span style={{fontSize: 24}}>Usage</span>

```
HELPER.INTERCHANGE(inputArray,index1,index2);
```

<span style={{fontSize: 24}}>Parameters</span>

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `inputArray`| array  |  array of elements |
| `index1`| integer  | position index of first element  |
| `index2`| integer | position index of second element  |


<span style={{fontSize: 24}}>Example</span>

```
HELPER.INTERCHANGE(["apple", "banana", "orange", "grape", "kiwi"],0,4);
```

<span style={{fontSize: 24}}>Result</span>

```
["kiwi", "banana", "orange", "grape", "apple"]
```

## MERGEARRAYS

`HELPER.MERGEARRAYS()` method can be used to merge two arrays into one.

<span style={{fontSize: 24}}>Usage</span>

```	
HELPER.MERGEARRAYS(array1,array2);
```

<span style={{fontSize: 24}}>Example</span>

```	
HELPER.MERGEARRAYS(["apple", "banana", "orange"], ["grapes", "pineapple"]);
```

<span style={{fontSize: 24}}>Result</span>

```
["apple", "banana", "orange","grapes", "pineapple"]
```

## CONCATENATE

`HELPER.CONCATENATE()` method can be used to merge two or more strings into one.

<span style={{fontSize: 24}}>Usage</span>

```
HELPER.CONCATENATE(string1,string2,string3);
```

<span style={{fontSize: 24}}>Example</span>

```
HELPER.CONCATENATE("hi ", "hello ", "How are you?");
```

<span style={{fontSize: 24}}>Result</span>

```
"hi hello How are you?"
```

## FLATTEN

`HELPER.FLATTEN()` method can be used to convert a multi dimensional array into a single dimension array.

<span style={{fontSize: 24}}>Usage</span>

```
HELPER.FLATTEN([array1,array2,array3]);
```

<span style={{fontSize: 24}}>Example</span>

```	
HELPER.FLATTEN([1, [2, 3], [[4, 5], 6], [7, 8, [9, 10]]]);
```

<span style={{fontSize: 24}}>Result</span>

```
[1,2,3,4,5,6,7,8,9,10]
```

## RANGE

`HELPER.RANGE()` method can be used to create an array of numbers for a specified range.

<span style={{fontSize: 24}}>Usage</span>

```
HELPER.RANGE(start,end);
```

<span style={{fontSize: 24}}>Example</span>

```
HELPER.RANGE(5,10);
```

<span style={{fontSize: 24}}>Result</span>

```
[5,6,7,8,9,10]
```

## GETKEYVALUE

`HELPER.GETKEYVALUE()` method can be used to get value of a specified key from object.

<span style={{fontSize: 24}}>Usage</span>

```
HELPER.GETKEYVALUE(object,key);
```

<span style={{fontSize: 24}}>Example</span>

```
HELPER.GETKEYVALUE(
    {
        "key1": "DRONA",
        "key2": "HQ",
        "key3": "WELCOMES",
        "key4": "YOU"
    },"key1");

```

<span style={{fontSize: 24}}>Result</span>

```
DRONA
```

## ARRAYTOCSV

`HELPER.ARRAYTOCSV()` method can be used to convert an array of arrays into csv format.

<span style={{fontSize: 24}}>Usage</span>

```
HELPER.GETKEYVALUE(array_of_arrays);
```

<span style={{fontSize: 24}}>Example</span>

```
HELPER.ARRAYTOCSV(
    [
        ["Name", "Age", "Location"],
        ["John Doe", 30, "New York"],
        ["Jane Smith", 25, "Los Angeles"]
    ]      
);

```

<span style={{fontSize: 24}}>Result</span>

```
Name, Age, Location
John Doe, 30, New York
Jane Smith, 25, Los Angeles
```