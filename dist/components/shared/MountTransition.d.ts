import * as React from "react";
import { State, TransitionProps } from "react-spring";
import { Omit } from "utility-types";
interface MountTransitionProps extends Omit<Omit<TransitionProps<boolean>, "items">, "children"> {
    visible: boolean;
    children: (params: React.CSSProperties, state: State, index: number) => React.ReactNode;
}
declare const MountTransition: React.FunctionComponent<MountTransitionProps>;
export default MountTransition;
