---
sidebar_position: 47
---

# Keywords

Keywords are predefined variables in a studio that users can use in their applications. They provide important information about the logged-in user or the application's state, which is vital for building logical workflows. In the Studio, there are three different sets of keywords available, each serving different purposes and located in various locations within the studio.

- [App builder keywords](./reference_keywords.md/#app-builder-keywords)
- [Automation keywords](./reference_keywords.md/#automation-keywords)
- [BPM Flow keywords](./reference_keywords.md/#bpm-flow-keywords)

## App builder keywords
In app development, keywords play a crucial role as they are used during the app-building process and are also visible in the app's preview and final published version. Generally, two types of keywords are utilized: `Dynamically generated` and `Predefined or Static`.

Dynamically generated keywords, such as Routing Keywords and Querystring Keywords, are generated dynamically based on configuration, allowing for more flexibility and customization.

On the other hand, Predefined or static keywords are pre-initialized during the app initialisation process. These keywords values may change if modified using actions or on some system events.

Following are list of all the static keywords:

 | Keyword | Description |
 | ------------------- | ------------------- |
 | USER EMAIL | Stores the logged-in user's email address. |
 | USERNAME | Stores the logged-in user's name. |
 | USERFIRSTNAME | Stores the name of the logged-in user. |
 | TRUE | Static keyword for boolean true. |
 | FALSE | Static keyword for boolean false. |
 | NULL | Static keyword for js null value. |
 | DATAENV | Stores the current data environment of the application and can be modified using the actions. |
 | DATAENVLIST | Stores the list of available data environments in the application. |
 | WORKFLOWENV | Stores the current workflow environment of the application. |
 | DEVICESIZE | Its value can be either Desktop or Mobile or Mobile portrait or Mobile landscape depending on the device and its orientation |
 | DEVICETYPE | Its value can be android, ios and web depending upon the type of device the user is using. |
 | MODE | Tells you if the device is either online or offline depending upon internet connectivity. |
 | WIDTH | Returns you the width of the viewport and is updated every time the viewport is resized. |
 | APPENV | Stores the App environment and cannot be modified. |
 | APPNAME | Stores the App name and cannot be modified. |
 | LANGUAGE | Stores the current app language, used in localization and can be modified using actions. |
 | VERSION | Stores the current version of the application. |
 | ACTIVESCREEN | Returns the current active screen id. |
 | OVERLAYSCREEN | Returns the current active overlay screens id like Menu / Popup / Tray |
 | USERGROUP | Returns all the group name the logged-in user belongs to. |
 | PROFILEIMAGE | Returns Profile image URL of the logged-in user |



## Automation Keywords

Automation keywords provide essential functionalities for DronaHQ's automation builder, enabling users to interact with incoming data, access automation-related details, and efficiently manage tasks within their automated workflows.

| Keyword                | Description                                                                                   |
|------------------------|-----------------------------------------------------------------------------------------------|
| AUTOMATION.version     | Retrieves the version of the running automation.                                              |
| AUTOMATION.triggerTime | Retrieves the start time of the trigger for the automation.                                   |
| AUTOMATION.logs        | Accesses the Run Logs within a task, storing preview task logs. Helps with debugging.         |
| webhook.body           | Accesses the body of the webhook request. Useful for extracting data from incoming requests.  |
| webhook.query          | Accesses the query parameters of the webhook request. Helps in processing URL parameters.     |
| webhook.headers        | Accesses the headers of the webhook request. Useful for authentication and request details.   |
| SELF                   | Refers to the current task. In the Logging section, use `SELF.output_variable_name` to access the task's output. Useful for data chaining between tasks. |

## BPM Flow keywords
