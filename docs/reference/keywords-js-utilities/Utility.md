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

## SETLOCALSTORAGE

`UTILITY.SETLOCALSTORAGE()` method can be used to store key value pairs locally. This method returns a `Promise`, so make sure to use the `await` keyword to successfully complete the operation.

<span style={{fontSize: 24}}>Usage</span>

```
UTILITY.SETLOCALSTORAGE(key, value);
```

<span style={{fontSize: 24}}>Parameters</span>

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `key`      | string  | any string value          |
| `value`     | string  | any string value                                  |

<span style={{fontSize: 24}}>Example</span>

```
UTILITY.SETLOCALSTORAGE('dronahq', {Name:John,Age:25})
```

## GETLOCALSTORAGE

`UTILITY.GETLOCALSTORAGE()` method can be used to retrieved the locally stored value using its unique key. This method returns a `Promise`, so make sure to use the `await` keyword to successfully complete the operation.

<span style={{fontSize: 24}}>Usage</span>

```
UTILITY.GETLOCALSTORAGE(key);
```

<span style={{fontSize: 24}}>Parameters</span>

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `key`      | string  | any string value           |

<span style={{fontSize: 24}}>Example</span>

```
UTILITY.GETLOCALSTORAGE('dronahq');
```

## CLEARLOCALSTORAGE

`UTILITY.CLEARLOCALSTORAGE()` method can be used to remove the locally stored key value pairs. This method returns a `Promise`, so make sure to use the `await` keyword to successfully complete the operation.

<span style={{fontSize: 24}}>Usage</span>

```
UTILITY.CLEARLOCALSTORAGE(key)
```

<span style={{fontSize: 24}}>Parameters</span>

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `key`      | string  | any string value           |

<span style={{fontSize: 24}}>Example</span>

```
UTILITY.CLEARLOCALSTORAGE(key)
```
Here’s your formatted documentation for `SETPROPERTY`:  

## SETPROPERTY  

The `UTILITY.SETPROPERTY()` method allows you to dynamically set properties like `read_only` and `required` on input elements, controlling user interaction and validation.  

#### Usage  

```javascript
UTILITY.SETPROPERTY([
   { ctrlName: "controlUniqueName", property: "property_name" },
   { ctrlName: "anotherControlUniqueName", property: "property_name" }
]);
```

#### Parameters  

| Parameter  | Accepts | Possible Values                                      |
|------------|---------|------------------------------------------------------|
| `ctrlName` | string  | Unique name of the control where the property is set. |
| `property` | string  | Property name to set. Possible values: "read_only", "required". |

#### Example  

```javascript
UTILITY.SETPROPERTY([
   { ctrlName: "textinput1", property: "read_only" },
   { ctrlName: "textinput2", property: "required" }
]);
```  

## REMOVEPROPERTY  

`UTILITY.REMOVEPROPERTY()` method can be used to dynamically remove specific properties from input controls. The method takes an object, where the object specifies the control name and the property to be removed.


#### Usage  

```UTILITY.REMOVEPROPERTY([{ ctrlName: "controlName", property: "propertyName" }]);```



#### Parameters  
| Parameter              | Accepts | Possible Values                                                                                  |
|------------------------|---------|--------------------------------------------------------------------------------------------------|
| `ctrlName`             | string  | Unique name of the control where the property is to be removed.                                  |
| `property`             | string  | Property name to remove. Possible values are: "read_only" (to make the control editable) or "required" (to make it optional). |


#### Example  
```javascript
UTILITY.REMOVEPROPERTY([
   { ctrlName: "textinput1", property: "read_only" }
]);
```

## REDIRECTPARENTUTILITY  

The `UTILITY.REDIRECTPARENTUTILITY()` method allows you to redirect the parent of an iframe to a specified URL. This is useful when your micro-app is embedded within a parent website, enabling controlled navigation to an external destination.  

#### Usage  

```javascript
UTILITY.REDIRECTPARENTUTILITY("URL");
```

#### Parameters  

| Parameter | Accepts | Description |
|-----------|---------|-------------|
| `URL`     | string  | The destination URL to which the parent window should be redirected. |

#### Example  

```javascript
UTILITY.REDIRECTPARENTUTILITY("https://docs.dronahq.com/reference/keywords-js-utilities/Utility/#setctrlvalue");
```  

## DownloadFileFromURL  

The `UTILITY.DownloadFileFromURL()` method allows users to dynamically download files directly to their devices. This method returns a `Promise` so the response needs to be captured using `await` keyword.

#### Usage  

```javascript
UTILITY.DownloadFileFromURL(downloadUrl,fileName,headers,pathOfAndroid,pathOfIos,[{ queryKey: "keyName", queryValue: "key_value" },{ queryKey: "anotherKeyName", queryValue: "key_value" }]);
```

<span style={{fontSize: 24}}>Parameters</span>

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `downloadUrl`      | string  | A valid HTTP or HTTPS URL pointing to the downloadable file.  |
| `fileName`     | string  | A valid file name with extension.                                |
| `headers`   | string  | JSON object of Headers                                  |
| `pathOfAndroid`  | string  | 'application_directory', 'document_directory', 'cache_directory'  |
| `pathOfIos`| string | 'application_directory', 'document_directory', 'cache_directory'  |
| `queryKey`   | string  | Alphanumeric strings used as parameter names in the URL query string.  |
| `queryValue`   | string  | Values corresponding to query string keys.  |

<span style={{fontSize: 24}}>Example</span>

#### Example  

```javascript
await UTILITY.DownloadFileFromURL("https://file-examples.com/wp-content/storage/2017/02/file-sample_1MB.doc", "test.doc", {"Content-Type": "application/json","token": "1234567890"}, "application_directory", "cache_directory", [{ queryKey: "userId", queryValue: "1" },{ queryKey: "emailId", queryValue:"user@gmail.com" }]);
```   

When the `Promise` resolves, the user input will be received in the `output` key inside a javascript object:

```
{
  output: 'file:///storage/emulated/0/Android/data/com.deltecs.dhqone/files/Cordova/simple.txt',
  success: true
}
```

## OpenFile  

The `UTILITY.OpenFile()` method allows users to dynamically open files directly from their devices locally. This method returns a `Promise` so the response needs to be captured using `await` keyword.

#### Usage  

```javascript
UTILITY.OpenFile(filePath,mimeType);
```

<span style={{fontSize: 24}}>Parameters</span>

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `filePath`      | string  | A valid absolute or relative path to a file.  |
| `mimeType`| string | 'application/pdf', 'application/vnd.ms-excel', 'application/msword', 'application/vnd.android.package-archive', 'audio/mpeg', 'video/mp4', 'image/png', 'image/jpeg', 'text/plain', 'text/csv'  |

<span style={{fontSize: 24}}>Example</span>

#### Example  

```javascript
await UTILITY.OpenFile("/storage/emulated/0/Download/file.pdf","application/pdf");
```  

When the `Promise` resolves, the user input will be received in the `output` key inside a javascript object:

```
{
  output: 'file opened successfully'
}
```

## ReadFile  

The `UTILITY.ReadFile()` method allows users to dynamically read files directly from their devices locally. This method is supported only on Android and iOS platforms. This method returns a `Promise` so the response needs to be captured using `await` keyword.

#### Usage  

```javascript
UTILITY.ReadFile(filePath);
```

<span style={{fontSize: 24}}>Parameters</span>

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `filePath`      | string  | A valid absolute or relative path to a file.  |

<span style={{fontSize: 24}}>Example</span>

#### Example  

```javascript
await UTILITY.ReadFile("/storage/emulated/0/Download/file.pdf");
```  

When the `Promise` resolves, the user input will be received in the `output` key inside a javascript object:

```
{
  output: 'This is file content.'
}
```

## WriteFile  

The `UTILITY.WriteFile()` method allows users to dynamically write files directly to their devices locally. This method is supported only on Android and iOS platforms. This method returns a `Promise` so the response needs to be captured using `await` keyword.

#### Usage  

```javascript
UTILITY.WriteFile(fileName,fileContent,appendData,contentType,pathOfAndroid,pathOfIos);
```

<span style={{fontSize: 24}}>Parameters</span>

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `fileName`     | string  | A valid file name with extension.                                |
| `fileContent`   | string  | The actual content of the file                                  |
| `appendData`   | boolean  | true/false                                  |
| `contentType`   | string  | 'text/plain', 'application/pdf', 'application/msword', 'application/vnd.ms-excel', 'text/csv', 'application/json', 'image/png'                                  |
| `pathOfAndroid`  | string  | 'application_directory', 'document_directory', 'cache_directory'  |
| `pathOfIos`| string | 'application_directory', 'document_directory', 'cache_directory'  |

<span style={{fontSize: 24}}>Example</span>

#### Example  

```javascript
await UTILITY.WriteFile("test.pdf","This is a test file",true,"application/pdf","document_directory","application_directory");
```  

When the `Promise` resolves, the user input will be received in the `output` key inside a javascript object:

```
{
  output: 'file:///storage/emulated/0/Android/data/com.deltecs.dhqone/files/Cordova/simple.txt',
  contentType: 'text/plain'
}
```

## MpinVerification  

The `UTILITY.MpinVerification()` method enables users to verify their MPIN (Mobile Personal Identification Number) as a means to securely access the app. This method is supported only on Android and iOS platforms. This method returns a `Promise` so the response needs to be captured using `await` keyword.

#### Usage  

```javascript
await UTILITY.MpinVerification();
```  

When the `Promise` resolves, the user input will be received in the `output` key inside a javascript object:

```
{
  output: 'Verified'
}
```


## FLASHLIGHT  

The `UTILITY.Flashlight()` method allows users to turn on/off flashlight in Android/iOS mobile app.

#### Usage  

```javascript
UTILITY.Flashlight(mode,intensity);
```

<span style={{fontSize: 24}}>Parameters</span>

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `flashlight_mode`      | string  | 'ON', 'OFF'  |
| `flashlight_intensity` | number | Select audio intensity level such as low = 0.3, medium = 0.7, high = 1.0  |

<span style={{fontSize: 24}}>Example</span>

#### Example  

<span style={{fontSize: 24}}>Example for Flashlight ON</span>

```javascript
UTILITY.Flashlight("ON", 0.7);
```  
<span style={{fontSize: 24}}>Example for Flashlight OFF</span>

```javascript
UTILITY.Flashlight("OFF", 0.7);
```  

:::info NOTE
### Flashlight OFF

If flashlight mode is `OFF` then intensity value will be ignored.

:::


## TEXTTOSPEECH  

The `UTILITY.TEXTTOSPEECH()` method converts text into spoken audio output in Android/iOS mobile app. This is particularly useful for creating accessible interfaces or adding audio feedback to your applications

#### Usage  

```javascript
UTILITY.TEXTTOSPEECH(inputtext, rate, locale);
```

<span style={{fontSize: 24}}>Parameters</span>

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `inputtext` | string  | Input the text you want to convert into speech  |
| `rate`      |  number | Define the speed of speech. Acceptable values range from 0.0 (slowest) to 10.0 (fastest). Default is 1.0 for a normal speaking rate  |
| `locale`    | string  | Choose the language and voice setting for the speech output. The values for locale are English = `en-US`, Spanish = `es-ES`, French = `fr-FR`, German = `de-DE`, Italian = `it-IT`, Chinese = `zh-CN`, Japanese = `ja-JP`, Korean = `ko-KR`, Russian = `ru-RU`, Portuguese = `pt-PT`  |


#### Example  

```javascript
UTILITY.TEXTTOSPEECH("hello how you doing", 0.1, "en-US");
```  


## GETADDRESSFROMCOORDINATES  

The `UTILITY.GETADDRESSFROMCOORDINATES()` method allows users to get address from latitude and longitude coordinates in Android/iOS mobile apps. 

#### Usage  

```javascript
UTILITY.GETADDRESSFROMCOORDINATES(latitude, longitude, maxResults);
```

<span style={{fontSize: 24}}>Parameters</span>

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `latitude`    | string  | Enter the latitude coordinate  |
| `longitude`   | string | Enter the longitude coordinate  |
| `maxResults`  | number  | Select from range '1', '2', '3', '4', '5' to specify the maximum number of address results to return. |


#### Example  

```javascript
UTILITY.GETADDRESSFROMCOORDINATES("11.947148", "79.827917", 1);
```  

## GETCOORDINATESFROMADDRESS  

The `UTILITY.GETCOORDINATESFROMADDRESS()` method allows users to Get Coordinates from Address action allows users to retrieve geographical coordinates (latitude and longitude) based on a given address in Android/iOS mobile apps.

#### Usage  

```javascript
UTILITY.GETCOORDINATESFROMADDRESS(address, maxResults);
```

<span style={{fontSize: 24}}>Parameters</span>

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `address`     | string  | The address to retrieve the coordinates for.  |
| `maxResults`  | number  | Select from range '1', '2', '3', '4', '5' to specify the maximum number of coordinate results to return.  |


#### Example  

```javascript
UTILITY.GETCOORDINATESFROMADDRESS("201 W 79th St, New York, NY 10024, United States", 1);
```  


## SECUREAPICALL

`UTILITY.SECUREAPICALL()` to enables developers to transmit sensitive data securely through API requests. It is ideal for scenarios like authentication, data fetching, and third-party integrations. This action supports flexible configuration, ensuring secure and efficient communication in Android/iOS mobile app. For web, we are using AJAX API call. This method returns a success or failure response. The response of this action can captured using {{SECUREAPICALL.output}}. This method returns a `promise` and to get the response use `await` keyword.

<span style={{fontSize: 24}}>Usage</span>

```
UTILITY.SECUREAPICALL(url, httpMethod, headers, data, trustMode, useProxy, timeout);
```

<span style={{fontSize: 24}}>Parameters</span>

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `url`      | string  | The API URL to which the request is sent (e.g., https://api.example.com).  |
| `method`     | string  | The request method, such as 'GET', 'POST', 'PUT', 'PATCH', 'DELETE' |
| `headers`     | object  | Key-value pairs for headers (e.g., { "Authorization": "Bearer token" }). |
| `data`     | object  | Key-value pairs for request body (e.g., { "key": "value" }). |
| `trustMode`     | string  | Select trust mode for secure communication such as `default`, `nocheck`, `pinned` |
| `useProxy`     | boolean  | true/false to use proxy (web only) |
| `timeout`     | number  | Timeout duration in milliseconds |


<span style={{fontSize: 24}}>Example GET Request</span>

```
await UTILITY.SECUREAPICALL('https://exampleapi.com/api/users/','GET', '', '', 'default', false, 180000);
```

:::info
headers, data, trustMode, useProxy and timeout are optional parameters, in case you don't want to specify any of them, put an empty string ('') instead while calling the method.
:::

<span style={{fontSize: 24}}>Example POST Request</span>

```
await UTILITY.SECUREAPICALL("https://exampleapi.com/api/users/", "POST", "", "{'name':'John','place':'New York'}", "nocheck", false, 180000);
```

## STARTGPSLOCATIONTRACKING  

The `UTILITY.StartGPSLocationTracking()` allows app to continuously track the device's geographical location, even when the app is in the background or the device is in sleep mode in native Android/iOS mobile app. Start GPS Tracking keeps tracking automatically sends location updates to a user-provided API endpoint. This method returns a `promise` and to get the response use `await` keyword.

#### Usage  

```javascript
UTILITY.StartGPSLocationTracking(stationaryRadius, distanceFilter, locationProvider, desiredAccuracy, notificationsEnabled, notificationTitle, notificationText, interval, fastestInterval, activitiesInterval, url, httpHeader, postTemplate, pauseLocationUpdates, saveBatteryOnBackground);
```

<span style={{fontSize: 24}}>Parameters</span>

| Parameter            | Accepts | Platform       | Possible values / Description |
|----------------------|---------|---------------|---------------------------------------------------|
| `url`               | string  | Android, iOS      | Server url where to send HTTP POST with recorded locations |
| `headers`        | object  | Android, iOS         | Optional HTTP headers sent along in HTTP request. Provide Key value pairs ex: {"Content-Type": "application/json"} |
| `data`      | object  | Android, iOS              | All wanted location properties have to be prefixed with @. For all available properties check [Location event](https://haylltd.github.io/cordova-background-geolocation-plugin/events#location-event). For Example: {"latitude" : "@latitude", "longitude" : "@longitude", "foo": "bar" } where, @latitude and @longitude will be replace by actual user’s location lat and long respectively while sending api call| 
| `stationaryRadius`   | number  | Android, iOS     | Stationary radius value in meters |
| `distanceFilter`     | number  | Android, iOS     | Distance Filter value in meters |
| `desiredAccuracy`    | number  | Android, iOS     | Determines how precise the location updates should be. Desired accuracy values in meters. Possible values are `HIGH_ACCURACY` = 10, `MEDIUM_ACCURACY` = 100, `LOW_ACCURACY` = 1000 |
| `locationProvider`   | number  | Android only     | Used to obtain location data. Different providers offer different balances of accuracy, battery efficiency, and availability. Possible values are `Android Distance Filter Provider` = 0, `Android Activity Provider` = 1, `Raw Provider` = 2. Set location provider. [Location Providers](https://github.com/mauron85/cordova-plugin-background-geolocation/blob/master/PROVIDERS.md) |
| `notificationsEnabled` | boolean | Android only   | Enable/disable local notifications when tracking and syncing locations. |
| `notificationTitle`  | string  | Android only     | Custom notification title in the drawer |
| `notificationText`   | string  | Android only     | Custom notification text in the drawer |
| `interval`          | number  | Android only      | Interval duration in milliseconds |
| `fastestInterval`   | number  | Android only      | Fastest Interval duration in milliseconds |
| `activitiesInterval`| number  | Android only      | Activities Interval duration in milliseconds |
| `pauseLocationUpdates` | boolean | iOS only       | It temporarily suspend location tracking while keeping the background service active. This is useful for conserving battery when you know the user won't be moving for a period of time |
| `saveBatteryOnBackground` | boolean | iOS only    | Switch to less accurate significant changes and region monitory when in background |


#### Example  

```javascript
await UTILITY.StartGPSLocationTracking("https://example.com/gpslocation", {"Content-Type": "application/json"}, {"latitude":"@latitude","longitude":"@longitude"}, 10, 0, 50, 50, true, "App Name", "Tracking your location in background", 10000, 5000, 10000, true, true);
```  

## STOPGPSLOCATIONTRACKING

await `UTILITY.StopGPSLocationTracking()` allows to gracefully terminate background location tracking when it's no longer needed native Android/iOS mobile app. This method returns a `promise` and to get the response use `await` keyword.

<span style={{fontSize: 24}}>Usage</span>

```javascript
await UTILITY.StopGPSLocationTracking();
```

## CHANGESTATE

`UTILITY.CHANGESTATE()` method updates the state of one or more controls by setting, removing, or toggling specified states dynamically in order to set the state of multiple control across screens from one place.


#### Usage

```jsx
UTILITY.CHANGESTATE(
  [
    { ctrlName: 'controlUniqueName', stateOperation: 'set',    states: ['StateName'] },
    { ctrlName: 'anotherControlName', stateOperation: 'remove', states: ['StateName'] },
    { ctrlName: 'thirdControlName',  stateOperation: 'toggle', states: ['StateName', 'AnotherStateName'] }
  ]
);

```

#### Parameters


| Parameter          | Accepts         | Possible Values                                                                 |
| ------------------ | --------------- | ------------------------------------------------------------------------------- |
| **ctrlName**       | `string`        | Unique name of the control whose state will be modified.                        |
| **stateOperation** | `string`        | Type of operation to perform. Possible values: `"set"`, `"remove"`, `"toggle"`. |
| **states**         | `array[string]` | If you select Toggle, provide an array of multiple states to toggle through; for other operations, provide an array with a single state.       |


#### Example

```jsx
UTILITY.CHANGESTATE([
   { ctrlName: "button8", stateOperation: "set", states: ["Disable"] },
   { ctrlName: "button9", stateOperation: "remove", states: ["Disable"] },
   { ctrlName: "button10", stateOperation: "toggle", states: ["Enable","Disable"] }
]);
```