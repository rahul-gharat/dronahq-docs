---
sidebar_position: 4
---

import Image from '@site/src/components/Image';

# Control Editor IDE Advance Concepts

## CoffeeScript File

### Edit Section

#### Dynamic repeatable properties
If we wish to add this kind of dynamic field like this we have to use this structure for it.

<figure>
  <Image src="/img/advanced-concepts/custom-control-ide/advance-concepts/advance-concepts-repeat-section-in-properties.png" alt="Simple Database GUI" />
  <figcaption align='left'><i>dynamic repeat properties.</i></figcaption>
</figure>

**Code in Edit Section**
```handlebars
<div data-rv-each-option="model.<%= Formbuilder.options.mappings.OPTIONS %>" data-rv-show="model.dynamic_color" class="edit_view_prop_nested three_col" style="margin:0;">
    <div class="edit_view_prop_nested three_col" style="margin: 0">
        <%= Formbuilder.templates['edit/color_picker']({
            "label" : {name:"pick color", position:"top", width:""},
            "name" : "option:code",
            "col_width" : "two_col",
            "inside_repeat" : true,
            "solid_color_only" : true
        }) %>
        <div class="prop_item">
            <div class="prop_top">
                <div class="label"></div>
            </div>
            <div class="prop_botm prop_botm_no_border">
                <a class="js-remove-option <%= Formbuilder.options.BUTTON_CLASS %>" title="Remove Option" style="margin: auto;"><i class='trash alternate outline icon'></i></a>
            </div>
        </div>
    </div>
</div>

<div data-rv-show = "model.dynamic_color" class="edit_view_ctrl_prop fb-buttom-add" style="margin: 0">
    <a class="js-add-option three_col <%= Formbuilder.options.BUTTON_CLASS %>">Add option</a>
</div>
```

**Code in defaultAttributes section**

And we have to add two variables in default attributes for this as :- 
```javascript
attrs.field_options.options = [
    { code: "#26BC6A" },
]
attrs.default_field_options_structure =
    code:"#26BC6A"
```
So every time we click on the `Add option` button this array will be filled with objects dynamically as the structure mentioned in the second variable.

To access code in the options array we normally use `dot(.) operator` but here we have to use `colon(:) operator`.

### To Trigger model change
If we have a configuration like Dropdown Control where we have to change selection type from single select to multi select we have to add onModelChange method to reflect this change in model 

```coffeescript
onModelChange: () ->
   if @.changed.hasOwnProperty('select_type')
       if @.get('select_type') == 'singleselect'
           @.set({
               "data_type":"string",
               "field_database_editor_data_format": "single_select"
           })
       else
           @.set({
               "data_type":"list",
               "field_database_editor_data_format": "multi_select"
           })
```

### SudoComponents section
Advanced Functions mostly used with master controls in the `sudoComponentFunctions` section. with `setValue` and `getValue` functions

**getJson: () ->** this function is used to convert binded data into json format as shown in code below.

```coffeescript
getJson: () ->
    liveData = this.backBoneModel.get("LiveData") || "[]"
    liveData = if !_.isArray(liveData) && isJson(liveData) then JSON.parse(liveData) else liveData
    return liveData
```

**reset: () ->** this function can be used to reset control data like this,

```coffeescript
reset: () ->
    this.backBoneModel.set({"LiveData":"[]","dummySchema":"{}"})
```
## Javascript File

**this.getJson** :- this function is mainly used with master controls and this function has to be overridden by master controls.
main use of this function is when we want to bind this controls JSON output to any other control we have to use this method.

```javascript
this.getJson = function () {
    var json = [];
    if (this.model.field_options && this.model.field_options.options) {
        json = this.model.field_options.options;
    }
    return json;
}
```

## Multiple outputs from a control

### CoffeeScript File

To get multiple outputs from a control in the form of properties like table grid control, we have to use the same function `getPropertiesKeyword` in sudoComponentFunctions as,

<figure>
  <Image src="/img/advanced-concepts/custom-control-ide/advance-concepts/advance-concepts-getPropertiesKeyword-in-sudofunctions.png" alt="Simple Database GUI" />
  <figcaption align='center'><i>getPropertiesKeyword inside sudoComponentFunctions.</i></figcaption>
</figure>

structure for the `getPropertiesKeyword` function when used inside sudoComponentFunctions.

**getPropertiesKeyword: (ctrModel) ->** this function is used to set extra property values added to the control like in table grid we have `tablegrid.PROPERTIES.LIMIT` this function is used to get values of these extra keywords.

```coffeescript
getPropertiesKeyword: (ctrModel) ->
    id = ctrModel.get("field_key_name")
    name = ctrModel.get("field_display_key_name")
    extraKeyword = {}
    extraKeyword[[id,"PROPERTIES", "SEARCHTEXT"].join(".")] = () ->  ""
    extraKeyword[[id,"PROPERTIES", "OFFSET"].join(".")] = () -> ctrModel.get("offset")
    extraKeyword[[id,"PROPERTIES", "LIMIT"].join(".")] = () ->  ctrModel.get("pageLimit")
    extraKeyword[[id,"PROPERTIES", "STARTROW"].join(".")] = () -> Number(ctrModel.get("offset")) + 1
    extraKeyword[[id,"PROPERTIES", "ENDROW"].join(".")] = () ->  Number(ctrModel.get("offset")) + Number(ctrModel.get("pageLimit"))

    return extraKeyword
```

To make it available for binding inside DronaHQ we have to configure `getPropertiesKeyword` as part of main coffeescript file as image below

<figure>
  <Image src="/img/advanced-concepts/custom-control-ide/advance-concepts/advance-concepts-getPropertiesKeyword-outside-sudofunctions.png" alt="Simple Database GUI" />
  <figcaption align='center'><i>getPropertiesKeyword outside sudoComponentFunctions.</i></figcaption>
</figure>

structure for the `getPropertiesKeyword` function when used outside sudoComponentFunctions.

```coffeescript
getPropertiesKeyword: (mjson) ->
    id = mjson.field_key_name
    name = mjson.field_display_key_name
    extraKeyword = {}
    extraKeyword[[id,"PROPERTIES", "SEARCHTEXT"].join(".")] = {
        name: [name,"PROPERTIES", "SEARCHTEXT"].join("."),
        data_type: "PROPERTIES"
    }
    extraKeyword[[id,"PROPERTIES", "OFFSET"].join(".")] = {
        name:[name,"PROPERTIES", "OFFSET"].join("."),
        data_type: "number"
    }
    extraKeyword[[id,"PROPERTIES", "LIMIT"].join(".")] = {
        name:[name,"PROPERTIES", "LIMIT"].join(".")
        data_type: "number"
    }
    extraKeyword[[id,"PROPERTIES", "STARTROW"].join(".")] = {
        name:[name,"PROPERTIES", "STARTROW"].join(".")
        data_type: "number"
    }
    extraKeyword[[id,"PROPERTIES", "ENDROW"].join(".")] = {
        name:[name,"PROPERTIES", "ENDROW"].join(".")
        data_type: "number"
    }
```

### Javascript File

**this.getPropertiesKeywordDataMap** :- this function is used to get values of extra properties, the same example as table grid.
```javascript
this.getPropertiesKeywordDataMap = function () {
    var id = this.model.field_key_name;
    var name = this.model.field_display_key_name;
    var map = {};
    map[[id, "PROPERTIES", "SEARCHTEXT"].join(".")] = this._getSearchText.bind(this);
    map[[id, "PROPERTIES", "OFFSET"].join(".")] = this._getOffset.bind(this);
    map[[id, "PROPERTIES", "LIMIT"].join(".")] = this._getLimit.bind(this);
    map[[id, "PROPERTIES", "STARTROW"].join(".")] = this._getStartRow.bind(this);
    map[[id, "PROPERTIES", "ENDROW"].join(".")] = this._getEndRow.bind(this);

    return map;
}
```

And we have to write definitions for these get functions which can be called here as.

```javascript
this._getSearchText = function () {
    return this.$el.find('.wildCardSearch').val();
};
this._getOffset = function () {
    offset = this.model.offset;
    return offset;
};
this._getLimit = function () {
    limit = this.$el.find('.totalRows').val()
    return parseInt(limit)
};
this._getStartRow = function() {
    return this.model.startRow;
};
this._getEndRow = function() {
    return this.model.endRow;
};
```

And to trigger change in this values as per our need we have to use `triggerPropertyChange` method.

Eg :- here `self = this;`
```javascript
self.triggerPropertyChange("OFFSET");
self.triggerPropertyChange("STARTROW");
self.triggerPropertyChange("ENDROW");
```
:::info
This Multiple outputs from a control is supported for all types of controls expect for controls with `attrs.field_composition_type = "composite"`. Preferably use this for `composite_list` and `master` controls. 
:::