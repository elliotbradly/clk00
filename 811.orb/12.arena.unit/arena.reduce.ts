import * as clone from "clone-deep";
import * as Act from "./arena.action";
import { ArenaModel } from "./arena.model";
import * as Buzz from "./arena.buzzer";
import State from "../99.core/state";

export function reducer(model: ArenaModel = new ArenaModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_ARENA:
 return Buzz.updateArena(clone(model), act.bale, state);

 case Act.INIT_ARENA:
 return Buzz.initArena(clone(model), act.bale, state);

case Act.READ_ARENA:
 return Buzz.readArena(clone(model), act.bale, state);
 
case Act.WRITE_ARENA:
 return Buzz.writeArena(clone(model), act.bale, state);
 
case Act.REMOVE_ARENA:
 return Buzz.removeArena(clone(model), act.bale, state);
 
case Act.DELETE_ARENA:
 return Buzz.deleteArena(clone(model), act.bale, state);
 
case Act.CREATE_ARENA:
 return Buzz.createArena(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
