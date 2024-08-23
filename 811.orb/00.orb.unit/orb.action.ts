import { Action } from "../99.core/interface/action.interface";
import  OrbBit  from "./fce/orb.bit";

// Orb actions

export const INIT_ORB = "[Orb action] Init Orb";
export class InitOrb implements Action {
 readonly type = INIT_ORB;
 constructor(public bale: OrbBit) {}
}

export const UPDATE_ORB = "[Orb action] Update Orb";
export class UpdateOrb implements Action {
 readonly type = UPDATE_ORB;
 constructor(public bale: OrbBit) {}
}

export const OPEN_ORB = "[Open action] Open Orb";
 export class OpenOrb implements Action {
 readonly type = OPEN_ORB;
 constructor(public bale: OrbBit) {}
 }
 
export type Actions = | InitOrb | UpdateOrb 
| OpenOrb