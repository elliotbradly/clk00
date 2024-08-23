import * as clone from "clone-deep";
import * as Act from "./axis.action";
import { AxisModel } from "./axis.model";
import * as Buzz from "./axis.buzzer";
import State from "../99.core/state";

export function reducer(model: AxisModel = new AxisModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_AXIS:
 return Buzz.updateAxis(clone(model), act.bale, state);

 case Act.INIT_AXIS:
 return Buzz.initAxis(clone(model), act.bale, state);

case Act.READ_AXIS:
 return Buzz.readAxis(clone(model), act.bale, state);
 
case Act.WRITE_AXIS:
 return Buzz.writeAxis(clone(model), act.bale, state);
 
case Act.REMOVE_AXIS:
 return Buzz.removeAxis(clone(model), act.bale, state);
 
case Act.DELETE_AXIS:
 return Buzz.deleteAxis(clone(model), act.bale, state);
 
case Act.CREATE_AXIS:
 return Buzz.createAxis(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
