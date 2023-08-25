---
sidebar_position: 3
---
import Thumbnail from '@site/src/components/Thumbnail';

# SSH tunneling
[SSH tunneling](https://en.wikipedia.org/wiki/Tunneling_protocol#Secure_Shell_tunneling), or SSH port forwarding, is a method of transporting arbitrary data over an encrypted SSH connection. SSH tunnels allow connections made to a local port to be forwarded to a remote machine via a secure channel.

DronaHQ supports connecting to several databases that are hosted within a private network via SSH tunneling.

## Prerequisites
- DronaHQ should have access to a remote machine (SSH tunnel) which should be on same private network where database is hosted.
- To authorize DronaHQ to connect to the host, add the contents of the public key in use in /home/user/.ssh/authorized_keys.

## Configuring SSH tunneling in DronaHQ
To configure SSH tunneling, Go to `Connectors -> + CONNECTOR -> Select Supported DB`, in this case MySQL and `enable` this toggle named `Enable SSH tunneling`.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/ssh-tunnel/ssh_tunnel.png" alt="Configure SSH" width='75%' />
  <figcaption align = "center"><i>Configure SSH</i></figcaption>
</figure>

Once SSH config is enabled, user will be prompt with few additional fields.

| Field  | Description                                                                                           |
|-------|-------------------------------------------------------------------------------------------------------|
| Secure Server  | A bastion host, provides access to a private network from an external network.
| SSH Port  |  This port is used for Secure Shell (SSH) communication and allows remote administration access to the VM, default port is 22.|
| SSH Keys | Private key used for SSH authentication. |

:::info NOTE
If you need very safe communication, change the default SSH port number.It will help you not to face the brute force attack.
:::

## Manage SSH keys
To manage ssh keys for SSH tuneeling, Go to `Account Settings -> SSH Key management`.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/ssh-tunnel/manage_sshkey.png" alt="Manage SSH key" width='75%' />
  <figcaption align = "center"><i>Manage SSH keys</i></figcaption>
</figure>

If you have not configure any SSH key yet, you can add new ssh key pair to your account.
Go to `Account Settings -> SSH Key management -> +Add Key`.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/ssh-tunnel/add_sshkey.png" alt="Add SSH key" width='75%' />
  <figcaption align = "center"><i>Add SSH key</i></figcaption>
</figure>

## Conclusion
Secure access to databases is one of the primary use cases in the DevOps world. Exposing critical databases to the internet directly increases risk.Thus, SSH tunnels are recommended.



