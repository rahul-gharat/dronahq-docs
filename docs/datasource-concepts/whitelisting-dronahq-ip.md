---
sidebar_position: 1
---
import Thumbnail from '@site/src/components/Thumbnail';

# Whitelisting DronaHQ IP

After Database server is accessible, you may need to set up your Database engine itself to accept connections from DronaHQ.

When connecting database to DronaHQ, you will need to whitelist our IP addresses to enable our server to access your database.

To get DronaHQ's IP to whitelist, Go to `Connectors -> + CONNECTOR -> Select Supported DB`, in this case MySQL and `enable` this toggle named `Whitelist IP`.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/whitelist_ip.png" alt="Whitelist IP" width='75%' />
  <figcaption align = "center"><i>Whitelist IP</i></figcaption>
</figure>

