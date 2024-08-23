import { Action } from "../99.core/interface/action.interface";
import  ArenaBit  from "./fce/arena.bit";

// Arena actions

export const INIT_ARENA = "[Arena action] Init Arena";
export class InitArena implements Action {
 readonly type = INIT_ARENA;
 constructor(public bale: ArenaBit) {}
}

export const UPDATE_ARENA = "[Arena action] Update Arena";
export class UpdateArena implements Action {
 readonly type = UPDATE_ARENA;
 constructor(public bale: ArenaBit) {}
}

export const READ_ARENA = "[Read action] Read Arena";
 export class ReadArena implements Action {
 readonly type = READ_ARENA;
 constructor(public bale: ArenaBit) {}
 }
 
export const WRITE_ARENA = "[Write action] Write Arena";
 export class WriteArena implements Action {
 readonly type = WRITE_ARENA;
 constructor(public bale: ArenaBit) {}
 }
 
export const REMOVE_ARENA = "[Remove action] Remove Arena";
 export class RemoveArena implements Action {
 readonly type = REMOVE_ARENA;
 constructor(public bale: ArenaBit) {}
 }
 
export const DELETE_ARENA = "[Delete action] Delete Arena";
 export class DeleteArena implements Action {
 readonly type = DELETE_ARENA;
 constructor(public bale: ArenaBit) {}
 }
 
export const CREATE_ARENA = "[Create action] Create Arena";
 export class CreateArena implements Action {
 readonly type = CREATE_ARENA;
 constructor(public bale: ArenaBit) {}
 }
 
export type Actions = | InitArena | UpdateArena 
| ReadArena
| WriteArena
| RemoveArena
| DeleteArena
| CreateArena