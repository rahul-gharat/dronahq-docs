---
sidebar_position: 101
---

import Thumbnail from '@site/src/components/Thumbnail';

# Configure OpenAI keys 

DronaHQ has multiple built-in `OpenAI` tools to fully utilize the AI potential and help you with your app development activities, such as writing `SQL queries` while adding `connectors`, writing `JS` while binding formulas to `Data Queries` or  `JS Block` in `Action Flow`, thus making your app-building experience much more pleasant and hassle-free. To be able to use these tools you will need to configure the OpenAI secret key in the studio. The key is encrypted before being saved in our system for safekeeping. To enhance the security even further Secret-Key is never fetched to the end user system.

## Manage OpenAI Keys

To configure the OpenAI keys go to `Profile Menu  -> Account Settings -> Integrations` look for `OpenAI Accounts` and click on `Configure Accounts`. It will open sidebar where you can perform follwing operations.
- <a href="#add-new-openai-account">Add new OpenAI account</a>
- <a href="#edit-key-for-existing-accounts">Edit key for exising accounts</a>
- <a href="see-list-of-all-account-keys">See list of all account keys</a>
- <a href="delete-account-keys">Delete account keys</a>
- <a href="make-any-account-key-default">Make any account key default</a>

### Add new OpenAI account

To add a new OpenAI account, all you need to do is provide a `Name` for the account which you will use for referring to it in the future, and a `Secret API key`. Then all you need to do is press the `Add` button and your OpenAI key is saved successfully.

<figure>
  <Thumbnail src="/img/dronahq-ai/configure-openai-keys/add-openai-account.png" alt="Add OpenAI Account" width='100%'/>
  <figcaption align = "center"><i>Add OpenAI Account</i></figcaption>
</figure>

:::info Info

The first OpenAI account added to Studio will be made as `Default` and will be used in all the integrated AI tools.

:::

### Edit key for existing accounts

To `Edit/Update` keys for existing `OpenAI Accounts` you will need to click on the `Edit` tab and select the account name that you want to edit from the dropdown, provide the new key in the secret key field and press `Update` button, after this your account key is updated successfully.

<figure>
  <Thumbnail src="/img/dronahq-ai/configure-openai-keys/edit-key-for-existing-accounts.png" alt="Edit key for existing accounts" width='100%'/>
  <figcaption align = "center"><i>Edit key for existing accounts</i></figcaption>
</figure>

### See list of all account keys

To view the all configured account keys in the Studio you will need to click on the `All Accounts` tab and you will see a list of all configured accounts