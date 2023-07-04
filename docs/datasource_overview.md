---
sidebar_position: 12
title: Overview
---

import VersionedLink from "@site/src/components/VersionedLink";
import Image from '@site/src/components/Image';


# Overview

Datasources plays a key role to every application development. They are used to store and manage the data. With DronaHQ, you can take benefits of direct connecting to supported datasources available on DronaHQ. You can write queries on DronaHQ to directly interact to read and write your connected datasources.


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
         <Image src="/img/connectingDatasource/mysql-logo.png"  title="MySQL" alt="Connect MySQL to DronaHQ" />
      </div>
      <h5>MySQL</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/postgres-logo.png"  title="PostgreSQL" alt="Connect PostgreSQL Server to DronaHQ" />
      </div>
      <h5>PostgreSQL</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/mssql-logo.png"  title="Microsoft SQL Server" alt="Connect Microsoft SQL Server to DronaHQ" />
      </div>
      <h5>Microsoft SQL Server</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/saphana-logo.png"  title="SAP HANA" alt="Connect SAP HANA Server to DronaHQ" />
      </div>
      <h5>SAP HANA</h5>
    </div>
  </VersionedLink>
   <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/oracle-logo.png"  title="Oracle" alt="Connect Oracle to DronaHQ" />
      </div>
      <h5>Oracle</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
        <Image src="/img/connectingDatasource/mongo-logo.png" title="MongoDB" alt="Connect MongoDB to DronaHQ" />
      </div>
      <h5>MongoDB</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
        <Image src="/img/connectingDatasource/snowflake-logo.svg" title="Snowflake DB" alt="Connect Snowflake DB to DronaHQ" />
      </div>
      <h5>Snowflake DB</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
        <Image src="/img/connectingDatasource/redshift-logo.svg" title="Amazon Redshift" alt="Connect Amazon Redshift to DronaHQ" />
      </div>
      <h5>Amazon Redshift</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
        <Image src="/img/connectingDatasource/athena-logo.png" title="Amazon Athena" alt="Connect Amazon Athena to DronaHQ" />
      </div>
      <h5>Amazon Athena</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
        <Image src="/img/connectingDatasource/bigquery-logo.svg" title="BigQuery" alt="Connect BigQuery to DronaHQ" />
      </div>
      <h5>BigQuery</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
        <Image src="/img/connectingDatasource/vertica-logo.png" title="Vertica" alt="Connect Vertica to DronaHQ" />
      </div>
      <h5>Vertica</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
        <Image src="/img/connectingDatasource/dynamodb-logo.svg" title="DynamoDB" alt="Connect DynamoDB to DronaHQ" />
      </div>
      <h5>DynamoDB</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
        <Image src="/img/connectingDatasource/couch-logo.png" title="CouchDB" alt="Connect CouchDB to DronaHQ" />
      </div>
      <h5>CouchDB</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
        <Image src="/img/connectingDatasource/elasticsearch-logo.png" title="Elastic Search" alt="Connect Elastic Search to DronaHQ" />
      </div>
      <h5>Elastic Search</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
        <Image src="/img/connectingDatasource/redis-logo.svg" title="Redis" alt="Connect Redis to DronaHQ" />
      </div>
      <h5>Redis</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
        <Image src="/img/connectingDatasource/clouddatastore-logo.png" title="Cloud Datasource" alt="Connect Cloud Datasource to DronaHQ" />
      </div>
      <h5>Cloud Datasource</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
        <Image src="/img/connectingDatasource/firestore-logo.png" title="Firestore" alt="Connect Firestore to DronaHQ" />
      </div>
      <h5>Firestore</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
        <Image src="/img/connectingDatasource/firebaserealtime-logo.png" title="Firebase Realtime Database" alt="Connect Firebase Realtime Database to DronaHQ" />
      </div>
      <h5>Firebase Realtime Database</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
        <Image src="/img/connectingDatasource/firebaseauth-logo.png" title="Firebase Auth (User Management)" alt="Connect Firebase Auth (User Management) to DronaHQ" />
      </div>
      <h5>Firebase Auth (User Management)</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
        <Image src="/img/connectingDatasource/clickhouse-logo.svg" title="Clickhouse" alt="Connect Clickhouse to DronaHQ" />
      </div>
      <h5>Clickhouse</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
        <Image src="/img/connectingDatasource/influxdb-logo.svg" title="InfluxDB" alt="Connect InfluxDB to DronaHQ" />
      </div>
      <h5>InfluxDB</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
        <Image src="/img/connectingDatasource/mariadb-logo.svg" title="MariaDB" alt="Connect MariaDB to DronaHQ" />
      </div>
      <h5>MariaDB</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
        <Image src="/img/connectingDatasource/shellscript-logo.png" title="Shell Script" alt="Connect Shell Script to DronaHQ" />
      </div>
      <h5>Shell Script</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
        <Image src="/img/connectingDatasource/sftp-logo.svg" title="SFTP & FTP" alt="Connect SFTP & FTP to DronaHQ" />
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
         <Image src="/img/connectingDatasource/restapi-logo.png"  title="RestAPI" alt="Connect RestAPI to DronaHQ" />
      </div>
      <h5>RestAPI</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/graphql-logo.png"  title="GraphQL" alt="Connect GraphQL to DronaHQ" />
      </div>
      <h5>GraphQL</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/grpc-logo.png"  title="gRPC" alt="Connect gRPC to DronaHQ" />
      </div>
      <h5>gRPC</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/salesforce-logo.png"  title="Salesforce" alt="Connect Salesforce to DronaHQ" />
      </div>
      <h5>Salesforce</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/openai-logo.jpeg"  title="OpenAI" alt="Connect OpenAI to DronaHQ" />
      </div>
      <h5>OpenAI</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/openaiadv-logo.jpeg"  title="OpenAI Advance" alt="Connect OpenAI Advance to DronaHQ" />
      </div>
      <h5>OpenAI Advance</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/trello-logo.png"  title="Trello" alt="Connect Trello to DronaHQ" />
      </div>
      <h5>Trello</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/slack-logo.png"  title="Slack" alt="Connect Slack to DronaHQ" />
      </div>
      <h5>Slack</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/sendgrid-logo.png"  title="Sendgrid" alt="Connect Sendgrid to DronaHQ" />
      </div>
      <h5>Sendgrid</h5>
    </div>
  </VersionedLink><VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/twillio-logo.png"  title="Twillio" alt="Connect Twillio to DronaHQ" />
      </div>
      <h5>Twillio</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/clearbit-logo.png"  title="Clearbit" alt="Connect Clearbit to DronaHQ" />
      </div>
      <h5>Clearbit</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/googlesheets-logo.png"  title="Google Sheets" alt="Connect Google Sheets to DronaHQ" />
      </div>
      <h5>Google Sheets</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/intercom-logo.png"  title="Intercom" alt="Connect Intercom to DronaHQ" />
      </div>
      <h5>Intercom</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/bitly-logo.png"  title="Bitly" alt="Connect Bitly to DronaHQ" />
      </div>
      <h5>Bitly</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/proxycrawl-logo.jpeg"  title="Proxy Crawl" alt="Connect Proxy Crawl to DronaHQ" />
      </div>
      <h5>Proxy Crawl</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/diffbot-logo.png"  title="Diffbot" alt="Connect Diffbot to DronaHQ" />
      </div>
      <h5>Diffbot</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/what3word-logo.png"  title="What 3 Words" alt="Connect What 3 Words to DronaHQ" />
      </div>
      <h5>What 3 Words</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/zoom-logo.png"  title="Zoom" alt="Connect Zoom to DronaHQ" />
      </div>
      <h5>Zoom</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/ocr-logo.jpeg"  title="OCRSPace" alt="Connect OCRSPace to DronaHQ" />
      </div>
      <h5>OCRSPace</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/jira-logo.png"  title="Jira Software Cloud" alt="Connect Jira Software Cloud to DronaHQ" />
      </div>
      <h5>Jira Software Cloud</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/typeform-logo.png"  title="Typeform" alt="Connect Typeform to DronaHQ" />
      </div>
      <h5>Typeform</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/Zendesk-logo.png"  title="Zendesk" alt="Connect Zendesk to DronaHQ" />
      </div>
      <h5>Zendesk</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/Hacker-logo.jpeg"  title="HackerRank" alt="Connect HackerRank to DronaHQ" />
      </div>
      <h5>HackerRank</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/Freshdesk-logo.png"  title="Freshdesk" alt="Connect Freshdesk to DronaHQ" />
      </div>
      <h5>Freshdesk</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/WhatsApp-logo.jpeg"  title="WhatsApp" alt="Connect WhatsApp to DronaHQ" />
      </div>
      <h5>WhatsApp</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/Clarifai-logo.jpeg"  title="Clarifai" alt="Connect Clarifai to DronaHQ" />
      </div>
      <h5>Clarifai</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/Shopify-logo.png"  title="Shopify" alt="Connect Shopify to DronaHQ" />
      </div>
      <h5>Shopify</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/QuickBooks-logo.jpeg"  title="QuickBooks Online" alt="Connect QuickBooks Online to DronaHQ" />
      </div>
      <h5>QuickBooks Online</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/MyMemory-logo.png"  title="MyMemory" alt="Connect MyMemory to DronaHQ" />
      </div>
      <h5>MyMemory</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/Gmail-logo.webp"  title="Gmail" alt="Connect Gmail to DronaHQ" />
      </div>
      <h5>Gmail</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/Googlecal-logo.png"  title="Google Calender" alt="Connect Google Calender to DronaHQ" />
      </div>
      <h5>Google Calender</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/Asana-logo.jpeg"  title="Asana" alt="Connect Asana to DronaHQ" />
      </div>
      <h5>Asana</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/Cloudconvert-logo.jpeg"  title="Cloud Convert" alt="Connect Cloud Convert to DronaHQ" />
      </div>
      <h5>Cloud Convert</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/Github-logo.png"  title="Github" alt="Connect Github to DronaHQ" />
      </div>
      <h5>Github</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/msoutlook-logo.png"  title="Microsoft Outlook" alt="Connect Microsoft Outlook to DronaHQ" />
      </div>
      <h5>Microsoft Outlook</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/Razor-logo.png"  title="Razorpay" alt="Connect Razorpay to DronaHQ" />
      </div>
      <h5>Razorpay</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/Airtable-logo.png"  title="Airtable" alt="Connect Airtable to DronaHQ" />
      </div>
      <h5>Airtable</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/HubSpot-logo.png"  title="HubSpot" alt="Connect HubSpot to DronaHQ" />
      </div>
      <h5>HubSpot</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/Instamojo-logo.png"  title="Instamojo" alt="Connect Instamojo to DronaHQ" />
      </div>
      <h5>Instamojo</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/Stripe-logo.png"  title="Stripe" alt="Connect Stripe to DronaHQ" />
      </div>
      <h5>Stripe</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/awss3-logo.png"  title="AWS S3" alt="Connect AWS S3 to DronaHQ" />
      </div>
      <h5>AWS S3</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/awslambda-logo.png"  title="AWS Lambda" alt="Connect AWS Lambda to DronaHQ" />
      </div>
      <h5>AWS Lambda</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="/img/connectingDatasource/googlecloud-logo.png"  title="Google Cloud Storage" alt="Connect Google Cloud Storage to DronaHQ" />
      </div>
      <h5>Google Cloud Storage</h5>
    </div>
  </VersionedLink>
  <VersionedLink to="#">
    <div className="card-wrapper">
      <div className="card">
         <Image src="./img/connectingDatasource/SMTP-logo.png"  title="SMTP" alt="Connect SMTP to DronaHQ" />
      </div>
      <h5>SMTP</h5>
    </div>
  </VersionedLink>
</div>
