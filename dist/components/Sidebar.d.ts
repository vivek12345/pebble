import * as React from "react";
import { SidebarProps } from "./typings/Sidebar";
declare class SideBar extends React.PureComponent<SidebarProps> {
    static defaultProps: Partial<SidebarProps>;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default SideBar;
