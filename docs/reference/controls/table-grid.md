---
sidebar_position: 1
title: Table Grid
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Table Grid control is a type of Display control that obtains data from a Sheet, connector, or other data source and displays it in a table format. The table can be sorted, filtered, paginated, and downloaded, and includes features like row selection and insertion, server-side pagination, and custom columns.


<figure>
  <Thumbnail src="/img/reference/controls/table-grid/preview.png" alt="table Grid" />
  <figcaption align = "center"><i>Table Grid</i></figcaption>
</figure>

## Binding Data Options

Table Grid control accepts array of objects to display data. There are different ways in which you can bind data to the Table Grid control.

### Static Data Option

To display static options in the Table Grid control, you can use the Bind Data option.

The Bind Data option must be specified as an array of objects. For example:

```js
  [
  {
    "id": 1,
    "name": "Carlyn Bartle",
    "email": "Carlyn.Bartle@example.com"
  },
  {
    "id": 2,
    "name": "Murry Rowsel",
    "email": "Murry.Rowsel@example.com"
  }
]
```

### Dynamic Data Option

You can dynamically Bind options by fetching data from `Data queries`, `Sheets` or `Custom functions` by binding the response to the Data Bind option. For example: 

Let's fetch data from a configured SQL connector."We have a predefined query, `getDetails`, that fetches data from the SQL database using the connector."  The SQL syntax for this query:

```sql
  SELECT * FROM orderdetails
```

In the Table Grid control, Bind Data Options, select the `Quick Select -> Connector Library -> SQL_Connector -> getDetails`

<figure>
  <Thumbnail src="/img/reference/controls/table-grid/dynamic.jpg" alt="Date Range Picker" />
  <figcaption align = "center"><i>Binding Dynamic data from connector to Table Grid control.</i></figcaption>
</figure>

Real-time visualization of table grid control changes in the builder view, with updated data fetched from an SQL database.

---

## Server-Side Pagination

Server-side pagination is a technique for displaying large data sets in a web application by dividing the data into pages and only sending the current page to the browser. This can improve performance and make the data easier to manage.


#### Key Benefits

- By only fetching the required data for the current page, server-side pagination reduces the load on both the client and server, leading to faster response times.
- This method handles large data sets efficiently, as it doesn't require loading all data at once.
- Improves the user experience by ensuring quick data retrieval and display, even with extensive data sets.

## Client-Side Pagination

Client-side pagination is another method used to manage large data sets in web applications. Unlike server-side pagination, where only the necessary data for the current page is fetched from the server, client-side pagination involves fetching the entire data set upfront and then dividing it into pages locally in the DronaHQ.


#### Key Benefits

- Since all data is loaded at once, client-side pagination is best suited for smaller data sets. For very large data sets, this can lead to performance issues such as slow loading times and high memory usage.
- Implementation is simpler as it doesn't require server-side changes or multiple requests to fetch data.
- Once the data is loaded, navigation between pages is instant, providing a smooth user experience without additional server requests.



:::info
To know about implementing pagination in Tablegrid control within DronaHQ, understand the types and configurations necessary for efficient data management. Pagination types include server-side, client-side, and cursor-based, each with unique benefits. Configure properties like pagination bar location and default cursor values to enhance functionality. Additionally, explore how to implement pagination for MySQL, GraphQL, and REST API data sources. For a comprehensive guide, you can read the [Pagination in Tablegrid Control](https://docs.dronahq.com/building-apps-concepts/pagination-in-tablegrid/) article.
:::

---


| Property | Description |
|---|---|
| Rows per page | This allows you to set the index value of the default selected row. |
| Default offset | This allows you to set the default Offset to start pagination from. |
| Default selected row | Is the row selected by default on loading of the data. |
| Height | This allows you to set the height for the table grid control. |
| Visible | By default you can set the visible rows and columns to specify the height of the control. |

:::caution NOTE
When the pagination is enabled your Filter and the Search features do not work on the columns. However, if you disable pagination you would note that the search provides you with the rows matching the search text. The Filter feature would also allow you specify the filter conditions
:::

## Properties

:::info 
To know about the various functionalities of interactive tables in DronaHQ, you can explore features such as data loading, column customization, and editable table columns. Additionally, learn how to handle events, pagination, and grouping data for a comprehensive table management experience. With options for row selection, dynamic UI customization, and aggregation footers. For an in-depth understanding, you can read the [Building Interactive tables](https://docs.dronahq.com/building-apps-guides/building-interactive-tables/) article.
:::

| Property | Description |
| --- | --- |
| Table Header | Specifies the font size and font weight for the table header. |
| Table Data | Specifies the font size and font weight for the table data. |
| Theme | Allows you to specify the theme for the table grid. |
| Row Background Colors | Set the background color for odd and even rows distinctively |
| Column Width | Allows you to specify the maximum and minimum width of the columns in the table. |

### Top Bar

| Property | Description |
|---|---|
| Searchbar | Toggle ON or OFF to Show the Searchbar. |
| Column reorder and visibility | Toggle button on ON/OFF enables you to reorder the columns and toggle the visibility of columns on the client-side of the app. |
| Add | Button to specify the buttons to be displayed. You can add the button for Add, update, delete, download, refresh, filters, quick filter, and row size. |
| Update | Select row/s and click Update to modify the record. |
| Delete | Select row/s and click Delete to delete the selected record. |
| Download File Name | Allows you to specify the default file name for the CSV file downloaded from the table grid. |
| Refresh | This will refresh the data in the Table grid depending upon the actions performed. |
| Filters | Allows you to apply Filter to the data. You can choose the filter and click Apply. The data would be displayed according to your selection. |
| Quick Filter | Allows you to add a quick filter for the selected column. Quick filter would be applied on columns that are of type Single Tag or Multi-Tag.|
| Row Size | This adds the option to change the row size as small, medium, or large. |
| Choose columns that will be editable | This property helps you to choose one or more than one column from the table grid and make it editable. |


### Display 

| Property | Description |
|---|---|
| Map | Toggle on or off the Map view to display data like the co-ordinates on a Map. |
| Default view | This allows you to select the default view as Map or List. |
| Show Thumbnails | Enable Show Thumbnails when you want your Images to be displayed as thumbnails. The column would be of type File. If it contains PDFs the PDF file icon would be shown. |
| Detailed view | This allows you to switch ON or OFF to show data in the Detailed view of your sheet data. Whenever you click any of the records it would display the row data as a detailed view. |
| Show Key Value Map | This would display the selected row as a key-value map instead of the default grid (as seen in above screenshot). |
| Customize | By switching on Customize, you can customize the columns shown in the detailed view. By default all columns are shown, however, you can select a limited number as well if you want to give a quick look at the data. |
| Select column | When you enable Customize property above, you can then select the columns to be displayed in the Detailed view. |
| Group data | Enable to Group your Data and select the column to Group By. The rows would appear in the Accordion Style selected. |
| Group by | Allows you to select the column to group by. |
| Show Aggregation Footer | This checkbox allows you to generate an aggregate value of different distinct information such as unique values, the number of values, the sum of values, empty values, checked values, and more, then displays the result at the bottom of its respective columns. |
| Freeze Columns | This property enables you to select the number of columns from the table grid control which you want to appear as frozen in tablegrid control while doing horizontal scrolling on it. |
| Fit height to screen | Enable to set the Height of the Table grid to fit the screen. During pagination, the table fits the screen and you can scroll within the table within the area. |
| Checkbox | This allows you to add a single select or multi-select check box in your table grid data. It has options as Yes (with single select), Yes (with multi-select), and No. |
| Pagination | This allows you to enable pagination for your data. When you allow pagination some more properties would be added to your list of properties. You can have Limit Offset based pagination or Cursor Based Pagination.| Height | This allows you to set the height for the table grid control.| | Height | This allows you to set the height for the table grid control. | By default you can set the visible rows and columns to specify the height of the control.

### Actions

| Property | Description |
|---|---|
| On Row click | This is the default action on click of the Table grid row. You can Navigate to another page, Select a Row, or Show details. |
| Navigate with Selection | If you select the Navigate with Selection action you would be able to further define the navigation. |
| Type | Specify the type of navigation as Navigate (With validation) or Navigate (Without validation). |
| To | Specify the page/ screen to navigate to. |
| Transition | You can specify the transition style for your page when navigating. |
| Actions | The remaining Actions (Action 1, Action 2…) allow you to set the actions that would be performed when the row/s are selected. |
| Action Text | Add a Action Text and select a color for the Action Text. |
| Icon | Allows you to select the Icon for the action. |
| Color | Allows you to add the color of the icon. |
| Show on | Allows you to set when the action should be shown. It can be Single-select, Multiselect, or Both. |
| Show on hover | Allows you to set whether the action or action icon would be shown when you hover over the selected row. |
| Bind to Column | Now you can bind the hover functionality of the action or action icon to a specific column instead of the end of the table. |
| Add as column | This adds the action as a column which can then be selected by you to trigger further action. It will appear as the action text in the last column by default but you can set the position for the column to display in your table grid control using Column Index of Action by specifying the position for the column to be added in numeric value. |



## Control Outputs


These outputs can be referenced in other controls, data queries, or JS functions using the control's unique name.


| Property | Description |
|---|---|
| {{tablegrid.PROPERTIES.SEARCHTEXT}} | The search text that is currently being used to filter the data in the table grid. |
| {{tablegrid.PROPERTIES.OFFSET}} | The offset of the first row that is currently being displayed in the table grid. |
| {{tablegrid.PROPERTIES.LIMIT}} | The number of rows that are currently being displayed in the table grid. |
| {{tablegrid.PROPERTIES.STARTROW}} | The index of the first row that is currently being displayed in the table grid. |
| {{tablegrid.PROPERTIES.ENDROW}} | The index of the last row that is currently being displayed in the table grid. |
| {{tablegrid.PROPERTIES.EDITEDROWS}} | The number of rows that have been edited in the table grid. This keyword sends the whole array of the row data whose columns have been edited.  |
| {{tablegrid.PROPERTIES.NEWROWS}} | The number of rows that have been newly created in the table grid. |
| {{tablegrid.PROPERTIES.SELECTEDROWS}} | The number of rows that are currently selected in the table grid. |
| {{tablegrid.PROPERTIES.EDITEDTABLE}} | This property allows users to edit data in a table grid without making any changes to the underlying data source. The altered data can be used by the table grid itself or exported to another data source.|



## Events


| Trigger       | Description                                                                                       |
|---------------|---------------------------------------------------------------------------------------------------|
| row_select    | Occurs when a row in the table or a list is selected.                                               |
| add_click     | Occurs when the add  button for adding new items is clicked.                                   |
| update_click  | Occurs when the update button for updating existing items is clicked.                            |
| delete_click  | Occurs when the delete button for deleting items is clicked.                                     |
| save_changes  | Occurs when the save button for saving changes is clicked, typically after editing or updating.|
| refresh_click | Occurs when  you click the refresh button of the table grid control |
