---
sidebar_position: 4
title: Fetching data from sheets
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

Accessing data from your Sheets within DronaHQ is a streamlined process that enables you to integrate your spreadsheet information directly into your application. This process facilitates dynamic data handling, allowing your application to leverage the data stored in your Sheets seamlessly.

To retrieve data from Sheets, you can navigate to the `Data Bind > Quick Select > Sheets`.

This will open up the interface to select the desired sheet and extract data for your application. Sheets integration in DronaHQ enables quick access to your spreadsheet data for use in your applications.

## Navigation and Sheet Selection

Upon selecting Sheets, a tray will open, providing various options to fetch and configure the data:

#### Sheet Selection

- Where to Get Value From: Choose the desired sheet from the dropdown menu.
- Select Columns: Specify the columns you wish to retrieve from the selected sheet using the dropdown menus.

#### Filter

- Select Column: Choose the column you want to filter.
- Select Operator: Define the operator for filtering.
- Write Filter: Write the specific filter condition.

#### Sort By

- None: No specific sorting.
- Ascending: Sort the data in ascending order.
- Descending: Sort the data in descending order.

#### Pagination

- Allow Pagination: Enable or disable pagination.
- Enter Limit: Set the limit for data retrieval.
- Enter Offset: Specify the offset for data retrieval.

These options allow you to fine-tune the data fetched from your Sheets to suit your application's requirements.

Once all the necessary details are selected, a LOOKUP formula is created, such as:

```jsx
LOOKUP([Content.uid, Content.Title, Content.Created_By, Content.sub_title], Content.Type = "Action")
```

<figure>
  <Thumbnail src="/img/binding-data/sheets-data.jpeg" alt="Sheets Data" width='100%'/>
  <figcaption align = "center"><i>Configuring details for Sheet data binding.</i></figcaption>
</figure>

This generated formula can be copied for use in other controls. Additionally, click `Insert` beside the `Copy` button to apply this formula to the respective control.