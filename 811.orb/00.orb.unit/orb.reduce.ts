import * as clone from "clone-deep";
import * as Act from "./orb.action";
import { OrbModel } from "./orb.model";
import * as Buzz from "./orb.buzzer";
import State from "../99.core/state";

export function reducer(model: OrbModel = new OrbModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_ORB:
 return Buzz.updateOrb(clone(model), act.bale, state);

 case Act.INIT_ORB:
 return Buzz.initOrb(clone(model), act.bale, state);

case Act.OPEN_ORB:
 return Buzz.openOrb(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
