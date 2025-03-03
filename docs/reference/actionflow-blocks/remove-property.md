---
sidebar_position: 1
title: Remove Property
---

import Thumbnail from '@site/src/components/Thumbnail';

The `Remove Property` action allows you to dynamically remove `Read Only` or `Required` property from input controls within your application. This action is typically used to revert changes or restore default functionality, enhancing the flexibility of your user interface.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/remove-property/remove-property.png" alt="Remove property" />
</figure> 

#### Key Features of the Remove Property Action

- Control Name:  
  Specify the input control from which you want to remove a property. This ensures that the action targets the correct element within your application. Examples include text fields, dropdowns, and other input controls.

- Property Selection:  
  Choose the property you want to remove for the selected control. The available properties include:  
  - Required: Removes the mandatory status of a control, allowing users to proceed without filling it out.  
  - Read Only: Restores edit property to a control, enabling users to modify its value.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/remove-property/remove-property-fields.png" alt="Remove property fields" />
</figure> 

When executed, the Remove Property action eliminates the specified property from the selected control. For example, you could make a previously required input field optional or allow a read-only field to become editable. This action ensures that your application adapts to evolving user interactions and workflows effectively.
