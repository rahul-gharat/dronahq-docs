---
sidebar_position: 61
---

import Thumbnail from '@site/src/components/Thumbnail';

# Global JS Objects

DronaHQ provides a powerful extension of JS Objects. `JS Objects` provides users flexibility with writing functions, key-value pairs, stating variables, and more, which later can be accessed in the app easily and recurrently with the use of keywords. The most important part of JS Object Extension is that, once you save an object, it can be accessible from any app in the DronaHQ account, so we can say that it is globally provided.

We will know more about writing and using Global JS Objects in this article. You can export your JS functions and variables defined in Global JS Objects section that you can call globally in any app at any place.

## Creating Global JS Objects
Login to your DronaHQ account Go-to, `Profile -> Extensions -> JS Object Editor`.

<figure>
  <Thumbnail src="/img/advanced-concepts/global-js-objects/global-js-objects-config-screen.jpg" alt="Simple Database GUI" />
  <figcaption align='center'><i>Global JS Objects config screen.</i></figcaption>
</figure>

You will notice that a structure is maintained already in the JS Object with dummy data. Once JS Object defining is done, click on `Save`.

### Global JS object Structure
The JS Object of the DronaHQ follows this format, where user can write their own code, mention variables, write functions, and more, provided that their keywords should be made accessible under the `ExportModule` :

```javascript
// Internal Variable  
var myInternalVariable = "This is an Internal Variable";  
// Variable Can be accessible outside  
var myExternalVariable = "This global is an External Variable";  
// Internal Function  
function myInternalFun() {  
  // Code Goes here  
}  
// Function Can be accessible outside   
function myExternalFun (data) {  
  // Code Goes here  
  return data;  
};  
function abc (data) {  
  // Code Goes here  
  return data;  
};  
var num1= 10; 
  
function multi (){ 
  return num1*5; 
} 
ExportModule = {  
  myExternalFun: myExternalFun,  
  myExternalVariable: myExternalVariable, 
  abc:abc, 
  num1:num1, 
  multi:multi 
  
}; 
```
The JS Objects defined here are available across Apps in Data Binding, Event Actions, JS Transform, and Any other place that supports JavaScript. Make sure your custom code won’t create any security vulnerabilities, Unsecured code could expose sensitive customer information.

:::info

Functions or Variables you add in that Export Module only that functions will be accessible outside or in other ways only exported functions/variables will be accessible in App.

:::

If you do not export the functions and variables with the export module, the JS object will be invalid and can’t be defined as DronaHQ does not recognize them and throws an error.

### Test

There is a dropdown provided just before the script where you can find all the exported keywords of functions and variables, which all are available to be used in the app.

Select one keyword from the dropdown, and the script will run for it particularly.
Test your JS functions by selecting from the above dropdown and passing test data to view its result output. Use the below syntax in your app to call this function.

There is a specific syntax to call the global JS objects - 
```javascript
JSOBJECTS_GLOBAL.functionName('test');
```

### Output

Once you click on `Run Script`, the end result output will be showcased in `Output` area.

## Using JS Object
### JavaScript Code:

```javascript
function calculateInsurancePremium(age, gender, coverageAmount, tobaccoUsage) {
// Base premium rates per $1,000 of coverage
const basePremiumRates = {
male: 15,
female: 12,
};

// Factors for coverage amount and tobacco usage
const coverageAmountFactor = 0.1; // 10% increase
const tobaccoUsageSurcharge = 0.5; // 50% surcharge

// Determine base premium rate based on age and gender
const basePremiumRate = basePremiumRates[gender.toLowerCase()];
const basePremium = basePremiumRate * (coverageAmount / 1000);

// Adjust base premium based on coverage amount
const coverageAmountAdjustment = basePremium * coverageAmountFactor;
const adjustedBasePremium = basePremium + coverageAmountAdjustment;

// Apply tobacco usage surcharge if applicable
let finalPremium = adjustedBasePremium;
if (tobaccoUsage.toLowerCase() === ‘smoker’) {
const tobaccoSurcharge = adjustedBasePremium * tobaccoUsageSurcharge;
finalPremium += tobaccoSurcharge;
}

// Return the final premium amount
return finalPremium;
}

// Example usage
const age = 40;
const gender = ‘Male’;
const coverageAmount = 500000;
const tobaccoUsage = ‘Smoker’;

const premium = calculateInsurancePremium(age, gender, coverageAmount, tobaccoUsage);
console.log(‘Final Premium Amount:’, premium);

ExportModule = {
calculateInsurancePremium: calculateInsurancePremium
};
```

### Script

```javascript
JSOBJECTS_GLOBAL.calculateInsurancePremium(25, 'Female', 5000000, 'non-smoker');
```

### Output

```javascript
66000
```

we can now Save it. using `Save` button.

### Using function inside app

Now, we can use the JS object from any app, with help of the keyword:

```javascript
JSOBJECTS_GLOBAL.calculateInsurancePremium()
```

#### App Preview:

Added the Global JS in JS Code action block.

<figure>
  <Thumbnail src="/img/advanced-concepts/global-js-objects/global-js-objects-functions-usage.png" alt="Simple Database GUI" />
  <figcaption align='center'><i>Using function JS Code action block.</i></figcaption>
</figure>

<figure>
  <Thumbnail src="/img/advanced-concepts/global-js-objects/global-js-objects-final-output.png" alt="Simple Database GUI" />
  <figcaption align='center'><i>Final output in preview.</i></figcaption>
</figure>

:::tip

To see how to declare and use app specific functions in app we can use Resuseable JS Objects
Reference :- [Resuseable JS Objects](/docs/app-scripting-and-code/reusable_js_objects.md)
:::

Docusaurus can manage multiple versions of your docs.