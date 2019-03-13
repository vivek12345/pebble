import * as React from "react";
import { CheckboxGroupProps } from "./typings/CheckboxGroup";
export default class CheckboxGroup<OptionType> extends React.PureComponent<CheckboxGroupProps<OptionType>> {
    private handleChange;
    render(): JSX.Element;
}
