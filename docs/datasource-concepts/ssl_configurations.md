---
sidebar_position: 4
---
import Thumbnail from '@site/src/components/Thumbnail';

# SSL configurations

[SSL/TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security) is an encryption based protocol which establishes a secure and trusted connection between client and a database over which sensitive data can be transmitted.

DronaHQ supports connecting to several databases with end-to-end encryption using SSL. Typically, SSL certificates would be required in scenarios where sensitive data is requested. It prevents threats like MITM attacks, Drown Attacks, SSL Stripping attacks etc.

## Prerequisites
Database server should be configured to support SSL and required certificates should be installed.

## Configuring SSL in DronaHQ
To enable SSL configuration in DronaHQ, on the add connector/edit connector sidebar toggle on the Connect using SSL option.

Go to `Connectors -> + CONNECTOR -> Select Supported DB`, in this case MySQL and `enable` this toggle named `Connect using SSL`.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/enable_ssl.png" alt="Enable SSL" width='75%' />
  <figcaption align = "center"><i>Enable SSL</i></figcaption>
</figure>

Once SSL config is enabled, `Use a self signed certificate` configuration will be shown. Toggle on this option to add SSL fields.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/self_signed_ssl.png" alt="Use self signed certificate" width='75%' />
  <figcaption align = "center"><i>Use self signed certificate</i></figcaption>
</figure>

| Field  | Description                                                                                           |
|-------|-------------------------------------------------------------------------------------------------------|
| CA  | CA Certificate is a certificate signed by a trusted, third-party certificate authority (CA).
| Client Key  | The private key of the client certificate needed during the SSL handshake.                                                   |
| Client Certificate | Client certificate authenticates requestor to the server. |

:::info NOTE
DronaHQ takes the necessary measures to preserve user credentials by encrypting them using state of the art cryptographic algorithms.
:::

## Verification modes
DronaHQ allows to make use of all the three verification modes supported by SSL.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/verification_mode_ssl.png" alt="SSL verification modes" width='75%' />
  <figcaption align = "center"><i>SSL verification modes</i></figcaption>
</figure>

| Field  | Description                                                                                           |
|-------|-------------------------------------------------------------------------------------------------------|
| Full verification  | The client and server authenticate themselves with each other and send certificates to each other.
| Verify CA certificate  | Neither the client nor the server authenticates itself to the other. No certificates are sent or exchanged. Only SSL encryption and decryption is used.                                                   |
| Skip CA certificate verification | Neither the client nor the server authenticates itself to the other. No certificates are sent or exchanged. Only SSL encryption and decryption is used. |

:::info NOTE
MySQL only supports Verify CA Certificate and Skip CA Certificate verification.
:::

## Conclusion
For production databases, it’s necessary to use SSL as data is the most important asset to protect. Enabling SSL encryption increases the security of data transmitted across networks between instances of Database Server and Client. Thus, DronaHQ recommends configuring SSL to preserve data.





