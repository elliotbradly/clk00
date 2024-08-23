import { Action } from "../99.core/interface/action.interface";
import  CrownBit  from "./fce/crown.bit";

// Crown actions

export const INIT_CROWN = "[Crown action] Init Crown";
export class InitCrown implements Action {
 readonly type = INIT_CROWN;
 constructor(public bale: CrownBit) {}
}

export const UPDATE_CROWN = "[Crown action] Update Crown";
export class UpdateCrown implements Action {
 readonly type = UPDATE_CROWN;
 constructor(public bale: CrownBit) {}
}

export const READ_CROWN = "[Read action] Read Crown";
 export class ReadCrown implements Action {
 readonly type = READ_CROWN;
 constructor(public bale: CrownBit) {}
 }
 
export type Actions = | InitCrown | UpdateCrown 
| ReadCrown