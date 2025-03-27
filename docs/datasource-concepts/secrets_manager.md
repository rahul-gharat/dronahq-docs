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

DronaHQ's Secret Manager feature, accessible through - `Account Settings -> General & Security -> Secret Manager`, empowers
users to manage and retrieve sensitive data from external sources like HashiCorp Vault.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/secrets-manager/loc.png" alt="Adding a new vault" />
</figure>

This feature offers increased flexibility, enabling users to maintain control over their sensitive information while
utilizing DronaHQ's cloud platform.


The primary purpose of the Secret Manager is to offer users a centralized and secure space within DronaHQ, allowing
seamless integration with external secret management systems. This integration ensures that users can tailor their
security measures according to their preferences, enhancing protection for their crucial data.

## Add Secret Manager: Vault

Click on `+ Vault` and you'll be prompted to input a name and choose the vault type from the provided dropdown menu
labeled 'Select Vault`.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/secrets-manager/adding-vault.png" alt="Adding a new vault" />
  <figcaption align='center'><i>Adding a new vault</i></figcaption>
</figure>

### Hashicorp vault

[HashiCorp Vault](https://developer.hashicorp.com/vault/tutorials/get-started-hcp-vault-dedicated/vault-introduction) is a powerful tool for safeguarding sensitive data, managing secrets, and ensuring secure access control
across diverse environments. To configure your Vault, essential details and authentication credentials need to be
provided, ensuring a secure setup tailored to your organization's needs.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/secrets-manager/hashicorp-secret.png" alt="Configuring Hashicorp Vault for Secrets Manager" />
  <figcaption align='center'><i>Configuring Hashicorp Vault for Secrets Manager</i></figcaption>
</figure>

| Field | Description | Example |
|---------------------------|--------------------------------------------|--------------------------------|
| Vault URL & Port | URL and port of your Vault server | `https://vault.dronahq.com:8200` |
| Approle Mount | Provide the mount point for authentication methods and secrets engines to be enabled from, the default mount point for the AppRole authentication method is approle.| `auth/approle` |
| Role Id | Enter Role ID from the Vault | `40481de9-8281-cf4d-2056-tyt5c738e789` |
| Secret Id | Enter Secret ID from the Vault | `56789d5a-ead6-5f9f-c683-a571ad716668` |
| Wrapped Secret Id location | Enter wrapped Secret Id location from the self hosted instance (only for self hosted) | `/app/vault_wrapped_token.json` |
| Namespace | Enter Namespace | `my-namespace` |
| Engine name | Enter Engine Name | `dhqkv` |
| Engine type | KV (version 2) or Database (MySQL/MariaDB, PostgreSQL, MongoDB) | ` KV (version 2)` |
| Path to secret | Path to Secret within Vault | ` secret/data/example ` |
| Database role | Provide role required for the database. | ` readOnlyData ` |
| Connection Name | Enter Connection Name | ` shibam_postgres ` |

#### Hashicorp sample policy
```
# Following paths are require for Dronahq to read secrets

# Below two paths require for kv engine:
path "<YOUR-ENGINE-NAME>/data/*" {
  capabilities = ["read"]
}
path "<YOUR-ENGINE-NAME>/subkeys/*" {
  capabilities = ["read"]
}

# Below two paths require for database engine:
path "<YOUR-ENGINE-NAME>/config/*" {
  capabilities = ["read"]
}
path "<YOUR-ENGINE-NAME>/creds/*" {
  capabilities = ["read"]
}
```

:::tip How to add wrapped secret id in self hosted instance
  <figure>
    <Thumbnail src="/img/connecting-datasource/concepts/secrets-manager/wrapped-secret-id-location.jpg" alt="docker-compose.yml file" width="50%" />
    <figcaption align='center'><i>docker-compose.yml file</i></figcaption>
  </figure>

  You will need to add volume mapping in the docker-compose.yaml file. The underlined path represents the path inside the container that you need to add to the secret manager's configuration. The path on the left side of the ':' is the path on your host machine where your file is located. After making these changes, run the following command to restart the web application:

  ```shell
  sudo docker compose restart webapp
  ```
  sample vault_wrapped_token.json
  ```json
  # /app/vault_wrapped_token.json
  {
    "request_id": "",
    "lease_id": "",
    "lease_duration": 0,
    "renewable": false,
    "data": null,
    "warnings": null,
    "wrap_info": {
      "token": "hvs.CAESIPESvKmm00MDzT********************",
      "accessor": "********************",
      "ttl": 21600,
      "creation_time": "2024-07-10T09:30:21.328855679Z",
      "creation_path": "auth/products/role/developer/secret-id",
      "wrapped_accessor": "*******-****-****-****-***********"
    }
  }
```
:::

#### Advance 

  <figure>
    <Thumbnail src="/img/connecting-datasource/concepts/secrets-manager/hashicorp-advance.png" alt="Hashicorp Vault's Advance section" />
    <figcaption align='center'><i>Hashicorp Vault's Advance section</i></figcaption>
  </figure>

- **Cache TTL (Time To Live):** determines the duration data remains valid in the cache before expiration. This reduces API calls to your secrets manager, which keeps queries fast and reduces costs. You can  toggle on `TLS` (Transport Layer Security) for securing connections between the client and the server. 

    Ideal for improving performance, set a suitable Cache TTL to balance data freshness and system load.
- **Use TLS to Connect:** To connect to your HashiCorp Vault over HTTPS, you need TLS certificates. Ensure you have added the required certificates such as the CA certificate, client key, and client certificate.
    <figure>
      <Thumbnail src="/img/connecting-datasource/concepts/secrets-manager/hashicorp-tls.png" alt="Configuring TLS for Hashicorp Vault" />
      <figcaption align='center'><i>Configuring TLS for Hashicorp Vault</i></figcaption>
    </figure>


Click on `Test` and `Save` 

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/secrets-manager/vault-added.jpg" alt="Hashicorp Vault Added" />
  <figcaption align='center'><i>Hashicorp Vault Added</i></figcaption>
</figure>

### AWS Secrets Manager

AWS Secrets Manager is a powerful tool for safeguarding sensitive data, managing secrets, and ensuring secure access control
across diverse environments. To configure AWS Secrets Manager, essential details and authentication credentials need to be
provided, ensuring a secure setup tailored to your organization's needs.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/secrets-manager/aws-secrets.PNG" alt="Configuring AWS Secrets Manager for Secrets Manager" />
  <figcaption align='center'><i>Configuring AWS Secrets Manager for Secrets Manager</i></figcaption>
</figure>

| Field | Description | Example |
|---------------------------|--------------------------------------------|--------------------------------|
| Authentication Type | Access Key and Secret Access Key or IAM Access Role | ` Access Key and Secret Access Key ` |
| AWS Region | Region where your Secrets exists.| ` us-east-1 ` |
| Access Key Id | Enter Access Key Id | ` AKIAIOSFODNN7EXAMPLE ` |
| Secret Access Key | Enter Secret Access Key | ` wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY ` |
| Secret Name | Enter Secret Name | ` my-secret ` |
| Engine type | Key Value Pair or Database | ` Database ` |
| Database Type | MySQL, MariaDB, PostreSQL, SQL Server and Oracle  | ` MySQL ` |
#### Advance 

 

- **Cache TTL (Time To Live)** determines the duration data remains valid in the cache before expiration. This reduces API calls to your secrets manager, which keeps queries fast and reduces costs.

  Ideal for improving performance, set a suitable Cache TTL to balance data freshness and system load. 


Click on ` Test ` and ` Save `

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/secrets-manager/aws-secrets-added.PNG" alt="AWS Secrets Manager Added" />
  <figcaption align='center'><i>AWS Secrets Manager Added</i></figcaption>
</figure>

### Connecting using IAM Role Access

#### 1. Create IAM policy for DronaHQ
In AWS, create an IAM policy to grant DronaHQ access to your secrets. The following is an example policy you might use.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "secretsmanager:GetSecretValue",
        "secretsmanager:DescribeSecret"
      ],
      "Resource": ["arn:aws:secretsmanager:Region:AccountId:secretname:*"]
    },
    {
      "Effect": "Allow",
      "Action": ["secretsmanager:ListSecrets"],
      "Resource": "*"
    }
  ]
}
```

#### 2. Attach IAM policy to your principal
Next, attach the policy to the principal associated with your DronaHQ workload. For example, if you deploy DronaHQ on EC2, attach this policy to the instance profile for the DronaHQ instance.


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

| Database | Hashicorp Vault | AWS Secrets Manager |
|---------------------------|--------------------------------------------|--------------------------------|
| MySQL | ✅ | ✅ |
| MariaDB | ✅ | ✅ |
| Postgres | ✅ | ✅ |
| MongoDB | ✅ |  |
| Oracle |  | ✅ |
| SQL Server |  | ✅ |

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

 