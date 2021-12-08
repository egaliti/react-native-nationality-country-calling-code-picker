import { NationalityPicker as NationalityPickerComponent } from "./src/screens";
import React from "react";

const DEFAULT_OPTIONS = {
  onSelectCountry: () => {},
  style: {},
  showFlag: true,
  showCallingCode: true,
  showCountryName: true,
  showNationalityName: true,
  darkMode: true,
};

export default NationalityPicker = (props) => {
  const propsModel = {
    ...DEFAULT_OPTIONS,
    ...props,
  };

  return <NationalityPickerComponent {...propsModel} />;
};
