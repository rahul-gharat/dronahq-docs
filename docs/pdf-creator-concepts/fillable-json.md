---
sidebar_position: 3
---

import Thumbnail from '@site/src/components/Thumbnail';

# Fillable JSON Structure

When working with Fillable PDF Templates in DronaHQ, Fillable JSON refers to two key JSON structures that define and populate data into PDF form fields:

**Form JSON** - Describes the structure and types of fields present in the uploaded fillable PDF.

**Generate PDF JSON** - Provides actual values for those fields to generate the final PDF.

Together, they allow you to view available fields and programmatically inject values into the PDF.

## Form JSON

Auto-generated from your uploaded fillable PDF. It tells you:

- What fields are available.
- What type each field is (e.g., text, radio, dropdown).
- If a field has selectable options.

```json
[
    {
        "name": "FullName",
        "type": "text"
    },
    {
        "name": "Married",
        "type": "checkbox"
    },
    {
        "name": "Gender",
        "type": "radio",
        "options": ["Male", "Female"]
    },
    {
        "name": "City",
        "type": "dropdown",
        "options": ["New York", "London", "Berlin"]
    },
    {
        "name": "Language",
        "type": "optionlist",
        "options": [
            "English",
            "German",
            "French",
            "Italian"
        ]
    }
]
```

## Generate PDF JSON
You use this to populate the form with data. It mirrors the Form JSON structure and adds a value key. The options key is not required here. Just provide the name, type, and value.

```json
[
    {
        "name": "FullName",
        "type": "text",
        "value": "John Doe"
    },
    {
        "name": "Married",
        "type": "checkbox",
        "value": true
    },
    {
        "name": "Gender",
        "type": "radio",
        "value": "Male"
    },
    {
        "name": "City",
        "type": "dropdown",
        "value": "New York"
    },
    {
        "name": "Language",
        "type": "optionlist",
        "value": ["English", "French"]
    }
]
```

### Embedding Images in Fillable Fields
If a field is of type `text`, you can also use it to draw an image (e.g., for signatures or ID photos). Just set the type in Generate PDF JSON to either of type `image/jpeg` or `image/png`.

The value should be either a Base64-encoded image string, or a publicly accessible image URL.

```json
[
    {
        "name": "Signature",
        "type": "image/png",
        "value": "https://example.com/signature.png"
    }
]
```


```json
[
    {
        "name": "Signature",
        "type": "image/jpeg",
        "value": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29t..."
    }
]
```