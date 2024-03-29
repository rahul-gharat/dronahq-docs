---
sidebar_position: 1
title: Custom Control
---


import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Custom Control

:::info Please Note
Before creating your own custom control, please have a look at DronaHQ provided [Controls Library](https://www.dronahq.com/controls/) that you can readily use.

:::


Custom control allows you to design your own UI and have your own Actions defined. Creating Custom control requires following things -
1. [Define BIND Data for your control]
1. [Define Input type to your control](#define-input-type)
1. [Write HTML Code for your control.](#write-own-code)
1. [An interface for passing data back and forth between the DronaHQ app and the custom control code.](#how-to-integrate-code)
1. [Defining your own Custom Actions](#define-own-action)



## Define-input-type

| Input Type             | Explanation                                                                                     |
|------------------------|-------------------------------------------------------------------------------------------------|
| single                 | It will always give data in string format. It is the default value for new control. Recommended to use when we are building controls that take strings as data input. |
| select                   | It accepts data as Array. Recommended to use with controls like dropdowns, checkbox, etc. |



## Define-own-action

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
HTML Code

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

React Code 
To write react code, you need to add these cdn links first

```bash
  <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```
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
      transition: 0.3s;
    }

    input[type=text]:focus {
      border-color: dodgerBlue;
      box-shadow: 0 0 8px 0 dodgerBlue;
    }
  </style>
  <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin=""></script>
  <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin=""></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head><body>
    <div id="root"></div>

    <script type="text/babel">
      const { useState } = React;

      const App = () => {
        const [inputValue, setInputValue] = useState('');
        const fn = function (payload) {
          if (payload.type == "setValue") {
            setInputValue(payload.value);
          }
          if (payload.type == "getValue") {
            CI.returnValue(inputValue);
          }
          if (payload.type == "runValidation") {
            if (isNaN(inputValue) || inputValue.includes('@')) {
              CI.returnValidationResult(false);
            } else {
              CI.returnValidationResult(true);
            }
          }
        };
        CI.init(fn);

        const handleInputChange = (e) => {
          setInputValue(e.target.value);
          let errorList = [];
          if (e.target.value.includes('@')) {
            errorList.push("Does not accept special characters");
          }
          if (errorList.length > 0) {
            CI.showError(errorList);
          } else {
            CI.clearError();
            CI.triggerChange();
          }
        };

        return (
          <div>
            <h1>Input</h1>
            <input
              type="text"
              placeholder="Your name"
              value={inputValue}
              onChange={handleInputChange}
              onBlur={() => {
                CI.triggerAction('focusout');
              }}
            />
          </div>
        );
      };
      ReactDOM.render(<App />, document.getElementById('root'));
    </script>
  
</body>
</html>
```


## How-to-integrate-code

Following methods are used to integrate your code to  DronahQ 

| Function           | Explanation                                                                                     |
|------------------------|-------------------------------------------------------------------------------------------------|
| [CI.init(callback)](#init-callback)                 | First of all you need to call this CI.init() which takes callback function as a argument , which initializes or sets up the environment for interaction between user and DronaHQ. |
| CI.returnValue(value)                   | For returning the value from your control to Studio you need to call CI.returnValue(value) ,here value as argument indicates what data you want to pass from your control . |
| CI.triggerChange()                      | User can call CI.triggerChange() function when he wants to pass the data to another(referenced) control . |
| CI.showError(values)                    | User can call CI.showError(values) , here values as argument represents array of strings(as per his condition) when user wants to display error in default control error space. |
| CI.clearError()                         | User can call CI.clearError() when he wants to remove all the errors from default control error space(as per his condition). |
| CI.triggerAction(actionName)            | User can call  CI.triggerChange(actionName) when he wants to trigger events, here actionName in argument represent action he wants to trigger which he has created eg focusout, change etc;
| CI.runValidationResult(booleanValue)    | User can call CI.runValidation(booleanValue) it returns control is valid or not , here booleanValue can have true or false. |


# Init-callback
In callback function , payload as parameter represents data from our Studio , it contains object eg:

```bash
  {type:"setValue",value:"xyz"}
```


| type           | value  | Explanation                                                                                   |
|----------------|--------|-------------------------------------------------------------------------------------------------|
| initComponent   | empty string           |  Here you can initialize your iframe component ,if we wish to have any kind of initialization for your control then you have to write code for it here. |
| setValue        | data which you have binded through data section          | If you're binding some data through data binding, so you will have to write logic here to set data in your control. |
| getValue         | empty string          | This method is used to set the return value of your control. |
| runValidation    | empty string         | It will check whether your control is valid or not according to your condition. |

Example: 

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



