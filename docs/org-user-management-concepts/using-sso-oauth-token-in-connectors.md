---
sidebar_position: 1
title: Using SSO oAuth token in Connectors
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

Single Sign-On (SSO) solutions have become instrumental in streamlining authentication processes across various platforms. Among the myriad benefits they offer, SSO OAuth tokens stand out for their simplicity, security, and versatility. Integrating these tokens into connectors not only enhances security but also simplifies authentication workflows. In this article, we'll delve into the intricacies of configuring and utilizing SSO OAuth tokens in connectors, along with practical examples and best practices.

## Adding SSO Configuration

#### Configuring SSO with SAML

SAML (Security Assertion Markup Language) is a widely adopted standard for exchanging authentication and authorization data between parties. Configuring SSO with SAML involves setting up trust between the identity provider (IdP) and the service provider (SP), enabling authentication and access control.

#### Configuring SSO with OIDC

OpenID Connect (OIDC) builds upon OAuth 2.0 to provide an identity layer that facilitates authentication. Configuring SSO with OIDC involves establishing a trust relationship between the IdP and the SP, leveraging OIDC's authentication and token issuance mechanisms.

#### Configuring SSO for Google OIDC

Google OIDC presents a convenient option for SSO, particularly for organizations already leveraging Google Workspace. Configuring SSO for Google OIDC entails integrating Google's identity services with the SP, enabling users to authenticate using their Google credentials.

#### Configuring SSO with Custom JWT

For scenarios requiring custom authentication mechanisms, configuring SSO with Custom JWT allows flexibility in token generation and validation. This approach enables integration with bespoke identity solutions while maintaining the security benefits of SSO.

## Using SSO Token in Connector

### Multistep Authentication to Use it in Connector/API

[Multistep authentication](/multistep-authentication/#configure-auth-flow) provides a robust method for integrating SSO OAuth tokens into connectors or APIs. By configuring the connector to support multistep authentication, users can authenticate and access resources across diverse platforms.

<figure>
  <Thumbnail src="/img/advanced-concepts/multistep-auth/select-api-authentication.png" alt="Select API Authentication" />
  <figcaption align = "center"><i>Select Multistep Authentication</i></figcaption>
</figure>

#### Configure API Category

When configuring APIs, selecting the multistep authentication method is pivotal. Users can specify authentication details, including the connector name and relevant authentication steps, ensuring a comprehensive and secure authentication flow.

#### SSO Token

The SSO token method simplifies authentication by automatically generating output variables based on the active SSO token. This eliminates the need for manual setup, streamlining the authentication process and enhancing user experience.

For further insights into SSO token usage, refer to the provided [documentation](/sso/configuring-sso-with-saml/). Embracing the SSO token method can optimize multistep authentication workflows, ensuring secure access to account resources.

<figure>
  <Thumbnail src="/img/advanced-concepts/using-sso/sso.jpeg" alt="Select SSO token as a step." />
  <figcaption align = "center"><i>Select SSO token as a step.</i></figcaption>
</figure>


## Configure Request Parameter

Configuring request parameters allows for integration of authentication tokens into API endpoints. These parameters, automatically added to API calls, enhance security and streamline data exchange between the connector and external services.

To add request parameters, simply navigate to the respective configuration section and click on `+ Add parameter,` facilitating effortless token management and utilization.


<figure>
  <Thumbnail src="/img/advanced-concepts/using-sso/req-para.jpeg" alt="Provide the SSO token as parameter for query."/>
  <figcaption align = "center"><i>Provide the SSO token as parameter for query.</i></figcaption>
</figure>

Since the keyword for my SSO token is `{{sso1.accessToken}}`, therefore I am passing it as parameter of the query as header. This will check the SSO token while hitting the request to perform authorization.

## Configure Test API

Testing API endpoints is crucial to validate authentication mechanisms and ensure data exchange. By configuring test APIs with appropriate authentication parameters, users can verify the efficacy of SSO OAuth tokens and fine-tune authentication workflows as needed.

<figure>
  <Thumbnail src="/img/advanced-concepts/using-sso/res.jpeg" alt="Successful authorization."/>
  <figcaption align = "center"><i>Successful authorization.</i></figcaption>
</figure>
