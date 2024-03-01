---
sidebar_position: 141
title: Overview
---

import Thumbnail from '@site/src/components/Thumbnail';

# Overview
You can now use DronaHQ's very own secure database solution built on top of PostgreSQL with a spreadsheet-like interface to manage your data. You can transform this data by creating your own queries and use it within DronaHQ app. 

On DronaHQ Cloud, the underlying database is managed by DronaHQ.

<figure>
  <Thumbnail src="/img/dhq-database/dhq-database-editor-ui.png" alt="DronaHQ Database Editor UI" style={{ marginBottom: '0px' }}/>
</figure>

## Features
DronaHQ Database enables you to:

- [Securely store and access tables of data](/dronahq-database/dhq-database-editor-ui/#manage-tables) in a PostgreSQL database that's only accessible as a resource within your DronaHQ organization.
- [Interact visually with data](/dronahq-database/dhq-database-editor-ui/#create-edit-and-delete-fields) through a spreadsheet-like interface, allowing you to edit, search, filter, sort, and paginate records within the interface.
- [Import](/dronahq-database/dhq-database-editor-ui/#import-csv) and [export](/dronahq-database/dhq-database-access-data-externally) table data in CSV format.
- [Create apps and write queries](/dronahq-database/dhq-database-use-in-app) to interact with DronaHQ Database like any other resource.
- [Integrate within DronaHQ Automations](/dronahq-database/dhq-database-use-in-app) to schedule ETL tasks to push and pull data between DronaHQ Database and third-party endpoints and integrations.

## Getting Started
On Cloud, DronaHQ Database is available for all users and can be located within the DronaHQ Managed section by navigating to the Connector's tab. You can view and manage your data within the database using the Database editor UI. 

You can use this feature for free by activating trial license which offers 1 GB of database storage.

<div style={{ position: 'relative', paddingBottom: 'calc(46.33333333333333% + 41px)', height: 0 }}>
  <iframe
    src="https://demo.arcade.software/B1S3Tb2n8Jqd4OCTKMWP?embed"
    title="DronaHQ Database - Access & Activation flow"
    frameBorder="0"
    loading="lazy"
    allowFullScreen
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', colorScheme: 'light' }}
    webkitallowfullscreen
    mozallowfullscreen
  ></iframe>
</div>
