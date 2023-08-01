---
sidebar_position: 2
---
import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

# Importing from openAPI 3.0 specs

The Open API specification is an API description format for the REST APIs. It enables APIs to define their own structure. The API specification is easy and can be written in JSON or YAML. With the Open APIs specification file, you can get all the available endpoints and all the operations available for the endpoints, the input and output parameters, and authentication methods.

With DronaHQ you can add any of your Open API docs and auto-create APIs. It thus makes it easy to add services from third-party SaaS products.

### Configuring REST API connector

If you already have the REST API connector, proceed with importing the API; otherwise, check out how to configure API docs <VersionedLink to="/rest-apis/configuring_apis/#configuring-rest-api-connector">here.</VersionedLink>


## Import API

Under the `Custom API connectors` you can see your Connector. If you click the `… (More Options)` you can see the `Import API` option.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/import-api/import-api.png" alt="Import API" />
  <figcaption align = "center"><i>Import API</i></figcaption>
</figure>

With this, you can import the Open API 3.0 document which is a valid JSON file for the respective API.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/import-api/sample-json-file.png" alt="Sample Open API 3.0 document"width='70%' />
  <figcaption align = "center"><i>Sample Open API 3.0 document</i></figcaption>
</figure>

Click `File Upload` and select the `JSON file` from its location.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/import-api/select-json-file.png" alt="Upload JSON FIle" width='70%' />
  <figcaption align = "center"><i>Upload JSON File</i></figcaption>
</figure>

So once the `JSON file` is uploaded you can choose from the APIs available in the document that you want to use in your `DronaHQ` apps to enhance their functionality.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/import-api/select-api-to-import.png" alt="Select APIs to Import" width='70%' />
  <figcaption align = "center"><i>Select APIs to Import</i></figcaption>
</figure>


Click` Select All`, to select all the `API` or you can individually select the APIs that you need. You can see the descriptions for each of the API if it is provided in the document. The APIs would be listed out as per the name specified in the document.

Click `Import` to import the selected APIs.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/import-api/successfully-imported.png" alt="Successfully imported" width='70%' />
  <figcaption align = "center"><i>Successfully imported</i></figcaption>
</figure>

Now if you go to Connectors, you can see the `REST API` that you added with all the APIs that you selected. 

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/import-api/connector-list.png" alt="connector list" width='70%' />
  <figcaption align = "center"><i>connector list</i></figcaption>
</figure>


## Configure dynamic parameters

If you have any dynamic parameters you can Edit the API and make the necessary changes and updates. Let us take the example of the Petstore from above to get records based on the Status. In this example, we would like to get the Status as input from a Dropdown control. So when you configure your Connector query to Find data by Status in this case, you would need to pass a variable as a query string parameter. It needs to be enabled before so that it can be passed dynamically during run time.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/import-api/add-dynamic-parameters.png" alt="Add Dynamic parameter" width='60%' />
  <figcaption align = "center"><i>Add Dynamic parameter</i></figcaption>
</figure>

## Connecting the Connector to Data Query

Bind the connector to the Data Query and configure essential dynamic parameters using controls, variables, keywords, or static values.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/import-api/bind-to-data-query.png" alt="Bind connector to Data Query" width='70%' />
  <figcaption align = "center"><i>Binding the Connector to Data Query</i></figcaption>
</figure>

### Refresh Response

At times the JSON specification file does not have an API response schema. In such a scenario you can use the Refresh Response which might then help you to fetch the response and generate the keys to bind data.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/import-api/refresh-response.png" alt="Refresh Response" width='40%' />
  <figcaption align = "center"><i>Refresh response</i></figcaption>
</figure>

The Refresh Response eliminates the need to create keys using any function. You can fetch and display data from the API using the control like a table grid control.

### Bind to controls

After creating the variable, you can bind the Data Query to any control. For example, you can bind it to a table grid control.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/import-api/bind-to-table-grid.png" alt="Binding the Data Query to Table Grid control" width='70%' />
  <figcaption align = "center"><i>Binding the Data Query to Table Grid control</i></figcaption>
</figure>

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/import-api/preview.png" alt="Preview" width='70%' />
  <figcaption align = "center"><i>Preview</i></figcaption>
</figure>



With Import API you have now the flexibility to choose your SaaS service and quickly connect to further enhance the functionality of your Apps.