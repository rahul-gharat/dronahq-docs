---
sidebar_position: 97
---

# Configure DocumentDB storage

DronaHQ needs mongodb compatible storage to store data about apps and connectors. Using mongodb compatible storage makes it easy and faster to access all this stored data.

You can use DocumentDB service from Amazon Web Service as an alternative to MongoDB.

Follow the steps mentioned below for configuring DocumentDB with DronaHQ:

#### 1. Setup DocumentDB and create credentials for DronaHQ
Create DocumentDB cluster using `AWS Management Console`. Also, create user credentials with necessary permissions for DronaHQ using `MongoDb Client`

#### 2. Restore required data into DocumentDB
Download pre-required data dump from DronaHQ and restore it onto DocumentDB.

Refer [Configure External Databases](http://localhost:3000/self-hosted-deployment/configure-external-databases/)

#### 3. Copy certificate file to the host machine

Download certificate file onto host machine. You can find link and download command on `Amazon Managment Console`. Once you download the file, place it at your desired location.

Example: Move file from `Home` directory to `/certificates`

```
sudo mkdir /certificates

mv ~/global.bundle.pem /certificates/global.bundle.pem
```

#### 4. Add volume mapping

Go to `DronaHQ` installation directory and Open file `docker-compose.yml`.

```
nano dronahq/docker-compose.yml
```

Add volume mapping for youe certificate file with `webapp` service.

```
services:

  webapp:
    image: dronahq/self-hosted:3.1.2-stable
    platform: linux/amd64
    container_name: dronahq-self-hosted-webapp
    restart: always
    volumes:
      - ./dronahq.env:/app/.env:ro
      - ./storage/files:/app/files:rw
      - ./storage/private:/app/private:rw

      - /certificates/documentdb.pem:/private/global.bundle.pem:ro

    ports:
      - 8080:8080

...
```

In above example, we added mapping as `/certificates/documentdb.pem:/app/certificates/documentdb.pem:ro`. Notice thee values are present in this line separated by collen (:). First value is path of file on host machine. Second parameter is desired path of file on container. And thirs parameter talks about reqd-only directive.

#### 5. Add environment variables

Configure environment variables necessary to connect to DocumentDB. Refer [Environment Variables](http://localhost:3000/self-hosted-deployment/environment-variables/#connectivity-to-mongodb) for detailed information about variables to configure.

Following are variables needed to be configured extra for using DocumentDB
#### `MONGODB_TLS`

Specifies whether TLS is required for connections to the server.

```
MONGODB_TLS='true'
```

#### `MONGODB_CA_CERT_DIR`

Specifies the path to a file with either a single or bundle of certificate authorities to trust when making a TLS connection.

```
MONGODB_CA_CERT_DIR='/private/global.bundle.pem'
```