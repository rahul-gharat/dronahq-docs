---
sidebar_position: 101
---

import Thumbnail from '@site/src/components/Thumbnail';

# Configure OpenAI keys

DronaHQ offers a comprehensive suite of `built-in OpenAI tools` that enable you to harness the full potential of
artificial intelligence in your app development activities. With these integrated tools, you can effortlessly
`write SQL queries` while seamlessly incorporating connectors, `compose JavaScript code` to bind formulas to Data
Queries or JS Blocks within the Action Flow. This streamlined approach ensures a pleasant and hassle-free app-building
experience.

To utilize these powerful capabilities, it is essential to configure the OpenAI secret key within the DronaHQ . Rest
assured, we prioritize the security of your data. The secret key is encrypted before being stored in our system,
guaranteeing its safekeeping. Furthermore, we have implemented an additional layer of security by ensuring that the
Secret Key is never fetched to the end user system, further enhancing the overall protection of your valuable
information.

## Manage OpenAI Keys

To conveniently configure your OpenAI keys within the DronaHQ platform, follow these simple steps:

- Click on the `Profile Menu` located in the top-right corner of the screen.
- From the dropdown menu, select `Account Settings`.
- Within the Account Settings section, navigate to the `Integrations`.
- Look for the `OpenAI Accounts` option and click on it.

This action will open a sidebar, providing you with various operations to manage your OpenAI accounts. By accessing the
"Configure Accounts" option in the OpenAI Accounts sidebar, you can easily manage your OpenAI accounts and perform the
following tasks.

- [Add new OpenAI account](#add-new-openai-account)
- [Edit key for existing accounts](#edit-key-for-existing-accounts)
- [See list of all accounts](#see-list-of-all-accounts)
  - Delete accounts
  - Make any account default

### Add new OpenAI account

To add a new OpenAI account, all you need to do is provide a `Name` for the account which you will use for referring to
it in the future, and a `Secret API key`. Then all you need to do is press the `Add` button and your OpenAI key is saved
successfully.

<figure>
  <Thumbnail src="/img/dronahq-ai/configure-openai-keys/add-openai-account.png" alt="Add OpenAI Account" width='100%'/>
  <figcaption align = "center"><i>Add OpenAI Account</i></figcaption>
</figure>

:::info Info

The first OpenAI account added to DronaHQ will be made as `Default` and will be used in all the integrated AI tools.

:::

### Edit key for existing accounts

To `Edit/Update` keys for existing `OpenAI Accounts` you will need to click on the `Edit` tab and select the account
name that you want to edit from the dropdown, provide the new key in the secret key field and press `Update` button,
after this your account key is updated successfully.

<figure>
  <Thumbnail src="/img/dronahq-ai/configure-openai-keys/edit-key-for-existing-accounts.png" alt="Edit key for existing accounts" width='100%'/>
  <figcaption align = "center"><i>Edit key for existing accounts</i></figcaption>
</figure>

### See list of all accounts

`All Accounts` tab provides a centralized view of all the configured accounts for easy access and administration.
DronaHQ user can conveniently view the list of all OpenAI accounts configured in the DronaHQ, If you want to Delete
certain account or make it Default you can utilize the `Delete` and `Make Default` button associated with each entry in
the All Accounts tab.

<figure>
  <Thumbnail src="/img/dronahq-ai/configure-openai-keys/list-all-accounts.png" alt="All configured OpenAI accounts list" width='100%'/>
  <figcaption align = "center"><i>List of all configured OpenAI accounts</i></figcaption>
</figure>
