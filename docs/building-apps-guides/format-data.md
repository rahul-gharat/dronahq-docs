---
sidebar_position: 1
title: Format Data
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

For Connectors and when using the output of the Lookup formula, you would get different types of data from the respective sources. Typically, when presenting data in a Table grid control or any card control, you would prefer to make it visually appealing.

You have the option of applying conditional formatting or data type-specific formatting in Studio using the Format Data feature or property available for the table grid control, the detail view control, and the different card controls like compact card, single-user card, long card, and so on. The formatting options would differ based on the type of data. At times you may also apply formatting based on a condition. Now let's see the different types of formatting available.

## Conditional Formatting - Conditions

Typically conditional formatting involves providing the condition to check with the column data and then apply the selected formatting options.

![Conditional Formatting Conditions](insert-image-url-here)

The conditions available are as follows:

| Condition     | Data Type       | Description                              |
|--------------|-----------------|------------------------------------------|
| IsEmpty      | Text, Date, Time, Datetime, Numeric, Decimal | If the cell is empty or does not contain data, then apply a certain format. |
| IsNotEmpty   | Text, Date, Time, Datetime, Numeric, Decimal | If the cell is not empty or contains data. |
| Equal        | Text, Date, Time, Datetime, Numeric, Decimal | If the cell value is exactly equal to a certain value. |
| Not Equals   | Text, Date, Time, Datetime, Numeric, Decimal | If the cell value is not equal to a certain value. |
| Contains     | Text            | If the cell value contains a specified sequence of characters. |
| Not Contains | Text            | If the cell value does not include a specified sequence of characters. |
| Starts with  | Text            | If the cell value begins with the specified sequence of characters. |
| Does not start with | Text     | If the cell value does not begin with the specified sequence of characters. |
| Ends with    | Text            | If the cell value ends with the specified sequence of characters. |
| Does not end with | Text         | If the cell value does not end with the specified sequence of characters. |
| Greater than | Text, Date, Time, Datetime, Numeric, Decimal | If the cell value is more than a specified value. |
| Less than    | Text, Date, Time, Datetime, Numeric, Decimal | If the cell value is smaller than a specified value. |
| Greater than equal to | Text, Date, Time, Datetime, Numeric, Decimal | If the cell value is more than or equal to a specified value. |
| Less than equal to | Text, Date, Time, Datetime, Numeric, Decimal | If the cell value is smaller than or equal to a specified value. |

You can use these conditions in the specific column. If the condition is true, the formatting is applied to that cell/column data, which could include options like bold, italics, underline, strikethrough, cell background color, text color, and icon color.

## Text

Text data types include conditional formatting based on filters/conditions applied to the respective data. The data of the column being formatted should be text or string type data.

![Text Conditional Formatting](insert-image-url-here)

### Conditional formatting
Specify the condition to check the text type data for a column, and if the condition is true, the specific formatting is applied.

## Number and Decimal

For Numeric and Decimal data, you can add either of the following format types: Format, Prefix/Suffix, Conditional formatting.

### Format
Includes options to use the cell values as normal integers or use the Currency or Accounting format.

![Number and Decimal Format](insert-image-url-here)

### Prefix/Suffix
You can add a Prefix or a Suffix to your numeric values, such as a currency symbol or a percentage symbol.

### Conditional formatting
If you need to check each value based on a condition, like if the value is more than or equal to a certain amount, you can make use of conditional formatting.

## Toggle

When you have toggle switches to indicate data, like/dislike, star rating, toggle switch on or off, and so on, you can select styles such as a toggle switch, star, heart, like/dislike, checkmark, or flag.

### Styles
You can provide different styles of toggle symbols and use different colors for them.

![Toggle Styles](insert-image-url-here)

## Single Select and Multi-Select

Both single and multi-select have formatting to define options and add colors to categorize each type of option.

![Single Select and Multi-Select](insert-image-url-here)

## Percent

To format Percent type data, you can specify the limit between which the percentage amount would be formatted.

### Limit
Specify the minimum and maximum limit values. You can enable a progress bar to display in the column if the value is within the specified range.

## Rating

For Rating, you can add different styles to express the kind of rating you are indicating.

### Style
You can set icons like a star, heart shape, and set the color for each of the types, and also provide the maximum number of icons to provide the rating degree.

![Rating Styles](insert-image-url-here)

## URL, FileUpload, Email, TextArea, JSON Object, GeoLocation

There would be no formats for these data types.

You can refer to this article here to see how to use the data formatting for Connectors.

Also, refer to this article to know more about using data formatting when using LOOKUP formula for a Table grid control.
<div data-theme-toc="true"> </div>

---

Please note that you need to replace the "insert-image-url-here" placeholders with the actual image URLs where the images should be included. If you have any further requests or need more assistance, feel free to ask.