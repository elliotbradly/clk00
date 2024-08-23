import * as ActMnu from "../../98.menu.unit/menu.action";

import * as ActEmo from "../../01.emotion.unit/emotion.action";

import * as ActCns from "../../act/console.action";

import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActVrt from "../../act/vurt.action"
import * as ActDsk from "../../act/disk.action"
import * as ActPvt from "../../act/pivot.action";
import EmoBit from "../fce/emo.bit";

var bit, val, idx, dex, lst, dat, src;

export const initEmotion = async (cpy: EmotionModel, bal: EmotionBit, ste: State) => {

    bal.slv({ intBit: { idx: "init-emotion", dat: cpy.data } });
    return cpy;
};

export const createEmotion = async (cpy: EmotionModel, bal: EmotionBit, ste: State) => {

    var dat: EmoBit = { idx: bal.idx, src: bal.src }
    
    bit = await ste.bus(ActDsk.READ_DISK, { src: './data/emotion.txt' })
    var emotion = bit.dskBit.dat;

    bit = await ste.hunt(ActCol.HASH_COLLECT, { src: emotion })

    dat.dat = bit.clcBit.dat

    bal.slv({ palBit: { idx: "create-emotion", dat } });

    return cpy;
};

export const updateEmotion = async (cpy: EmotionModel, bal: EmotionBit, ste: State) => {
    return cpy;
};


export const selectEmotion = async (cpy: EmotionModel, bal: EmotionBit, ste: State) => {

    if (cpy.firstLoad == false) {
        bit = await ste.hunt(ActEmo.INIT_EMOTION, {})
    }

    lst = cpy.data['emotion']
    bit = await ste.hunt(ActCol.SELECT_COLLECT, { lst })

    idx = bit.clcBit.dat
    lst = cpy.data[idx]
    bit = await ste.hunt(ActCol.SELECT_COLLECT, { lst })

    src = bit.clcBit.dat
    lst = cpy.data[src]
    bit = await ste.hunt(ActCol.SELECT_COLLECT, { lst })

    dat = bit.clcBit.dat;

    var output = 'emotion: ' + idx + ' , ' + src + ' , ' + dat;

    var ncp = require('node-clipboardy');
    ncp.writeSync(output)

    bal.slv({ intBit: { idx: "select-emotion", src: output } });
    return cpy;
};


export const readEmotion = async (cpy: EmotionModel, bal: EmotionBit, ste: State) => {

    var slv = bal.slv;
    if (bal.idx == null) bal.idx = "hex00";
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, src: bal.src, bit: ActEmo.CREATE_EMOTION });
    if (slv != null) slv({ emoBit: { idx: "read-emotion", dat: bit.clcBit.dat } });

    return cpy;
};

export const writeEmotion = async (cpy: EmotionModel, bal: EmotionBit, ste: State) => {

    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActEmo.CREATE_EMOTION });
    var data = bit.clcBit.dat

    if (bal.slv != null) bal.slv({ emoBit: { idx: "write-emotion", dat: data } });

    return cpy;
};

export const removeEmotion = async (cpy: EmotionModel, bal: EmotionBit, ste: State) => {
    debugger
    return cpy;
};

export const deleteEmotion = async (cpy: EmotionModel, bal: EmotionBit, ste: State) => {
    debugger
    return cpy;
};



import { EmotionModel } from "../emotion.model";
import EmotionBit from "../fce/emotion.bit";
import State from "../../99.core/state";
