import * as React from "react";
import { OutsideClickProps } from "./typings/OutsideClick";
declare class OutsideClick extends React.PureComponent<OutsideClickProps> {
    childRef: React.RefObject<HTMLDivElement>;
    handleClick: (e: MouseEvent) => void;
    addListener: () => void;
    removeListener: () => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: OutsideClickProps): void;
    render(): JSX.Element;
}
export default OutsideClick;
