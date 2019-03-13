import * as React from "react";
import { PhoneNumberInputProps } from "./typings/PhoneNumberInput";
export default class PhoneNumberInput extends React.Component<PhoneNumberInputProps> {
    onCountrySelect: (countryCode: string) => void;
    onNumberChange: (value: string) => void;
    render(): JSX.Element;
}
