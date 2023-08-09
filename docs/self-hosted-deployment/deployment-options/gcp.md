---
sidebar_position: 3
---

# Deploy on Google Cloud Compute Engine

1. On GCP Dashboard, Click the Compute Engine Resource and select VM Instances
1. select ‘Create Instance’ from the top menu
1. Create a new VM to these Specs
    - Ubuntu Operating System Version 20.04 LTS or higher
    - Storage Size 60 GB or higher
    - Ram 4 GB or Higher (e2-medium)
    - Optionally add Labels (eg app = dronahq)
1. Create Instance
1. Navigate via search to the VPC Network Firewall settings and be sure to add the following ports set to`0.0.0.0/0` and `::/0`
    - `80` (HTTP)
    - `443` (HTTPS)
    - `22` (SSH)
    - `8080` (DronaHQ access in browser)
1. If you're connecting to an internal database, be sure to whitelist the VPC’s ip address in your DB
1. SSH into your instance, or use the Google SSH Button to open a VM Terminal in a browser window.
1. Run Command `git clone https://github.com/dronahq/self-hosted.git`
1. Run Command `cd self-hosted`
1. Edit the Docker-Compose file using VIM (or other text editor) to specify your desired version number of DronaHQ. To do this, replace `X.Y.Z` in `image:dronahq/self-hosted:X.Y.Z` with your desired version. See [Select a DronaHQ version number](#select-a-dronahq-version-number) to help you choose a version.
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
