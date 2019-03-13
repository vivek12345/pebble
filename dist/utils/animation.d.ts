import { State } from "react-spring";
export declare const animationConfig: {
    from: {
        opacity: number;
        transform: string;
    };
    enter: {
        opacity: number;
        transform: string;
    };
    leave: {
        opacity: number;
        transform: string;
        pointerEvents: string;
    };
    config: (_a: boolean, motion: State) => {
        duration: number;
    };
};
