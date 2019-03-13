import * as React from "react";
import { InputProps, InputState } from "./typings/Input";
declare class Input extends React.PureComponent<InputProps, InputState> {
    readonly state: InputState;
    static defaultProps: {
        value: string;
        readOnly: boolean;
    };
    private addFocus;
    private removeFocus;
    private handleChange;
    render(): JSX.Element;
}
export default Input;
