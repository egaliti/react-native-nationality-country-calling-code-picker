# react-native-nationality-country-calling-code-picker

**Various country picker** for **iOS** and **Android**

## Getting started

`$ npm install react-native-nationality-country-calling-code-picker --save`
<br>
OR
<br>
`$ yarn add react-native-nationality-country-calling-code-picker`

## Example

```javascript
import NationalityPicker from "react-native-nationality-country-calling-code-picker";

let nationalityPickerRef = undefined;

// use nationalityPickerRef
nationalityPickerRef.open();
nationalityPickerRef.close();

<NationalityPicker
  nationalityPickerRef={(ref: any) => {
    nationalityPickerRef = ref;
  }}
  enable={true}
  darkMode={false}
  countryCode={"US"}
  containerConfig={{
    showFlag: true,
    showCallingCode: true,
    showCountryName: false,
    showNationalityName: true,
    showCountryCode: true,
  }}
  modalConfig={{
    showFlag: true,
    showCallingCode: true,
    showCountryName: false,
    showNationalityName: true,
    showCountryCode: true,
  }}
  onSelectCountry={(data: any) => {
    console.log("DATA", data);
  }}
  onInit={(data: any) => {
    console.log("DATA", data);
  }}
  onOpen={() => {
    console.log("Open");
  }}
  onClose={() => {
    console.log("Close");
  }}
  containerStyle={{
    container: {},
    flagStyle: {},
    callingCodeStyle: {},
    countryCodeStyle: {},
    countryNameStyle: {},
    nationalityNameStyle: {},
  }}
  modalStyle={{
    container: {},
    searchStyle: {},
    tileStyle: {},
    itemStyle: {
      itemContainer: {},
      flagStyle: {},
      countryCodeStyle: {},
      countryNameStyle: {},
      nationalityNameStyle: {},
      callingNameStyle: {},
    },
  }}
  title={"Nationality"}
  searchPlaceholder={"Search"}
  showCloseButton={true}
  showModalTitle={true}
/>;
```

## Options

| Props                       | Default   | Options/Info                                                                                    |
| --------------------------- | --------- | ----------------------------------------------------------------------------------------------- |
| enable (Boolean)            | true      | Show component that choose the country.                                                         |
| countryPickerRef (Function) | null      | Get the open() and close() modal methods.                                                       |
| darkMode (Boolean)          | true      | Dark mode for country modal.                                                                    |
| countryCode (String)        | US        | Country code displayed is selected at start.                                                    |
| modalConfig (Object)        | US        | Config for component that choose the country. <br> **Note**: See more details below.            |
| containerConfig (Object)    | US        | Config for component that choose the country. <br> **Note**: See more details below.            |
| onSelectCountry (Function)  | null      | Called when the user chooses a country and returns information for the selected country.        |
| onInit (Function)           | null      | Called when the component set default country and returns information for the selected country. |
| onOpen (Function)           | null      | Called when the open modal.                                                                     |
| onClose (Function)          | null      | Called when the close modal.                                                                    |
| title (String)              | "Country" | The title of the modal select country.                                                          |
| showCloseButton (Boolean)   | true      | Show the close button of the modal select country.                                              |
| showModalTitle (Boolean)    | true      | Show the title of the modal select country.                                                     |
| containerStyle (Object)     | null      | Style for component that choose the country. <br> **Note**: See more details below.             |
| modalStyle (Object)         | null      | Style for modal select country. <br> **Note**: See more details below.                          |
| renderChildren (Component)  | null      | The child component replaces the component element of the library                               |

## containerStyle

| Props                         | Default | Options/Info                   |
| ----------------------------- | ------- | ------------------------------ |
| container (Object)            | style   | Style for component container. |
| flagStyle (Object)            | style   | Style for the icon country.    |
| callingCodeStyle (Object)     | style   | Style for country code.        |
| countryNameStyle (Object)     | style   | Style for country name.        |
| nationalityNameStyle (Object) | style   | Style for nationality name.    |
| countryCodeStyle (Object)     | style   | Style for country code.        |

## modalConfig && containerConfig

| Props                         | Default | Options/Info                |
| ----------------------------- | ------- | --------------------------- |
| showFlag (Boolean)            | true    | Show/hide Flag.             |
| showCallingCode (Boolean)     | true    | Show/hide Calling Code.     |
| showCountryName (Boolean)     | true    | Show/hide Country Name.     |
| showNationalityName (Boolean) | true    | Show/hide Nationality Name. |
| showCountryCode (Boolean)     | true    | Show/hide Country Code.     |

## modalStyle

| Props                | Default | Options/Info                                                         |
| -------------------- | ------- | -------------------------------------------------------------------- |
| container (Object)   | style   | Style for modal container                                            |
| searchStyle (Object) | style   | Style for modal search input                                         |
| tileStyle (Object)   | style   | Style for modal title                                                |
| itemStyle (Object)   | style   | Style for item select country <br> **Note**: See more details below. |

## itemStyle

| Props                         | Default | Options/Info                     |
| ----------------------------- | ------- | -------------------------------- |
| itemContainer (Object)        | style   | Style for item country container |
| flagStyle (Object)            | style   | Style for the icon country.      |
| callingCodeStyle (Object)     | style   | Style for country code.          |
| countryNameStyle (Object)     | style   | Style for country name.          |
| nationalityNameStyle (Object) | style   | Style for nationality name.      |
| countryCodeStyle (Object)     | style   | Style for country code.          |

### Thank you!

```

```
