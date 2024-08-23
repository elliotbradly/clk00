import { Action } from "../99.core/interface/action.interface";
import  EmotionBit  from "./fce/emotion.bit";

// Emotion actions

export const INIT_EMOTION = "[Emotion action] Init Emotion";
export class InitEmotion implements Action {
 readonly type = INIT_EMOTION;
 constructor(public bale: EmotionBit) {}
}

export const UPDATE_EMOTION = "[Emotion action] Update Emotion";
export class UpdateEmotion implements Action {
 readonly type = UPDATE_EMOTION;
 constructor(public bale: EmotionBit) {}
}

export const SELECT_EMOTION = "[Select action] Select Emotion";
 export class SelectEmotion implements Action {
 readonly type = SELECT_EMOTION;
 constructor(public bale: EmotionBit) {}
 }
 
export const READ_EMOTION = "[Read action] Read Emotion";
 export class ReadEmotion implements Action {
 readonly type = READ_EMOTION;
 constructor(public bale: EmotionBit) {}
 }
 
export const WRITE_EMOTION = "[Write action] Write Emotion";
 export class WriteEmotion implements Action {
 readonly type = WRITE_EMOTION;
 constructor(public bale: EmotionBit) {}
 }
 
export const REMOVE_EMOTION = "[Remove action] Remove Emotion";
 export class RemoveEmotion implements Action {
 readonly type = REMOVE_EMOTION;
 constructor(public bale: EmotionBit) {}
 }
 
export const DELETE_EMOTION = "[Delete action] Delete Emotion";
 export class DeleteEmotion implements Action {
 readonly type = DELETE_EMOTION;
 constructor(public bale: EmotionBit) {}
 }
 
export const CREATE_EMOTION = "[Create action] Create Emotion";
 export class CreateEmotion implements Action {
 readonly type = CREATE_EMOTION;
 constructor(public bale: EmotionBit) {}
 }
 
export type Actions = | InitEmotion | UpdateEmotion 
| SelectEmotion
| ReadEmotion
| WriteEmotion
| RemoveEmotion
| DeleteEmotion
| CreateEmotion