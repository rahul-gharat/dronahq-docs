---
sidebar_position: 74
title: Best practices for high performance apps
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

# Best practices for high performance apps

As your DronaHQ apps evolve, incorporating intricate functionalities and interacting with a growing array of data sources, it becomes crucial to closely monitor their performance and implement optimizations as necessary. Performance-related challenges can arise from various factors, often complicated further when external elements come into play.

To ensure optimal efficiency and preempt performance degradation, we recommend following these technical best practices:

### Check external factors

Applications consist of a diverse array of interconnected components that facilitate data retrieval from third-party services. Do adopt a systematic approach by initially investigating and eliminating any potential user-related factors. This involves considering scenarios such as internet connectivity issues, outdated web browsers, or suboptimal Wi-Fi coverage. Once user-related factors are ruled out, the focus can then shift towards examining the possibility of service disruptions concerning connected APIs or databases. By following this methodical approach, you can effectively diagnose and address issues, ensuring seamless app functionality and an enhanced user experience.

### Avoid duplicate API or Database calls
Avoid unnecessary Connector Calls. Make sure that your App logic is optimized to avoid unnecessary calls to an app. For example in multiform scenarios when using data from APIs, you may need different types of data from the same source but using some transformation or filter. At times certain filters may not be supported by an API. So to avoid multiple API calls, it is better to use a `Data Query` and then use Custom JS to have different set of data from the same source, filtered differently. 

### Minimize dependent references
When building apps, it is common to have a deep and complex chain of references to components and controls. You can toggle off the `Trigger forward dependencies` in properties of specific controls which you might have referenced at a lot of places. This will minimize the data evaluation across these control when the referenced control value changes.

### Build multi screen apps
DronaHQ has an effective multi screen experience which is not only great for the user user experience but it also helps you divide the connector or data calls across different screens. The way DronaHQ is architected is that only when a particular control gets initialized on a particular screen does the referenced `Data Query` gets resolved or evaluated. Which effectively means those API calls will happen only when a user visits that screen.

### Use paging in large datasets
While working with large sets of data, its always advisable to use paging wherever possible while binding to table grid control etc. DronaHQ supports server-side paging in tablegrid and all oher similar controls. While showing aggregate information like analytics, its advisable to run these aggregations on the API or Database side before fetching the data. 

### Use control caching
Slower data loading times are a major performance barrier when working with multiple datasets. You can find the Caching property for all the controls. It helps ensure that large datasets are fetched from the cache before making the actual connector call and also if the user is offline. 

### Restrict the number of queries on page load
It is always advisable to restrict the number of queries on home page load and only work with data thats required for the home-screen. 

### Break the app into multiple apps
Even after breaking down into multiple screen, the app is an extremely large app (running into 20-30+ screens) you should break the app into multiple apps. DronaHQ supports navigating between apps seamlessly and this sort of an architecture will only reduce the app load time as the app size becomes smaller.

### Check query performance
In the debug tools, check for connector logs and see if you have long running or slow queries and if they can be optimized at your end. Dependency chains on these queries can slow down the app considerably. 

### Deploy DronaHQ on-premise
Deploying DronaHQ on-premise closer to your data sources can reduce the latency as well. Incase you are using SSH tunneling to your data sources you will see a considerable improvement in the query time.

