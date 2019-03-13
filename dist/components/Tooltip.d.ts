import * as React from "react";
import { TooltipProps, TooltipState } from "./typings/Tooltip";
declare class Tooltip extends React.PureComponent<TooltipProps, TooltipState> {
    state: {
        isOpen: boolean;
    };
    labelRef: React.RefObject<any>;
    private showTooltip;
    private hideTooltip;
    private addListeners;
    private removeListeners;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: TooltipProps): void;
    private getTooltip;
    render(): JSX.Element;
}
export default Tooltip;
