---
sidebar_position: 1
---

# Overview

Datasources playes an key role to every application development. They are used to store and manage the data. With DronaHQ, you can take benifits of direct connecting to supported datasources avaiable on DronaHQ. You can write queries on DronaHQ to directly intereact to read and write your connected datasources.

DronaHQ can also seamlessly connect with most other tools through the RESTful API plugin.


:::info 
DronaHQ encrypts all your datasource credentials and stores them securely. DronaHQ also doesn't store any data returned from your datasources and acts only as a proxy layer to orchestrate the execution of queries. Additionally, you can self-host DronaHQ to ensure that no data leaves your machine. For more information, see Security.
:::

Based on the roles and access provided to users, they can access, connected and configured datasources from all the other applications present in the same workspace.



## Connecting a Database

Here you will learn how to connect to a database on DronaHQ.

1. Click on **Connectors** from the sidebar.
2. You will see, on top right there is a **+ Connector** button, click on it.
3. From the list, select the database you need to connect to. This opens the page where you can configure the parameters to connect to your database.

<figure>
  <img src="/img/databases-list.png" style= {{width:"60%", height:"auto"}} alt="List of available databases connectors."/>
  <figcaption align = "center"><i>List of Databases</i></figcaption>
</figure>

4. Give a name to the configuring database, to identify it later on.

5. Fill up the required details and parameters to configure your database on DronaHQ successfully. DronaHQ encrypts all your data and store them securely.

6. Click the **Test** button and test the connection. Ensure that the database is valid.

7. Click **Save** to create and save the database connection.
