import * as React from "react";
import { PopperProps, PopperState } from "./typings/Popper";
export default class extends React.PureComponent<PopperProps, PopperState> {
    static defaultProps: Partial<PopperProps>;
    state: PopperState;
    private toggle;
    render(): JSX.Element;
}
