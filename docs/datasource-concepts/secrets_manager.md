---
sidebar_position: 1
title: Secrets Manager
---

import Image from '@site/src/components/Image'; 
import VersionedLink from '@site/src/components/VersionedLink'; 
import Thumbnail from '@site/src/components/Thumbnail';

Resource configuration in DronaHQ involves managing critical information like database passwords or API keys. At
DronaHQ, prioritizing data security is fundamental, ensuring the safeguarding of sensitive information. However, some
users prefer storing such data externally for added security layers.

DronaHQ's Secret Manager feature, accessible through - `Account Settings > Integrations > Secret Manager`, empowers
users to manage and retrieve sensitive data from external sources like HashiCorp Vault.

This feature offers increased flexibility, enabling users to maintain control over their sensitive information while
utilizing DronaHQ's cloud platform.

:::info NOTE

We also plan to provide the AWS Secret Manager Support, which is slated for an upcoming release.

:::

The primary purpose of the Secret Manager is to offer users a centralized and secure space within DronaHQ, allowing
seamless integration with external secret management systems. This integration ensures that users can tailor their
security measures according to their preferences, enhancing protection for their crucial data.

## Add Secret Manager: Vault

Click on `+ Vault` and you'll be prompted to input a name and choose the vault type from the provided dropdown menu
labeled 'Select Vault`.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/secrets-manager/adding-vault.jpg" alt="Adding a new vault" />
  <figcaption align='center'><i>Adding a new vault</i></figcaption>
</figure>

### Hashicorp vault

HashiCorp Vault is a powerful tool for safeguarding sensitive data, managing secrets, and ensuring secure access control
across diverse environments. To configure your Vault, essential details and authentication credentials need to be
provided, ensuring a secure setup tailored to your organization's needs.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/secrets-manager/hashicorp-secret.jpg" alt="Configuring Hashicorp Vault for Secrets Manager" />
  <figcaption align='center'><i>Configuring Hashicorp Vault for Secrets Manager</i></figcaption>
</figure>

| Field | Description | Example |
|---------------------------|--------------------------------------------|--------------------------------|
| Vault URL & Port | URL and port of your Vault server | `https://vault.dronahq.com:8200` |
| Role Id | Enter Role ID from the Vault | `40481de9-8281-cf4d-2056-tyt5c738e789` |
| Secret Id | Enter Secret ID from the Vault | `56789d5a-ead6-5f9f-c683-a571ad716668` |
| Namespace | Enter Namespace | `my-namespace` |
| Engine name | Enter Engine Name | `dhqkv` |
| Engine type | KV (version 2) or Database (MySQL/MariaDB, PostgreSQL, MongoDB) | ` KV (version 2)` |
| Path to secret | Path to Secret within Vault | `secret/data/example` |
| Database role | Provide role required for the database. | `readOnlyData`|
| Connection Name | Enter Connection Name | `shibam_postgres` |


#### Advance 

 

Cache TTL (Time To Live) determines the duration data remains valid in the cache before expiration. This reduces API calls to your secrets manager, which keeps queries fast and reduces costs. 

Ideal for improving performance, set a suitable Cache TTL to balance data freshness and system load. 


Click on `Test` and `Save` 

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/secrets-manager/vault-added.jpg" alt="Hashicorp Vault Added" />
  <figcaption align='center'><i>Hashicorp Vault Added</i></figcaption>
</figure>

## Update & Delete Vaults 


To update a Vault configuration, locate and select the pencil icon adjacent to the target Vault. 

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/secrets-manager/edit.jpg" alt="Vault edit" />
</figure>

This action initiates the Update section, enabling the implementation of necessary adjustments. It is crucial to conduct thorough testing to validate changes for accuracy before confirming and saving the modifications. 


To delete a Vault, simply locate and select the trash icon positioned alongside the specific Vault you intend to remove. This action triggers the deletion process, allowing you to remove the Vault from the system.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/secrets-manager/delete.jpg" alt="Vault delete" />
</figure>

## Secret Manager for Connector Configuration 

We can use our vault from secret manager, while configuring a database as well as an API connector.  

For configuring a database connector, there is an option of `Secrets Manager` from where we have to select the right vault for the configuration. 

The available options in the Secret Manager dropdown consist of vaults categorized as KV Engines or specific database engines. 

List of Database Engine Types which supports secrets manager: 
- Mysql 
- MariaDB 
- Postgres 
- MongoDB 

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/secrets-manager/connector.jpg" alt="DB Secret vault" />
</figure>

 

Likewise, for configuring an API connector using the secret manager, we can navigate to the designated section. The dropdown menu will display various options exclusively consisting of KV engine selections. 

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/secrets-manager/rest-api.jpg" alt="Vault edit" />
</figure> 

:::info NOTE 
 
You can access JSON keys with {{secrets.name.key}}. You can access arbitrary levels of nested keys in your secrets. This ensures the correct configuration of your vault settings. 

::: 

 