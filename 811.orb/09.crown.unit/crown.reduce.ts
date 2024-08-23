import * as clone from "clone-deep";
import * as Act from "./crown.action";
import { CrownModel } from "./crown.model";
import * as Buzz from "./crown.buzzer";
import State from "../99.core/state";

export function reducer(model: CrownModel = new CrownModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_CROWN:
 return Buzz.updateCrown(clone(model), act.bale, state);

 case Act.INIT_CROWN:
 return Buzz.initCrown(clone(model), act.bale, state);

case Act.READ_CROWN:
 return Buzz.readCrown(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
