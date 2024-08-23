import * as ActMnu from "../menu.action";
import * as ActClk from "../../03.clock.unit/clock.action";
import * as ActAmb from "../../11.ambit.unit/ambit.action";

import * as ActPut from "../../act/input.action";

import * as ActTrm from "../../act/terminal.action";
import * as ActChc from "../../act/choice.action";

import * as ActGrd from "../../act/grid.action";
import * as ActCvs from "../../act/canvas.action";
import * as ActCns from "../../act/console.action";

import * as ActVrt from "../../act/vurt.action"

var bit, lst, dex, src, dat

var simIDX;

var print = async (ste, bit) => {

    dat = bit.ambBit;
    if (dat == null) return
    var itm = JSON.stringify(dat)
    lst = itm.split(',')
    lst.forEach((a) => ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: a }))
    ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: '------------' })
    //bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'open earth....' })

}

export const ambitMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

    if (bal == null) bal = { idx: null }

    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" })
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "Earth PIVOT V0" })
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" })

    lst = [ActAmb.WRITE_AMBIT, ActAmb.READ_AMBIT]

    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
    bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })

    src = bit.chcBit.src;

    switch (src) {

        case ActAmb.WRITE_AMBIT:

            if (simIDX == null) {
                bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 3, ySpan: 6 })
                bit = await ste.bus(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'earth input', net: bit.grdBit.dat })
                simIDX = '#' + bit.putBit.src;
                src = simIDX
            } else { src = null }
            

            bit = await ste.hunt(ActAmb.WRITE_AMBIT, { idx: simIDX, src })
            
            print(ste, bit)
            break;

        case ActAmb.READ_AMBIT:

            bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 3, ySpan: 6 })
            bit = await ste.bus(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'earth input', net: bit.grdBit.dat })
            simIDX = '#' + bit.putBit.src;

            bit = await ste.hunt(ActAmb.READ_AMBIT, { idx: simIDX })
            print(ste, bit)
            break;

        default:
            bit = await ste.bus(ActTrm.CLOSE_TERMINAL, {})
            break;
    }


    bit = await ste.hunt(ActMnu.AMBIT_MENU, { })

    return cpy;

};

var patch = (ste, type, bale) => ste.dispatch({ type, bale });

import { MenuModel } from "../menu.model";
import MenuBit from "../fce/menu.bit";
import State from "../../99.core/state";

import * as Color from '../../val/console-color';
import * as Align from '../../val/align'