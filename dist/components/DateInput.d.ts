import * as React from "react";
import { DateInputProps, DateInputState } from "./typings/DateInput";
export default class DateInput extends React.PureComponent<DateInputProps, DateInputState> {
    state: Readonly<DateInputState>;
    static getDerivedStateFromProps(props: DateInputProps, state: DateInputState): Partial<DateInputState> | null;
    private onCalendarDateChange;
    private onInputChange;
    render(): JSX.Element;
}
export declare class BrowserBasedDateInput extends React.PureComponent<DateInputProps> {
    static contextType: React.Context<import("../utils/useragent").UserAgentInfo>;
    render(): JSX.Element;
}
