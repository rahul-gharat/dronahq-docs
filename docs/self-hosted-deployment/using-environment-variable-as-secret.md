---
sidebar_position: 99
---
# Using Environment Variables as Secrets

Starting from **DronaHQ `3.7.0-edge`**, you can store and access secrets using **environment variables** in self-hosted deployments.
This allows you to centralize sensitive information (like API keys, database passwords, or access tokens) without hardcoding them in your application.

:::info Version Availability
⚠️ This feature is **available from `3.7.0-edge`** onwards.
:::

You have two options:

1. **Define secrets directly in the main `.env` file**
2. **Define each secret in its own file and reference the file path**

---

## Naming Convention

Every shared secret must start with the prefix:

```bash
DRONAHQ_SHARED_
```

* Example:

    ```bash
    DRONAHQ_SHARED_DB_PASSWORD=my-secure-password
    ```

---

## File-based Secrets

If you prefer to store secrets in separate files (for better security and maintainability), use the `_FILE` suffix:

```
DRONAHQ_SHARED_<VARIABLE_NAME>_FILE=/path/to/secret/file
```

* The system will read the contents of the file and treat it as the secret value.
* Example:

  ```bash
  DRONAHQ_SHARED_DB_PASSWORD_FILE=/etc/secrets/db_password.txt
  ```

  The secret will be loaded from the file `/etc/secrets/db_password.txt`.

---

## Accessing Secrets in DronaHQ

Inside your [DronaHQ connectors](/datasource-overview/), you can reference the secrets using the following syntax:

```bash
%DRONAHQ_SHARED_<VARIABLE_NAME>%
```

* Example:

  If you have defined:

  ```bash
  DRONAHQ_SHARED_DB_PASSWORD=my-secure-password
  ```

  You can access it as:

  ```bash
  %DRONAHQ_SHARED_DB_PASSWORD%
  ```

---

## Providing Environment Variables in Docker

When deploying DronaHQ using Docker, you can supply environment variables in different ways:

### 1. Using `.env` file

Add variables in your `.env` file, and Docker Compose will automatically load them:

```bash
DRONAHQ_SHARED_DB_PASSWORD=my-secure-password
DRONAHQ_SHARED_API_KEY_FILE=/run/secrets/api_key.txt
```

Then in `docker-compose.yml`:

```yaml
version: '3.8'
services:
  dronahq:
    image: dronahq/selfhosted:3.7.0-edge
    env_file:
      - .env
    volumes:
      - /run/secrets:/run/secrets:ro
```

---

### 2. Directly in `docker-compose.yml`

You can also define environment variables inline:

```yaml
services:
  dronahq:
    image: dronahq/selfhosted:3.7.0-edge
    environment:
      - DRONAHQ_SHARED_DB_PASSWORD=my-secure-password
      - DRONAHQ_SHARED_API_KEY_FILE=/run/secrets/api_key.txt
```

---

## Providing Environment Variables in Kubernetes

For Kubernetes deployments, use **Secrets** and mount them as environment variables:

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: dronahq-secrets
type: Opaque
stringData:
  DRONAHQ_SHARED_DB_PASSWORD: "my-secure-password"
  DRONAHQ_SHARED_API_KEY: "my-api-key"
```

Then reference them in your Deployment:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: dronahq
spec:
  template:
    spec:
      containers:
        - name: dronahq
          image: dronahq/selfhosted:3.7.0-edge
          envFrom:
            - secretRef:
                name: dronahq-secrets
```

---

## Best Practices

* Use `_FILE` based secrets in production for sensitive values (API keys, DB passwords, private certificates).
* Keep your `.env` file or Kubernetes secrets restricted to the right users.
* Do not commit `.env` files or secret files to version control (Git).
* Rotate secrets regularly.

---

👉 With this feature (available from **`3.7.0-edge`**), your self-hosted DronaHQ deployment can safely manage sensitive values in **Docker** or **Kubernetes** setups.

---