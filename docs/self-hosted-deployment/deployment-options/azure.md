---
sidebar_position: 4
---

# Deploy on Azure Virtual Machine

1. In the main Azure Portal, select Virtual Machine under Azure Services
1. Click the Create button and select Virtual Machine 
1. Select an image of Ubuntu 20.04 or higher
1. For instance size, select `Standard_D2s_v3 - 2 vcpus, 8 GiB memory`
1. Under the Networking tab, Ensure you select the same Virtual Network that also includes the Databases / API’s you will want to connect to and click **Next**.
1. Under the Networking tab, configure your network security group to contain the following ports. You may need to create a new Security group that contains these 4 ports (`80`, `443`, `22` and `8080`): 
    - `80` (http) and `443` (https) for connecting to the server from a browser 
    - `22` (ssh) to allow you to ssh into the instance and configure it
    - `8080` is the port that DronaHQ runs on by default
1. From your command line tool, SSH into your Azure instance.
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
