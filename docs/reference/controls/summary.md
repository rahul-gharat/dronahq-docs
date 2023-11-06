---
sidebar_position: 1
title: Summary
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Summary control is an advanced control designed to display a summary of input fields gathered across various pages and to facilitate their availability in the workflow. It offers an efficient way to display summarized information based on the data from different controls in a multi-screen scenario.

<figure>
  <Thumbnail src="/img/reference/controls/summary/preview.png" alt="Summary" />
  <figcaption align = "center"><i>Summary</i></figcaption>
</figure>

The Summary control streamlines the process of referencing input data from multiple pages. Previously, users had to include data from different forms as hidden controls in the current form to utilize the respective values. However, with the Summary control, this intermediary step is no longer necessary. It allows the usage of input data from various pages directly on the current form and even in linked workflows for diverse purposes.

## Properties

The primary property of the Summary control is:

| Property | Description |
|----------|-------------|
| Pages    | Selects the pages from which data is to be captured for the summary. |

The `Pages` property is pivotal in extracting and displaying summarized data from the selected pages, enabling users to tailor the summary content based on specific pages.

<figure>
  <Thumbnail src="/img/reference/controls/summary/usecase.png" alt="Tray Dropdown" />
</figure>

The Summary control empowers users to efficiently handle and display data summaries from multiple pages, simplifying the workflow and streamlining the process of referencing input data from different sources.