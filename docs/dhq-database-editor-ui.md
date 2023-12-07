---
sidebar_position: 142
---

import Thumbnail from '@site/src/components/Thumbnail';

# Database Editor UI

The Database Editor UI or Sheet UI Interface simplifies interaction with your stored data, organized in tables, fields, and records. This streamlined process facilitates easy table creation and field manipulation without the need for writing down complex SQL queries. Customize field data types and configure advanced properties — such as nullable, unique, default values, etc. You can seamlessly navigate between tables, add or edit records, search for specific values within records, and easily download table data in CSV format. Utilize the `Hide` option to hide unnecessary fields and reveal them later as needed. Additionally, the `Row Height` option allows you to adjust the row size, enabling comfortable viewing of extensive field values without the need of manual resizing.

## Manage tables

You can create a table by specifying its name and adding necessary fields, configuring the definition for each as required. Access the table menu, denoted by a `hamburger` icon at the top left corner of the screen, and select the `+ New` button to initiate table creation. Additionally, you have the option to rename or delete the table according to your preference.

<div style={{ position: 'relative', paddingBottom: 'calc(45.708333333333336% + 41px)', height: 0 }}>
  <iframe
    src="https://demo.arcade.software/2bZZgk3PGrQsUV9sYGNj?embed"
    title="DronaHQ Database - Create Table flow"
    frameBorder="0"
    loading="lazy"
    allowFullScreen
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', colorScheme: 'light' }}
    webkitallowfullscreen
    mozallowfullscreen
  ></iframe>
</div>

## Add or edit records

You can add a row by either clicking the `+ Row` option or by directly typing in the last row and pressing 'Tab' or 'Enter' to create a new row. To modify any field value, simply click on the cell, edit its content, and upon focusing out from that field, the modified value will be automatically reflected to the database if it's a valid entry.

## Create, edit and delete fields

To add fields to the table, simply click on the `+ Column` option. Specify the name, data type, and configure advanced properties such as nullable, unique, and default values for the field type. Additionally, you can rename, modify the data type, or adjust properties of any field by clicking on the chevron icon located to the right of the field name. If any field is no longer needed, it can also be deleted.

## Customize which fields to show

Manage field visibility using the `Hide` option. Very useful when working with extensive tables, you can hide fields that are not currently required. Simply toggle the switch located to the right of a field's name to show or hide specific fields. When fields are hidden, the 'Hide' option stays active and indicates the number of hidden fields.

## Customize row height to work with extensive field values

The `Row Height` option allows you to adjust the row size, enabling comfortable viewing of extensive field values without the need of manual field resizing. By default, the row height is set to 'small,' but you can easily switch to 'medium,' 'large,' or 'extra large' options from the dropdown menu.
