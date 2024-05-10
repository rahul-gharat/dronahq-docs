---
sidebar_position: 3
title: Fx Functions
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

# Fx Functions

DronaHQ provides the non-developers also a way to bind data using Fx functions which are nothing but excel like functions. This is specifically for people who are conversant with excel formulas and would not like to go the javascript path. 

You can navigate to `control -> data section -> Fx` and click on `edit` to write the Fx formula in a specific editor. Test and save it to see the expected value. 

You can refer to the list of supported [Fx formulae here.](/reference/keywords-js-utilities/fx-formulas)

You can also build your own [custom reusable Fx functions](/custom-fx-ide) at the account level with an IDE in javascript which can be used across all apps.

<figure>
  <Thumbnail src="/img/binding-data/fx-data.png" alt="Fx data" width='100%'/>
  <figcaption align = "center"><i>Fx section in data binding</i></figcaption>
</figure>

<figure>
  <Thumbnail src="/img/binding-data/fx-formula.png" alt="Fx formula" width='100%'/>
  <figcaption align = "center"><i>Writing Fx formula</i></figcaption>
</figure>



:::caution Limitations

There is a limitation to the things that you can achieve using Fx functions. e.g. you cant connect to data sources or query your connectors. DronaHQ recommends using JS and Data queries to do advanced data bindings and manipulations.

:::
