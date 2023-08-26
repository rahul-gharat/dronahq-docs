---
sidebar_position: 1
---

import Thumbnail from '@site/src/components/Thumbnail';

# Configure multiple SSOs in an account

DronaHQ provides the flexibility of integrating with multiple SSO providers simultaneously. This multi-SSO support enhances security, simplifies user access management, and streamlines the authentication process for both users and administrators.

## Prerequisites

To set up multiple SSOs in DronaHQ, you will need:

1. More than one SSO configuration added in your account.


## Configuring Multiple SSOs

Go to `Manage Users -> SSO CONFIGURATION`.

Select `More (...) -> Activate` option for 2 or more SSO's that you want to activate.

<figure>
  <Thumbnail src="/img/org-and-user-management-concepts/multiple-sso-activated.png" alt="Multiple SSO Activated" />
  <figcaption align = "center"><i>Multiple SSO Activated</i></figcaption>
</figure>

Now, when you or your user's login in your `white-labelled end-user app` with an `emailid` having `domain name` same as that of activated SSO configuration in your account, you will see list of SSO which you can choose to login into your account from.

<figure>
  <Thumbnail src="/img/org-and-user-management-concepts/multiple-sso-option.png" alt="Multiple SSO Option" />
  <figcaption align = "center"><i>Multiple SSO Option</i></figcaption>
</figure>

Here, you can see a user with domain name `dronahq.com` is login in `white-labelled Web App`, since the domain name is same as that of `Dronahqoauth` and `FJ_Custom_JWT`, you can see these two SSO login options.

Also, if the user try login with email having domain name `abc.com`, will see only one SSO option which is `SAML2.0 SSO` login.

:::caution NOTE
1. Multiple SSO option is available only in your white-branded Container application.
1. You can enable multiple sso configuration having same domain name as well.
:::

## Key Features and Benefits:

### Centralized User Management

With multi-SSO support, DronaHQ enables organizations to centralize user management. Instead of maintaining separate user credentials for each application, users can log in with their SSO credentials across all integrated applications, improving user experience and reducing password fatigue.

### Diverse SSO Providers

DronaHQ supports integration with a wide range of SSO providers, including popular ones like Okta, Microsoft Azure AD, Google Workspace (formerly G Suite), Auth0, and more. This means that organizations can choose the SSO provider that aligns best with their security policies and infrastructure.

### Customized Access Control

Multi-SSO support allows administrators to set up different access levels and permissions for users from different SSO providers. This is particularly beneficial for organizations that collaborate with external partners or clients who use their own SSO systems.

### Enhanced Security

Utilizing multiple SSO providers can enhance security by adding layers of authentication. Users may need to pass through their organization's SSO system and another SSO provider's authentication to access specific applications, adding an additional level of verification.

### Smooth Transition and Onboarding
Organizations often work with multiple partners, vendors, or clients, each using their own SSO systems. DronaHQ's multi-SSO support streamlines the onboarding process. Instead of managing separate user accounts, partners can access shared applications using their existing SSO credentials.

### Compliance and Auditing

Multi-SSO support can facilitate compliance efforts by allowing organizations to track and audit user access across various SSO providers. This can be crucial for industries with stringent compliance requirements, such as healthcare and finance.

### User Choice

Offering multiple SSO options gives users the flexibility to use the SSO provider they are most comfortable with, making it easier for them to access applications seamlessly.

## Conclusion

In a modern business environment where collaboration spans various organizations and user bases, the ability to integrate and support multiple SSO providers is a valuable asset. DronaHQ's multi-SSO support empowers organizations to enhance security, simplify user access, and provide a seamless experience across various user groups and partner ecosystems.