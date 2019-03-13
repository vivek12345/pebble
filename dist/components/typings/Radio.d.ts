import { Omit } from "utility-types";
import { ControlProps } from "./Control";
export declare type RadioProps<OptionType> = Omit<ControlProps<OptionType>, "type">;
