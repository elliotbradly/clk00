import * as clone from "clone-deep";
import * as Act from "./emotion.action";
import { EmotionModel } from "./emotion.model";
import * as Buzz from "./emotion.buzzer";
import State from "../99.core/state";

export function reducer(model: EmotionModel = new EmotionModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_EMOTION:
 return Buzz.updateEmotion(clone(model), act.bale, state);

 case Act.INIT_EMOTION:
 return Buzz.initEmotion(clone(model), act.bale, state);

case Act.SELECT_EMOTION:
 return Buzz.selectEmotion(clone(model), act.bale, state);
 
case Act.READ_EMOTION:
 return Buzz.readEmotion(clone(model), act.bale, state);
 
case Act.WRITE_EMOTION:
 return Buzz.writeEmotion(clone(model), act.bale, state);
 
case Act.REMOVE_EMOTION:
 return Buzz.removeEmotion(clone(model), act.bale, state);
 
case Act.DELETE_EMOTION:
 return Buzz.deleteEmotion(clone(model), act.bale, state);
 
case Act.CREATE_EMOTION:
 return Buzz.createEmotion(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
