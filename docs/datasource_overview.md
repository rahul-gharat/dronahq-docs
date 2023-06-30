---
sidebar_position: 12
title: Overview
---

import VersionedLink from "@site/src/components/VersionedLink";


# Overview

Datasources playes an key role to every application development. They are used to store and manage the data. With DronaHQ, you can take benifits of direct connecting to supported datasources avaiable on DronaHQ. You can write queries on DronaHQ to directly intereact to read and write your connected datasources.

DronaHQ can also seamlessly connect with most other tools through the RESTful API plugin.

:::info
DronaHQ ensures the utmost security of your datasource credentials by encrypting them and storing them in a highly secure manner. Moreover, DronaHQ follows a strict policy of not retaining any data obtained from your datasources. Instead, it functions solely as a proxy layer, orchestrating the execution of queries. To further enhance data privacy, you have the option to self-host DronaHQ, guaranteeing that no data ever leaves your machine. For detailed insights on the security measures implemented, please refer to the Security section.
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

<div className="vendor-table">
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/restapi-logo.png"  title="RestAPI" alt="Connect RestAPI to DronaHQ" />
      </div>
      <h5>RestAPI</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/graphql-logo.png"  title="GraphQL" alt="Connect GraphQL to DronaHQ" />
      </div>
      <h5>GraphQL</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/grpc-logo.png"  title="gRPC" alt="Connect gRPC to DronaHQ" />
      </div>
      <h5>gRPC</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/salesforce-logo.png"  title="Salesforce" alt="Connect Salesforce to DronaHQ" />
      </div>
      <h5>Salesforce</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/openai-logo.jpeg"  title="OpenAI" alt="Connect OpenAI to DronaHQ" />
      </div>
      <h5>OpenAI</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/openaiadv-logo.jpeg"  title="OpenAI Advance" alt="Connect OpenAI Advance to DronaHQ" />
      </div>
      <h5>OpenAI Advance</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/trello-logo.png"  title="Trello" alt="Connect Trello to DronaHQ" />
      </div>
      <h5>Trello</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/slack-logo.png"  title="Slack" alt="Connect Slack to DronaHQ" />
      </div>
      <h5>Slack</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/sendgrid-logo.png"  title="Sendgrid" alt="Connect Sendgrid to DronaHQ" />
      </div>
      <h5>Sendgrid</h5>
    </div>
  </VersionedLink><VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/twillio-logo.png"  title="Twillio" alt="Connect Twillio to DronaHQ" />
      </div>
      <h5>Twillio</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/clearbit-logo.png"  title="Clearbit" alt="Connect Clearbit to DronaHQ" />
      </div>
      <h5>Clearbit</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/googlesheets-logo.png"  title="Google Sheets" alt="Connect Google Sheets to DronaHQ" />
      </div>
      <h5>Google Sheets</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/intercom-logo.png"  title="Intercom" alt="Connect Intercom to DronaHQ" />
      </div>
      <h5>Intercom</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/bitly-logo.png"  title="Bitly" alt="Connect Bitly to DronaHQ" />
      </div>
      <h5>Bitly</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/proxycrawl-logo.jpeg"  title="Proxy Crawl" alt="Connect Proxy Crawl to DronaHQ" />
      </div>
      <h5>Proxy Crawl</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/diffbot-logo.png"  title="Diffbot" alt="Connect Diffbot to DronaHQ" />
      </div>
      <h5>Diffbot</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/what3word-logo.png"  title="What 3 Words" alt="Connect What 3 Words to DronaHQ" />
      </div>
      <h5>What 3 Words</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/zoom-logo.png"  title="Zoom" alt="Connect Zoom to DronaHQ" />
      </div>
      <h5>Zoom</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/ocr-logo.jpeg"  title="OCRSPace" alt="Connect OCRSPace to DronaHQ" />
      </div>
      <h5>OCRSPace</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/jira-logo.png"  title="Jira Software Cloud" alt="Connect Jira Software Cloud to DronaHQ" />
      </div>
      <h5>Jira Software Cloud</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/typeform-logo.png"  title="Typeform" alt="Connect Typeform to DronaHQ" />
      </div>
      <h5>Typeform</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/Zendesk-logo.png"  title="Zendesk" alt="Connect Zendesk to DronaHQ" />
      </div>
      <h5>Zendesk</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/Hacker-logo.jpeg"  title="HackerRank" alt="Connect HackerRank to DronaHQ" />
      </div>
      <h5>HackerRank</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/Freshdesk-logo.png"  title="Freshdesk" alt="Connect Freshdesk to DronaHQ" />
      </div>
      <h5>Freshdesk</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/WhatsApp-logo.jpeg"  title="WhatsApp" alt="Connect WhatsApp to DronaHQ" />
      </div>
      <h5>WhatsApp</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/Clarifai-logo.jpeg"  title="Clarifai" alt="Connect Clarifai to DronaHQ" />
      </div>
      <h5>Clarifai</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/Shopify-logo.png"  title="Shopify" alt="Connect Shopify to DronaHQ" />
      </div>
      <h5>Shopify</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/QuickBooks-logo.jpeg"  title="QuickBooks Online" alt="Connect QuickBooks Online to DronaHQ" />
      </div>
      <h5>QuickBooks Online</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/MyMemory-logo.png"  title="MyMemory" alt="Connect MyMemory to DronaHQ" />
      </div>
      <h5>MyMemory</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/Gmail-logo.webp"  title="Gmail" alt="Connect Gmail to DronaHQ" />
      </div>
      <h5>Gmail</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/Googlecal-logo.png"  title="Google Calender" alt="Connect Google Calender to DronaHQ" />
      </div>
      <h5>Google Calender</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/Asana-logo.jpeg"  title="Asana" alt="Connect Asana to DronaHQ" />
      </div>
      <h5>Asana</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/Cloudconvert-logo.jpeg"  title="Cloud Convert" alt="Connect Cloud Convert to DronaHQ" />
      </div>
      <h5>Cloud Convert</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/Github-logo.png"  title="Github" alt="Connect Github to DronaHQ" />
      </div>
      <h5>Github</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/msoutlook-logo.png"  title="Microsoft Outlook" alt="Connect Microsoft Outlook to DronaHQ" />
      </div>
      <h5>Microsoft Outlook</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/Razor-logo.png"  title="Razorpay" alt="Connect Razorpay to DronaHQ" />
      </div>
      <h5>Razorpay</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/Airtable-logo.png"  title="Airtable" alt="Connect Airtable to DronaHQ" />
      </div>
      <h5>Airtable</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/HubSpot-logo.png"  title="HubSpot" alt="Connect HubSpot to DronaHQ" />
      </div>
      <h5>HubSpot</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/Instamojo-logo.png"  title="Instamojo" alt="Connect Instamojo to DronaHQ" />
      </div>
      <h5>Instamojo</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/Stripe-logo.png"  title="Stripe" alt="Connect Stripe to DronaHQ" />
      </div>
      <h5>Stripe</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/awss3-logo.png"  title="AWS S3" alt="Connect AWS S3 to DronaHQ" />
      </div>
      <h5>AWS S3</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/awslambda-logo.png"  title="AWS Lambda" alt="Connect AWS Lambda to DronaHQ" />
      </div>
      <h5>AWS Lambda</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/googlecloud-logo.png"  title="Google Cloud Storage" alt="Connect Google Cloud Storage to DronaHQ" />
      </div>
      <h5>Google Cloud Storage</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <img src="/img/SMTP-logo.png"  title="SMTP" alt="Connect SMTP to DronaHQ" />
      </div>
      <h5>SMTP</h5>
    </div>
  </VersionedLink>
</div>
