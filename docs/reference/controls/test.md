---
sidebar_position: 1
title: Test
toc_min_heading_level: 2
toc_max_heading_level: 4
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



# DronaHQ Code Editor Extension

The DronaHQ Code Editor Extension brings the power of your DronaHQ workspace directly into your favorite code editors like Visual Studio Code, Cursor, and Windsurf. This guide will walk you through the installation process and highlight the key commands and features that will streamline your development workflow.

## Installation

You can install the DronaHQ extension using two methods: directly from the marketplace or from a `.vsix` file.

### 1. Installing Directly from the Marketplace

This is the recommended and easiest method.

1.  Open your code editor (VS Code, Cursor, or Windsurf).
2.  Navigate to the Extensions view by clicking the Extensions icon on the Activity Bar on the side of the window or by pressing `Ctrl+Shift+X`.
3.  Search for "DronaHQ".
4.  Click the "Install" button for the official DronaHQ extension.
5.  Alternatively, you can install it directly from the Visual Studio Marketplace by clicking this link: [https://marketplace.visualstudio.com/items?itemName=dronahq-dev.dronahq](https://marketplace.visualstudio.com/items?itemName=dronahq-dev.dronahq)

### 2. Installing from a `.vsix` File

This method is useful for offline installation or for installing a specific version of the extension.

1.  Open the editor (VS Code, Cursor, or Windsurf).
2.  Press `Ctrl+Shift+P` to open the Command Palette.
3.  Type and select: `Extensions: Install from VSIX...`
4.  Browse to and select your `.vsix` file.
5.  Reload the editor if prompted to complete the installation.

## Using the DronaHQ VS Code Extension

Once the extension is installed, you can access all DronaHQ-related commands via the Command Palette (`Ctrl+Shift+P`). Simply type "DronaHQ" to filter for available commands. Several frequently used commands also have convenient keyboard shortcuts.

### Available Commands

#### Authentication

| Command | Description | Shortcut |
| :--- | :--- | :--- |
| DronaHQ: Login | Authenticates with your DronaHQ workspace. | `Ctrl+Shift+L` |
| DronaHQ: Logout | Logs you out of your current session. | |
| DronaHQ: Who am I | Displays details of the currently logged-in user. | |

#### App Management

| Command | Description | Shortcut |
| :--- | :--- | :--- |
| DronaHQ: List all apps | Lists all your applications. | |
| DronaHQ: Export App | Saves a zipped version of your current app locally. | `Ctrl+Alt+E` |
| DronaHQ: Commit Changes to App | Pushes local edits back to DronaHQ. | `Ctrl+Shift+S` |

#### Preview & Environment

| Command | Description | Shortcut |
| :--- | :--- | :--- |
| DronaHQ: Preview App | Opens a live preview of your app in your browser. | `Ctrl+Alt+P` |
| DronaHQ: Change Base Url | Set a different base URL to switch environments. | |

### Usage Tips

* **Always start with `DronaHQ: Login` (`Ctrl+Shift+L`)** to connect your editor to your DronaHQ workspace.
* Use **`DronaHQ: List all apps`** to load your application files into your editor.
* To see your changes live, use the **`DronaHQ: Preview App` (`Ctrl+Alt+P`)** command.
* It's a good practice to **`Export App` (`Ctrl+Alt+E`)** to create a backup before making any significant changes.
* When you are ready to save your changes to the DronaHQ platform, use the **`DronaHQ: Commit Changes to App` (`Ctrl+Shift+S`)** command.



