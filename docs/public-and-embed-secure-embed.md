---
sidebar_position: 133
title: Secure embed with SSO token
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

# Secure embed with user SSO

Due to DronaHQ's efficient app-building capabilities, it is frequently preferred over traditional code writing for faster development. As a result, embedding DronaHQ apps into existing portals, tools, and applications has become a common practice.

The following sections elucidate how to ensure a seamless and secure experience for end users without necessitating a double-login process (i.e., logging into the parent portal and then separately into the embedded DronaHQ app).

When integrating DronaHQ into your web application and ensuring both utilize the same Identity Provider (IDP), users may encounter a double Single Sign-On (SSO) process. Initially, they would SSO into the web application and then again into the embedded DronaHQ app. However, to enhance user experience and avoid this redundancy, you have the option to configure DronaHQ to automatically sign the user in with SSO. In this setup, instead of displaying a separate login screen, DronaHQ will seamlessly authenticate the user if they already have an existing, authenticated session on the IDP. This streamlines the process and eliminates the need for repeated logins, providing a more efficient and user-friendly experience.

[Read more about it in detail and check the step by step guide here](/secure-embed)