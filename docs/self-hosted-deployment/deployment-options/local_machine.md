---
sidebar_position: 1
---

# Deploy on Linux or MacOS

DronaHQ Self Hosted supports local installation on your Linux based OS or MacOS using [Docker](https://www.docker.com/).

1. Run the command `git clone https://github.com/dronahq/self-hosted.git`.
1. Run the command `cd self-hosted` to enter the cloned repository's directory.
1. Edit the `docker-compose.yml` file using VIM (or other text editor) to set the version of DronaHQ you want to install. To do this, replace `X.Y.Z` in `image:dronahq/self-hosted:X.Y.Z` with your desired version. See [Select a DronaHQ version number](#select-a-dronahq-version-number) to help you choose a version.
1. Run `./install_sh.sh` to install  Docker and Docker Compose.
1. In your `.env` (this file is only created after running `./install_sh.sh`) add the following:

   ```docker
   # License key granted to you by DronaHQ
   LICENSE_KEY=YOUR_LICENSE_KEYs
   ```

1. Run `sudo docker-compose up -d` to start the DronaHQ server.
1. Run `sudo docker-compose ps` to make sure all the containers are up and running.
1. Navigate to your server's IP address in a web browser. DronaHQ should now be running on port `8080`.
1. Click Activate, since we're starting from a clean slate. The first user to create an account on an instance becomes the administrator.
