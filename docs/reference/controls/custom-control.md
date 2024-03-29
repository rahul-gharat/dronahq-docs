---
sidebar_position: 1
title: Custom Control
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

# Why we need?

When user wants to create a custom control which will allow him to write his own code and should work with other components as well which isn't already available in our control and should be capable of doing the following tasks.

- [Define Input Type](#define-input-type)
- [Define Output Type](#define-output-type)
- [Create Own Action](#create-own-action)
- [Write Own Code](#write-own-code)


## Define-input-type

In the property section you have an option as input type , you can select from dropdown options  what kind of data your control will accept . possible values for this are single, and list. Bind Data will change according to different values.

- **single** :-  It will always give data in string format. It is the default value for new control. Recommended to use when we are building controls that take strings as data input.

- **list** :-  It accepts data as Array. Recommended to use with controls like dropdowns, checkbox, etc.

## Define-output-type

In the property section you have an option for output type , from here you can select from  dropdown options what output type you want from your control,i.e. string, number, boolean, date, list.

<figure>
  <Thumbnail src="/img/reference/controls/custom-control/single_data_type.png" alt="single data type" />
  <figcaption align="left"><i>For single input type</i></figcaption>
</figure>

<figure>
  <Thumbnail src="/img/reference/controls/custom-control/list_data_type.png" alt="list data type" />
  <figcaption align="left"><i>For list input type</i></figcaption>
</figure>


## Create-own-action

In the property section you have an option to add custom action , you can add your action through ADD MORE option, delete and change the name of action.
Here you can see how to integrate the action - [Trigger Action](#trigger-action)

<figure>
  <Thumbnail src="/img/reference/controls/custom-control/action_name.png" alt="create action" />
  <figcaption align="left"><i>Create Action</i></figcaption>
</figure>


## Write-own-code
In the property section, you can write your own Html code with css , js
<figure>
  <Thumbnail src="/img/reference/controls/custom-control/html_code.png" alt="html code" />
  <figcaption align="left"><i>Html Code</i></figcaption>
</figure>

Here is an example for your reference

```bash
<html>
  <style>
    input[type=text] {
        width: 100%;
        border: 2px solid #aaa;
        border-radius: 4px;
        margin: 8px 1px;
        outline: none;
        padding: 8px;
        box-sizing: border-box;
        transition: .3s;
    }
    input[type=text]:focus {
        border-color: dodgerBlue;
        box-shadow: 0 0 8px 0 dodgerBlue;
    }
  
</style>

<body>
  <input id="in1" type="text" placeholder="Your name">
  <button>Save</button>  
    <script>
        let input = document.getElementById('in1');
        const fn = function (payload) {
            if (payload.type == "initComponent") {

            }
            if (payload.type == "setValue") {
                input.value = payload.value;
            }
            if (payload.type == "getValue") {
                let val = input.value;               
                CI.returnValue(val[0]);
            }
            if (payload.type == "runValidation") {
                if (isNaN(input.value) || input.value.includes('@')) {
                    CI.returnValidationResult(false);
                }
                else {
                    CI.returnValidationResult(true);
                }
            }
        }
        CI.init(fn);
        input.addEventListener("input", function (e) {
            let errorList = [];
            if (!isNaN(input.value)) {
                errorList.push("accepts strings only");
            }
          
            if (input.value.includes('@')) {
                errorList.push("does not accept special character");
            }
            if (errorList.length > 0) {
                CI.showError(errorList);
            } else {
                CI.clearError();
                CI.triggerChange();
                CI.triggerAction("change");
            }
        });
    </script>
  </body>
</html>
```


## How you need to integrate your code

We provide interaction from your code to our Studio , so you need to follow some convention.
We provide some inbuilt functions through which you can interact with our Studio.

- [Init Component](#init-component)
- [Return Value](#return-value)
- [Trigger Change](#trigger-change)
- [Show Error](#show-error)
- [Clear Error](#clear-error)
- [Trigger Action](#trigger-action)
- [Run Validation Result](#run-validation-result)

## Init-component

```bash
  CI.init(callback)
```

First of all you need to call this CI.init() which takes callback function as a argument , which initializes or sets up the environment for interaction between user and Studio.

Example :-

```bash
  const callback = function (payload) {
            if (payload.type == "initComponent") {
              // here you can initialize your iframe component when needed
            }
            if (payload.type == "setValue") {
                // your control will get the data from Studio, so you can have your logic acc to your value
                input.value = payload.value;
            }
            if (payload.type == "getValue") {
                // this method is ued to set the return value of your control
                let val = input.value;               
                CI.returnValue(val[0]);
            }
            if (payload.type == "runValidation") {
                // checks whether your control is valid or not
                if (isNaN(input.value) || input.value.includes('@')) {
                    CI.returnValidationResult(false);
                }
                else {
                    CI.returnValidationResult(true);
                }
            }
        }
```


In callback function , payload as parameter represents data from our Studio , it contains object eg:

```bash
  {type:"setValue",value:"xyz"}
```
and type can be 
- **initComponent** :- Here you can initialize your iframe component ,if we wish to have any kind of initialization for your control then you have to write code for it here.
- **setValue** :- If you're binding some data through data binding, so you will have to write logic here to set data in your control.
- **getValue** :- This method is used to set the return value of your control.
- **runValidation** :- It will check whether your control is valid or not according to your condition.

and value can be
- **initComponent** :- value will be empty string
- **setValue** :- If you're binding some data through data binding, so in value you'll be getting the same data.
- **getValue** :- value will be empty string
- **runValidation** :- value will be empty string

## Return-value

```bash
  CI.returnValue(value)
```
For returning the value from your control to Studio you need to call CI.returnValue(value) ,here value as argument indicates what data you want to pass from your control .

## Trigger-change

```bash
  CI.triggerChange()
```
User can call CI.triggerChange() function when he wants to pass the data to another(referenced) control .

## Show-error

```bash
  CI.showError(values)
```

User can call CI.showError(values) , here values as argument represents array of strings(as per his condition) when user wants to display error in default control error space.

## Clear-error

```bash
  CI.clearError()
```

User can call CI.clearError() when he wants to remove all the errors from default control error space(as per his condition).

## Trigger-action

```bash
  CI.triggerAction(actionName)
```

User can call  CI.triggerChange(actionName) when he wants to trigger events, here actionName in argument represent action he wants to trigger which he has created eg focusout, change, click.


## Run-validation-result

```bash
  CI.runValidationResult(booleanValue)
```

User can call CI.runValidation(booleanValue) it returns control is valid or not , here booleanValue can have true or false.

## Example
Lets say you want to create input control, and on change event you are implementing your logic
```bash
  input.addEventListener("change", function(e) {
        let errorList = [];
        if (!isNaN(input.value)) {
            errorList.push("accepts strings only");
        }
        if (input.value.includes('@')) {
            errorList.push("does not accept special character");
        }
        if (errorList.length > 0) {
            CI.showError(errorList);
        } else {
            CI.clearError();
            CI.triggerChange();
            CI.triggerAction("focusout");
        }
    });
```


You can also write your react code , but you need to add this cdn links first

```bash
  <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```
Here's html code with js for your reference



Here's react code for your reference

<figure>
  <Thumbnail src="/img/reference/controls/custom-control/react_code.png" alt="react code" />
  <figcaption align="center"><i>React Code</i></figcaption>
</figure>


