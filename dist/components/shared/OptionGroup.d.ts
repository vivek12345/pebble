import * as React from "react";
import { OptionGroupProps, OptionGroupState } from "../typings/OptionGroup";
declare class OptionGroup<OptionType> extends React.PureComponent<OptionGroupProps<OptionType>, OptionGroupState> {
    optionRef: React.RefObject<HTMLDivElement>;
    optionsRefsSet: Map<number, React.RefObject<React.ReactInstance>>;
    observer?: IntersectionObserver;
    state: Readonly<OptionGroupState>;
    private handleKeyPress;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default OptionGroup;
