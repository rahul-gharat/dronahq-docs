---
sidebar_position: 1
title: Message passing framework
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

# Message passing framework

DronaHQ also supports usecases where the parent web apps can pass data to the embed app realtime without refreshing or reloading the embedded app. DronaHQ internally leverages on the PostMessage feature available on the browsers to relay these messages realtime from the parent to the embed app. This framework has been effectively used even in POS machines where every new product scanned is passed as a message to the embedded app built on DronaHQ.

[Read more about it in detail and check the step by step guide here](../../public_and_embed_sharing_options/#real-time-message-passing-framework)