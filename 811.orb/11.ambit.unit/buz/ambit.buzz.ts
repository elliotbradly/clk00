import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActAmb from "../../11.ambit.unit/ambit.action";
import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActPlt from "../../08.plot.unit/plot.action";
import * as ActFte from "../../02.fate.unit/fate.action";
import * as ActClk from "../../03.clock.unit/clock.action";

import * as ActPvt from "../../act/pivot.action";

var bit, val, idx, dex, lst, dat;

export const initAmbit = (cpy: AmbitModel, bal: AmbitBit, ste: State) => {
    debugger
    return cpy;
};

export const updateAmbit = (cpy: AmbitModel, bal: AmbitBit, ste: State) => {

      //we where going to wait for cypto king

    //bit = await ste.bus(ActTme.UPDATE_TIME, { idx: 'ert00', sec: 7 })
    //console.log(JSON.stringify(bit))    
    //bit = await ste.bus(ActPvt.UPDATE_PIVOT, { src: '011.earth' })

    if (bal.slv != null) bal.slv({ ertBit: { idx: "update-earth" } });

    return cpy;
};


export const readAmbit = async (cpy: AmbitModel, bal: AmbitBit, ste: State) => {

    var slv = bal.slv;
    if (bal.idx == null) bal.idx = 'ert00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActAmb.CREATE_AMBIT })
    if (slv != null) slv({ ambBit: { idx: "read-ambit", dat: bit.clcBit.dat } });
    return cpy;
};
export const writeAmbit = async (cpy: AmbitModel, bal: AmbitBit, ste: State) => {

    var dat;

    if (bal.src == null) {
        bit = await ste.hunt(ActAmb.UPDATE_AMBIT, bal)
    } else {
        dat = bal.dat
    }

    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, dat, bit: ActAmb.CREATE_AMBIT })

    //var clkBit = bit.clcBit.dat.clkBit

    if (bal.slv != null) bal.slv({ ambBit: { idx: "write-ambit", dat: bit.clcBit.dat } });


    return cpy;
};
export const removeAmbit = (cpy: AmbitModel, bal: AmbitBit, ste: State) => {
    debugger
    return cpy;
};
export const deleteAmbit = (cpy: AmbitModel, bal: AmbitBit, ste: State) => {
    debugger
    return cpy;
};
export const createAmbit = async (cpy: AmbitModel, bal: AmbitBit, ste: State) => {

    if (bal.idx == null) bal.idx = 'amb00';
    //if (bal.src == null) bal.src = TIME.CLOCK;

    //bit = await ste.hunt(ActFte.APPLE_FATE, {})
    idx = bal.idx

    bit = await ste.hunt(ActClk.WRITE_CLOCK, { idx: idx, dat: { yrs: 1944, mth: 6, hrs: 15, min: 5, sec: 6, day: 21 } })
    var clkBit = bit.clkBit.dat;

    bal.bit = clkBit

    //bit = await ste.hunt(ActPlt.OPEN_PLOT, {})
    // we use the plot bit to create the being bit
    //bit = await ste.hunt(ActBei.OPEN_BEING, {})

    var sim: HeapBit = bal.dat
    if (sim == null) sim = { idx }
    if (sim.idx == null) sim.idx = bal.idx;
    if (sim.src == null) sim.src = "sim-bit";
    if (sim.lst == null) sim.lst = [];
    if (sim.now == null) sim.now = 0;
    if (sim.cde == null) sim.cde = 'time-code';

    sim.bit = bit

    //timecode should go here
    //sim.clkBit = clkBit;
    //sim.lvl = COSMOS.BLESSED.idx;
    //bit = await ste.hunt(ActClr.FETCH_COLOR, { idx: sim.lvl })
    //sim.pow = bit.clrBit.dat
    //bit = await ste.hunt(ActClr.FETCH_COLOR, { idx: sim.lvl })
    //sim.fte = bit.clrBit.dat

    if (bal.slv != null) bal.slv({ ertBit: { idx: "create-earth", dat: sim } });
    return cpy;
};
import { AmbitModel } from "../ambit.model";
import AmbitBit from "../fce/ambit.bit";
import State from "../../99.core/state";
import HeapBit from "../fce/heap.bit";
