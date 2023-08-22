---
sidebar_position: 1
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';
import Image from '@site/src/components/Image';

# Localization

To get your app ready for local systems and conditions, it is essential to ensure its adaptability on the language front. While working with the app on the DronaHQ, there are several prompts and messages as responses it throws at the users, all these can be changed and converted into your desired language.

All these can be done from Localization setting which can be found under the` Settings -> Localization`.

Once you navigate to `localization` settings, the details about the language data along with the button to `Add Language` will appear.

## Language Data

To proceed with making the app multi-linguistic, understanding the language data and its format is important. `DronaHQ generates a JSON file` of all strings that can be internationalized at different places in the app which includes - system messages, static strings used in screens, rules, data queries and controls including but not limited to their properties and data. Download it from the default language and translate and upload it for different languages.

:::info
Localization should be done once the complete app is ready for deployment.
:::

Click the `Download` button of `Master Language JSON`, this will download the JSON file, containing all the system messages, static formulas for controls and variables, static strings in actions, and static values from rules and validations.
This then will be used for localization with different languages.

Downloaded JSON will look something like this:

```json
{
    "Test static data": "Test static data",
    "Secondary Header": "Secondary Header",
    "Test Actions": "Test Actions",
    "Toast, Confirm and Alert": "Toast, Confirm and Alert",
    "This field is mandatory": "This field is mandatory",
    "Invalid URL": "Invalid URL",
    "Invalid email id": "Invalid email id",
    "Text Input": "Text Input",
    "Write here...": "Write here...",
    "Value should be  to  characters long.": "Value should be  to  characters long.",
    "To check validation message": "To check validation message",
    "This is validation message for compulsory field": "This is validation message for compulsory field",
    "Validate Screen": "Validate Screen",
    "Test Tooltip": "Test Tooltip",
    "Test Description": "Test Description",
    "This is a half dynamic {{textinput}}": "This is a half dynamic {{textinput}}",
    "Hindi": "Hindi",
    "Toast": "Toast",
    "Good work, as always.": "Good work, as always.",
    "Perfect!": "Perfect!",
    "Confirm": "Confirm",
    "Cancel": "Cancel",
    "OK": "OK",
    "This is a half dynamic {{text_c25RoRppi1Fw2RJVK7XC}}": "This is a half dynamic {{text_c25RoRppi1Fw2RJVK7XC}}",
    "Test Confirm popup Ttle": "Test Confirm popup Ttle",
    "Good work, as always. {{text_c25RoRppi1Fw2RJVK7XC}}": "Good work, as always. {{text_c25RoRppi1Fw2RJVK7XC}}",
    "Cancel Clicked": "Cancel Clicked",
    "Test half dynamic messages {{text_c25RoRppi1Fw2RJVK7XC}}": "Test half dynamic messages {{text_c25RoRppi1Fw2RJVK7XC}}",
    "Ok Test": "Ok Test",
    "Popup": "Popup",
    "Done": "Done",
    "Test alert popup": "Test alert popup"
}
```

## Modifying language data

The previously downloaded JSON file of the master language would require to be updated with the desired language you want, in the exact format of the JSON file.

There are a few crucial points to remember while updating the JSON file with other language:-
1. Do not change any Key in the JSON, if the user wants, they can add new Key value pair to JSON.
2. User only needs to change the values part in the JSON
3. For dynamic values user should not change anything between `{{}}` (double curly braces)

```json
"Test half dynamic messages {{text_c25RoRppi1Fw2RJVK7XC}}": "Test half dynamic messages {{text_c25RoRppi1Fw2RJVK7XC}}"
```
- `Test half dynamic messages` -> this text can be changed to any local language.
- `{{text_c25RoRppi1Fw2RJVK7XC}}` -> this part should not be changed for values part.

For Example when above JSON is translated to `Dutch Language`.
```json
{
  "Test static data": "Test statische gegevens",
  "Secondary Header": "Secundaire koptekst",
  "Test Actions": "Testacties",
  "Toast, Confirm and Alert": "Toasten, bevestigen en waarschuwen",
  "This field is mandatory": "Dit veld is verplicht",
  "Invalid URL": "Ongeldige URL",
  "Invalid email id": "Ongeldige e-mail-ID",
  "Text Input": "Tekstinvoer",
  "Write here...": "Schrijf hier...",
  "Value should be  to  characters long.": "Waarde moet lang zijn tot tekens.",
  "To check validation message": "Om validatiebericht te controleren",
  "This is validation message for compulsory field": "Dit is een validatiebericht voor verplicht veld",
  "Validate Screen": "Bevestig scherm",
  "Test Tooltip": "Test Tooltip",
  "Test Description": "Testbeschrijving",
  "This is a half dynamic {{textinput}}": "Dit is een half dynamische {{textinput}}",
  "Hindi": "Hindi",
  "Toast": "Toast",
  "Good work, as always.": "Goed werk, zoals altijd.",
  "Perfect!": "Perfect!",
  "Confirm": "Bevestigen",
  "Cancel": "Annuleren",
  "OK": "OKE",
  "This is a half dynamic {{text_c25RoRppi1Fw2RJVK7XC}}": "Dit is een halve dynamische {{text_c25RoRppi1Fw2RJVK7XC}}",
  "Test Confirm popup Ttle": "Test Bevestig pop-up Ttel",
  "Good work, as always. {{text_c25RoRppi1Fw2RJVK7XC}}": "Goed werk, zoals altijd. {{text_c25RoRppi1Fw2RJVK7XC}}",
  "Cancel Clicked": "Annuleren geklikt",
  "Test half dynamic messages {{text_c25RoRppi1Fw2RJVK7XC}}": "Test half dynamische berichten {{text_c25RoRppi1Fw2RJVK7XC}}",
  "Ok Test": "Oké test",
  "Popup": "Pop-up",
  "Done": "Klaar",
  "Test alert popup": "Testwaarschuwing pop-up"
}
```

For Example when above JSON is translated to `Hindi Language`.
```json
{
    "Test static data": "स्थिर डेटा परीक्षण",
    "Secondary Header": "माध्यमिक हेडर",
    "Test Actions": "परीक्षण कार्रवाईयाँ",
    "Toast, Confirm and Alert": "टोस्ट, पुष्टि और चेतावनी",
    "This field is mandatory": "यह फ़ील्ड अनिवार्य है",
    "Invalid URL": "अमान्य URL",
    "Invalid email id": "अवैध ईमेल आईडी",
    "Text Input": "पाठ इनपुट",
    "Write here...": "यहाँ लिखें...",
    "Value should be to characters long.": "मान से वर्णों तक का होना चाहिए।",
    "To check validation message": "मान्यता संदेश की जांच करने के लिए",
    "This is validation message for compulsory field": "यह अनिवार्य क्षेत्र के लिए मान्यता संदेश है",
    "Validate Screen": "स्क्रीन को मान्यता दें",
    "Test Tooltip": "टूलटिप परीक्षण",
    "Test Description": "परीक्षण विवरण",
    "This is a half dynamic {{textinput}}": "यह आधा गतिशील है {{textinput}}",
    "Hindi": "हिंदी",
    "Toast": "टोस्ट",
    "Good work, as always.": "हमेशा की तरह अच्छा काम।",
    "Perfect!": "उत्कृष्ट!",
    "Confirm": "पुष्टि करें",
    "Cancel": "रद्द करें",
    "OK": "ठीक है",
    "This is a half dynamic {{text_c25RoRppi1Fw2RJVK7XC}}": "यह आधा गतिशील है {{text_c25RoRppi1Fw2RJVK7XC}}",
    "Test Confirm popup Ttle": "पुष्टि पॉपअप शीर्षक का परीक्षण करें",
    "Good work, as always. {{text_c25RoRppi1Fw2RJVK7XC}}": "हमेशा की तरह अच्छा काम। {{text_c25RoRppi1Fw2RJVK7XC}}",
    "Cancel Clicked": "रद्द क्लिक हुआ",
    "Test half dynamic messages {{text_c25RoRppi1Fw2RJVK7XC}}": "आधा गतिशील संदेश परीक्षण {{text_c25RoRppi1Fw2RJVK7XC}}",
    "Ok Test": "ठीक है परीक्षण",
    "Popup": "पॉपअप",
    "Done": "हो गया",
    "Test alert popup": "चेतावनी पॉपअप का परीक्षण करें"
}
```
## Adding language data
After JSON is ready, the user needs to upload that JSON file by
1. Clicking `+ Add Language`.
2. Select the language you are going to upload in the JSON file.
3. Attach the modified JSON file.
4. Click `Upload`.

With click of three dots beside the uploaded languages, one can find basic operations available for the uploaded language file :

1. `Edit`
2. `Download`
3. `Delete`
4. `Activate` (uploaded language active by default) / `Deactivate` (language will not be available for testing as well as will not be included in the package).

<figure>
  <Thumbnail src="/img/building-apps-concepts/localization/localization-config-screen.png" alt="Simple Database GUI" />
  <figcaption align='center'><i>Localization config screen.</i></figcaption>
</figure>

Finally, save it by clicking `Save Localization`. The translation is available in the preview as well as on the device the next time you publish your app.

## Two new Keywords introduced:
### LANGUAGES
This will have an array of objects of all the uploaded active languages, so users can directly use this as a formula to change between different languages.
### LANGAUGE
This will represent the language in which the app will be loaded, by default we will read the browser’s current locale language and load the app in that language (if JSON is available)

## Set Language Action
To switch languages, we have introduced a new action SET LANGAUGE

<figure>
  <Image src="/img/building-apps-concepts/localization/localization-set-language-action.png" alt="Simple Database GUI" />
  <figcaption align='left'><i>Set Language Action.</i></figcaption>
</figure>

Here user needs to pass the locale code in which they wish the app to be loaded.

**App Preview** :

<figure>
  <Thumbnail src="/img/building-apps-concepts/localization/localization-final-output.png" alt="Simple Database GUI" />
  <figcaption align='center'><i>Final output after localization.</i></figcaption>
</figure>


Work in progress...