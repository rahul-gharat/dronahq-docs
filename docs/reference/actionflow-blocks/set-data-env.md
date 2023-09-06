---
sidebar_position: 1
title: Set Data Environment
---
import Thumbnail from '@site/src/components/Thumbnail';

## Setting up the Set Data Environment Action 

In the process of creating and [managing data environments](../../../datasource-concepts/data-environments/#create-a-new-environment), you've built a foundation for dynamic data handling in your app. These data environments play a crucial role in various scenarios within your app's action flow. For instance, you might need to switch the data environment based on user-specific conditions or user groups. Fortunately, you can do this using the `Set Data Environment` action.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/set-data-env/set-data-env.png" alt="Set Data Environment" />
<figcaption align='center'><i>Set Data Environment</i></figcaption>
</figure>


1. Select the `Set Data Environment` Action: Within your Action Flow, navigate to `On-screen actions` and find the `Utility Block.` Under this section, you'll discover the `Set Data Environment` action. Choose this action to specify the data environment change.

2. Choose an Environment: From the list of environments created earlier using the `Manage Environment` feature, select the data environment you want to set. This action empowers you to dynamically switch between different data environments as needed.

3. Provide an Action Unique Name: Assign a unique name to this action for easy identification within your Action Flow. This naming convention enhances your workflow's clarity and organization.

4. Finish the Configuration: Once you've selected the environment and provided an action name, click `Finish` to save your settings.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/set-data-env/feild.jpeg" alt="set-data-env" />
</figure>

The `Set Data Environment` action effectively changes the data environment to the one you've selected. You can conveniently use the [keyword](../../keywords/#app-builder-keywords) `DATAENV` to check the current data environment.

Important Note: When you update the data environment using the action flow, any controls that use `DATAENV` in their formulas will automatically re-evaluate based on the new data environment. This dynamic capability ensures that your app adapts to changing data requirements seamlessly.
