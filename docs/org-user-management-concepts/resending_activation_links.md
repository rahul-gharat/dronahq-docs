---
sidebar_position: 1
title: Resending activation links
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

# Resending activation links

The feature of resending activation links for unverified and non-activated user accounts is a valuable tool for ensuring a smooth onboarding process. When users are invited in DronaHQ, they receive an activation link via email to verify their account. However, due to various reasons such as email delivery issues or oversight, some users may miss or ignore the initial activation email.

To address this, the `activation link` feature allows administrators to fetch the activation link and template email manually. They can then send the users a reminder to activate their accounts. This feature not only ensures that legitimate users can complete the registration process but also enhances security by preventing unauthorized account activations.

:::info Please Note

The admin users in DronaHQ will only see this option when the invited users have not yet verified their accounts or activated their account. If the user is added with a password this option will not be seen against those users as they are pre-activated users. Also if SSO is configured in the account this option is no relevance for those users.

:::

<figure>
  <Thumbnail src="/img/user-management/activate-model.png" alt="Activation model" width='100%'/>
  <figcaption align = "center"><i>Activation help</i></figcaption>
</figure>