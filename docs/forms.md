---
sidebar_position: 26
title: Forms
---

import Thumbnail from '@site/src/components/Thumbnail';

# Building Standalone Forms
Learn how to build standalone forms using DronaHQ Forms and record responses directly to your database.
Use DronaHQ Forms to build standalone, customizable forms whose responses are written to a connected SQL database (MySQL, PostgreSQL, etc.). Forms are publicly accessible from a unique URL.
All users can create and fill out forms. You can build as many forms as you'd like and capture as many responses as your database supports.

:::info Info
To connect forms to an existing database, you must connect the database as a Connector in DronaHQ.
:::

## Create a Form
Go to the Create tab and select `Form`. It will auto create a form and open form on a new tab.
<div style={{ position: 'relative', paddingBottom: 'calc(46.33333333333333% + 41px)', height: 0 }}> 
   <iframe 
      src="https://demo.arcade.software/ONlr8PLr0nOKkyYaiJTk?embed&show_copy_link=true" 
      frameBorder="0"
      loading="lazy"
      allowFullScreen
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', colorScheme: 'light' }}
      webkitallowfullscreen
      mozallowfullscreen >
   </iframe>
</div>

## Connect Your Data
In the Form setup tab, select `From database` to direct responses to an established database.
<div style={{ position: 'relative', paddingBottom: 'calc(46.33333333333333% + 41px)', height: 0 }}> 
   <iframe 
      src="https://demo.arcade.software/lnW22CJpyoCvCdlxrFas?embed&show_copy_link=true"       
      frameBorder="0"
      loading="lazy"
      allowFullScreen
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', colorScheme: 'light' }}
      webkitallowfullscreen
      mozallowfullscreen >
   </iframe>
</div>

<br/>

When using `From Scratch` to store responses in the DronaHQ Database, create your custom fields in the form builder. These fields will automatically appear in your DronaHQ Database upon publishing.
<div style={{ position: 'relative', paddingBottom: 'calc(46.33333333333333% + 41px)', height: 0 }}> 
   <iframe 
      src="https://demo.arcade.software/tKm1w4eaTcvkueMQsS8B?embed&show_copy_link=true" 
      frameBorder="0"
      loading="lazy"
      allowFullScreen
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', colorScheme: 'light' }}
      webkitallowfullscreen
      mozallowfullscreen >
   </iframe>
</div>

## Synchronize Your Controls
Ensure that form schema changes are synchronized with your database schema. This synchronization will manage the insertion and deletion of necessary fields to align with the connectors table.
<div style={{ position: 'relative', paddingBottom: 'calc(46.33333333333333% + 41px)', height: 0 }}> 
   <iframe 
      src="https://demo.arcade.software/9GVRGOfhdhLTT6kG5cLo?embed&show_copy_link=true" 
      frameBorder="0"
      loading="lazy"
      allowFullScreen
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', colorScheme: 'light' }}
      webkitallowfullscreen
      mozallowfullscreen >
   </iframe>
</div>

## Integrate Visual Controls with other features.
You may choose to include Text, Image, and Divider fields to enhance presentation. When adding custom fields, make sure to name them appropriately before publishing. Use the sidebar option to hide or delete fields to exclude them from database inserts. Customize controls using tags like hide, required, or swap controls for further customization.
<div style={{ position: 'relative', paddingBottom: 'calc(46.33333333333333% + 41px)', height: 0 }}> 
   <iframe 
      src="https://demo.arcade.software/qy7ieAtwROtjLgmx2y6g?embed&show_copy_link=true" 
      frameBorder="0"
      loading="lazy"
      allowFullScreen
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', colorScheme: 'light' }}
      webkitallowfullscreen
      mozallowfullscreen >
   </iframe>
</div>


## Add & Modify Action Event
Add additional actions (email, slack, etc) when users submit this form. All the tasks you create here will happen after the submission and before clearing of the controls.
<div style={{ position: 'relative', paddingBottom: 'calc(46.33333333333333% + 41px)', height: 0 }}> 
   <iframe 
      src="https://demo.arcade.software/epJrl5uK5JnX58q2PP5V?embed&show_copy_link=true" 
      frameBorder="0"
      loading="lazy"
      allowFullScreen
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', colorScheme: 'light' }}
      webkitallowfullscreen
      mozallowfullscreen >
   </iframe>
</div>

## Use Form Responses
You can access form responses in the Responses tab. Responses are exclusively available for DronaHQ Database in both `From Database` and `From Scratch` modes. They are read-only and can be downloaded as a CSV file.
<div style={{ position: 'relative', paddingBottom: 'calc(46.33333333333333% + 41px)', height: 0 }}> 
   <iframe 
      src="https://demo.arcade.software/NGrsTkcWzTaGY2BtwFv9?embed&show_copy_link=true" 
      frameBorder="0"
      loading="lazy"
      allowFullScreen
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', colorScheme: 'light' }}
      webkitallowfullscreen
      mozallowfullscreen >
   </iframe>
</div>

## Preview, Publish, Share and Embed
Preview using the upper-right icon. Publish to obtain a unique URL for public access and copy embed URL form embed configuration.
<div style={{ position: 'relative', paddingBottom: 'calc(46.33333333333333% + 41px)', height: 0 }}> 
   <iframe 
      src="https://demo.arcade.software/J4NpboItQxnZvtvmsIEc?embed&show_copy_link=true" 
      frameBorder="0"
      loading="lazy"
      allowFullScreen
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', colorScheme: 'light' }}
      webkitallowfullscreen
      mozallowfullscreen >
   </iframe>
</div>

<br/>

This guide covers the basics of creating and managing standalone forms with DronaHQ. For detailed setup and customization, refer to the [DronaHQ Documentation](https://docs.DronaHQ.com/).
