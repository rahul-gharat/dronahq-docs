---
sidebar_position: 61

---

# Navigating Governance in DronaHQ 

In the dynamic landscape of modern business operations, maintaining robust control over access, security, and application management stands as a pivotal requirement. Enter DronaHQ, a comprehensive platform offering an array of tools designed to streamline organizational governance, ensuring a secure and efficient operational environment. 

  

## Exploring Organisational Access 


#### Streamlined Authentication with SSO 

DronaHQ simplifies access across platforms through a variety of [authentication methods](/sso/configuring-sso-with-saml): 

  

- [SAML 2.0](/sso/configuring-sso-with-saml/): An XML-based open standard ensuring Single Sign-On (SSO). Best utilized if your application's Identity Provider solely supports SAML. 

- [OIDC](/sso/configuring-sso-with-oidc/) - OpenID Connect: Token-based OAuth 2.0 authentication enabling SSO via API endpoints. 

- [JWT](/sso/configure-sso-with-custom-jwt/) - Custom Login: Token-based OAuth 2.0 authentication facilitating SSO through API endpoints. 

  

 

#### Various User Management provisions 

When it comes to adding users, DronaHQ offers distinctive methods. From conventional invite-based access to auto-activation with preset passwords, SSO and JIT user addition, and SCIM for auto-provisioning, the platform provides a [spectrum of choices](/user-management/adding-users-to-your-account). This flexibility simplifies onboarding while maintaining stringent security protocols. 

 

 

## Fine-Tuning App Accessibility 

  

#### Precision through Role-Based Permissions 

Administrators exercise [granular control](/building-apps-concepts/app-permissions/) by defining access levels for owners, editors, viewers, and restricted users. This structured approach ensures that individuals access only the functionalities pertinent to their roles. 

  

#### User-Centric Accessibility 

  

[Login-based Access](/preview-and-publish/publish-apps/): DronaHQ offers two portals: the Creator Portal and the End-user Portal. When publishing an app, creators or admins can choose to access it as an end-user within the End-user Portal or via a public link.   

The End-User Portal serves as a central hub for accessing published apps. Admins can create tailored catalogs for specific user groups or roles, ensuring users access applications relevant to their responsibilities, enhancing efficiency and security. 

  

[Public Links and Embedding](/accessing-apps/public-access/): Apart from organizational access, DronaHQ enables app access through public links or embedding them into external portals. Public links streamline user engagement by eliminating the need for formal invitations. 

[Public Link for Verified users](/public-and-embed-sharing-options/#secure-public-links-for-verified-users):  This method ensures security by granting access solely to authenticated users. Activating this feature redirects users to an authentication screen (DronaHQ or SSO, depending on the account setup), allowing access to the app only after successful authentication.  

 

[Secure Embeds](/public-and-embed-sharing-options/#secure-embeds): DronaHQ embeds into existing portals, ensuring a smooth user experience. Disabling public access secures embedded DronaHQ apps. By configuring Single Sign-On (SSO), users with an authenticated session on the same Identity Provider (IDP) skip redundant logins, streamlining efficiency.  

 

 

DronaHQ introduces [Progressive Web Apps](/building-apps-concepts/pwa-apps/) (PWAs), offering native-like experiences with fast performance and offline accessibility. These bridge the gap between web and mobile apps, enhancing user experience without traditional installations.  

 

## Managing App Environments 

  

### Controlled Beta Releases 

One of DronaHQ's standout features is its provision for controlled access during [beta releases](/releasing-in-beta/). This selective access empowers developers to gather invaluable feedback before an official launch, ensuring a smoother and more refined user experience. 

 

## Precision Data Access Management 

  

### Granular Control within Connectors 

Similar to app permissions, DronaHQ offers fine-grained data access controls within connectors for diverse user groups. This meticulous approach ensures data security and compliance adherence. Know more about connector permissions from [here](/datasource-concepts/connector-permissions/). 

  

### Tailored Access for Individuals and Groups 

From tailored access based on individual requirements to centralized access management for user groups, DronaHQ simplifies and streamlines permissions, ensuring each user accesses only what's necessary. 

  

## Multiple Data Environments for Testing and Development 

DronaHQ facilitates the creation of multiple [data environments](/datasource-concepts/data-environments/). These environments are given defalut name such as Production, Staging, and Development, but users an create with their own specified name. These environments enable isolated testing and development without affecting live data, ensuring seamless transitions. 

 

## Streamlining Development and Releases 

  

#### Version Control and Collaboration via Git 

Linking apps to Git hosting providers ensures efficient version control and collaboration among developers. This integration facilitates streamlined development processes and seamless tracking of changes. Know more about Git Sync [here](/git-sync/). 

  

#### Efficient Versioning and Rollbacks 

DronaHQ simplifies managing different app versions and facilitates swift rollbacks if necessary, ensuring stability and reliability in app functionality.    

Published apps in beta or production are logged in the release history found in 'Settings' -> 'Releases & History.'  

New versions are created upon publication. Rolling back replaces the current version with a previous one. Ensuring no crucial changes are lost post-rollback is vital. 

For further details, click here or read more [here](/versioning-and-rollback/). 

 

## Holistic Monitoring and Analysis 

  

#### Comprehensive Audit Trail 

The platform maintains detailed logs, providing a comprehensive view of actions taken within the platform. [Audit Logs](/audit-logger/overview/) in DronaHQ are like digital records which aid in compliance adherence and effective troubleshooting. 

  

#### Insights through Analytics 

Understanding app usage patterns becomes effortless with DronaHQ's analytics, offering valuable data for performance optimization and tailored user experiences. 

  

 

 

 

  

 