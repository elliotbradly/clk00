import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActAmb from "../../11.ambit.unit/ambit.action";

import * as ActOrb from "../../00.orb.unit/orb.action";
import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActPlt from "../../08.plot.unit/plot.action";
import * as ActFte from "../../02.fate.unit/fate.action";
import * as ActClk from "../../03.clock.unit/clock.action";

import * as ActPvt from "../../act/pivot.action";
import * as ActDsk from "../../act/disk.action";

var bit, val, idx, dex, lst, dat;


export const initOrb = async (cpy: OrbModel, bal:OrbBit, ste: State) => {
 
    if (bal.dat != null) bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActOrb, ActAmb, ActClk], dat: bal.dat, src: bal.src })

    //bit = await ste.hunt(ActClr.INIT_COLOR, { lst: bal.lst, bit: bal.bit, dat: bal.dat })
    if (bal.val == 1) {

        setTimeout(
            () => {
                patch(ste, ActMnu.INIT_MENU, bal)
            }, 33)

    }

    if (bal.slv != null) bal.slv({ intBit: { idx: "init-orb" } });

 return cpy;
};

export const updateOrb = async (cpy: OrbModel, bal:OrbBit, ste: State) => {


    var lstMsg = [];

    bit = await ste.bus(ActPvt.SHIP_PIVOT, { src: '811.orb' })
    lstMsg = lstMsg.concat(bit.pvtBit.lst)

    idx = "../../333.depth/811.orb/";
    bit = await ste.bus(ActDsk.COPY_DISK, { src: './work/811.orb/', idx  });
    lstMsg = lstMsg.concat(bit.pvtBit)

    idx = "../../333.depth/812.space/";
    bit = await ste.bus(ActDsk.COPY_DISK, { src: './812.space/', idx  });
    lstMsg = lstMsg.concat(bit.pvtBit)

    idx = "../../333.depth/814.being/";
    bit = await ste.bus(ActDsk.COPY_DISK, { src: './814.being/', idx  });
    lstMsg = lstMsg.concat(bit.pvtBit)

    bal.slv({ orbBit: { idx: "update-orb", lst:lstMsg } });
    return cpy;

};

export const openOrb = (cpy: OrbModel, bal:OrbBit, ste: State) => {


    // bal.lst of icon data 
//write beeings


    debugger
    return cpy;
    };


var patch = (ste, type, bale) => ste.dispatch({ type, bale });





import { OrbModel } from "../orb.model";
import OrbBit from "../fce/orb.bit";
import State from "../../99.core/state";