---
sidebar_position: 1
title: Overview
toc_min_heading_level: 2
toc_max_heading_level: 4
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# DronaHQ Code Editor Extension

The DronaHQ Code Editor Extension brings the power of your DronaHQ workspace directly into your favorite code editors, including **Visual Studio Code**, **Cursor**, and **Windsurf**. This feature enables you to perform bulk operations more efficiently and provides greater control to fine-tune your app. Additionally, you can leverage your co-pilot within the code editor to assist in writing logic seamlessly.

## Installation

You can install the DronaHQ extension using two methods: directly from the marketplace or from a `.vsix` file.

### 1. Installing Directly from the Marketplace

This is the recommended and easiest method.

1.  Open your code editor.
2.  Navigate to the Extensions view by clicking the Extensions icon on the Activity Bar or by pressing `Ctrl+Shift+X`.
3.  Search for "**DronaHQ**".
4.  Click the "**Install**" button for the official DronaHQ extension.
5.  Alternatively, you can install it directly from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=DronaHQ.dronahq-prod)

### 2. Installing from a vsix File

This method is useful for offline installation or for installing a specific version of the extension.

1. You can download the `vsix package` from [here](https://tinyurl.com/dronahq-extension).
2.  Open your code editor.
3.  Press `Ctrl+Shift+P` to open the **Command Palette**.
4.  Type and select: `Extensions: Install from VSIX...`
5.  Browse to and select your `.vsix` file.
6.  Reload the editor if prompted.




## Using the DronaHQ Code Editor Extension

Once installed, you can access all DronaHQ-related commands via the **Command Palette** (`Ctrl+Shift+P`). Simply type "**DronaHQ**" to filter the available commands.

<figure>
  <Thumbnail src="/img/code-editor-extension/dronahq-commands.png" alt="Command Palette in Code Editor" />
  <figcaption align = "center"><i>Command Palette in Code Editor</i></figcaption>
</figure>



### Initial Setup & Authentication

To get started, you'll need to connect your code editor to your DronaHQ workspace. We recommend using the following method for the smoothest experience.

#### Login via DronaHQ Studio (Recommended)

This approach provides a seamless, passwordless authentication flow.

1.  Log in to your **DronaHQ studio**.
2.  Navigate to the **Code Editor** extension in bottom-left and click to open your preferred editor from the dropdown.
<figure>
  <Thumbnail src="/img/code-editor-extension/extension-in-app-builder.png" alt="Locating Code Editor Extension in the App Builder" />
  <figcaption align = "center"><i>Locating Code Editor Extension in the App Builder</i></figcaption>
</figure>
3.  A passwordless authentication screen will appear in your browser. Click the **Authorize** button.
<figure>
  <Thumbnail src="/img/code-editor-extension/authorize.png" alt="Authentication for Code editor Extension" />
  <figcaption align = "center"><i>Authentication for Code editor Extension</i></figcaption>
</figure>

:::note 
Check **"Don't ask again for this link type"** on the first prompt so the editor opens the correct window automatically every time.
:::

4.  Your browser will prompt you to open the link in your code editor.

#### Login via Code Editor (Alternative)

If you prefer to authenticate directly from your editor, you can use the built-in command.

* Open the **Command Palette** (`Ctrl+Shift+P`) and use the **`DronaHQ: Login`** command (`Ctrl+Shift+L`) to connect to your DronaHQ workspace.

* Use the **`DronaHQ: List all apps`** command to load your application files into your editor.

### Preview & Export

* To preview the app locally during development, use **`DronaHQ: Preview App`** (`Ctrl+Alt+P`) within your code editor. The app will be served on your localhost at port `4321`.

<figure>
  <Thumbnail src="/img/code-editor-extension/preview.png" alt="Preview for Code Editor" />
  <figcaption align = "center"><i>Preview for Code Editor</i></figcaption>
</figure>

* When you're ready to save your changes to the DronaHQ platform, use **`DronaHQ: Commit Changes to App`** (`Ctrl+Shift+S`) to commit the changes.

* It's a good practice to **`Export App`** (`Ctrl+Alt+E`) to create a backup before making any significant changes. This saves a `.zip` file of your app locally.

###  Available Commands



 **Authentication** 

| Command | Description | Shortcut |
 |:---------|:--------|:----------------|
| DronaHQ: Login | Authenticates with your DronaHQ workspace. | `Ctrl+Shift+L` |
| DronaHQ: Logout | Logs you out of your current session. | |
| DronaHQ: Who am I | Displays details of the currently logged-in user. | |

 **App Management** 

| Command | Description | Shortcut |
 |:--------- |:--------|:----------------|
| DronaHQ: List all apps | Lists all your applications. | |
| DronaHQ: Export App | Saves a zipped version of your current app locally. | `Ctrl+Alt+E` |
| DronaHQ: Commit Changes to App | Pushes local edits back to DronaHQ. | `Ctrl+Shift+S` |

 **Preview & Environment** 

| Command | Description | Shortcut |
 |:---------|:--------|:----------------|
| DronaHQ: Preview App | Opens a live preview of your app in your browser. | `Ctrl+Alt+P` |
| DronaHQ: Change Base Url | Set a different base URL to switch environments. | |