import * as React from "react";
import { DropdownProps, DropdownState } from "./typings/Dropdown";
declare class DropDown extends React.PureComponent<DropdownProps, DropdownState> {
    state: DropdownState;
    static defaultProps: Partial<DropdownProps>;
    private toggleDropdown;
    render(): JSX.Element;
}
export default DropDown;
