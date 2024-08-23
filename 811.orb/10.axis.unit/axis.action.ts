import { Action } from "../99.core/interface/action.interface";
import  AxisBit  from "./fce/axis.bit";

// Axis actions

export const INIT_AXIS = "[Axis action] Init Axis";
export class InitAxis implements Action {
 readonly type = INIT_AXIS;
 constructor(public bale: AxisBit) {}
}

export const UPDATE_AXIS = "[Axis action] Update Axis";
export class UpdateAxis implements Action {
 readonly type = UPDATE_AXIS;
 constructor(public bale: AxisBit) {}
}

export const READ_AXIS = "[Read action] Read Axis";
 export class ReadAxis implements Action {
 readonly type = READ_AXIS;
 constructor(public bale: AxisBit) {}
 }
 
export const WRITE_AXIS = "[Write action] Write Axis";
 export class WriteAxis implements Action {
 readonly type = WRITE_AXIS;
 constructor(public bale: AxisBit) {}
 }
 
export const REMOVE_AXIS = "[Remove action] Remove Axis";
 export class RemoveAxis implements Action {
 readonly type = REMOVE_AXIS;
 constructor(public bale: AxisBit) {}
 }
 
export const DELETE_AXIS = "[Delete action] Delete Axis";
 export class DeleteAxis implements Action {
 readonly type = DELETE_AXIS;
 constructor(public bale: AxisBit) {}
 }
 
export const CREATE_AXIS = "[Create action] Create Axis";
 export class CreateAxis implements Action {
 readonly type = CREATE_AXIS;
 constructor(public bale: AxisBit) {}
 }
 
export type Actions = | InitAxis | UpdateAxis 
| ReadAxis
| WriteAxis
| RemoveAxis
| DeleteAxis
| CreateAxis