import * as React from "react";
import { PresetCalendarProps, PresetCalendarState } from "./typings/PresetCalendar";
declare class PresetCalendar extends React.PureComponent<PresetCalendarProps, PresetCalendarState> {
    static defaultProps: Partial<PresetCalendarProps>;
    state: PresetCalendarState;
    render(): JSX.Element;
}
export default PresetCalendar;
