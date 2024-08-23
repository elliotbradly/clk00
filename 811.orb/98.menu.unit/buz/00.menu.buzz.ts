import * as ActMnu from "../menu.action";
import * as ActOrb from "../../00.orb.unit/orb.action";
import * as ActAmb from "../../11.ambit.unit/ambit.action";

import * as ActPut from "../../act/input.action";

import * as ActTrm from "../../act/terminal.action";
import * as ActChc from "../../act/choice.action";

import * as ActGrd from "../../act/grid.action";
import * as ActCvs from "../../act/canvas.action";
import * as ActCns from "../../act/console.action";

var bit, lst, dex, idx, dat, src;


export const initMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  if (bal == null) bal = { idx: null, lst: null }

  bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 3, y: 0, xSpan: 1, ySpan: 12 })
  bit = await ste.bus(ActCvs.WRITE_CANVAS, { idx: 'cvs1', dat: { clr: Color.CYAN, net: bit.grdBit.dat }, })

  bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 4, y: 0, xSpan: 6, ySpan: 12 })
  bit = await ste.bus(ActCns.WRITE_CONSOLE, { idx: 'cns00', src: "", dat: { net: bit.grdBit.dat, src: "alligaor0" } })

  bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" })
  bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "Orb PIVOT V0" })
  bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" })

  updateMenu(cpy, bal, ste);

  return cpy;
};



export const updateMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  lst = [ ActOrb.OPEN_ORB,  ActMnu.CLOCK_MENU, ActMnu.PLAY_MENU,  ActMnu.AXIS_MENU, ActMnu.ARENA_MENU, ActMnu.AMBIT_MENU, ActOrb.UPDATE_ORB]

  bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
  bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })

  src = bit.chcBit.src;

  switch (src) {

    case ActMnu.PLAY_MENU:
      bit = await ste.hunt(ActMnu.PLAY_MENU, {})
      break;

    case ActMnu.ARENA_MENU:
      bit = await ste.hunt(ActMnu.ARENA_MENU, {})
      break;

      case ActMnu.AXIS_MENU:
        bit = await ste.hunt( ActMnu.AXIS_MENU, {})
        break;

    case ActMnu.CLOCK_MENU:
      bit = await ste.hunt(ActMnu.CLOCK_MENU, {})
      break;

    case ActMnu.AMBIT_MENU:
      bit = await ste.hunt(ActMnu.CLOCK_MENU, {})
      break;


      case ActOrb.OPEN_ORB:
      bit = await ste.hunt( ActOrb.OPEN_ORB, {})
      break;

    case ActOrb.UPDATE_ORB:
      await updateOrb(ste)
      break;

    default:
      bit = await ste.bus(ActTrm.CLOSE_TERMINAL, {})
      break;
  }

  bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src })

  updateMenu(cpy, bal, ste);

  return cpy;
};

export const testMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {
  return cpy;
};

export const closeMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {
  await ste.bus(ActTrm.CLOSE_TERMINAL, {})
  return cpy;
};

export const printMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {
  dat = bal;
  if (dat == null) return bal.slv({ mnuBit: { idx: "print-menu", dat } });

  var itm = JSON.stringify(dat);

  lst = itm.split(",");
  lst.forEach((a) => ste.bus(ActCns.UPDATE_CONSOLE, { idx: "cns00", src: a }));
  //ste.bus(ActCns.UPDATE_CONSOLE, { idx: "cns00", src: "------------" });

  bal.slv({ mnuBit: { idx: "print-menu", dat: itm } });
};


export const earthMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {


  return cpy;
};



var updateOrb = async (ste) => {

  bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'updating orb....' })

  var bitUp = await ste.hunt(ActOrb.UPDATE_ORB, {})
  bit = await ste.hunt(ActMnu.PRINT_MENU, bitUp)

}


var patch = (ste, type, bale) => ste.dispatch({ type, bale });


import { MenuModel } from "../menu.model";
import MenuBit from "../fce/menu.bit";
import State from "../../99.core/state";

import * as Grid from '../../val/grid';
import * as Align from '../../val/align'
import * as Color from '../../val/console-color';