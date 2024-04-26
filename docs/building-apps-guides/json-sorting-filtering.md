---
sidebar_position: 1
title: JSON Manipulation - Sorting and Filtering with JavaScript
---

import Image from '@site/src/components/Image'; import VersionedLink from '@site/src/components/VersionedLink'; import
Thumbnail from '@site/src/components/Thumbnail';

JSON (JavaScript Object Notation) manipulation is a fundamental aspect of modern web development, essential for handling
diverse data structures efficiently. This technical documentation will showcase two indispensable techniques for
manipulating JSON data in JavaScript: sorting and filtering. Whether you're working with API responses or managing
user-generated content, mastering these techniques will enhance your ability to process and present data effectively.

Before moving ahead let's see our raw response:

        {
        "result": {
            "rows": [
            {
                "ID": 18,
                "FirstName": "Tomasa",
                "LastName": "Hermann",
                "Address": "751 Koss Forest",
                "Email": "tomasa.hermann41@example.com",
                "Designation": "Intern"
            },
            {
                "ID": 24,
                "FirstName": "Cedrick",
                "LastName": "Schmeler",
                "Address": "695 Rau Passage",
                "Email": "cedrick89@example.com",
                "Designation": "Workspace Admin"
            },
            {
                "ID": 36,
                "FirstName": "Timmy",
                "LastName": "Schamberger",
                "Address": "24593 Bayer Oval",
                "Email": "timmy_schamberger@example.com",
                "Designation": "Workspace Manager"
            },
            {
                "ID": 1,
                "FirstName": "Carlie",
                "LastName": "Schmeler",
                "Address": "2375 Allen Flats",
                "Email": "carlie43@example.com",
                "Designation": "Automation Tester"
            },
            {
                "ID": 2,
                "FirstName": "Katrina",
                "LastName": "Mosciski",
                "Address": "2570 Toy Lights",
                "Email": "katrina94@example.com",
                "Designation": "Software Developer"
            },
            {
                "ID": 3,
                "FirstName": "Lurline",
                "LastName": "Powlowski",
                "Address": "551 Morar Expressway",
                "Email": "lurline90@example.com",
                "Designation": "Market Intern"
            },
            {
                "ID": 11,
                "FirstName": "Micah",
                "LastName": "Mosciski",
                "Address": "5184 Keely Trafficway",
                "Email": "micah.mosciski65@example.com",
                "Designation": "Intern"
            }
            ]
        }
        }

In DronahQ, to transform response, we can write JS Code to perform sort and filtering operation on JSON data based on a key attribute.

### Sorting JSON Data
Sorting JSON data is a common requirement in web applications, often necessary for presenting information in a structured manner or facilitating further data processing. This section illustrates how to sort JSON data using custom JavaScript code.

#### Code

    function sortJSON(arr, key, asc=true) {
    return arr.sort((a, b) => {
        let x = a[key];
        let y = b[key];
        if (asc) { return ((x < y) ? -1 : ((x > y) ? 1 : 0)); }
        else { return ((x > y) ? -1 : ((x < y) ? 1 : 0)); }
    });
    }
    output = sortJSON(data.result.rows, "ID", false);

#### Explanation
The `sortJSON` function facilitates sorting of JSON data based on a specified key attribute, with support for both ascending and descending orders. Leveraging JavaScript's native sort method, it enables efficient organization of JSON datasets according to predefined criteria.

#### Sorted Data (ID as key attribute in descending order)

<figure>
  <Thumbnail src="/img/building-apps-guides/json-sort-filter/json-sort-filter-sort.png" alt="Sorted (Transformed) data" />
  <figcaption align='center'><i>Sorted (Transformed) data</i></figcaption>
</figure>

### Filtering JSON Data
Filtering JSON data enables extraction of specific subsets of information, tailored to meet diverse requirements such as user preferences or data analysis tasks. This section demonstrates how to filter JSON data effectively using JavaScript.

#### Code


    function filterDesignation(record) {
        return record.Designation.includes('Intern');
    }
    data = data.result.rows.filter(filterDesignation);

#### Explanation
The `filterJSON` function provides a robust mechanism for extracting relevant data from JSON arrays based on user-defined criteria. Employing JavaScript's filter method, it iterates through the dataset, selectively retaining items that satisfy the specified conditions, thereby facilitating targeted data retrieval.


#### Filtered data

<figure>
  <Thumbnail src="/img/building-apps-guides/json-sort-filter/json-sort-filter-filter.png" alt="Filtered (Transformed) data" />
  <figcaption align='center'><i>Filtered (Transformed) data</i></figcaption>
</figure>
