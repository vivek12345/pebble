import * as React from "react";
import { ControlProps } from "../typings/Control";
declare function Control<OptionType>(props: ControlProps<OptionType>): JSX.Element;
interface ControlViewProps {
    label: React.ReactNode;
    checked?: boolean;
    type: "radio" | "checkbox";
    disabled?: boolean;
}
export declare const ControlView: React.FunctionComponent<ControlViewProps>;
export default Control;
