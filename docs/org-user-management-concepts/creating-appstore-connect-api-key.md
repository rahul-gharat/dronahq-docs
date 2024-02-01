---
sidebar_position: 1
---

# Creating app store connect api key

## Requirements

Please note that 

1. for App Store Connect publishing, the provided key needs to have [App Manager permission](https://developer.apple.com/help/app-store-connect/reference/role-permissions),
2. and in order to submit your iOS application to App Store Connect, it must be code signed with a distribution [certificate](https://developer.apple.com/support/certificates/).

## Creating the App Store Connect API key

Signing iOS applications requires [Apple Developer Program](https://developer.apple.com/programs/enroll/) membership.

It is recommended to create a dedicated App Store Connect API key for DronaHQ in [App Store Connect](https://appstoreconnect.apple.com/access/api). To do so:

1. Log in to App Store Connect and navigate to `Users and Access -> Keys`.
2. Click on the `+` sign to generate a new API key.
3. Enter the name for the key and select an access level. We recommend choosing `App Manager` access rights, read more about Apple Developer Program role permissions [here](https://developer.apple.com/help/app-store-connect/reference/role-permissions).
4. Click `Generate`.
5. As soon as the key is generated, you can see it added to the list of active keys. Click `Download API Key` to save the private key for later. Note that the key can only be downloaded once.

Take note of the `Issuer ID` above the table of active keys as well as the `Key ID` of the generated key as these will be required when setting up the iOS Build creation request in the DronaHQ.