import * as React from "react";
import { CalendarProps, CalendarState } from "./typings/Calendar";
declare class Calendar extends React.PureComponent<CalendarProps, CalendarState> {
    static defaultProps: Partial<CalendarProps>;
    state: CalendarState;
    private onChange;
    private onDayClick;
    private getTileContent;
    private getDisabledDays;
    private onApply;
    render(): JSX.Element;
}
export default Calendar;
