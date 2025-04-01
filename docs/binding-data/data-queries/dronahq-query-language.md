---
sidebar_position: 1
title: DronaHQ Query Language
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

# DronaHQ Query Language

DQL or DronaHQ Query Language serves as an efficient query and transformation tool for JSON data, drawing inspiration from the 'location path' concepts found in XPath 3.1. This connection enables the formulation of complex queries through a condensed and user-friendly notation. The language includes a comprehensive assortment of pre-established operators and functions that facilitate the manipulation and amalgamation of the extracted information. Furthermore, the results of these queries can be molded into any desired JSON output arrangement, utilizing well-known JSON object and array constructs. Along with the capability to formulate user-specific functions, this allows for the crafting of advanced expressions designed to handle any conceivable JSON query or transformation challenge.

You can write DQL expressions in the following categories:
- [Getting basic values](/reference/dronahq-query-language/getting-basic-values/)
- [Selecting conditional data](/reference/dronahq-query-language/selecting-conditional-data)
- [Returning structured data](/reference/dronahq-query-language/returning-structured-data)
- [Manipulating data](/reference/dronahq-query-language/manipulating-data)
- [DQL functions](/reference/dronahq-query-language/dql-function-reference)

<figure>
  <Thumbnail src="/img/data-queries/dql.png" alt="DQL" width='100%'/>
  <figcaption align = "center"><i>DQL</i></figcaption>
</figure>

<figure>
  <Thumbnail src="/img/data-queries/dql-transform.png" alt="DQL in transformation" width='100%'/>
  <figcaption align = "center"><i>DQL in transform section</i></figcaption>
</figure>

## Advanced

 1. When to Execute : Here you can write a condition which results in TRUE/FALSE to decide whether to execute this action or not.
 2. Error message : Here you can write a error message that will be displayed when the condition fails to execute.
 3. Run on App open - Toggle: This will make the dataquery to run on app open regardless of if it's referenced in any other control or dataquery.
