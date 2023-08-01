---
sidebar_position: 1
title: Link
---

import Image from '@site/src/components/Image'; import VersionedLink from '@site/src/components/VersionedLink'; import
Thumbnail from '@site/src/components/Thumbnail';

The Link control is a Custom control designed to create links either from URLs or to different pages while enabling further actions. It proves useful when you want to incorporate links into your application and define specific actions triggered by clicking those links.

<figure>
  <Thumbnail src="/img/reference/controls/link/preview.jpg" alt="Link" />
  <figcaption align = "center"><i>Link</i></figcaption>
</figure>

## Binding Data Options

Link control accepts a string object to create a hyperlink. There are different ways in which you can bind data to the Link control.

### Static Data Option

To display a static link in the Link control, you can use the Bind Data option. The Bind Data option must be specified as a string representing the link URL. For example:

```js
"https://www.google.com"
```

### Dynamic Data Option

You can dynamically bind the link URL by fetching data from `Data queries`, `Sheets`, or `Custom functions` and binding the response to the Data Bind option. For example:

Assuming you want to create a link that directs users to a specific page based on the `country` selected from a database.

Make sure you have a data query named `getCountryLink` that is configured to fetch the link URL for the selected country from your database. The SQL syntax for this query could be:

```sql
SELECT link_url FROM country_links WHERE country = :selected_country
```

This query retrieves the link URL from the `country_links` table in your database based on the selected country.

In the Link control, Bind Data Options, select the `Quick Select -> Data Queries -> getCountryLink`

```js
{{getCountryLink}}
```

By selecting the `getCountryLink` data query, the Link control will fetch the link URL from your database based on the selected country, creating a dynamic hyperlink for the user to follow.

## Propertiea

| Property   | Description                                                                                           |
|------------|-------------------------------------------------------------------------------------------------------|
| Link Text  | Specifies the text that will appear as the hyperlink on the form.                                   |
| Font       | Defines various font properties, including Size, Line Height, Letter Spacing, Weight, Color, and Alignment. |

## Control Outputs

The outputs from the Link control, represented by the placeholder `{{link}}`, can be referenced in other controls, data queries, or JavaScript functions using the control's unique name.

| Output       | Description                                                                                                  |
|--------------|--------------------------------------------------------------------------------------------------------------|
| link    | Represents the link present in the Link control.                        |

## Events

| Trigger      | Description                                                                                                      |
|--------------|------------------------------------------------------------------------------------------------------------------|
| link_click   | Actions triggered when you click the link text. You can add Open URL or Navigate to action and other actions as needed. |