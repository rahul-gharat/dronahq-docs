---
sidebar_position: 1
title: Preventing request spoofing
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

# Preventing request spoofing

There are rare cases where manipulation of the API calls can happen and following cases need to be avoided:
- Manipulation of network requests
- Replay attacks 

To safeguard against any potential manipulation of network requests and the introduction of arbitrary values into the prepared statement, you can take advantage of DronaHQ's "Prevent resource request spoofing" feature. When this feature is enabled, DronaHQ actively rejects network requests that attempt to refer to manipulate dynamic parameters in the queries and do not match the expected values for the user initiating the query. This feature ensures enhanced security and helps maintain data integrity within your DronaHQ applications. DronaHQ also makes sure that all the network calls that happen are time sensitive and replaying the same calls will not work beyond a particular threshold time. 

You can go to `Settings -> App Settings -> Prevent resource request spoofing` and toggle it ON to enable this additional security.

<figure>
  <Thumbnail src="/img/building-apps-concepts/prevent-request-spoofing/prevent-request-spoofing.png" alt="Prevent request spoofing" width='100%'/>
  <figcaption align = "center"><i>Prevent request spoofing</i></figcaption>
</figure>

<figure>
  <Thumbnail src="/img/building-apps-concepts/prevent-request-spoofing/network-request.png" alt="Network Requests" width='100%'/>
  <figcaption align = "center"><i>Network request</i></figcaption>
</figure>