import * as React from "react";
import OptionGroup from "./shared/OptionGroup";
import { OptionGroupRadio as OptionGroupRadioProps } from "./typings/OptionGroupRadio";
export default class OptionGroupRadio<OptionType> extends React.PureComponent<OptionGroupRadioProps<OptionType>> {
    isSelected: (value: OptionType) => boolean;
    handleChange: OptionGroup<OptionType>["props"]["handleChange"];
    render(): JSX.Element;
}
