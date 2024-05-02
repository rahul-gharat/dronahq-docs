---
sidebar_position: 1
title: Convert JSON Data for GraphQL Mutations
---

import Image from '@site/src/components/Image'; import VersionedLink from '@site/src/components/VersionedLink'; import
Thumbnail from '@site/src/components/Thumbnail';





When integrating data into your GraphQL API using mutations, the data format needs to adhere to specific requirements. Here's the key point: GraphQL mutations expect key names within double quotes (e.g., `"name"`), whereas JSON offers more flexibility and might not always include these quotes. This discrepancy necessitates a conversion step to ensure data utilization within your GraphQL environment.

## The JavaScript Solution

The following JavaScript code snippet serves as the conversion bridge, transforming your JSON data into a format suitable for GraphQL mutations:

#### Code

```javascript
let output;

if (typeof SheetData === "object") {
  output = JSON.stringify(SheetData);
} else if (typeof SheetData === "string") {
  try {
    output = JSON.stringify(JSON.parse(SheetData));
  } catch (error) {
    // Implement error handling (e.g., log the error)
  }
}

output = output.replace(/"([^"]+)":/g, '$1:');
```

#### Code Explanation

1. Type Check: The code first verifies the data type of `SheetData`. If it's already an object, `JSON.stringify` promptly converts it to a string representation.
2. String Handling: When `SheetData` is a string, a `try...catch` block safeguards the parsing process. We attempt to parse the string into a valid JSON object using `JSON.parse`. This ensures consistency in the data structure.
3. Error Management: The `catch` block is currently a placeholder for error handling logic (e.g., logging the error) which is crucial for debugging purposes.
4. Key Quote Removal: Finally, a regular expression (`/\"([^"]+)":/g`) addresses the core issue. It replaces all instances of key names enclosed in double quotes (e.g., `"name"`) with just the key name itself (e.g., `name:`). This transformation aligns the format with GraphQL mutation requirements.

:::note
 Replace `SheetData` with the actual variable name holding your JSON data.
:::

Screenshot below with Simple JS handling -

#### Code
     
     output = JSON.stringify(SheetData).replace(/"([^"]+)":/g, '$1:')

<figure>
  <Thumbnail src="/img/app-scripting-and-code/json-graphql-mutation/json-graphql-mutation-js.png" alt="Handling Mutation with Simple JS code." />
  <figcaption align = "center"><i>Handling Mutation with Simple JS code.</i></figcaption>
</figure>

## Considerations

* Error Handling: While not explicitly implemented in the provided code, incorporating robust error handling is essential. This can involve logging errors for debugging or throwing specific errors to be handled by the calling code.
* Customization: The code snippet can be customized to fit your specific needs. For instance, you might want to modify the error handling behavior or adapt the regular expression to handle more complex JSON structures.


