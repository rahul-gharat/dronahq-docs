---
sidebar_position: 61
title: DronaHQ Security
---

DronaHQ understands the critical nature of your data and takes security very seriously. This page explains the security features and considerations that DronaHQ has implemented to make your apps as safe as possible.

## Data Security
### SSL Certification

DronaHQ utilizes SSL/TLS certificates to encrypt sensitive information during transmission. This secures communication between your device and DronaHQ's servers. Self-hosted instances have the option to set up SSL certificates during the installation process or admins can choose to upload their own SSL certificates to establish a secure connection.

### SSH Configuration
DronaHQ supports SSH key-based authentication for enhanced server access security. Authorized users possess unique digital keys for access, significantly reducing the risk of unauthorized access through password breaches.

### Whitelisting

DronaHQ establishes connections with databases and API endpoints exclusively through whitelisted IP addresses. This approach restricts access to only trusted sources, further securing your data. DronaHQ restricts database and API connections to pre-approved IP addresses, `54.164.199.220` and `34.233.152.191` functioning like a firewall whitelist. This ensures that only authorized sources can access your data.

### Audit Log

DronaHQ maintains detailed audit logs to monitor and control access to data. These logs provide a comprehensive record of user activities, ensuring that any unauthorized access attempts can be quickly identified and addressed. It  allows you to integrate various loggers to capture events and activities from your modules, such as RunAPI. DronaHQ Support following 2 types of Audit Logging -
DronaHQ Managed Audit Logging (Available only on Self-hosted version)
External Audit Logging


### Secure Key-Value Storage
DronaHQ provides a secure key-value storage option using variables. This feature allows you to store sensitive information securely within the platform, ensuring that only authorized users and processes can access it.

## Query Security

### Prepared Statements

DronaHQ enforces prepared statements with its special feature for all SQL queries. This separates user input from the actual SQL code, preventing malicious code injection attempts (SQL injection). Imagine building a Lego structure with pre-defined pieces (prepared statements) – you can't inject unauthorized elements into the final design.

### Secrets Management

DronaHQ employs a dedicated secrets manager to securely store sensitive information like API keys and database credentials. This eliminates the risk of hardcoding them in your application code, which can be vulnerable to breaches. Think of it as a secure vault for your digital keys, ensuring only authorized users can access them..

### Credential Handling at Backend

When executing a query, the DronaHQ server securely appends sensitive credentials just prior to forwarding the request to your backend service. This process ensures that sensitive credentials are not exposed to the client's browser.

### No Response Data Logging

DronaHQ's backend acts as a secure proxy. It doesn't log or store any response data retrieved from databases or APIs. Think of it as a blind intermediary – it facilitates communication but doesn't keep a record of the conversation, minimizing the risk of data leakage


### Prevent Resource Request Spoofing
DronaHQ includes an option to prevent resource request spoofing, protecting against replay attacks. This security measure ensures that requests to resources cannot be intercepted and reused maliciously.
 

## JavaScript Security

### XSS Protection

DronaHQ implements measures to protect against Cross-Site Scripting (XSS) attacks.  These include input sanitization, which removes potentially malicious code from user inputs, and restricting access to specific DOM APIs that could be exploited for XSS attacks.

### Client-Side Execution

JavaScript code within a DronaHQ app executes on the client's side. This implies that users can use browser tools to inspect and potentially view your JavaScript code. Code visibility is an inherent trait of client-side JavaScript, underscoring the need for caution when dealing with sensitive information.

## Login Security

### Two-Factor Authentication (2FA)

DronaHQ supports two-factor authentication (2FA) to provide an additional layer of security for user accounts. This ensures that even if a password is compromised, unauthorized access is still prevented.

### Single Sign-On (SSO) Support

DronaHQ integrates with Single Sign-On (SSO) providers, allowing users to authenticate using their existing credentials from trusted identity providers, streamlining the login process and enhancing security.

### Login Timeout

To prevent unauthorized access due to inactivity, DronaHQ implements login timeouts. Users are automatically logged out after a period of inactivity, reducing the risk of unauthorized access.

### Number of Devices

DronaHQ limits the number of devices a user can be logged into simultaneously. This restriction helps prevent unauthorized access from multiple devices.

### Biometric/Passcode Authentication

DronaHQ supports biometric and passcode authentication on mobile devices, adding an extra layer of security by ensuring that only the device owner can access the application.


### Builder IP Restriction
DronaHQ provides a Builder IP restriction feature, allowing you to restrict access to the builder interface to specific IP addresses. This helps ensure that only authorized users from trusted locations can modify your applications.


## Mobile Security

### Jailbroken Device Detection

DronaHQ identifies and restricts access from jailbroken (iOS) or rooted (Android) devices. These compromised devices lack the security measures of stock devices, posing a higher security risk. By preventing access from such devices, DronaHQ safeguards your app and user data.

### Screenshot Restrictions

DronaHQ offers granular control over screenshots on Android devices. You can completely prevent users from capturing screenshots and protecting sensitive information displayed within the app by disabling screenshot feature. Along with this one can track attempts to capture screenshots, allowing you to investigate potential security incidents by enabling Screenshot Logging.


These security implementations demonstrate DronaHQ's commitment to maintaining a secure environment for developers and users alike. By following the guidelines provided, you can contribute to creating secure applications on the DronaHQ platform.

## Reporting Security Vulnerabilities

DronaHQ maintains an open communication channel with security researchers to report security vulnerabilities responsibly. If you notice a security vulnerability, please raise ticket from DronaHQ Platform or submit it using our [Vulnerability Disclosure Program](/reference/vulnerability-reporting) Form.

