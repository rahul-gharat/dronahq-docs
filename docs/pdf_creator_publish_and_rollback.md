---
sidebar_position: 124
---

import Thumbnail from '@site/src/components/Thumbnail';

# Publish & Rollback

DronaHQ allows you to work with multiple versions of the same document by publishing them and allowing to switch back to any previous version by using the rollback feature.

## Publish
The publish button is located at the top right of the PDF Editor. DronaHQ encourages you to provide some release notes, that way it will be easier for you to keep track of the template versions published.

<figure>
    <Thumbnail src="/img/pdf_creator/publish-and-rollback/publish-notes.png" alt="PDF Template Publish Modal" />
    <figcaption align='center'><i>PDF Template Publish Modal</i></figcaption>
</figure>

## Rollback
At the top left of the PDF Editor, a version dropdown is visible which shows the current template version being edited. When you click on the dropdown, a list of the published versions appear. You can rollback by pressing the green arrow icon against the version you want to rollback to. 

<figure>
    <Thumbnail src="/img/pdf_creator/publish-and-rollback/rollback-menu.png" alt="PDF Template Version Modal" />
    <figcaption align='center'><i>PDF Template Version Modal</i></figcaption>
</figure>

:::caution Generate PDF

When you publish a new version or rollback to any specific version, then that version becomes the current version. So when you generate the pdf, the current version of the template is taken into account.

:::