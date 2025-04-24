---
sidebar_position: 101
---

# File Storage URL Migration for DronaHQ Self-Hosted Setup

This document provides the SQL migration scripts to update file storage URLs in the DronaHQ self-hosted setup when migrating from local file storage (`filerepository`) to a centralized cloud storage solution.

When you migrate files from the on-prem `filerepository` to cloud-hosted storage such as **Google Cloud Storage (GCS)**, **AWS S3**, or **Azure Blob Storage**, you must also update existing URLs in the database to reflect the new public paths. This ensures that apps, connectors, and buttons referencing these assets continue to function correctly after migration.


### ✅ Scope

The below SQL queries will update URL references in the following tables:
- `plugin_app`
- `plugin_app_version`
- `actionbutton`

Each query replaces `https://<old-domain>/filerepository/files/` with your new public URL prefix.


### ☁️ Migration to Google Cloud Storage (GCS)

Use the following SQL commands if you are migrating file storage to a **GCS bucket**:

```sql
-- Migration Command: Update File URLs from Local Storage to Google Cloud Storage (GCS)
-- This script replaces file URLs from the local filerepository to Google Cloud Storage (GCS)

-- Update plugin_app table
UPDATE plugin_app SET 
  plugin_url = REGEXP_REPLACE(plugin_url, '^https://<old-domain>/filerepository/files/', 'https://storage.googleapis.com/<gcs-bucket>/'),
  plugin_icon_url_xhdpi = REGEXP_REPLACE(plugin_icon_url_xhdpi, '^https://<old-domain>/filerepository/files/', 'https://storage.googleapis.com/<gcs-bucket>/'),
  plugin_icon_url_hdpi = REGEXP_REPLACE(plugin_icon_url_hdpi, '^https://<old-domain>/filerepository/files/', 'https://storage.googleapis.com/<gcs-bucket>/'),
  plugin_icon_url_mdpi = REGEXP_REPLACE(plugin_icon_url_mdpi, '^https://<old-domain>/filerepository/files/', 'https://storage.googleapis.com/<gcs-bucket>/'),
  plugin_icon_url_ldpi = REGEXP_REPLACE(plugin_icon_url_ldpi, '^https://<old-domain>/filerepository/files/', 'https://storage.googleapis.com/<gcs-bucket>/');

-- Update plugin_app_version table
UPDATE plugin_app_version SET 
  plugin_url = REGEXP_REPLACE(plugin_url, '^https://<old-domain>/filerepository/files/', 'https://storage.googleapis.com/<gcs-bucket>/'),
  plugin_web_url = REGEXP_REPLACE(plugin_web_url, '^https://<old-domain>/filerepository/files/', 'https://storage.googleapis.com/<gcs-bucket>/');

-- Update actionbutton table
UPDATE actionbutton SET 
  url = REGEXP_REPLACE(url, '^https://<old-domain>/filerepository/files/', 'https://storage.googleapis.com/<gcs-bucket>/'),
  image = REGEXP_REPLACE(image, '^https://<old-domain>/filerepository/files/', 'https://storage.googleapis.com/<gcs-bucket>/'),
  action_tile_img = REGEXP_REPLACE(action_tile_img, '^https://<old-domain>/filerepository/files/', 'https://storage.googleapis.com/<gcs-bucket>/'),
  grid_xhdpi = REGEXP_REPLACE(grid_xhdpi, '^https://<old-domain>/filerepository/files/', 'https://storage.googleapis.com/<gcs-bucket>/'),
  grid_hdpi = REGEXP_REPLACE(grid_hdpi, '^https://<old-domain>/filerepository/files/', 'https://storage.googleapis.com/<gcs-bucket>/'),
  grid_mdpi = REGEXP_REPLACE(grid_mdpi, '^https://<old-domain>/filerepository/files/', 'https://storage.googleapis.com/<gcs-bucket>/'),
  grid_ldpi = REGEXP_REPLACE(grid_ldpi, '^https://<old-domain>/filerepository/files/', 'https://storage.googleapis.com/<gcs-bucket>/'),
  tile_xhdpi = REGEXP_REPLACE(tile_xhdpi, '^https://<old-domain>/filerepository/files/', 'https://storage.googleapis.com/<gcs-bucket>/'),
  tile_hdpi = REGEXP_REPLACE(tile_hdpi, '^https://<old-domain>/filerepository/files/', 'https://storage.googleapis.com/<gcs-bucket>/'),
  tile_mdpi = REGEXP_REPLACE(tile_mdpi, '^https://<old-domain>/filerepository/files/', 'https://storage.googleapis.com/<gcs-bucket>/'),
  tile_ldpi = REGEXP_REPLACE(tile_ldpi, '^https://<old-domain>/filerepository/files/', 'https://storage.googleapis.com/<gcs-bucket>/');

-- IMPORTANT:
-- Replace <old-domain> with your existing domain (e.g., dronahq.example.com)
-- Replace <gcs-bucket> with your actual Google Cloud Storage bucket name
```


### ☁️ Migration to AWS S3 Bucket

Use the following SQL commands if you are migrating file storage to an AWS S3 bucket:

```sql
-- Migration Command: Update File URLs from Local Storage to AWS S3
-- This script replaces file URLs from the local filerepository to AWS S3 bucket URLs

-- Update plugin_app table
UPDATE plugin_app SET 
  plugin_url = REGEXP_REPLACE(plugin_url, '^https://<old-domain>/filerepository/files/', 'https://<s3-bucket>.s3.<region>.amazonaws.com/'),
  plugin_icon_url_xhdpi = REGEXP_REPLACE(plugin_icon_url_xhdpi, '^https://<old-domain>/filerepository/files/', 'https://<s3-bucket>.s3.<region>.amazonaws.com/'),
  plugin_icon_url_hdpi = REGEXP_REPLACE(plugin_icon_url_hdpi, '^https://<old-domain>/filerepository/files/', 'https://<s3-bucket>.s3.<region>.amazonaws.com/'),
  plugin_icon_url_mdpi = REGEXP_REPLACE(plugin_icon_url_mdpi, '^https://<old-domain>/filerepository/files/', 'https://<s3-bucket>.s3.<region>.amazonaws.com/'),
  plugin_icon_url_ldpi = REGEXP_REPLACE(plugin_icon_url_ldpi, '^https://<old-domain>/filerepository/files/', 'https://<s3-bucket>.s3.<region>.amazonaws.com/');

-- Update plugin_app_version table
UPDATE plugin_app_version SET 
  plugin_url = REGEXP_REPLACE(plugin_url, '^https://<old-domain>/filerepository/files/', 'https://<s3-bucket>.s3.<region>.amazonaws.com/'),
  plugin_web_url = REGEXP_REPLACE(plugin_web_url, '^https://<old-domain>/filerepository/files/', 'https://<s3-bucket>.s3.<region>.amazonaws.com/');

-- Update actionbutton table
UPDATE actionbutton SET 
  url = REGEXP_REPLACE(url, '^https://<old-domain>/filerepository/files/', 'https://<s3-bucket>.s3.<region>.amazonaws.com/'),
  image = REGEXP_REPLACE(image, '^https://<old-domain>/filerepository/files/', 'https://<s3-bucket>.s3.<region>.amazonaws.com/'),
  action_tile_img = REGEXP_REPLACE(action_tile_img, '^https://<old-domain>/filerepository/files/', 'https://<s3-bucket>.s3.<region>.amazonaws.com/'),
  grid_xhdpi = REGEXP_REPLACE(grid_xhdpi, '^https://<old-domain>/filerepository/files/', 'https://<s3-bucket>.s3.<region>.amazonaws.com/'),
  grid_hdpi = REGEXP_REPLACE(grid_hdpi, '^https://<old-domain>/filerepository/files/', 'https://<s3-bucket>.s3.<region>.amazonaws.com/'),
  grid_mdpi = REGEXP_REPLACE(grid_mdpi, '^https://<old-domain>/filerepository/files/', 'https://<s3-bucket>.s3.<region>.amazonaws.com/'),
  grid_ldpi = REGEXP_REPLACE(grid_ldpi, '^https://<old-domain>/filerepository/files/', 'https://<s3-bucket>.s3.<region>.amazonaws.com/'),
  tile_xhdpi = REGEXP_REPLACE(tile_xhdpi, '^https://<old-domain>/filerepository/files/', 'https://<s3-bucket>.s3.<region>.amazonaws.com/'),
  tile_hdpi = REGEXP_REPLACE(tile_hdpi, '^https://<old-domain>/filerepository/files/', 'https://<s3-bucket>.s3.<region>.amazonaws.com/'),
  tile_mdpi = REGEXP_REPLACE(tile_mdpi, '^https://<old-domain>/filerepository/files/', 'https://<s3-bucket>.s3.<region>.amazonaws.com/'),
  tile_ldpi = REGEXP_REPLACE(tile_ldpi, '^https://<old-domain>/filerepository/files/', 'https://<s3-bucket>.s3.<region>.amazonaws.com/');

-- IMPORTANT:
-- Replace <old-domain> with your existing domain (e.g., dronahq.example.com)
-- Replace <s3-bucket> with your actual AWS S3 bucket name
-- Replace <region> with your S3 bucket’s region (e.g., ap-south-1)
```


### ☁️ Migration to Azure Storage Container

Use the following SQL commands if you are migrating file storage to an Azure Blob Storage container:

```sql
-- Migration Command: Update File URLs from Local Storage to Azure Blob Storage
-- This script replaces file URLs from the local filerepository to Azure Storage container URLs

-- Update plugin_app table
UPDATE plugin_app SET 
  plugin_url = REGEXP_REPLACE(plugin_url, '^https://<old-domain>/filerepository/files/', 'https://<storage-account>.blob.core.windows.net/<container>/'),
  plugin_icon_url_xhdpi = REGEXP_REPLACE(plugin_icon_url_xhdpi, '^https://<old-domain>/filerepository/files/', 'https://<storage-account>.blob.core.windows.net/<container>/'),
  plugin_icon_url_hdpi = REGEXP_REPLACE(plugin_icon_url_hdpi, '^https://<old-domain>/filerepository/files/', 'https://<storage-account>.blob.core.windows.net/<container>/'),
  plugin_icon_url_mdpi = REGEXP_REPLACE(plugin_icon_url_mdpi, '^https://<old-domain>/filerepository/files/', 'https://<storage-account>.blob.core.windows.net/<container>/'),
  plugin_icon_url_ldpi = REGEXP_REPLACE(plugin_icon_url_ldpi, '^https://<old-domain>/filerepository/files/', 'https://<storage-account>.blob.core.windows.net/<container>/');

-- Update plugin_app_version table
UPDATE plugin_app_version SET 
  plugin_url = REGEXP_REPLACE(plugin_url, '^https://<old-domain>/filerepository/files/', 'https://<storage-account>.blob.core.windows.net/<container>/'),
  plugin_web_url = REGEXP_REPLACE(plugin_web_url, '^https://<old-domain>/filerepository/files/', 'https://<storage-account>.blob.core.windows.net/<container>/');

-- Update actionbutton table
UPDATE actionbutton SET 
  url = REGEXP_REPLACE(url, '^https://<old-domain>/filerepository/files/', 'https://<storage-account>.blob.core.windows.net/<container>/'),
  image = REGEXP_REPLACE(image, '^https://<old-domain>/filerepository/files/', 'https://<storage-account>.blob.core.windows.net/<container>/'),
  action_tile_img = REGEXP_REPLACE(action_tile_img, '^https://<old-domain>/filerepository/files/', 'https://<storage-account>.blob.core.windows.net/<container>/'),
  grid_xhdpi = REGEXP_REPLACE(grid_xhdpi, '^https://<old-domain>/filerepository/files/', 'https://<storage-account>.blob.core.windows.net/<container>/'),
  grid_hdpi = REGEXP_REPLACE(grid_hdpi, '^https://<old-domain>/filerepository/files/', 'https://<storage-account>.blob.core.windows.net/<container>/'),
  grid_mdpi = REGEXP_REPLACE(grid_mdpi, '^https://<old-domain>/filerepository/files/', 'https://<storage-account>.blob.core.windows.net/<container>/'),
  grid_ldpi = REGEXP_REPLACE(grid_ldpi, '^https://<old-domain>/filerepository/files/', 'https://<storage-account>.blob.core.windows.net/<container>/'),
  tile_xhdpi = REGEXP_REPLACE(tile_xhdpi, '^https://<old-domain>/filerepository/files/', 'https://<storage-account>.blob.core.windows.net/<container>/'),
  tile_hdpi = REGEXP_REPLACE(tile_hdpi, '^https://<old-domain>/filerepository/files/', 'https://<storage-account>.blob.core.windows.net/<container>/'),
  tile_mdpi = REGEXP_REPLACE(tile_mdpi, '^https://<old-domain>/filerepository/files/', 'https://<storage-account>.blob.core.windows.net/<container>/'),
  tile_ldpi = REGEXP_REPLACE(tile_ldpi, '^https://<old-domain>/filerepository/files/', 'https://<storage-account>.blob.core.windows.net/<container>/');

-- IMPORTANT:
-- Replace <old-domain> with your existing domain (e.g., dronahq.example.com)
-- Replace <storage-account> with your Azure Storage Account name
-- Replace <container> with your Azure Blob container name
```

### 📌 Final Notes
- Make sure your file paths in cloud storage maintain the same folder structure as in filerepository.
- All files must be publicly accessible (read-only) or behind a signed URL mechanism depending on your app setup.
- Backup your database before running any UPDATE queries.