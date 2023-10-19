---
sidebar_position: 1
title: Google Sheets
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

Google Sheets and DronaHQ integration is an easy and assured go-to solution to build user interfaces over the structured data storage that is the power of Google sheets.

## Configuring API Connector in DronaHQ

Add a `Account name`. Then click `Save`, it will open a pop-up window asking you to sign-in into your Google account. Continue with the steps and give access to DronaHQ to connect with your Google for its Sheets ID and information.

<figure>
  <Thumbnail src="/img/reference/connectors/googlesheet/signin.png" alt="Sign-in to your Google account" />
  <figcaption align = "center"><i>Sign-in to your Google account</i></figcaption>
</figure>

After successfully configuring and saving the connector settings, you can easily access your newly connected account by navigating to the `connected accounts` list. You can find this option from the `Connector -> Manage Account` section. This centralized location allows you to conveniently monitor and manage your connected accounts.


## Supported API endpoints


| Action             | Description                                                                |
|--------------------|----------------------------------------------------------------------------|
| GetAllRowsV2       | Retrieve all rows from a specific sheet in a Google Sheets document.       |
| FindRowsV2         | Search and retrieve rows from a specific sheet based on specified criteria. |
| GetAllSheets       | Get a list of all sheets within a Google Sheets document.                   |
| GetSheetDetails    | Retrieve details and properties of a specific sheet.                         |
| CreateSheet        | Create a new sheet within a Google Sheets document.                         |
| GetAllRows         | Retrieve all rows from a specific sheet in a Google Sheets document.        |
| AddRows            | Add new rows to a specific sheet in a Google Sheets document.               |
| Find Rows          | Search and retrieve rows from a specific sheet based on specified criteria. |
| UpdateRow          | Update the content of a specific row in a Google Sheets document.           |
| Clear Row          | Clear the content of a specific row in a Google Sheets document.            |
| Find a Row         | Search and retrieve rows from a specific sheet based on specified criteria. |
| AddMultipleRows    | Add multiple rows to a specific sheet in a Google Sheets document.          |
| FindDriveFiles     | Search and retrieve Google Drive files related to Google Sheets.            |
| GetSingleRow       | Retrieve a single row from a specific sheet based on row number.            |
| ClearMultipleRows  | Clear content from multiple rows in a Google Sheets document.               |
| UpdateMultipleRows | Update content in multiple rows within a Google Sheets document.            |

## Using Google Sheets Connector

### Get all rows

To fetch all rows matching criteria you can use the `GetAllRows` connector. To configure fields you can provide the dynamic values using the `keywords`. You can add `variables` to return a response value to this connector. There are several Output values returned which can be used as required. 

In this example shown below, will first fetch all the rows matching the Search Value which is a dynamic value provided using the keywords.

1. Use variables to fetch the data from column `B` for the searched rows. You can see here that we have also used the Row number as well as a return value. These Row number values can be used in other use cases or scenarios like updating rows, deleting rows based on certain conditions, and so on.
<figure>
  <Thumbnail src="/img/reference/connectors/googlesheet/getall1.jpeg" alt="Configuring feilds to do multiple row clearing." />
</figure>

2. While using `GetAll Rows` in Google Sheets the response had fixed keys values.A and values.B and so on. DronaHQ has introduced a new enhanced feature Use `Header Rows` option that replaces the fixed keys with headings in your sheets.

3. For the `GetAll Rows` option, you provide the required inputs, and view the result with fixed keys `B` and `C`.

<figure>
  <Thumbnail src="/img/reference/connectors/googlesheet/getall2.png" alt="Configuring feilds to do multiple row clearing." />
</figure>

In the above example we can view fixed keys `B` and `C` whereas the headings of the google sheets action-name, type and so on are viewed as rows.

3. Now change the Use Header Row in Response to `True/Yes`. Click Refresh Response you will be able to view this screen.

<figure>
  <Thumbnail src="/img/reference/connectors/googlesheet/getall3.png" alt="Configuring feilds to do multiple row clearing." />
</figure>


### Get Single Row

To fetch the row details of a specific row number provided by the user can be done by using the GetSingleRow subcategory of the Google Sheet API connector.
You just have to select the subcategory and provide the sheet details such as the spreadsheet name and sheet ID along with the row number. These details will be used to fetch the row details of a specific row number from a certain spreadsheet.

<figure>
  <Thumbnail src="/img/reference/connectors/googlesheet/getsingle.png" alt="Configuring feilds to do multiple row clearing." />
</figure>

You can add this connector in the data bind section or action of any control. Select the columns to bind in the control as keys. We will be using table grid control to view the data received by the API subcategory.


<figure>
  <Thumbnail src="/img/reference/connectors/googlesheet/table.png" alt="Configuring feilds to do multiple row clearing." />
</figure>


### Clearing multiple rows

The Clear multiple rows option comes to help when you want to clear multiple rows to Google Sheets. You can use data from tablegrid control for instance to clear data to your google sheet.

Pass an array of rows’ numbers in the method along with the spreadsheet name and its sheet name.

<figure>
  <Thumbnail src="/img/reference/connectors/googlesheet/clearmulti.jpeg" alt="Configuring feilds to do multiple row clearing." />
  <figcaption align = "center"><i>Configuring feilds to do multiple row clearing.</i></figcaption>
</figure>




