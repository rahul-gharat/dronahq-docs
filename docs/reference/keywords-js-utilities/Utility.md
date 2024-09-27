---
description: Utility methods to perform actions from JS code.
title: Utility Methods
sidebar_position: 49
---


# Utility Methods

:::info
Utility methods which do not return any value work only on preview screen
:::


`UTILITY` is a Javascript API provided by DronaHQ to perform various actions directly from your javascript code. It enables you to use actions which are present in actionflow builder directly from the code giving you more control on the behaviour of your application. 


## TOAST

`UTILITY.TOAST()` method can be used to show toast messages.

<span style={{fontSize: 24}}>Usage</span>

```
UTILITY.TOAST(type,title,message,position,closeButton,timeout);
```

<span style={{fontSize: 24}}>Parameters</span>

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `type`      | string  | 'info', 'error', 'success', 'warning'           |
| `title`     | string  | any string value                                  |
| `message`   | string  | any string value                                  |
| `position`  | string  | 'toast-top-right','toast-top-left', 'toast-top-center', 'toast-bottom-right' , 'toast-bottom-left', 'toast-bottom-center', 'toast-top-full-width, 'toast-bottom-full-width'  |
| `closeButton`| boolean | true/false                                        |
| `timeout`   | Number  | any positive numerical value (in milliseconds)                       |

<span style={{fontSize: 24}}>Example</span>

```
UTILITY.TOAST('success','Toast says','Hello','toast-top-right',true,5000);
```

## CONFIRM

`UTILITY.CONFIRM()` method can be used to show a prompt message to the user and get input such as ok and cancel. This method returns a `Promise` so the response needs to be captured using `await` keyword.

<span style={{fontSize: 24}}>Usage</span>

```
UTILITY.CONFIRM(title,message,confirmButtonText,cancelButtonText);
```

<span style={{fontSize: 24}}>Parameters</span>

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `title`     | string  | any string value                                  |
| `message`   | string  | any string value                                  |
| `confirmButtonText`| string | any string value                            |
| `cancelButtonText`   | string  | any string value                         |

<span style={{fontSize: 24}}>Example</span>

```
await UTILITY.CONFIRM('Confirm says','Confirm this message','OK','Cancel');
```
<span style={{fontSize: 24}}>User Input</span>

When the `Promise` resolves, the user input will be received in the `action` key inside a javascript object:

```
{
  action: 'OK'
}
```

## ALERT

`UTILITY.ALERT()` method can be used to show a alert message to the user. This method returns a `Promise` so the response needs to be captured using `await` keyword.

<span style={{fontSize: 24}}>Usage</span>

```
UTILITY.ALERT(type,title,message,confirmButtonText);
```

<span style={{fontSize: 24}}>Parameters</span>

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `type`      | string  | 'info', 'error', 'success'                        |
| `title`     | string  | any string value                                  |
| `message`   | string  | any string value                                  |
| `confirmButtonText`| string | any string value                            |

<span style={{fontSize: 24}}>Example</span>

```
await UTILITY.ALERT('success','Alert says','Hello','Ok');
```
<span style={{fontSize: 24}}>User Input</span>

When the `Promise` resolves, the user input will be received as a boolean value:

```
true
```

## EMAIL

`UTILITY.EMAIL()` method can be used to send emails.

<span style={{fontSize: 24}}>Usage</span>

```
UTILITY.EMAIL(subject,body,recipients);
```

<span style={{fontSize: 24}}>Parameters</span>

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `subject`      | string  | any string value            |
| `body`     | string  | any string value                                  |
| `recipients`   | string  | string of email ids (Comma separated)                                  |

<span style={{fontSize: 24}}>Example</span>

```
UTILITY.EMAIL('This is subject','Hello','user1@mail.com,user2@mail.com');
```

## CALL

`UTILITY.CALL()` method can be used to make calls.

<span style={{fontSize: 24}}>Usage</span>

```
UTILITY.CALL(phoneNumber);
```

<span style={{fontSize: 24}}>Parameters</span>

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `phoneNumber` | Number  | any numerical value             |


<span style={{fontSize: 24}}>Example</span>

```
UTILITY.CALL(9699194532);
```

## SMS

`UTILITY.SMS()` method can be used to send sms.

<span style={{fontSize: 24}}>Usage</span>

```
UTILITY.SMS(phoneNumbers,message);
```

<span style={{fontSize: 24}}>Parameters</span>

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `phoneNumbers`      | string  | string of phone numbers (comma separated)   |
| `message`     | string  | any string value                                  |

<span style={{fontSize: 24}}>Example</span>

```
UTILITY.SMS('9699194532,9619723541','Hello');
```



## CALLRESTAPI

`UTILITY.CALLRESTAPI()` method can be used to communicate with api servers using various HTTP methods like GET, POST, PUT, PATCH, and DELETE. This method returns a `promise` and to get the response use `await` keyword.
<span style={{fontSize: 24}}>Usage</span>

```
UTILITY.CALLRESTAPI(url, method, headers, data, useProxy, timeout);
```

<span style={{fontSize: 24}}>Parameters</span>

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `url`      | string  | endpoint url to send the request                   |
| `method`     | string  | 'GET', 'POST', 'PUT', 'PATCH', 'DELETE' |
| `headers`     | object  | json data to send in request headers |
| `data`     | object  | json data to send in request body |
| `useProxy`     | boolean  | true/false to use proxy |
| `timeout`     | number  | any numerical value in milliseconds |


<span style={{fontSize: 24}}>Example GET Request</span>

```
await UTILITY.CALLRESTAPI('https://exampleapi.com/api/users/','GET');
```

:::info
headers, data, useProxy and timeout are optional parameters, in case you don't want to specify any of them, put an empty string ('') instead while calling the method.
:::

<span style={{fontSize: 24}}>Example POST Request</span>

```
await UTILITY.CALLRESTAPI(
  'https://exampleapi.com/api/users/',
  'POST',
  '',
  {'name':'morpheus','job':'leader'}
);
```

## SETCTRLVALUE

`UTILITY.SETCTRLVALUE()` method can be used to set the value of a control. The method takes an *array of objects* as input and each object has two keys called `name` and `value`. The `name` key takes control's
unique name which can be found in the right side properties panel on the builder screen.

<span style={{fontSize: 24}}>Usage</span>

```
UTILITY.SETCTRLVALUE(
  [
    {name: 'controlUniqueName' , value: 'Yourvalue'},
    {name: 'anothercontrolUniqueName' , value: 'Yourvalue'}
  ]
);
```

<span style={{fontSize: 24}}>Object Parameters</span>

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `name`      | string  | Control's unique name                             |
| `value`     | string or object  | any string value for single value controls and object for composite controls |
| `selected_value`     | string or array | any string value or array of strings for list type controls |

<span style={{fontSize: 24}}>Example for single value controls</span>

```
UTILITY.SETCTRLVALUE(
  [
    {name:'textinput',value:'DronaHQ'}
  ]
);
```

<span style={{fontSize: 24}}>Example for composite controls</span>

```
UTILITY.SETCTRLVALUE(
  [
    {
      name:'address',
      value: { 
          address1: "test",
          address2: "abc",
          city: "mumbai",
          country: "india",
          state: "mh",
          zip: "66666666666"
        }  
    }
  ]
);
```

<span style={{fontSize: 24}}>Example for list controls</span>

```
let dd_data = [
  {
    "name": "test1",
    "value": "test1"
  },
  {
    "name": "test",
    "value": "test"
  }
]
UTILITY.SETCTRLVALUE([
  {
    name: "advanceddropdown",
    value: dd_data,
    selected_value: "test"
  }
])
```

## HIDECTRL

`UTILITY.HIDECTRL()` method can be used to trigger hide action on a visible control. The method takes an *array of strings* which contains unique names of the controls.

<span style={{fontSize: 24}}>Usage</span>

```
UTILITY.HIDECTRL(controlUniqueNameArray);
```

<span style={{fontSize: 24}}>Parameters</span>

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `controlUniqueNameArray`| array | array of strings (control unique names)    |

<span style={{fontSize: 24}}>Example</span>

```
UTILITY.HIDECTRL(['textinput','textinput1']);
```

## SHOWCTRL

`UTILITY.SHOWCTRL()` method can be used to trigger show action on a hidden control. The method takes an *array of strings* which contains unique names of the controls.

<span style={{fontSize: 24}}>Usage</span>

```
UTILITY.SHOWCTRL(controlUniqueNameArray);
```

<span style={{fontSize: 24}}>Parameters</span>

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `controlUniqueNameArray`| array | array of strings (control unique names)    |

<span style={{fontSize: 24}}>Example</span>

```
UTILITY.SHOWCTRL(['textinput','textinput1']);
```

## SETVARIABLE

`UTILITY.SETVARIABLE()` method can be used to overwrite the value returned by a Custom Javascript code. The method takes an *array of objects* as input and returns a `promise`. Each object has two keys called `name` and `value`. The name key takes variable name and value takes any string value which needs to be set.

<span style={{fontSize: 24}}>Usage</span>

```
 UTILITY.SETVARIABLE([{name: 'variableUniqueName' , value: 'Yourvalue'}]);
```

<span style={{fontSize: 24}}>Parameters</span>

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `name`      | string  | variable name                             |
| `value`     | string | any string value for single value controls and object for composite |

<span style={{fontSize: 24}}>Example</span>

```
await UTILITY.SETVARIABLE([{name: 'js_script_1' , value: 'value1'},{name: 'js_script_2' , value: 'value2'}]);
```

## NAVIGATE

`UTILITY.NAVIGATE()` method can be used to navigate from one screen to another screen.

<span style={{fontSize: 24}}>Usage</span>

```
UTILITY.NAVIGATE(screenId,transition,resetTargetPage,withValidation);
```

<span style={{fontSize: 24}}>Parameters</span>

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `screenId`| string | 'Screen Id' present in properties panel on the builder  |
| `transition`| string | 0 or 1 in string value                             |
| `resetTargetPage`| boolean | true/false                                   |
| `withValidation`| boolean | true/false                                    |

<span style={{fontSize: 24}}>Example</span>

```
UTILITY.NAVIGATE('screen-2','1',false,false);
```

## CONFETTI

`UTILITY.CONFETTI()` method can be used to trigger confetti action.

<span style={{fontSize: 24}}>Usage</span>

```
UTILITY.CONFETTI(spread,particleCount,originX,originY);
```

<span style={{fontSize: 24}}>Parameters</span>

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `spread`| number | any number to define confetti spread over the page     |
| `particleCount`| number | number of particles in confetti                 |
| `originX`| number | value in the range 0-1 for position on x-axis         |
| `originY`| number | value in the range 0-1 for position on y-axis         |


<span style={{fontSize: 24}}>Example</span>

```
UTILITY.CONFETTI(70,400,0.5,0.5);
```

## SHOWCTRLLOADER

`UTILITY.SHOWCTRLLOADER()` method can be used to show a loader on a particular control. 

<span style={{fontSize: 24}}>Usage</span>

```
UTILITY.SHOWCTRLLOADER(controlUniqueNameArray);
```

<span style={{fontSize: 24}}>Parameters</span>

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `controlUniqueNameArray`| array | array of strings (control unique names)    |

<span style={{fontSize: 24}}>Example</span>

```
UTILITY.SHOWCTRLLOADER(['dashboard','dashboard1']);
```

## HIDECTRLLOADER

`UTILITY.HIDECTRLLOADER()` method can be used to hide the loader which is running on particular control.

<span style={{fontSize: 24}}>Usage</span>

```
UTILITY.HIDECTRLLOADER(controlUniqueNameArray);
```

<span style={{fontSize: 24}}>Parameters</span>

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `controlUniqueNameArray`| array | array of strings (control unique names)    |

<span style={{fontSize: 24}}>Example</span>

```
UTILITY.HIDECTRLLOADER(['dashboard','dashboard1']);
```

## EXITAPP

`UTILITY.EXITAPP()` method can be used to trigger exit app action.

<span style={{fontSize: 24}}>Usage</span>

```
UTILITY.EXITAPP();
```

## LOGOUT

`UTILITY.LOGOUT()` method can be used to trigger logout action.

<span style={{fontSize: 24}}>Usage</span>

```
UTILITY.LOGOUT();
```

## REFRESHCTRLDATA

`UTILITY.REFRESHCTRLDATA()` method can be used to reset the value of a control. The method takes an *array of strings* as input which have unique names of the controls that need to be reset. 

<span style={{fontSize: 24}}>Usage</span>

```
UTILITY.REFRESHCTRLDATA(ctrlUniqueNames, triggerDependentDataQuery, tableGridPagination);
```

<span style={{fontSize: 24}}>Parameters</span>

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `ctrlUniqueNames`      | array  | array of strings (control unique names) |
| `triggerDependentDataQuery` | boolean  | true/false                       |
| `tableGridPagination`      | boolean  | true/false                        |



<span style={{fontSize: 24}}>Example</span>

```
UTILITY.REFRESHCTRLDATA(['textinput','textinput1'],false,false);
```

## INVOKEACTIONFLOW

`UTILITY.INVOKEACTIONFLOW()` method can be used to invoke an actionflow which set on any event of a control. The value for the `event_name` parameter is visible in the heading part of the actionflow builder screen.

<span style={{fontSize: 24}}>Usage</span>

```
UTILITY.INVOKEACTIONFLOW('controlUniqueName','event_name');
```

<span style={{fontSize: 24}}>Parameters</span>

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `controlUniqueName`   | string | control's unique name in string format   |
| `event_name` | string  | control's event name in string format            |



<span style={{fontSize: 24}}>Example</span>

```
UTILITY.INVOKEACTIONFLOW('button','button_click');
```

## COPYTOCLIPBOARD

`UTILITY.COPYTOCLIPBOARD()` method can be used to trigger the copy to clipboard action. 

<span style={{fontSize: 24}}>Usage</span>

```
UTILITY.COPYTOCLIPBOARD(text); 
```

<span style={{fontSize: 24}}>Parameters</span>

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `text`   | string  | any string value                           |


<span style={{fontSize: 24}}>Example</span>

```
UTILITY.COPYTOCLIPBOARD('DronaHQ'); 
```

## OPENURL

`UTILITY.OPENURL()` method can be used to open a url in a new tab. 

<span style={{fontSize: 24}}>Usage</span>

```
UTILITY.OPENURL(url);
```

<span style={{fontSize: 24}}>Parameters</span>

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `url`   | string  | any string value                           |

:::info
Please make sure that the url entered should always start with "https://"
:::

<span style={{fontSize: 24}}>Example</span>

```
UTILITY.OPENURL('https://www.google.com/');
```

## PLAYSOUND

`UTILITY.PLAYSOUND()` method can be used to play any mp3 file by passing url. 

<span style={{fontSize: 24}}>Usage</span>

```
UTILITY.PLAYSOUND(url);
```

<span style={{fontSize: 24}}>Parameters</span>

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `url`   | string  | any string value                           |


<span style={{fontSize: 24}}>Example</span>

```
UTILITY.PLAYSOUND('https://dronamobilepublic.s3.amazonaws.com/DRONA5_Team19020/content/app/images/Qg7Zwtep6a.mp3');
```

## NAVIGATETOAUTHSCREEN

`UTILITY.NAVIGATETOAUTHSCREEN()` method can be used to trigger the Navigate to Authentication Screen action. 

<span style={{fontSize: 24}}>Usage</span>

```
UTILITY.NAVIGATETOAUTHSCREEN(maintainCredentials,resetLogin);
```

<span style={{fontSize: 24}}>Parameters</span>

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `maintainCredentials`   | boolean  | true/false                           |
| `resetLogin` | boolean   | true/false                                     |


<span style={{fontSize: 24}}>Example</span>

```
UTILITY.NAVIGATETOAUTHSCREEN(false,false);
```

## MICROAPPNAV

`UTILITY.MICROAPPNAV()` method can be used to trigger the MicroApp Navigation action. It is also possible to pass key value pairs to the app we wish to navigate to in the form of an *array of objects*. The `appId` can be obtained from the actionflow builder in Microapp nav action.

<span style={{fontSize: 24}}>Usage</span>

```
UTILITY.MICROAPPNAV('appId',[{queryKey: 'yourkey', queryValue: 'yourvalue'}]);
```

<span style={{fontSize: 24}}>Parameters</span>

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `appId`   | string  | numerical appId in string form                      |
| `keyValueArray` | array   | array of objects containing key value pairs   |


<span style={{fontSize: 24}}>Example</span>

```
UTILITY.MICROAPPNAV('4139',[{queryKey: 'key1', queryValue: 'value1'}]);
```

## SETKVDATA

`UTILITY.SETKVDATA()` method can be used to store key value pairs locally. This method returns a `Promise`, so make sure to use the `await` keyword to successfully complete the operation.

<span style={{fontSize: 24}}>Usage</span>

```
UTILITY.SETKVDATA(key, value);
```

<span style={{fontSize: 24}}>Parameters</span>

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `key`      | string  | any string value          |
| `value`     | string  | any string value                                  |

<span style={{fontSize: 24}}>Example</span>

```
UTILITY.SETKVDATA('dronahq', {Name:John,Age:25})
```

## GETKVDATA

`UTILITY.GETKVDATA()` method can be used to retrieved the locally stored value using its unique key. This method returns a `Promise`, so make sure to use the `await` keyword to successfully complete the operation.

<span style={{fontSize: 24}}>Usage</span>

```
UTILITY.GETKVDATA(key);
```

<span style={{fontSize: 24}}>Parameters</span>

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `key`      | string  | any string value           |

<span style={{fontSize: 24}}>Example</span>

```
UTILITY.GETKVDATA('dronahq');
```

## CLEARKVDATA

`UTILITY.CLEARKVDATA()` method can be used to remove the locally stored key value pairs. This method returns a `Promise`, so make sure to use the `await` keyword to successfully complete the operation.

<span style={{fontSize: 24}}>Usage</span>

```
UTILITY.CLEARKVDATA(key)
```

<span style={{fontSize: 24}}>Parameters</span>

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `key`      | string  | any string value           |

<span style={{fontSize: 24}}>Example</span>

```
UTILITY.CLEARKVDATA(key)
```
