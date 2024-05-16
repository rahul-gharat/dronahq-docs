---
sidebar_position: 1
title: Display Nested JSON Data in a Tablegrid
---

import Image from '@site/src/components/Image'; import VersionedLink from '@site/src/components/VersionedLink'; import
Thumbnail from '@site/src/components/Thumbnail';


In today's data-driven world, effectively displaying complex and nested JSON data is essential for creating intuitive and user-friendly interfaces. One common challenge is rendering this data in a structured format, such as a Tablegrid. This article will guide you through different methods to unnest JSON data into a Tablegrid, making it easier to visualize and manipulate. We'll explore unnesting JSON data into multiple rows, multiple columns, and using field values as column names. 


We'll use a sample JSON dataset stored in a MongoDB collection and loaded onto the Tablegrid via connectors. This dataset includes student demographics and their scores in various subjects.

##### Sample JSON Data (Raw Response)

```json
{
  "error": null,
  "result": {
    "rows": [
      {
        "_id": "620e50a0608c6e9831d2241e",
        "demographic": {
          "rollNo": "137",
          "name": "Thomas Wayne"
        },
        "subject": [
          {
            "name": "Applied Mathematics",
            "score": 90,
            "maximumMarks": 100
          },
          {
            "name": "Advance Java",
            "score": 80,
            "maximumMarks": 100
          },
          {
            "name": "Blockchain",
            "score": 70,
            "maximumMarks": 100
          }
        ]
      },
      {
        "_id": "620e50a0608c6e9831d2241f",
        "demographic": {
          "rollNo": "47",
          "name": "Clark Kent"
        },
        "subject": [
          {
            "name": "Applied Mathematics",
            "score": 85,
            "maximumMarks": 100
          },
          {
            "name": "Advance Java",
            "score": 92,
            "maximumMarks": 100
          },
          {
            "name": "Blockchain",
            "score": 77,
            "maximumMarks": 100
          }
        ]
      },
      {
        "_id": "620e50a0608c6e9831d22420",
        "demographic": {
          "rollNo": "96",
          "name": "Barry Allen"
        },
        "subject": [
          {
            "name": "Applied Mathematics",
            "score": 70,
            "maximumMarks": 100
          },
          {
            "name": "Advance Java",
            "score": 99,
            "maximumMarks": 100
          },
          {
            "name": "Blockchain",
            "score": 89,
            "maximumMarks": 100
          }
        ]
      }
    ]
  }
}
```

<figure>
  <Thumbnail src="/img/app-scripting-and-code/unnest-json/unnest-json-raw.png" alt="Nested data." />
  <figcaption align = "center"><i>Nested data.</i></figcaption>
</figure>

### Unnesting JSON Data into Multiple Rows

The first method involves transforming nested JSON data into multiple rows, where each subject entry appears as a separate row in the Tablegrid.

##### Transformation Code:

```javascript
output = [];
data.result.rows.map(records => {
    records.subject.map(subject => {
        let row = {};
        row.rollNo = records.demographic.rollNo;
        row.name = records.demographic.name;
        row.subject = subject.name;
        row.scored = subject.score;
        row.maximumMarks = subject.maximumMarks;
        output.push(row);
    });
});
data = output;
```

##### Transformed JSON Data:

```json
[
  {
    "rollNo": "137",
    "name": "Thomas Wayne",
    "subject": "Applied Mathematics",
    "scored": 90,
    "maximumMarks": 100
  },
  {
    "rollNo": "137",
    "name": "Thomas Wayne",
    "subject": "Advance Java",
    "scored": 80,
    "maximumMarks": 100
  },
  {
    "rollNo": "137",
    "name": "Thomas Wayne",
    "subject": "Blockchain",
    "scored": 70,
    "maximumMarks": 100
  },
  {
    "rollNo": "47",
    "name": "Clark Kent",
    "subject": "Applied Mathematics",
    "scored": 85,
    "maximumMarks": 100
  },
  {
    "rollNo": "47",
    "name": "Clark Kent",
    "subject": "Advance Java",
    "scored": 92,
    "maximumMarks": 100
  },
  {
    "rollNo": "47",
    "name": "Clark Kent",
    "subject": "Blockchain",
    "scored": 77,
    "maximumMarks": 100
  },
  {
    "rollNo": "96",
    "name": "Barry Allen",
    "subject": "Applied Mathematics",
    "scored": 70,
    "maximumMarks": 100
  },
  {
    "rollNo": "96",
    "name": "Barry Allen",
    "subject": "Advance Java",
    "scored": 99,
    "maximumMarks": 100
  },
  {
    "rollNo": "96",
    "name": "Barry Allen",
    "subject": "Blockchain",
    "scored": 89,
    "maximumMarks": 100
  }
]
```

<figure>
  <Thumbnail src="/img/app-scripting-and-code/unnest-json/unnest-json-unnest1.png" alt="Unnested data." />
  <figcaption align = "center"><i>Unnested data.</i></figcaption>
</figure>

### Unnesting JSON Data into Multiple Columns

The second method reduces redundancy by unnesting the JSON data into multiple columns, where each subject's details are displayed in separate columns.

##### Transformation Code:

```javascript
output = [];
let counter;
data.result.rows.map(records => {
  let row = {};  
  counter = 1;
  records.subject.map(subject => {
    row.rollNo = records.demographic.rollNo;
    row.name = records.demographic.name;
    row[`subject${counter}`] = subject.name;
    row[`scored${counter}`] = subject.score;
    row[`maximumMarks${counter}`] = subject.maximumMarks;
    counter++;
  });
  output.push(row);
});
data = output;
```

##### Transformed JSON Data:

```json
[
  {
    "rollNo": "137",
    "name": "Thomas Wayne",
    "subject1": "Applied Mathematics",
    "scored1": 90,
    "maximumMarks1": 100,
    "subject2": "Advance Java",
    "scored2": 80,
    "maximumMarks2": 100,
    "subject3": "Blockchain",
    "scored3": 70,
    "maximumMarks3": 100
  },
  {
    "rollNo": "47",
    "name": "Clark Kent",
    "subject1": "Applied Mathematics",
    "scored1": 85,
    "maximumMarks1": 100,
    "subject2": "Advance Java",
    "scored2": 92,
    "maximumMarks2": 100,
    "subject3": "Blockchain",
    "scored3": 77,
    "maximumMarks3": 100
  },
  {
    "rollNo": "96",
    "name": "Barry Allen",
    "subject1": "Applied Mathematics",
    "scored1": 70,
    "maximumMarks1": 100,
    "subject2": "Advance Java",
    "scored2": 99,
    "maximumMarks2": 100,
    "subject3": "Blockchain",
    "scored3": 89,
    "maximumMarks3": 100
  }
]
```
<figure>
  <Thumbnail src="/img/app-scripting-and-code/unnest-json/unnest-json-unnest2.png" alt="Unnested data." />
  <figcaption align = "center"><i>Unnested data.</i></figcaption>
</figure>


### Unnesting JSON Data into Columns with Field Values as Column Names

The final method optimizes the previous column-based approach by using field values as column names, thus eliminating repetitive columns.

##### Transformation Code:

```javascript
output = [];
data.result.rows.map(records => {
  let row = {};
  records.subject.map(subject => {
    row.rollNo = records.demographic.rollNo;
    row.name = records.demographic.name;
    row[subject.name] = `${subject.score}/${subject.maximumMarks}`;
  });
  output.push(row);
});
data = output;
```

##### Transformed JSON Data:

```json
[
  {
    "rollNo": "137",
    "name": "Thomas Wayne",
    "Applied Mathematics": "90/100",
    "Advance Java": "80/100",
    "Blockchain": "70/100"
  },
  {
    "rollNo": "47",
    "name": "Clark Kent",
    "Applied Mathematics": "85/100",
    "Advance Java": "92/100",
    "Blockchain": "77/100"
  },
  {
    "rollNo": "96",
    "name": "Barry Allen",
    "Applied Mathematics": "70/100",
    "Advance Java": "99/100",
    "Blockchain": "89/100"
  }
]
```
<figure>
  <Thumbnail src="/img/app-scripting-and-code/unnest-json/unnest-json-unnest3.png" alt="Unnested data." />
  <figcaption align = "center"><i>Unnested data.</i></figcaption>
</figure>

 By unnesting JSON data into multiple rows, multiple columns, or using field values as column names, you can optimize the data presentation for various use cases. Implement these techniques to transform your complex JSON data into a structured and intuitive format, making it easier for users to interact with and understand the information.