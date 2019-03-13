import * as React from "react";
import { RadioGroupProps } from "./typings/RadioGroup";
export default class RadioGroup<OptionType> extends React.PureComponent<RadioGroupProps<OptionType>> {
    private handleChange;
    render(): JSX.Element;
}
