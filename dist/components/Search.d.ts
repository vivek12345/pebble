import * as React from "react";
import { SearchProps } from "./typings/Search";
declare class Search extends React.PureComponent<SearchProps> {
    searchInputRef: React.RefObject<HTMLInputElement>;
    static defaultProps: {
        showSearchIcon: boolean;
        clearable: boolean;
    };
    render(): JSX.Element;
}
export default Search;
