export declare const initConsole: (cpy: ConsoleModel, bal: ConsoleBit, ste: State) => ConsoleModel;
export declare const updateConsole: (cpy: ConsoleModel, bal: ConsoleBit, ste: State) => Promise<ConsoleModel>;
export declare const createConsole: (cpy: ConsoleModel, bal: ConsoleBit, ste: State) => ConsoleModel;
export declare const readConsole: (cpy: ConsoleModel, bal: ConsoleBit, ste: State) => Promise<ConsoleModel>;
export declare const writeConsole: (cpy: ConsoleModel, bal: ConsoleBit, ste: State) => Promise<ConsoleModel>;
export declare const removeConsole: (cpy: ConsoleModel, bal: ConsoleBit, ste: State) => ConsoleModel;
export declare const deleteConsole: (cpy: ConsoleModel, bal: ConsoleBit, ste: State) => ConsoleModel;
import { ConsoleModel } from "../console.model";
import ConsoleBit from "../fce/console.bit";
import State from "../../99.core/state";
