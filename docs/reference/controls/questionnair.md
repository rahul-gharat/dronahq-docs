---
sidebar_position: 1
title: Questionnaire
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Questionnaire control allows users to respond to a set of questions, typically in a tabular format. It includes properties for Input Theme, Input Background, Border Color, Selection, Rows, Columns, Row Style, Column Style, and Table Label.

<figure>
  <Thumbnail src="/img/reference/controls/questionnaire/preview.png" alt="Questionnaire Control" />
  <figcaption align="center"><i>Questionnaire Control</i></figcaption>
</figure>

For example, you can add a feedback form to understand from the user the ease of using the online payment feature of the eCommerce site. Or you may want user feedback on the dining experience at a particular restaurant. The output of the Questionnaire control is a JSON Object which contains the array of questions and answers.

## Properties

| Property           | Description                                                                     |
|--------------------|---------------------------------------------------------------------------------|
| Input Theme        | Enables selecting the color of the input button or radio button for user input. |
| Input Background   | Defines the background color of cells containing input buttons.                |
| Border Color       | Specifies the border color for the cells.                                      |
| Selection          | Options for single or multi-select functionality.                               |
| Rows               | Represents the questions for which users provide responses in the columns.    |
| Columns            | Defines the answers or responses to the questions created in the rows.        |
| Row Style          | Customizes text properties and background color for the rows.                  |
| Column Style       | Customizes text properties and background color for the columns.               |
| Table Label        | Offers text customization and background color for the table heading.          |

## Control Outputs

The control outputs, represented by the placeholder `{{questionnaire}}`, can be referenced in other controls, data queries, or JavaScript functions using the control's unique name.

| Output               | Description                                            |
|----------------------|--------------------------------------------------------|
| questionnaire        | Represents the user's responses in the Questionnaire.  |
