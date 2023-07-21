---
sidebar_position: 5
---

import Thumbnail from '@site/src/components/Thumbnail';

# Reusable JS Objects

With the help of JavaScript programming language, DronaHQ has the feature of `JS Objects` to provide users flexibility with writing functions, key-value pairs, stating variables, and more, which later can be accessed in the app easily and recurrently with the use of keywords.

We will know more about writing and using JS Objects in this article. You can export your JS functions and variables defined in JS Objects section that you can call at any place in your app.

## Creating JS Objects
Open the app in the DronaHQ, and go to its `configs -> Custom Script -> JS Objects`.

<figure>
  <Thumbnail src="/img/app-scripting-and-code/reuseable-js-objects/reuseable-js-objects-config-screen.png" alt="Simple Database GUI" />
  <figcaption align='center'><i>JS Objects config screen.</i></figcaption>
</figure>

You will notice that a structure is maintained already in the JS Object with dummy data. Once JS Object defining is done, click on `Save`.

### JS object Structure

The JS Object of the DronaHQ follows this format, where user can write their own code, mention variables, write functions, and more, provided that their keywords should be made accessible under the `ExportModule`:

```javascript
// Internal Variable  
var myInternalVariable = "This is an Internal Variable";  
// Variable Can be accessible outside  
var myExternalVariable = "This is an External Variable";  
// Internal Function  
function myInternalFun() {  
 // Code Goes here  
}  
// Function Can be accessible outside   
function myExternalFun (data) {  
 // Code Goes here  
  return data;  
};  
  
ExportModule = {  
myExternalFun: myExternalFun,  
myExternalVariable: myExternalVariable  
}; 
```

The JS Objects defined here are available across Apps in Data Binding, Event Actions, JS Transform, and Any other place that supports JavaScript. Make sure your custom code won’t create any security vulnerabilities, Unsecured code could expose sensitive customer information.

:::info

Functions or Variables you add in that Export Module only that functions will be accessible outside or in other ways only exported functions/variables will be accessible in App.

:::

If you do not export the functions and variables with the export module, the JS object will be invalid and can’t be defined as DronaHQ does not recognize them and throws an error.

### Test

There is a dropdown provided just before the script where you can find all the exported keywords of functions and variables, which all are available to be used in the app.

```javascript
JSOBJECTS.functionName('test');
```

Select one keyword from the dropdown, and the script will run for it particularly.
Test your JS functions by selecting from the above dropdown and passing test data to view its result output. Use the above syntax in your app to call this function.

### Output

Once you click on `Run Script`, the end result output will be showcased in `Output` area.

## Using JS Object
### JavaScript Code:

```javascript
//required variables 
  
var sum, percentage, grades; 
  
//fucntion for total 
  
function getGradeFromScores (sci,math,eng,pe){ 
  sum = percentage = 0; 
  sum = sci + math + eng + pe; 
  percentage = (sum / 400) * 100; 
  if (percentage <= 100 && percentage >= 80) { 
    grades = "A"; 
  } else if (percentage <= 79 && percentage >= 60) { 
    grades = "B"; 
  } else if (percentage <= 59 && percentage >= 40) { 
    grades = "C"; 
  } else { 
    grades = "F"; 
  } 
  return grades; 
} 
  
ExportModule = {  
  	getGradeFromScores: getGradeFromScores, 
}; 
```
### Script

```javascript
JSOBJECTS.getGradeFromScores (90,80,85,60);
```

### Output

```javascript
"B"
```

### Using function

<figure>
  <Thumbnail src="/img/app-scripting-and-code/reuseable-js-objects/reuseable-js-objects-using-function.png" alt="Simple Database GUI" />
  <figcaption align='center'><i>Using function inside Data Binding.</i></figcaption>
</figure>

:::tip

if we wish to use this functions across different applications then we can declare them in Global JS Objects
Reference :- [Global JS Objects](/docs/global_js_objects.md)
:::

Docusaurus can manage multiple versions of your docs.