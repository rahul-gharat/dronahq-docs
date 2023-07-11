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



### Display 



### Actions




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


