---
sidebar_position: 1
title: HackerRank
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';


The HackerRank connector enables seamless integration with HackerRank's platform, allowing you to automate assessment creation, management, and data retrieval, streamlining your coding interview and assessment processes.

## Configuring API Connector in DronaHQ

Add a `Account name`. Then add `API Token key` for the connector account. Once all details are added, click `Save`. Your connector configuration is now done.

<figure>
  <Thumbnail src="/img/reference/connectors/hackerrank/details.png" alt="HackerRank with configuration details." />
  <figcaption align = "center"><i>HackerRank with configuration details.</i></figcaption>
</figure>

After successfully configuring and saving the connector settings, you can easily access your newly connected account by navigating to the `connected accounts` list. You can find this option from the `Connector -> Manage Account` section. This centralized location allows you to conveniently monitor and manage your connected accounts.

## Supported API endpoints

| Action           | Description                                                                                                  |
|------------------|--------------------------------------------------------------------------------------------------------------|
| ViewAllTests     | Retrieve a list of all available tests from HackerRank.                                                    |
| GetTestDetails   | Fetch detailed information about a specific test using its test ID.                                      |
| GetAllTemplates  | Obtain a list of all assessment templates available on HackerRank.                                        |
| InviteCandidate  | Send an invitation to a candidate to participate in an assessment, using their email and test information. |