---
sidebar_position: 1
title: Overview
---

import Thumbnail from '@site/src/components/Thumbnail';

# Overview

You can now use DronaHQ's managed file storage built on top of Amazon web services's simple secure storage (AWS S3). 
DronaHQ File Storage comes with built in File explorer for storing and managing your files in simple and friendly way.
You can also interact with File storage using dedicate connector which allows you to upload file(s), get list of
uploaded objects, get signed url of files, also get contents of file.

## Getting started

On Cloud:
DronaHQ provides Managed File Storage for all users. You can access it under the DronaHQ Managed section by navigating to the Connectors tab. The File Explorer and a dedicated connector allow you to view and manage your stored files seamlessly.

On Self-Hosted Installation:
For self-hosted deployments, users must configure their own AWS S3 credentials to enable Managed File Storage. Additionally, the appropriate permissions must be granted to the S3 bucket to ensure smooth integration with DronaHQ’s File Explorer.

You can use this feature for free by activating trial license which offers 1 GB of file storage.

<div style={{ position: 'relative', paddingBottom: 'calc(46.33333333333333% + 41px)', height: 0 }}>
  <iframe
    src="https://demo.arcade.software/E0Uc0lZONX57s8WmnmaM?embed"
    title="DronaHQ Database - Access & Activation flow"
    frameBorder="0"
    loading="lazy"
    allowFullScreen
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', colorScheme: 'light' }}
    webkitallowfullscreen
    mozallowfullscreen
  ></iframe>
</div>

## File Storage Explorer Layout

The DronaHQ File Storage Explorer is a streamlined command center for keeping your data organized and accessible. 

<figure>
  <Thumbnail src="/img/file-storage/file-storage-dashboard.jpeg" alt="File Storage explorer" />
  <figcaption align = "center"><i>File Storage Explorer</i></figcaption>
</figure>

| Feature | Description |
|---|---|
| File List | See all files and folders with details. Manage individual files with actions menu. |
| Search Bar | Search for files by name using the search bar. |
| Upload Options | Create new folders, upload individual files, and upload entire folders. |
| Filters  | Refine the file list based on type (FOLDER, IMAGE, PDF, CSV, XLS, PPT, DOC, ZIP, VIDEO, AUDIO, TEXT, RTF, FONT, CODE, DATA). |
| Actions Button  | Perform context-sensitive actions on selected files (e.g., generate shareable URL). |
| Layout Button  | Switch between list view, and large icons view. |




