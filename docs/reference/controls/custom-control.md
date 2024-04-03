---
sidebar_position: 1
title: Custom Control
---


import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


:::info Please Note
Before creating your own custom control, please have a look at DronaHQ provided [Controls Library](https://www.dronahq.com/controls/) that you can readily use.

:::

## Steps

Custom control allows you to design your own UI and have your own Actions defined. Creating Custom control requires following things -
1. [An interface for passing data back and forth between the DronaHQ app and the custom control code.](#dronahq-control-interface-ci)
1. [Define BIND Data for your control](#bind-data-to-control)
1. [Define Input type to your control](#define-input-type)
1. [Write HTML Code for your control.](#write-html-code)
1. [Defining your own Custom Events](#adding-custom-events)

## DronaHQ Control Interface (CI)
DronaHQ provides control interface for your custom control to pass data back and forth from your control. For this `CI` is the interface object that you need to call with methods listed below based on your needs.

| Function           | Explanation      |
|------------------------|-------------------------------------|
| `CI.init(callback)`                 | You must call `CI.init(callback)` method to initialize a bridge between DronaHQ and your Control. [`callback`](#callback-function) is a function which will be called by DronaHQ for various needs that will have `payload` as a argument. |
| `CI.returnValue(value)`                   | Call this method when you want to return the value from your control to DronaHQ. Here,`value` argument indicates what data you want to pass from your control. This is usually be used when `callback` function is called with type `getValue`. |
| `CI.triggerChange()`                      | Call this method when want to notify other controls or data query variable to re-evaluate their data when there is any change in your Control's return data. |
| `CI.showError(errorMessages)`                    | Call this method when you want DronaHQ to display error in default control's error space. Here `errorMessages` in argument represents array of strings with one or more error messages which you want to display it to user. This should be usually called when `callback` function is called with type `runValidation`. |
| `CI.clearError()`                         | Call this method when you want to remove all the error messaged previously displayed by DronaHQ. This should be usually called when valid data is inputted by the user for your control. |
| `CI.triggerAction(eventName)`            | Call this method when you want to trigger a particular event which you have pre-defined in your Custom Events section. Here `eventName` in argument represents event name he wants to trigger which he has created eg focusout, change, button_click etc;
| `CI.runValidationResult(booleanValue)`    | You must call this method when `callback` function is called with type `runValidation` with either `true` or `false` value based on your control's data which is valid or not. |

### Callback Function

Syntax:
```js
callback(payload)
```

In callback function, payload is passed in the parameter from DronaHQ. payload is a json object with type and value key with below sample format-

```json
  {type:"setValue",value:"xyz"}
```


| type           | value  | Explanation  |
|----------------|--------|--------------|
| initComponent   | empty   | This will get called only once in entire lifecycle of your App. Here you can initialize your iframe component, if we wish to have any kind of initialization for your control then you have to write code for it here. You can initialize your visual elements with default values, add event listeners and so on.  |
| setValue        | `BIND DATA` value | This will get called whenever your control data needs to be refreshed. If you're binding some data through data binding, you will have to write logic to set value to your visual elements to reflect the corresponding data set from BIND DATA section in your control. In case, you have selected `select` type for `Input Type` option in your control, then in `value` field, you will get json object in `[{"name": "<BIND Data value 1>", "selected": false},{"name": "<BIND Data value 2>", "selected": true}]` format, where value in `name` key will be based on your `OPTIONS` BIND DATA value and value in `selected` key will be based on your `SELECTED OPTIONS` BIND DATA value. |
| getValue         | empty          | This method will get called whenever your control's data is required by any other control or data query in your App that you have referenced. You must return the expected output your control want's to return. For example, in case of Text Input control, you should return the value of Text input control which user has inputted. |
| runValidation    | empty         | This method will get called whenever a validation needs to be performed for this control. In this case, you should validate your control with the current data that it has and show any error message in case of validation is failed so that will be noticed by end user. |

Example: 

```js
  const callback = function (payload) {
            if (payload.type == "initComponent") {
              // here you can initialize your iframe component when needed
              
            }
            if (payload.type == "setValue") {
                // your control will get the data from Studio, so you can have your logic acc to your value
                let input = document.getElementById('in1');
                input.value = payload.value;
            }
            if (payload.type == "getValue") {
                // this method is ued to set the return value of your control
                let input = document.getElementById('in1');
                let val = input.value;               
                CI.returnValue(val);
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


## Bind Data to Control

You can define input data that you want your Custom Control to be initialized with. You can get this data in your `callback` method with type as `setValue` and `value` in `payload.value`. It can either be another control, keyword, data query variable or any json object.

<figure>
  <Thumbnail src="/img/reference/controls/custom-control/bind-data-custom-control.png" alt="html code" />
  <figcaption align="center"><i>BIND DATA</i></figcaption>
</figure>

## Define Input Type

Input type defines whether your control has only single BIND data option or multiple BIND data option (Options and Selected Options).

| Input Type  | Explanation    |
|------------------------|-----------------------------------------|
| single                 | If `single` is selected, then you can directly provide data under `BIND DATA` option. This is default option selected for a new control. |
| select                   | If `select` is selected, then your control will have 2 BIND DATA options - `Options` and `Selected Options`.  Recommended to use with controls like dropdowns, checkbox, etc. |

## Write HTML Code

In `property->Write your code` section, you can put the HTML, CSS, and JavaScript code which handles the appearance and behavior of the custom control. DronaHQ places this code in an iFrame within your DronaHQ app.

<figure>
  <Thumbnail src="/img/reference/controls/custom-control/html_code.png" alt="html code" />
  <figcaption align="left"><i>Html Code</i></figcaption>
</figure>

### Javascript Sample

  Here is the example of Sample Custom Component using Javascript

  ```html
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
        <h1>Input</h1>
        <input id="in1" type="text" placeholder="Your name">
        <script>
            let input = document.getElementById('in1');
            const callback = function (payload) {
                if (payload.type == "initComponent") {
                }
                if (payload.type == "setValue") {
                    input.value = payload.value;
                }
                if (payload.type == "getValue") {
                    let val = input.value;               
                    CI.returnValue(val);
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
            CI.init(callback);
            input.addEventListener("input", function (e) {
                let errorMessages = [];
                if (!isNaN(input.value)) {
                    errorMessages.push("Accepts strings only!");
                }   
                if (input.value.includes('@')) {
                    errorMessages.push("Does not accept special character!");
                }
                if (errorMessages.length > 0) {
                    // DronaHQ to display error message for this control
                    CI.showError(errorMessages);
                } else {
                    // Clear any error messages previously showed for this control
                    CI.clearError();
                    // Notify change to any other control or data query variable
                    CI.triggerChange();
                    // TODO: You can add Custom Event named - on_change
                    CI.triggerAction("on_change");
                }
            });
        </script>
    </body>
  </html>
  ```

  ### React Sample
  
  Here is the example of Sample Custom Component using React

  ```html
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
            const callback = function (payload) {
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
            CI.init(callback);
            const handleInputChange = (e) => {
              setInputValue(e.target.value);
              let errorMessages = [];
              if (!isNaN(e.target.value)) {
                errorMessages.push("Accepts strings only!");
              }
              if (e.target.value.includes('@')) {
                errorMessages.push("Does not accept special character!");
              }
              if (errorMessages.length > 0) {
                // DronaHQ to display error message for this control
                CI.showError(errorMessages);
              } else {
                // Clear any error messages previously showed for this 
                CI.clearError();
                // Notify change to any other control or data query variable
                CI.triggerChange();
                // TODO: You can add Custom Event named - on_change
                CI.triggerAction("on_change");
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
                />
              </div>
            );
          };
          ReactDOM.render(<App />, document.getElementById('root'));
        </script>
      
    </body>
  </html>
  ```


## Adding Custom Events

In the property section, you have an option to add one or more custom events that you want in your Custom Control. You can add custom events using `ADD MORE` option and provide a friendly name. You can also update the event name and delete any event using `delete` action.

<figure>
  <Thumbnail src="/img/reference/controls/custom-control/add-custom-event.png" alt="Add Custom Event" />
  <figcaption align="center"><i>Add Custom Event</i></figcaption>
</figure>

For triggering any event, you should call `CI.triggerAction("event_name");` , where `event_name` should be the friendly name you provided when adding the event. For example, you can have custom event named - `on_change` to call whenever user is inputting data to any Input control in your Custom Control using `CI.triggerAction("on_change");` method call.


<figure>
  <Thumbnail src="/img/reference/controls/custom-control/custom-events-added.png" alt="Custom Events Added" />
  <figcaption align="center"><i>Custom Events Added</i></figcaption>
</figure>

## Limitations

Below are the limitations currently when building your Custom Control -
1. You can not directly run any DATAQUERY variable.
1. You can not call DronaHQ Custom functions ([Fx formulas](/reference/fx-formulas), UTILITY, HELPER, DATAQUERY).
1. You can not access other controls data, data query variable and [keywords](/reference/keywords) unless you pass it in DATA BIND section.
1. You can not trigger other control's/screen's Events.
1. You can not invoke DronaHQ JS Objects directly in your html code.
1. You can not use THEME variables for your custom control.