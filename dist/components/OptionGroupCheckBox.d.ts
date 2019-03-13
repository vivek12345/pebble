import * as React from "react";
import OptionGroup from "./shared/OptionGroup";
import { OptionGroupCheckBoxProps } from "./typings/OptionGroupCheckBox";
export default class OptionGroupCheckBox<OptionType> extends React.PureComponent<OptionGroupCheckBoxProps<OptionType>> {
    isSelected: (value: OptionType) => boolean;
    handleChange: OptionGroup<OptionType>["props"]["handleChange"];
    onApply: () => void;
    render(): JSX.Element;
}
