import * as React from "react";
import { ModalProps } from "./typings/Modal";
declare class Modal extends React.PureComponent<ModalProps> {
    private node;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: ModalProps): void;
    render(): React.ReactNode;
}
export default Modal;
