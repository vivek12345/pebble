import * as React from "react";
import { TypeaheadProps, TypeaheadState } from "./typings/Typeahead";
export default class TypeAhead<OptionType> extends React.PureComponent<TypeaheadProps<OptionType>, TypeaheadState> {
    static defaultProps: {
        debounceTime: number;
        onClear: () => void;
    };
    state: TypeaheadState;
    private onChange;
    private debouncedChange;
    private registerChange;
    private onFocus;
    private onSelect;
    render(): JSX.Element;
}
