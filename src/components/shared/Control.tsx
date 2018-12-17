import * as React from "react";
import { controlStyle, radioIconStyle } from "../styles/Control.styles";
import { ControlProps } from "../typings/Control";
import { colors } from "../../theme";
import { cx } from "emotion";

const renderProps = (props: ControlProps) => <ControlView {...props} />;

const Control: React.FunctionComponent<ControlProps> = props => {
  const {
    checked,
    onChange,
    value,
    disabled,
    children = renderProps,
    type,
    className
  } = props;
  return (
    <div
      className={cx(controlStyle, className)}
      role={type}
      aria-disabled={disabled}
      aria-checked={checked}
      data-disabled={disabled}
      tabIndex={checked ? 0 : -1}
      onClick={
        !disabled
          ? (e: React.MouseEvent) =>
              onChange && onChange({ value, checked: !checked }, e)
          : undefined
      }
    >
      {children(props)}
    </div>
  );
};

export const ControlView: React.FunctionComponent<ControlProps> = ({
  checked,
  label,
  type
}) => {
  const isRadio = type === "radio";

  // Ensure that other styles are not emotion styles.
  // As cx merges styles into one className.
  const iconClass = cx(radioIconStyle, "pi", {
    "pi-radio": isRadio && !checked,
    "pi-radio-selected": isRadio && checked,
    "pi-checkbox-selected": !isRadio && checked,
    "pi-checkbox-unselected": !isRadio && !checked
  });

  return (
    <>
      <i
        style={{
          color: checked ? colors.violet.base : colors.gray.light,
          paddingTop: 2
        }}
        className={iconClass}
      />{" "}
      {label}
    </>
  );
};

export default Control;
