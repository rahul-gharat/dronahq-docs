---
sidebar_position: 1
title: Navigate to Auth
---

import Thumbnail from '@site/src/components/Thumbnail';

The `Navigate to Authentication Screen` action is designed to clear cached authentication data or allow users to proceed with different credentials for connector authentication. This functionality is particularly useful when users need to manage cached tokens and switch between authentication credentials for connectors within your app.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/navigate-to-auth/navigate-to-auth.png" alt="Navigate to Auth URL" />
<figcaption align='center'><i>Navigate to Auth URL</i></figcaption>
</figure>  

## Setting up the Navigate to Auth

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/navigate-to-auth/feild.jpeg" alt="Navigate to Auth URL" />
</figure>


1. After successful authentication with a connector, you might want to reset cached token data. In this case, you can utilize the `Navigate to Authentication Screen` action.

2. In the Configure Action's Fields section, you'll find a dropdown option that determines whether the app should be reloaded after authentication or if it should continue from where the user left off.

   - If set to `TRUE`: After the user authenticates on the Managed Authentication screen, clicking `Continue` will reload the app and start from the beginning. This is useful when you want to provide a fresh start after authentication.
   - If set to `FALSE`: After the user authenticates on the Managed Authentication screen, clicking `Continue` will resume the app from where the user left off, preserving all data and progress.


## App Preview

Once you've set up the `Navigate to Authentication Screen` action and configured its fields, you can preview its behavior.

In the preview, you'll experience how the action influences the app's behavior after authentication. Depending on whether the app is reloaded or continues from the last state, users can have a seamless experience while navigating the app's authenticated sections.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/navigate-to-auth/preview.png" alt="Set Routing URL" />
</figure>

Utilizing the `Navigate to Authentication Screen` action allows you to enhance user experience by providing options to manage cached authentication data and choose how the app behaves after authentication.
