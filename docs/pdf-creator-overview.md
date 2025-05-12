---
sidebar_position: 121
---

import Thumbnail from '@site/src/components/Thumbnail';

# Overview

PDF Creator allows you to create custom document templates suited for your business needs - such as sales invoices, offer letters, summary reports, and more. You can either design templates from scratch, use ready-to-edit templates with the built-in editor, or upload existing fillable PDFs.

For `Regular Templates`, DronaHQ provides a powerful in-browser `WYSIWYG editor` that enables you to design documents visually using ready-to-use components like containers, columns, headings, tables, and more. You can add multiple pages, switch orientations (`portrait`/`landscape`), set custom margins, and choose from over 18 unique page sizes. PDF content can also be made `dynamic` by binding variables to APIs, databases, or DronaHQ controls - supporting both text and image fields.

For `Fillable Templates`, you can upload a predesigned fillable PDF with form fields. These are non-editable in the UI but allow you to preview and generate completed documents by filling field values via a simple JSON structure.

If the PDF contains sensitive or confidential data, it can be `password-protected` and securely distributed.

:::info

- **Fillable PDF templates** are currently supported **only on self-hosted deployments**. This feature is **not available on cloud-hosted environments** (managed by DronaHQ) at the time of writing.

- On **self-hosted deployments**, only the `A4` page size and `portrait` orientation are supported. Features like **variable page size and orientation** are available **only on cloud-hosted deployments**.

- This feature is available as an [add-on](https://www.dronahq.com/features/pdf-creator) and must be **activated before use**.

:::

<figure>
  <Thumbnail src="/img/pdf_creator/pdf-creator-addon-screen.png" alt="PDF creator template listing" />
  <figcaption align='center'><i>PDF Creator template listing</i></figcaption>
</figure>