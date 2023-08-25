---
sidebar_position: 2
---

import Image from '@site/src/components/Image';

# Addning new properties in Coffee file's edit section 

All the properties need to be written inside

```html
<div class="edit_view_ctrl_prop">
    <!-- All properties are written here -->
</div>
```

## Property Width

By default column width is 1 unit i.e `'one_col'`

To increase the width to 2 units add `'two_col'` class to prop_item

To increase the width to 3 units add `'three_col'` class to prop_item
:::info
property width cannot be increased more than 3 units.
:::

## Creating a group

<figure>
  <Image src="/img/advanced-concepts/custom-control-ide/new-properties/new-properties-group-properties.png" alt="Simple Database GUI" />
  <figcaption align='left'><i>group properties.</i></figcaption>
</figure>

For creating a group 'prop_group' class needs to be added to 'edit_view_ctrl_prop' and a label containing the group name needs to be written.
```html
<div class="edit_view_ctrl_prop prop_group">
    <label class="prop_group_label">GROUP</label>
    //PROPERTY 1
    //PROPERTY 2
</div>
```
## Nesting

Use edit_view_prop_nested class instead of edit_view_ctrl_prop while nesting inside prop_group to avoid overflow
```html
<div class="edit_view_ctrl_prop prop_group">
    <label class="prop_group_label">HIGHLIGHTED</label>
    <div class="edit_view_prop_nested three_col">
        //properties
    </div>
</div>
```
## Common attributes

1. **"Label"** : {name:"Label_display_name", position="top", width:"two_col"}

- Name is compulsory
- Default position of label is top
- Position values {"top","left"}
- Width is only applied to label if position is left

2. **"name"** : prop_name (variable to store this property value)

3. **"hideOn"** : "model.toggle"

If we wish to hide a particular property if toggle is on (toggles value is also stored in defaultAttributes) this can be applied to a single property.

- data-rv-hide="model.toggle"

If we wish to hide a particular property div if toggle is on (toggles value is also stored in defaultAttributes) this can be applied to a full property div.

4. **"showOn"** : "model.toggle"

If we wish to show a particular property if toggle is on (toggles value is also stored in defaultAttributes) this can be applied to a single property.

- data-rv-show="model.toggle"

If we wish to show a particular property div if toggle is on (toggles value is also stored in defaultAttributes) this can be applied to a full property div.

5. **"col_width"** : "three_col"

- Default value is "" (one_col)
- Col_width possible values {"one_col","two_col","three_col"}

6. **"inside_repeat"** : true/false

- Set as true if we are using the template inside a repat using rv-each
- Default is false

7. **"placeholder"** : "write your placeholder here",

- Can add placeholder on property such as → text,textarea

## Font Size

<figure>
  <Image src="/img/advanced-concepts/custom-control-ide/new-properties/new-properties-font-size.png" alt="Simple Database GUI" />
  <figcaption align='left'><i>font size property.</i></figcaption>
</figure>

```javascript
<%= Formbuilder.templates['edit/font_size']({
   "label": {name:"Font Size", position:"top"},
   "name": "font_size",
   "disableUnit": true,
   "hideOn":"model.toggle",
}) %>
```

**disableUnit** : for disabling the unit picker dropdown

- Default value is false (False means enabled and True means disabled)

:::info
For units we just need to add this “attrs.font_size_unit” in defaultAttributes no need to add anything in properties specificly.
:::

## Font Weight

<figure>
  <Image src="/img/advanced-concepts/custom-control-ide/new-properties/new-properties-font-weight.png" alt="Simple Database GUI" />
  <figcaption align='left'><i>font weight property.</i></figcaption>
</figure>

```javascript
<%= Formbuilder.templates['edit/font_weight']({
    "label": {name:"Font Weight"},
    "name": "font_weight",
}) %>
```

- Min,Max,Steps : 0,600,100 like number picker

## Number picker with unit

<figure>
  <Image src="/img/advanced-concepts/custom-control-ide/new-properties/new-properties-number-picker-with-unit.png" alt="Simple Database GUI" />
  <figcaption align='left'><i>number picker with unit picker property.</i></figcaption>
</figure>

```javascript
<%= Formbuilder.templates['edit/numberPickerWithUnit']({
    "label": {name:"SIZE"},
    "name": "size",
    "disableUnit": false,
    "steps": "200",
    "max": "1000",
    "min": "10",
}) %>
```

**steps** : the increment or decrement on clicking the arrow

- Default value =1

**max** : upper range of number picker

- Default value=1000000

**min** : lower range of number picker

- Default value=0

**disableUnit** : for disabling the unit picker dropdown

- Default value is false (False means enabled True means disabled)

## Number picker

<figure>
  <Image src="/img/advanced-concepts/custom-control-ide/new-properties/new-properties-number-picker.png" alt="Simple Database GUI" />
  <figcaption align='left'><i>number picker property.</i></figcaption>
</figure>

```javascript
<%= Formbuilder.templates['edit/numberPicker']({
    "label": {name:"Number Picker"},
    "name": "font_sizeC",
    "steps": "2",
    "max": "100",
    "min": "10",
}) %>
```

**steps** : the increment or decrement on clicking the arrow

- Default value = 1

**max** : upper range of number picker

- Default value=1000000

**min** : lower range of number picker

- Default value=-1000000

**disableUnit** : for disabling the unit picker dropdown

- Default value is false (False means enabled True means disabled)

## Color Picker

<figure>
  <Image src="/img/advanced-concepts/custom-control-ide/new-properties/new-properties-color-picker.png" alt="Simple Database GUI" />
  <figcaption align='left'><i>color picker property.</i></figcaption>
</figure>

```javascript
<%= Formbuilder.templates['edit/color_picker']({
   "label": {name:"pick color", position:"top", width:""},
   "name": "color_test",
   "col_width":"two_col",
   "solid_color_only" : true
}) %>
```

**Solid_color_only** : true

- true : removes gradient
- Default false

## Alignment (Select bar)

<figure>
  <Image src="/img/advanced-concepts/custom-control-ide/new-properties/new-properties-alignment-bar.png" alt="Simple Database GUI" />
  <figcaption align='left'><i>alignmentproperty.</i></figcaption>
</figure>

```javascript
<%= Formbuilder.templates['edit/selectbar']({
   "label": {name:"alingment", position:"top"},
   "name": "text_align",
   "icon_type":"text",
   "icon_labels":[{"L":"left"},{"R":"right"},{"C":"center"}],
   "col_width":"two_col",
}) %>
```

**Icon_type** : text/icon

- Default value is icon

**Icon_labels** : users custom labels

- {displayName : Actual Value}

<figure>
  <Image src="/img/advanced-concepts/custom-control-ide/new-properties/new-properties-alignment-bar-with-icons.png" alt="Simple Database GUI" />
  <figcaption align='left'><i>alignment icon property.</i></figcaption>
</figure>

- For using icons set values as : {“icon-cass”:”Left”}

- Eg :- {“fas fa-align-left”:“left”}

## Dropdown

<figure>
  <Image src="/img/advanced-concepts/custom-control-ide/new-properties/new-properties-dropdown.png" alt="Simple Database GUI" />
  <figcaption align='left'><i>dropdown property.</i></figcaption>
</figure>

```javascript
<%= Formbuilder.templates['edit/dropdown_new']({
   "label": {name:"dropdown", position:"left"},
   "name": "Dropdown",
   "values" :[{"Option1":"opt1"},{"Option2":"opt2"}],
   "col_width":"two_col",
   "isMultiselect":true,
   "maxSelections":"6",
}) %>
```

**Values** : {“display_text”,”value”}

**isMultiselect** : converts single select dropdown to multiselect dropdown

- Default value is false (single select)

**maxSelections** : “An Integer”

- Works only for multiselect dropdown
- Allows a limited number of selection
- Does not work for 0 or -ve numbers

**rv-each-part**
```javascript
<%= Formbuilder.templates['edit/dropdown_new']({
   "label": {name:"dropdown", position:"left"},
   "name": "Dropdown",
   "each": "model.jsonvalues",
   "display_text" : "display_name",
   "display_val" : "value",
}) %>
```

**each** : this works as forEach loop so it iterates over all the values given.

**display_text** : key name for fetching display-text. (compulsory if each is present)

**Display_val** : key name for fetching values (compulsory if each is present)

**Create Dynamic variable using dropdown multiselect** :

- **“dynamicFields”** : takes true/false, default is false. If set to true it will generate data according to the variables specified in the following key.

- **“variable”** : Generate the array variable in control model, according to the values selected in multiselect suppose you have selected 3 values in multiselect then the variable will have thee values by default defined by the variableDefault key

- **“variableDefault”** : Variabledefault specifies the default structure of data which will be used to populate the array variable specified in the variable key.

If default structure of data in variable is like 
```
{“key1”:”value1”,”key2”:”value2”}
```

Two more keys will be automatically added in above default structure
```
{“map_id”:”dropdown_value_at_index”, ”name”:”dropdown_value_at_index”, “key1”:”value1”,”key2”:”value2”}
```

```javascript
<%= Formbuilder.templates['edit/dropdown_new']({
   "label": {name:"dropdown", position:"left"},
   "name": "Dropdown",
   "each": "model.field_datatypes",
   "display_text" : "display_name",
   "display_val" : "display_name",
   "isMultiselect": true,
   "dynamicFields":true,
   "Variable":"output",
   "variableDefault":"outputDefault"
}) %>
```

## Input Field (Text Field)

<figure>
  <Image src="/img/advanced-concepts/custom-control-ide/new-properties/new-properties-input-field.png" alt="Simple Database GUI" />
  <figcaption align='left'><i>text input property.</i></figcaption>
</figure>

```javascript
<%= Formbuilder.templates['edit/text_input']({
   "label": {name:"textfield", position:"left", width:"one_col"},
   "name": "placeholder",
   "isDisabled": false
}) %>
```

By default “isDisabled” value is “false”

## File Upload

<figure>
  <Image src="/img/advanced-concepts/custom-control-ide/new-properties/new-properties-fileupload.png" alt="Simple Database GUI" />
  <figcaption align='left'><i>fileupload property.</i></figcaption>
</figure>

```javascript
<%= Formbuilder.templates['edit/file_upload']({
   "label": {name:"File Upload"},
   "name": "URL_link",
   "col_width":"tow_col",
   "multipleFiles":false,
   "maxlimit":"1",
}) %>
```

**multipleFiles** : default value is false

**maxLimit** : default value is 1

## Toggle

<figure>
  <Image src="/img/advanced-concepts/custom-control-ide/new-properties/new-properties-toggle.png" alt="Simple Database GUI" />
  <figcaption align='left'><i>toggle property.</i></figcaption>
</figure>

```javascript
<%= Formbuilder.templates['edit/toggle']({
   "label": {name:"toggle Me", position:"left", width:"two_col"},
   "name": "toggle",
}) %>
```

## Icon Picker

<figure>
  <Image src="/img/advanced-concepts/custom-control-ide/new-properties/new-properties-icon-picker.png" alt="Simple Database GUI" />
  <figcaption align='left'><i>icon picker property.</i></figcaption>
</figure>

```javascript
<%= Formbuilder.templates['edit/icon_picker']({
   "label": {name:"Icon Select", position:"left"},
   "name": "icon",
   "col_width":"two_col",
}) %>
```

## TextArea

<figure>
  <Image src="/img/advanced-concepts/custom-control-ide/new-properties/new-properties-textarea.png" alt="Simple Database GUI" />
  <figcaption align='left'><i>textarea property.</i></figcaption>
</figure>

```javascript
<%= Formbuilder.templates['edit/textarea']({
   "label": {name:"textArea",position:"left"},
   "name": "textarea",
   "col_width": "two_col",
   "rows":5,
}) %>
```

Default value of “rows” is 10

## Rich Text Editor

<figure>
  <Image src="/img/advanced-concepts/custom-control-ide/new-properties/new-properties-richtext-editor.png" alt="Simple Database GUI" />
  <figcaption align='left'><i>richtext editor property.</i></figcaption>
</figure>

```javascript
<%= Formbuilder.templates['edit/richTextEditor']({
   "label": {name:"richText",position:"left"},
   "name": "richtext",
   "col_width": "two_col",
   "in_option": true,
}) %>
```

Default value of “in_option” is TRUE

## Margin & Padding

<figure>
  <Image src="/img/advanced-concepts/custom-control-ide/new-properties/new-properties-margin-padding.png" alt="Simple Database GUI" />
  <figcaption align='left'><i>margin padding property.</i></figcaption>
</figure>

```javascript
<%= Formbuilder.templates['edit/margin_padding']({
   "label": {name:"Spacing"},
   "name": "marginpaddingValue",
   "info": "info-icon-example",
   "disable_padding": false,
   "disable_margin": false,
}) %>
```
Set default value of margin & padding template by using array of object like below Example:

```javascript
attrs.marginpaddingValue = {
   margin: {top: "0", bottom: "0", right: "0", left: "0"},
   padding: {top: "0", bottom: "0", right: "0", left: "0"}
}
```

Default values of “disable_padding” and “disable_margin” are FALSE.

Label position by default is TOP and can not be configurable.

Width of the margin & padding template is “THREE_COL” and can not be configured.
