import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActArn from "../../12.arena.unit/arena.action";

import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActPlt from "../../08.plot.unit/plot.action";
import * as ActFte from "../../02.fate.unit/fate.action";
import * as ActClk from "../../03.clock.unit/clock.action";

import * as ActPvt from "../../act/pivot.action";

var bit, val, idx, dex, lst, dat;

export const initArena = (cpy: ArenaModel, bal: ArenaBit, ste: State) => {
    debugger
    return cpy;
};

export const updateArena = async (cpy: ArenaModel, bal: ArenaBit, ste: State) => {

      //we where going to wait for cypto king

    
    
    bit = await ste.hunt( ActClk.BLOCK_CLOCK, { idx: bal.idx, sec: 7 })

    
    
    
    //bit = await ste.hunt( ActClk.UPDATE_CLOCK, { idx: bal.idx, sec: 7 })
    //debugger
    //console.log(JSON.stringify(bit))    
    //bit = await ste.bus(ActPvt.UPDATE_PIVOT, { src: '011.earth' })

    if (bal.slv != null) bal.slv({ arnBit: { idx: "update-arena", dat:bit } });

    return cpy;
};

export const readArena = async (cpy: ArenaModel, bal: ArenaBit, ste: State) => {

    var slv = bal.slv;
    if (bal.idx == null) bal.idx = 'ert00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActArn.CREATE_ARENA })
    if (slv != null) slv({ ambBit: { idx: "read-arena", dat: bit.clcBit.dat } });

    return cpy;
};

export const writeArena = async (cpy: ArenaModel, bal: ArenaBit, ste: State) => {

    var dat;

    if (bal.src == null) {
        bit = await ste.hunt(ActArn.UPDATE_ARENA, bal)
    } else {
        dat = bal.dat
    }

    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, dat, bit: ActArn.CREATE_ARENA })

    //var clkBit = bit.clcBit.dat.clkBit

    if (bal.slv != null) bal.slv({ ambBit: { idx: "write-arena", dat: bit.clcBit.dat } });

    return cpy;
};

export const removeArena = (cpy: ArenaModel, bal: ArenaBit, ste: State) => {
    debugger
    return cpy;
};

export const deleteArena = (cpy: ArenaModel, bal: ArenaBit, ste: State) => {
    debugger
    return cpy;
};

export const createArena = async (cpy: ArenaModel, bal: ArenaBit, ste: State) => {

    if (bal.idx == null) bal.idx = 'amb00';
    //if (bal.src == null) bal.src = TIME.CLOCK;

    //bit = await ste.hunt(ActFte.APPLE_FATE, {})
    idx = bal.idx

    var clk = { yrs: 1944, mth: 6, hrs: 15, min: 5, sec: 6, day: 21 }

    if (( bal.dat != null) && ( bal.dat.clk != null )) clk = bal.dat.clk

    bit = await ste.hunt(ActClk.WRITE_CLOCK, { idx: idx, dat: { clk } })
    var clkBit = bit.clkBit.dat;


    

    //bit = await ste.hunt(ActPlt.OPEN_PLOT, {})
    // we use the plot bit to create the being bit
    //bit = await ste.hunt(ActBei.OPEN_BEING, {})

    var sim: RingBit = bal.dat
    if (sim == null) sim = { idx }
    if (sim.idx == null) sim.idx = bal.idx;
    if (sim.src == null) sim.src = "arena-bit";
    //if (sim.lst == null) sim.lst = [];
    //if (sim.now == null) sim.now = 0;
    //if (sim.cde == null) sim.cde = 'time-code';

    sim.bit =  clkBit

    //timecode should go here
    //sim.clkBit = clkBit;
    //sim.lvl = COSMOS.BLESSED.idx;
    //bit = await ste.hunt(ActClr.FETCH_COLOR, { idx: sim.lvl })
    //sim.pow = bit.clrBit.dat
    //bit = await ste.hunt(ActClr.FETCH_COLOR, { idx: sim.lvl })
    //sim.fte = bit.clrBit.dat

    if (bal.slv != null) bal.slv({ ertBit: { idx: "create-arena", dat: sim } });


    return cpy;
};

import { ArenaModel } from "../arena.model";
import ArenaBit from "../fce/arena.bit";
import State from "../../99.core/state";
import RingBit from "../fce/ring.bit";
