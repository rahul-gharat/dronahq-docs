---
sidebar_position: 1
title: Overview
---

import Thumbnail from '@site/src/components/Thumbnail';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Getting Started with Forms in DronaHQ

Learn how to build and manage forms using Standalone Forms, JSON Schema Forms, and Auto Form Generation to collect user input and store responses in a database.


Forms play a crucial role in data collection, automation, and user interaction within applications. DronaHQ offers three powerful form-building methods to suit different use cases:  

1. `Standalone Forms` – Customizable, shareable forms that store responses in a connected database.  
2. `JSON Schema Forms` – Dynamic forms built using JSON and UI schemas for programmatic control.  
3. `Auto Form Generation` – Instantly generated forms based on database schemas or API responses.  

<Tabs groupId="dronahq-forms">

<TabItem value="standalone-forms" label="Standalone Forms">

Standalone Forms are self-contained, shareable forms that automatically save user responses into a SQL database (MySQL, PostgreSQL, etc.) or DronaHQ’s built-in database. These forms can be hosted publicly, embedded within apps, or shared via a direct URL.

#### Key Features
- Drag-and-Drop Builder – Customize form fields, layouts, and UI elements.  
- Database-Connected – Store submissions in a connected SQL database.  
- Publicly Accessible – Share forms via a unique URL or embed them in apps.  
- Automated Workflows – Trigger actions (emails, Slack notifications, etc.) upon form submission.  
- Custom Themes & Branding – Modify colors, logos, and styles to match your brand.  

#### Best Use Cases
- Customer Feedback & Surveys  
- Lead Capture Forms  
- Registration & Sign-up Forms  
- Support Ticket Submission  
- Employee Onboarding & HR Forms  

</TabItem>

<TabItem value="json-schema-forms" label="JSON Schema Forms">

DronaHQ’s [JSON Schema Form](/forms/json-schema-forms/) is based on the react-jsonschema-form library, allowing developers to generate forms dynamically using JSON schema and UI schema. These forms are useful for cases where structure and validation need to be programmatically controlled.

#### Key Features
- Schema-Based Form Generation – Define fields, data types, and validation rules in JSON.  
- Dynamic Layouts – Forms update automatically based on schema changes.  
- Predefined Default Data – Auto-fill fields with existing data from an API or database.  
- Built-In Validation – Enforce required fields, numeric ranges, and data types.  
- Event-Driven Actions – Trigger workflows and API calls based on user input.  

#### When to Use JSON Schema Forms
- When you need dynamic form generation with programmatic control.  
- When you need complex validation (e.g., conditional fields, regex validation).  
- When integrating with external APIs that require schema-based input.  

</TabItem>

<TabItem value="auto-form-generation" label="Auto Form Generation">

DronaHQ allows users to [automatically generate](https://docs.dronahq.com/building-apps-concepts/autogenerate-forms-and-crud/#autogenerate-form) forms from database tables or API responses. This eliminates the need to manually define fields, making form creation faster and more efficient.

#### Key Features
- Instant Form Creation – Auto-generate forms from an existing database table.  
- Schema Detection – Automatically recognizes field types (text, number, dropdown, etc.).  
- Customizable Fields – Modify generated fields, labels, and validation rules.  
- Database Integration – Saves responses directly into the connected database.  
- API Response Mapping – Use API responses to auto-fill form fields.  

#### Best Use Cases
- CRUD Applications – Instantly create forms to add, edit, or delete records in a database.  
- Customer Intake Forms – Auto-generate fields based on API responses (e.g., CRM data).  
- Internal Admin Panels – Quickly create dashboards with form-driven interactions.  

</TabItem>

</Tabs>





## Comparison 

| Feature | Standalone Forms | JSON Schema Forms | Auto Form Generation |  
|---------|----------------|------------------|----------------------|  
| Customization | Drag-and-drop UI builder | JSON-based form definition | Auto-generated fields, editable |  
| Data Storage | SQL database or DronaHQ Database | JSON schema-defined structure | Database or API-based |  
| Automation | Supports post-submission workflows | Supports event-based triggers | Built-in field detection |  
| Flexibility | Free hand UI configurations | Full programmatic control | Moderate customization |  
| Best Use Case | Simple user-friendly forms | Dynamic or data-driven forms | Instant form creation |  


