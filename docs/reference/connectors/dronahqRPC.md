---
sidebar_position: 1
title: DronaHQ RPC
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

DronaHQ RPC provides a powerful mechanism to integrate server-side logic with your low-code applications. By setting up an RPC server, you can securely execute custom business logic, interact with external systems, and enhance app functionality seamlessly.

Its Query Builder allows you to connect your DronaHQ application to server-side functions hosted in your own VPC (Virtual Private Cloud). The process is streamlined into a robust communication flow between DronaHQ and your server.


#### Flow of Execution

<figure>
  <Thumbnail src="/img/reference/connectors/rpc/flowchart.png" alt="RPC Server Configuration" />
  <figcaption align="center"><i>RPC Server Configuration Example</i></figcaption>
</figure>

1. Request Initiation: A query is created in DronaHQ that makes a request to execute a specific action or method on your server.
2. Request Handling: DronaHQ pushes the request into Request Queue. Then request is fetched by the active RPC agent at fixed intervals.
3. Response Management: RPC Agent processes the request using the action/method and arguments provided. The result is logged in Response Queue, where it is fetched by DronaHQ and sent to browser.


## Prerequisites

- Connection Parameters:  
   Gather the following information to establish a successful connection:
   - Host: The URL of your DronaHQ (Cloud/Self-hosted) (e.g., `https://studio.dronahq.com` for cloud).
   - RPC Auth Token: A unique token for secure authentication.
   - RPC Connector ID: The unique ID of your configured RPC connector.
   - Environment: Specify the target environment (e.g., production or development).

- Server Setup:
  - Configure your server to host the DronaHQ RPC Agent.
  - Ensure access permissions, required libraries, and dependencies are properly set up.

## Configuring the RPC Server

Set up your RPC server using the configuration details provided by DronaHQ in its RPC connector. Below is an example implementation:


```javascript
import { DronaHQ } from "dronahq-rpc";

const rpc = new DronaHQ({
  rpcAuthToken: "your-auth-token", // Replace with your RPC auth token
  host: "https://studio.dronahq.com", // Replace with your host URL
  rpcConnectorId: "your-connector-id", // Replace with your connector ID
  environment: "production", // Specify the environment
  pollingIntervalMs: 1000, // Minimum polling interval
  version: "0.0.1", // Schema version
});

rpc.register({
  name: "helloWorld",
  arguments: {
    name: { type: "string", description: "Your name", required: true },
  },
  implementation: async (args, context) => {
    return {
      message: `Hello, ${args.name}!`,
      context,
    };
  },
});

rpc.listen();
```

- Key parameters to configure:
  - API Key for secure communication.
  - Server Endpoint for sending requests.
  - Version Management to ensure compatibility (e.g., versions like 0.0.1, 0.0.2).

#### General 

<Thumbnail src="/img/reference/connectors/rpc/config.jpeg" alt="RPC Server Configuration" />
<figcaption align="center"><i>RPC Server Configuration </i></figcaption>

#### Step 1: Copy the following code into a file that can reach your codebase
This file sets up the RPC server that connects DronaHQ to your codebase. By default it registers a helloWorld function that you can call from DronaHQ. Be sure to install relevant dependencies and replace the API token.
    
#### Step 2: Spin up your RPC server
Run the file you just created. This needs to be running to ensure DronaHQ can reach your codebase!
#### Step 3: Test Connection
Click Test Connection to verify your server is connected.
#### Step 4: Add custom code!
Register your own functions and call them from the DronaHQ Data Query or a DronaHQ app.


After setting up the server, navigate to the RPC Admin Panel in your DronaHQ studio. Click Test Connection to verify the RPC server's reachability.


<figure>
  <Thumbnail src="/img/reference/connectors/rpc/added.png" alt="DronaHQ RPC Connector configuration succesfull" />
  <figcaption align="center"><i>DronaHQ RPC Connector configuration succesfull</i></figcaption>
</figure>


#### Admin

| Advanced Option                                                                                    | Description                                                                                                                                                                                   |
| -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection Options                                                                                 | The `key` and `value` connection options in database configuration refer to specific settings (keys) and their corresponding values that dictate how the application connects to the database |
| <VersionedLink to = "/datasource-concepts/whitelisting-dronahq-ip/"> Whitelist IP </VersionedLink> | Enhance security by restricting database access to specific whitelisted IP addresses.                                                                                                         |


## Adding Queries in DronaHQ

#### Step 1: Writing the Agent on the Server
1. Set Up the Agent:
   - Download the DronaHQ RPC Agent code template provided in your DronaHQ account.
   - Customize the agent to include the actions (methods) you want to expose. 

2. Action Registration:
   - Each action is registered with a unique name (e.g., `plusTwoNumbers`) and can accept parameters dynamically.
   - Version Management:
     - The `version` field allows you to register multiple versions of the same agent, each with potentially different sets of actions.
          
    <figure>
      <Thumbnail src="/img/reference/connectors/rpc/agent.png" alt="DronaHQ RPC Connector configuration succesfull" />
    </figure>

#### Step 2: Running the Agent
1. Install Dependencies:
   - Ensure the required dependencies are installed (e.g., `npm install dronahq-agent`).

2. Run the Agent:
   - Start your agent using Node.js or a similar runtime:
     ```bash
     node agent.js
     ```
   - The agent will now listen for requests from DronaHQ and handle them based on the actions defined.
    <figure>
      <Thumbnail src="/img/reference/connectors/rpc/run.png" alt="DronaHQ RPC Connector configuration succesfull" />
    </figure>

#### Step 3: Configuring the RPC Connector in DronaHQ
1. Navigate to the Configured RPC Connector and click > `Add query`

2. Viewing Actions:
   - Once the agent is configured and running, you will see the actions (e.g., `plusTwoNumbers`, `helloWorld`) automatically listed in the RPC Connector settings under the configured version.

3. Selecting Versions:
   - If you’ve published multiple versions of the agent (e.g., `0.0.1`, `0.0.2`), you can select the specific version when defining queries in the Query Builder.

4. Build the Query:
   - In the DronaHQ Query Builder, select the configured RPC Connector.
   - Choose an action (e.g., `plusTwoNumbers`) and pass the required arguments dynamically (e.g., `{{num1}}`, `{{num2}}`).

    <figure>
      <Thumbnail src="/img/reference/connectors/rpc/actions.png" alt="DronaHQ RPC Connector configuration succesfull" />
    </figure>




### Scope of DronaHQ RPC Queries
1. Versioning Support:
   - Multiple agent versions allow backward compatibility. You can choose to keep old versions active for legacy workflows while updating actions in newer versions.

2. Dynamic Action Updates:
   - Add new actions to your agent without reconfiguring DronaHQ. Once the agent is restarted with the updated code, new actions are visible in DronaHQ.

3. Scalable Workflows:
   - Combine RPC queries with other data sources in DronaHQ to build end-to-end workflows (e.g., performing calculations, fetching data, and updating a database).

4. Multi-Agent Management:
   - Deploy multiple agents on different servers for various purposes (e.g., regional data centers, distinct application modules).

