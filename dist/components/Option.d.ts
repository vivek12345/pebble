import * as React from "react";
import { OptionProps } from "./typings/Option";
declare const defaultProps: {
    rightElement: ({ isSelected, multiSelect }: {
        isSelected: boolean;
        multiSelect: boolean;
    }) => JSX.Element | null;
};
declare class Option<OptionType> extends React.Component<OptionProps<OptionType> & Required<typeof defaultProps>> {
    static defaultProps: {
        rightElement: ({ isSelected, multiSelect }: {
            isSelected: boolean;
            multiSelect: boolean;
        }) => JSX.Element | null;
    };
    render(): JSX.Element;
}
export default Option;
