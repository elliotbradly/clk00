"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRisk = exports.writeRisk = exports.readRisk = exports.loadRisk = exports.listRisk = exports.openRisk = exports.articulateRisk = exports.fashionRisk = exports.updateRisk = exports.verifyRisk = exports.initRisk = void 0;
const ActClr = require("../../act/color.action");
const ActSpk = require("../../act/spectrum.action");
const ActDsk = require("../../act/disk.action");
const ActRsk = require("../risk.action");
var bit, lst, src, idx;
const initRisk = (cpy, bal, ste) => {
    //here is where we are
    return cpy;
};
exports.initRisk = initRisk;
const verifyRisk = async (cpy, bal, ste) => {
    bit = await ste.bus(ActClr.DEGREE_COLOR, { idx: 'chromatic-marine', src: 'chromatic-straw', val: 1 });
    var spectrum = bit.clrBit;
    src = spectrum.src;
    var alpha = src.split('-')[0][0];
    var beta = src.split('-')[1][0];
    alpha = alpha.toUpperCase();
    beta = beta.toUpperCase();
    idx = alpha + beta;
    //you want to pull in the pool
    //up through the pool until you hit the spectrum
    debugger;
    if (bal.slv != null)
        bal.slv({ rskBit: { idx: "verify-risk", dat: bit } });
    return cpy;
};
exports.verifyRisk = verifyRisk;
const updateRisk = (cpy, bal, ste) => {
    return cpy;
};
exports.updateRisk = updateRisk;
const fashionRisk = async (cpy, bal, ste) => {
    bit = await ste.bus(ActSpk.MIN_SPECTRUM, {});
    lst = bit.spkBit.lst;
    lst.forEach((a, b) => {
        lst[b] = lst[b].toUpperCase() + ':';
    });
    if (bal.src == null)
        bal.src = 'risk';
    var link = cpy.riskDir + bal.src + '.txt';
    bit = await ste.bus(ActDsk.WRITE_DISK, { src: link, dat: lst.join('\n') });
    return cpy;
};
exports.fashionRisk = fashionRisk;
5;
const articulateRisk = async (cpy, bal, ste) => {
    bit = await ste.bus(ActClr.DEGREE_COLOR, { idx: 'chromatic-marine', src: 'chromatic-straw', val: 1 });
    if (bal.slv != null)
        bal.slv({ rskBit: { idx: "articulate-risk" } });
    return cpy;
};
exports.articulateRisk = articulateRisk;
const openRisk = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActRsk.CREATE_RISK, { idx: bal.idx, val: 1 });
    var pool = bit.rskBit.dat;
    var dat = {};
    bal.lst.forEach((a) => {
        if (a.includes(':') == false)
            return;
        var sub = a.split(':')[0];
        var dom = a.split(':')[1];
        sub = sub.toLowerCase();
        dom = S(dom).slugify().s;
        dom = S(dom).replaceAll('-', ' ').s;
        if (sub.length < 2)
            return;
        if (dom.length < 2)
            return;
        dat[sub] = dom;
    });
    pool.dat = dat;
    bit = await ste.hunt(ActRsk.WRITE_RISK, { idx: pool.idx, dat: pool });
    bit = await ste.hunt(ActRsk.READ_RISK, { idx: pool.idx });
    return cpy;
};
exports.openRisk = openRisk;
const listRisk = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.listRisk = listRisk;
const loadRisk = (cpy, bal, ste) => {
    bal.lst.forEach(async (a) => {
        var idx = a.src;
        var s = idx.split('/');
        var itm = s.pop();
        idx = itm.split('.')[0];
        var lst = a.dat.split('\n');
    });
    if (bal.slv != null)
        bal.slv({ rskBit: { idx: "load-risk", src: bal.src } });
    return cpy;
};
exports.loadRisk = loadRisk;
const readRisk = async (cpy, bal, ste) => {
    if (bal.idx == null)
        bal.idx = 'map-' + String(cpy.riskBitList.length).padStart(6, "0");
    if (bal.src == null)
        bal.src = RISK.POOL;
    switch (bal.src) {
        case RISK.POOL:
            if (cpy.poolBits[bal.idx] == null) {
                bit = await ste.hunt(ActRsk.WRITE_RISK, { idx: bal.idx, src: bal.src });
                bit = bit.rskBit.dat;
            }
            if (bal.val != null)
                bit = cpy.poolBitList[bal.val];
            else if (bal.val != null)
                bit = cpy.poolBitList[cpy.poolBits[bal.idx]];
            break;
    }
    if (bal.slv != null)
        bal.slv({ rskBit: { idx: "read-risk", dat: bit } });
    return cpy;
};
exports.readRisk = readRisk;
const writeRisk = async (cpy, bal, ste) => {
    if (bal.dat == null) {
        bit = await ste.hunt(ActRsk.CREATE_RISK, { idx: bal.idx, src: bal.src });
        bal.dat = bit.rskBit.dat;
    }
    if ((bal.dat == null) && (bal.slv != null))
        bal.slv({ rskBit: { idx: "write-risk-err", src: 'no-dat' } });
    switch (bal.dat.src) {
        case RISK.POOL:
            var pool = bal.dat;
            if (cpy.poolBits[pool.idx] == null) {
                bal.dat.dex = cpy.poolBitList.length;
                bal.dat.loc = './data/' + bal.dat.src + '/' + bal.dat.idx + '.json';
                cpy.poolBits[bal.dat.idx] = bal.dat.dex;
                cpy.poolBitList.push(bal.dat);
                cpy.riskBitList.push(bal.dat);
                debugger;
            }
            else {
                cpy.poolBitList[bal.dat.dex] = bal.dat;
            }
            bit = cpy.poolBitList[bal.dat.dex];
            break;
    }
    await ste.bus(ActDsk.WRITE_DISK, { val: 1, src: bit.loc, dat: bit });
    if (bal.slv != null)
        bal.slv({ rskBit: { idx: "write-risk", dat: bit } });
    return cpy;
};
exports.writeRisk = writeRisk;
const createRisk = async (cpy, bal, ste) => {
    if (bal.idx == null)
        bal.idx = 'risk-' + String(cpy.riskBitList.length).padStart(6, "0");
    if (bal.src == null)
        bal.src = RISK.POOL;
    switch (bal.src) {
        case RISK.POOL:
            var pool = { idx: bal.idx, lst: bal.lst };
            if (pool.lst != null)
                bit = await ste.hunt(ActRsk.OPEN_RISK, { dat: pool });
            bal.dat = pool;
            break;
        default:
            break;
    }
    if (bal.slv != null)
        bal.slv({ rskBit: { idx: "create-risk", src: bal.src, dat: bal.dat } });
    return cpy;
};
exports.createRisk = createRisk;
const RISK = require("../../val/risk");
const S = require("string");
//# sourceMappingURL=risk.buzz.js.map