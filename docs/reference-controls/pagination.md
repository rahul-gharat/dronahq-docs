---
sidebar_position: 1
title: Pagination
---

import Image from '@site/src/components/Image'; import VersionedLink from '@site/src/components/VersionedLink'; import
Thumbnail from '@site/src/components/Thumbnail';


The Pagination control is a display control used to provide the information regarding pagination.

<figure>
  <Thumbnail src="/img/reference/controls/pagination/preview.jpeg" alt="Pagination" />
  <figcaption align = "center"><i>Pagination</i></figcaption>
</figure>


## Binding Data Options

Pagination control accepts numeric values to display data. There are different ways in which you can bind data to the Pagination control.

### Static Data Option

To display static options in the Pagination control, you can use the Bind Data option. The Bind Data option must be specified numeric values for `Number_of_Pages` and `Selected_Page`. 

- Number of pages:- this section is responsible to set the total number of pages.

- Selected pages:- this section is responsible to set the current value of the selected page.



## Properties

| Property   | Description                                                          |
|------------|----------------------------------------------------------------------|
| Background | Sets the background color of the selected page.                       |
| Text       | Sets the text color of the selected page number.                      |



## Control Outputs

The Pagination control outputs, represented by the placeholders `{{pagination.Selected_Page}}` and `{{pagination.Number_of_Pages}}`, can be utilized in various ways within the application.

| Output                  | Description                                                                                    |
|-------------------------|------------------------------------------------------------------------------------------------|
| pagination.Selected_Page  | Represents the currently selected page number from the Pagination control.                        |
| pagination.Number_of_Pages | Represents the total number of pages available in the Pagination control.                         |

These outputs can be referenced and integrated into other controls, data queries, or JavaScript functions, allowing developers to manage and display pagination information effectively throughout the application.

## Events



| Trigger       | Description                                                                                                                              |
|---------------|------------------------------------------------------------------------------------------------------------------------------------------|
| value_select  | Occurs when there is a change in the value of the respective control, usually initiated by selecting a different option or inputting a new value. |