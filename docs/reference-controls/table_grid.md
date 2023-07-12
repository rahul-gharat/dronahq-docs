---
sidebar_position: 1
title: Table Grid
---

import Image from '@site/src/components/Image'; import VersionedLink from '@site/src/components/VersionedLink'; import
Thumbnail from '@site/src/components/Thumbnail';

The Table Grid control is a type of Display control that obtains data from a Sheet, connector, or other data source and displays it in a table format. The table can be sorted, filtered, paginated, and downloaded, and includes features like row selection and insertion, server-side pagination, and custom columns.


<figure>
  <Thumbnail src="/img/reference/controls/table-grid/preview.png" alt="Date Range Picker" />
  <figcaption align = "center"><i>Table Grid</i></figcaption>
</figure>

## Binding Data Options

Table Grid control accepts array of objects to display data. There are different ways in which you can bind data to the Table Grid control.

### Static Data Option



### Dynamic Data Option




## Properties
| Property | Description |
| --- | --- |
| Table Header | Specifies the font size and font weight for the table header. |
| Table Data | Specifies the font size and font weight for the table data. |
| Theme | Allows you to specify the theme for the table grid. |
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
| Show Thumbnails | Enable Show Thambnails when you want your Images to be displayed as thumbnails. The column would be of type File. If it contains PDFs the PDF file icon would be shown. |
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


Edited Rows, Edited Table and Selected Rows


{{tablegrid6.PROPERTIES.SEARCHTEXT}}

{{tablegrid6.PROPERTIES.OFFSET}}

{{tablegrid6.PROPERTIES.LIMIT}}

{{tablegrid6.PROPERTIES.STARTROW}}


{{tablegrid6.PROPERTIES.ENDROW}}

{{tablegrid6.PROPERTIES.EDITEDROWS}}

{{tablegrid6.PROPERTIES.NEWROWS}}

{{tablegrid6.PROPERTIES.SELECTEDROWS}}

{{tablegrid6.PROPERTIES.EDITEDTABLE}}



## Events


