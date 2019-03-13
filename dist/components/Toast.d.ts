import * as React from "react";
import { ToastProps, ToastState, ToastType } from "./typings/Toast";
declare class Toast extends React.PureComponent<ToastProps, ToastState> {
    static show(text: string, type: ToastType, time?: number): void;
    showTimer?: number | null;
    static hide(): void;
    state: ToastState;
    componentDidMount(): void;
    componentWillUnmount(): void;
    private show;
    private hide;
    render(): JSX.Element;
}
export default Toast;
