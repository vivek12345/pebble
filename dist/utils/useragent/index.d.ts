import * as React from "react";
interface UserAgentInfoProviderProps {
    userAgent: string;
}
export interface UserAgentInfo {
    userAgent: string;
}
export declare const UserAgentInfoContext: React.Context<UserAgentInfo>;
export declare class UserAgentInfoProvider extends React.PureComponent<UserAgentInfoProviderProps, UserAgentInfo> {
    constructor(props: UserAgentInfoProviderProps);
    render(): JSX.Element;
}
export {};
