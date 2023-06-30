---
sidebar_position: 1
title: Overview
---

import VersionedLink from "@site/src/components/VersionedLink";


# Overview

Datasources playes an key role to every application development. They are used to store and manage the data. With DronaHQ, you can take benifits of direct connecting to supported datasources avaiable on DronaHQ. You can write queries on DronaHQ to directly intereact to read and write your connected datasources.

DronaHQ can also seamlessly connect with most other tools through the RESTful API plugin.

:::info
DronaHQ encrypts all your datasource credentials and stores them securely. DronaHQ also doesn't store any data returned from your datasources and acts only as a proxy layer to orchestrate the execution of queries. Additionally, you can self-host DronaHQ to ensure that no data leaves your machine. For more information, see Security.
:::

Based on the roles and access provided to users, they can access, connected and configured datasources from all the other applications present in the same workspace.

## Databases

DronaHQ offers support for a variety of databases, including the following:

<div className="vendor-table">
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/mysql-logo.png"  title="MySQL" alt="Connect MySQL to DronaHQ" />
      </div>
      <h5>MySQL</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/postgres-logo.png"  title="PostgreSQL" alt="Connect PostgreSQL Server to DronaHQ" />
      </div>
      <h5>PostgreSQL</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/mssql-logo.png"  title="Microsoft SQL Server" alt="Connect Microsoft SQL Server to DronaHQ" />
      </div>
      <h5>Microsoft SQL Server</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/saphana-logo.png"  title="SAP HANA" alt="Connect SAP HANA Server to DronaHQ" />
      </div>
      <h5>SAP HANA</h5>
    </div>
  </VersionedLink>
   <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/oracle-logo.png"  title="Oracle" alt="Connect Oracle to DronaHQ" />
      </div>
      <h5>Oracle</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
        <img src="/img/mongo-logo.png" title="MongoDB" alt="Connect MongoDB to DronaHQ" />
      </div>
      <h5>MongoDB</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
        <img src="/img/snowflake-logo.svg" title="Snowflake DB" alt="Connect Snowflake DB to DronaHQ" />
      </div>
      <h5>Snowflake DB</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
        <img src="/img/redshift-logo.svg" title="Amazon Redshift" alt="Connect Amazon Redshift to DronaHQ" />
      </div>
      <h5>Amazon Redshift</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
        <img src="/img/athena-logo.png" title="Amazon Athena" alt="Connect Amazon Athena to DronaHQ" />
      </div>
      <h5>Amazon Athena</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
        <img src="/img/bigquery-logo.svg" title="BigQuery" alt="Connect BigQuery to DronaHQ" />
      </div>
      <h5>BigQuery</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
        <img src="/img/vertica-logo.png" title="Vertica" alt="Connect Vertica to DronaHQ" />
      </div>
      <h5>Vertica</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
        <img src="/img/dynamodb-logo.svg" title="DynamoDB" alt="Connect DynamoDB to DronaHQ" />
      </div>
      <h5>DynamoDB</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
        <img src="/img/couch-logo.png" title="CouchDB" alt="Connect CouchDB to DronaHQ" />
      </div>
      <h5>CouchDB</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
        <img src="/img/elasticsearch-logo.png" title="Elastic Search" alt="Connect Elastic Search to DronaHQ" />
      </div>
      <h5>Elastic Search</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
        <img src="/img/redis-logo.svg" title="Redis" alt="Connect Redis to DronaHQ" />
      </div>
      <h5>Redis</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
        <img src="/img/clouddatastore-logo.png" title="Cloud Datasource" alt="Connect Cloud Datasource to DronaHQ" />
      </div>
      <h5>Cloud Datasource</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
        <img src="/img/firestore-logo.png" title="Firestore" alt="Connect Firestore to DronaHQ" />
      </div>
      <h5>Firestore</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
        <img src="/img/firebaserealtime-logo.png" title="Firebase Realtime Database" alt="Connect Firebase Realtime Database to DronaHQ" />
      </div>
      <h5>Firebase Realtime Database</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
        <img src="/img/firebaseauth-logo.png" title="Firebase Auth (User Management)" alt="Connect Firebase Auth (User Management) to DronaHQ" />
      </div>
      <h5>Firebase Auth (User Management)</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
        <img src="/img/clickhouse-logo.svg" title="Clickhouse" alt="Connect Clickhouse to DronaHQ" />
      </div>
      <h5>Clickhouse</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
        <img src="/img/influxdb-logo.svg" title="InfluxDB" alt="Connect InfluxDB to DronaHQ" />
      </div>
      <h5>InfluxDB</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
        <img src="/img/mariadb-logo.svg" title="MariaDB" alt="Connect MariaDB to DronaHQ" />
      </div>
      <h5>MariaDB</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
        <img src="/img/shellscript-logo.png" title="Shell Script" alt="Connect Shell Script to DronaHQ" />
      </div>
      <h5>Shell Script</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
        <img src="/img/sftp-logo.svg" title="SFTP & FTP" alt="Connect SFTP & FTP to DronaHQ" />
      </div>
      <h5>SFTP & FTP</h5>
    </div>
  </VersionedLink>
</div>

## Rest API & Ready APIs

With DronaHQ, you can seamlessly connect with a diverse array of tools and platforms. In case a supported data source is unavailable, you can establish connections using the REST API. DronaHQ supports the following APIs:


