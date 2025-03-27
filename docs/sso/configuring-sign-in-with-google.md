---
sidebar_position: 3
---

import Thumbnail from '@site/src/components/Thumbnail';


# Configuring Sign In with Google

:::info PLEASE NOTE

Available only on DronaHQ Cloud Version.
If you are on Self-Hosted version, Please refer [Configuring SSO for Google OIDC](/sso/configuring-sso-for-google-oidc)
:::


## Prerequisites

To `enable/disable` Sign In with Google in DronaHQ, you will need:

1. Admin permission on DronaHQ Cloud portal.


## Enabling Sign In with Google

For Enabling Sign In with Google in DronaHQ, Go to `Manage Users -> Create -> SSO configuration -> Sign In with Google -> ... -> Enable`

<figure>
  <Thumbnail src="/img/sso/sso-enable-sign-in-with-google.png" alt="Enable Google Sign In" />
  <figcaption align = "center"><i>Enable Google Sign In</i></figcaption>
</figure>

Once you enable this option, you will receive success message and the list will be updated to `Enabled` status. In order to check this, you can Navigate to your End user portal `subdomain` or `custom domain` set using `Profile -> Account Settings -> Domain & Branding` on you browser. You would notice, `Sign in with Google` option is visible on Sign in screen.

<figure>
  <Thumbnail src="/img/sso/sso-sign-in-with-google-web.png" alt="Google Sign In Enabled on End User Portal" />
  <figcaption align = "center"><i>Google Sign In Enabled on End User Portal</i></figcaption>
</figure>

## Disabling Sign In with Google

For Disabling Sign In with Google in DronaHQ, Go to `Manage Users -> Create -> SSO configuration -> Sign In with Google -> ... -> Disable`

<figure>
  <Thumbnail src="/img/sso/sso-disable-sign-in-with-google.png" alt="Disable Google Sign In" />
  <figcaption align = "center"><i>Disable Google Sign In</i></figcaption>
</figure>


Once you disable this option, you will receive success message and the list will be updated to `Disabled` status. In order to check this, you can Navigate to your End user portal `subdomain` or `custom domain` set using `Profile -> Account Settings -> Domain & Branding` on your browser. You would notice, `Sign in with Google` option is not visible on Sign in screen.

<figure>
  <Thumbnail src="/img/sso/sso-sign-in-with-google-disabled-web.png" alt="Google Sign In Disabled on End User Portal" />
  <figcaption align = "center"><i>Google Sign In Disabled on End User Portal</i></figcaption>
</figure>


:::info PLEASE NOTE
These Changes will be reflected only on Web App - End User portal. DronaHQ Creator portal, DronaHQ Android and iOS Mobile App will always show Google Sign In button, however based on your settings it will either allow user to Sign In with Google or Disallow it.
For White-Labelled Android/iOS App, you will have to request for updating the White-Labelled app with Sign In with Google setting and upload it on respective Appstore.
:::
