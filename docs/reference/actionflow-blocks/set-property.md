---
sidebar_position: 1
title: Set Property
---

import Thumbnail from '@site/src/components/Thumbnail';


The `Set Property` action allows you to dynamically modify the properties of input controls within your application to `Read Only` or `Required`. This action is typically used to adapt user interfaces based on specific conditions, providing a flexible and dynamic user experience.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/set-property/set-property.png" alt="Set property" />
</figure> 


#### Key Features of the Set Property Action

- Control Name:  
  Specify the input control you want to target. This ensures that the changes are applied to the correct element within your application. For example, you could select an input field, a dropdown, or any other control supported by the application.

- Property Selection:  
  Choose the property you want to modify for the selected control. The available properties include:  
  - Required: Marks the control as mandatory, ensuring the user must fill it out before proceeding.  
  - Read Only: Makes the control un - editable, allowing the user to view its value without making changes.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/set-property/set-property-feilds.png" alt="Set property" />
</figure> 

When executed, the Set Property action modifies the specified property of the selected control. For example, you could make a dropdown menu read-only or mark a text input field as required based on the state of the application or workflow. This ensures that your application remains responsive and intuitive.



