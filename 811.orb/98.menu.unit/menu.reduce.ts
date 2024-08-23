import * as clone from "clone-deep";
import * as Act from "./menu.action";
import { MenuModel } from "./menu.model";
import * as Buzz from "./menu.buzzer";
import State from "../99.core/state";

export function reducer(model: MenuModel = new MenuModel(), act: Act.Actions, state?: State) {
  switch (act.type) {
    case Act.UPDATE_MENU:
      return Buzz.updateMenu(clone(model), act.bale, state);

    case Act.INIT_MENU:
      return Buzz.initMenu(clone(model), act.bale, state);

    case Act.TEST_MENU:
      return Buzz.testMenu(clone(model), act.bale, state);

    case Act.CLOSE_MENU:
      return Buzz.closeMenu(clone(model), act.bale, state);

    case Act.EARTH_MENU:
      return Buzz.earthMenu(clone(model), act.bale, state);


    case Act.CLOCK_MENU:
      return Buzz.clockMenu(clone(model), act.bale, state);

    case Act.AMBIT_MENU:
      return Buzz.ambitMenu(clone(model), act.bale, state);

    case Act.ARENA_MENU:
      return Buzz.arenaMenu(clone(model), act.bale, state);
      
      
    case Act.AXIS_MENU:
      return Buzz.axisMenu(clone(model), act.bale, state);

      
    case Act.EMOTION_MENU:
      return Buzz.emotionMenu(clone(model), act.bale, state);

    case Act.PRINT_MENU:
      return Buzz.printMenu(clone(model), act.bale, state);


    default:
      return model;
  }
}
