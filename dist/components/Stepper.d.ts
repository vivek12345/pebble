import * as React from "react";
import { StepperProps, StepperState } from "./typings/Stepper";
declare class Stepper extends React.PureComponent<StepperProps, StepperState> {
    static defaultProps: Partial<StepperProps>;
    state: StepperState;
    private goToNextPage;
    private goToPrevPage;
    private goToPage;
    private getHeadings;
    private getLeftButtonData;
    private getRightButtonData;
    render(): JSX.Element;
}
export default Stepper;
