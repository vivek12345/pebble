import * as React from "react";
import OptionGroup from "./shared/OptionGroup";
import { OptionGroupRadioProps } from "./typings/OptionGroupRadio";

const OptionGroupRadio: React.SFC<OptionGroupRadioProps> = props => {
  const { selected, onChange, ...rest } = props;
  return (
    <OptionGroup
      {...rest}
      isSelected={value => {
        return selected === value;
      }}
      handleChange={({ value, checked }) => {
        onChange(checked ? value : undefined, props);
      }}
    />
  );
};

export default OptionGroupRadio;
