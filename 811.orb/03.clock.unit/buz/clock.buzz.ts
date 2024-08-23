import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActClk from "../clock.action";

var bit, val, idx, dex, lst, dat;

export const initClock = (cpy: ClockModel, bal: ClockBit, ste: State) => {
  debugger
  return cpy;
};

export const updateClock = async (cpy: ClockModel, bal: ClockBit, ste: State) => {

  var now: TicBit = bal.dat

  bit = await ste.hunt(ActClk.READ_CLOCK, { idx: bal.idx })
  var ticDat: TicBit = bit.clkBit.dat
  var dt = ticDat.bit;

  if (now.yrs == null) now.yrs = 0
  if (now.mth == null) now.mth = 0
  if (now.day == null) now.day = 0
  if (now.hrs == null) now.hrs = 0
  
  if (now.min == null) now.min = 0
  if (now.sec == null) now.sec = 0
  if (now.wek == null) now.wek = 0
  if (now.qtr == null) now.qtr = 0;

  var addition = {
    years: now.yrs,
    months: now.mth,
    days: now.day,
    hours: now.hrs,
    minutes: now.min,
    seconds: now.sec,
    weeks: now.wek,
    quarters: now.qtr
  }

  dt = dt.plus(addition);

  ticDat.src = dt.toISO()
  ticDat.qtr = dt.quarter;
  ticDat.yrs = dt.year;
  ticDat.mth = dt.month;
  ticDat.wek = dt.weekNumber;
  ticDat.day = dt.day;
  ticDat.sec = dt.second;
  ticDat.min = dt.minute;
  ticDat.hrs = dt.hour;

  ticDat.frm = dt.toLocaleString(DateTime.DATETIME_HUGE_WITH_SECONDS)

  ticDat.now = dt.valueOf();
  ticDat.bit = dt;

  bal.slv({ clkBit: { idx: "update-clock", dat: ticDat } });

  //if (dat != null) {

  //}


  //if (bal.clk != null) {

  //  var moment = require('moment'); // require

  //  var now = moment.unix(dat.now + 10000);

  //var date = DateTime.local(dat.yrs, dat.mth, dat.day, dat.hrs, dat.min, dat.sec);
  //var now = date.toUnixInteger()

  //  if (bal.clk.sec == null) bal.clk.sec = 0
  //  if (bal.clk.min == null) bal.clk.min = 0
  //  if (bal.clk.hrs == null) bal.clk.hrs = 0
  //  if (bal.clk.day == null) bal.clk.day = 0
  //  if (bal.clk.wek == null) bal.clk.wek = 0
  //  if (bal.clk.mth == null) bal.clk.mth = 0
  //  if (bal.clk.yrs == null) bal.clk.yrs = 0

  //  var now = moment(dat.now); 
  //  now.add(bal.clk.sec, 's');
  //  now.add(11, 'm');
  //  now.add(bal.clk.hrs, 'h');
  //  now.add(bal.clk.day, 'd');
  //  now.add(bal.clk.wek, 'w');
  //  now.add(bal.clk.mth, 'M');
  //  now.add(bal.clk.yrs, 'y');

  //  dat.src = now.format("dddd, MMMM Do YYYY, h:mm:ss a");
  //  dat.now = now.unix();


  //  dat.hrs = now.hour()
  //  dat.sec = now.second()
  //  dat.min = now.minute()
  //  dat.day = now.day()
  //  dat.wek = now.weeks()
  //  dat.mth = now.month()
  //  dat.yrs = now.year()

  // dat

  //}
  //else {

  // }




  return cpy;
};


export const readClock = async (cpy: ClockModel, bal: ClockBit, ste: State) => {

  var slv = bal.slv;
  if (bal.idx == null) bal.idx = "hex00";
  bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, src: bal.src, bit: ActClk.CREATE_CLOCK });
  if (slv != null) slv({ clkBit: { idx: "read-clock", dat: bit.clcBit.dat } });

  return cpy;
};

export const writeClock = async (cpy: ClockModel, bal: ClockBit, ste: State) => {

  if (bal.dat != null) {
    bit = await ste.hunt(ActClk.UPDATE_CLOCK, { idx: bal.idx, dat: bal.dat });
    bal.dat = bit.clkBit.dat

    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActClk.CREATE_CLOCK });
    var data = bit.clcBit.dat

    if (bal.slv != null) bal.slv({ clkBit: { idx: "write-clock", dat: data } });
    return cpy;
  }


  bal.dat = {}
  if (bal.dat.dat == null) bal.dat.dat = {}
  if (bal.clk != null) bal.dat.clk = bal.clk;
  bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActClk.CREATE_CLOCK });
  var data = bit.clcBit.dat
  if (bal.slv != null) bal.slv({ clkBit: { idx: "write-clock", dat: data } });
  return cpy;
};

export const removeClock = async (cpy: ClockModel, bal: ClockBit, ste: State) => {

  bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActClk.DELETE_CLOCK })
  if (bal.slv != null) bal.slv({ clkBit: { idx: "remove-clock", dat: bit.clcBit } });

  return cpy;
};

export const createClock = async (cpy: ClockModel, bal: ClockBit, ste: State) => {

  if (bal.dat.clk == null) {

    var clkBit: TicBit = { idx: bal.idx }
    clkBit.day = 3;
    clkBit.hrs = 3;
    clkBit.min = 3;
    clkBit.mth = 3;
    clkBit.sec = 3;
    clkBit.yrs = 3033;

    bal.dat.clk = clkBit
  }

  var clk = bal.dat.clk;

  var dateObject = {
    day: null,
    year: null,
    hour: null,
    month: null,
    minute: null,
    second: null,
  }

  if (clk.day != null) dateObject.day = clk.day;
  if (clk.yrs != null) dateObject.year = clk.yrs;
  if (clk.hrs != null) dateObject.hour = clk.hrs;
  if (clk.mth != null) dateObject.month = clk.mth;
  if (clk.min != null) dateObject.minute = clk.min;
  if (clk.sec != null) dateObject.second = clk.sec;

  var dt = DateTime.fromObject(dateObject)

  var dat: TicBit = { idx: bal.idx, src: null };
  dat.bit = dt;

  dat.src = dt.toISO()
  dat.qtr = dt.quarter;
  dat.yrs = dt.year;
  dat.mth = dt.month;
  dat.wek = dt.weekNumber;
  dat.day = dt.day;
  dat.sec = dt.second;
  dat.min = dt.minute;

  dat.frm = dt.toLocaleString(DateTime.DATETIME_HUGE_WITH_SECONDS)

  dat.now = dt.valueOf();
  dat.val = 0;
  dat.pst = 0;


  //for (var key in bal.dat) {
  //  if (key == 'dat') continue
  // dat[key] = bal.dat[key]
  // }

  //if (dat.idx == null) dat.idx = bal.idx;
  //if (dat.src == null) dat.src = "clk-bit";
  //if (dat.qtr == null) dat.qtr = 0;

  //if (dat.yrs == null) dat.yrs = 3210;
  //if (dat.mth == null) dat.mth = 3;
  //if (dat.wek == null) dat.wek = 3;
  //if (dat.day == null) dat.day = 3;
  //if (dat.hrs == null) dat.hrs = 3;
  //if (dat.min == null) dat.min = 3;
  //if (dat.sec == null) dat.sec = 3;

  //var moment = require('moment'); // require
  //var now = moment();

  //now.second(dat.sec)
  //now.minute(dat.min)
  //now.hour(dat.hrs)
  //now.day(dat.day)
  //now.month(dat.mth)
  //now.year(dat.yrs)

  //dat.src = now.format("dddd, MMMM Do YYYY, h:mm:ss a");
  //dat.now = now.unix();

  //var date = DateTime.local(dat.yrs, dat.mth, dat.day, dat.hrs, dat.min, dat.sec);

  //dat.yrs = date.year;
  //dat.mth = date.month;
  //dat.day = date.day;
  //dat.hrs = date.hour;
  //dat.min = date.minute;
  //dat.sec = date.second;
  //dat.cnt = Math.floor(date.diff(DateTime.local(dat.yrs, 1, 1), "days").days);
  //dat.wek = date.weekNumber;
  //dat.qtr = date.quarter;

  //dat.src = date.toFormat("MM-dd-yyyy, hh:mm:ss a");

  bal.slv({ clkBit: { idx: "create-clock", dat: dat } });
  return cpy;
};

export const deleteClock = async (cpy: ClockModel, bal: ClockBit, ste: State) => {
  debugger
  return cpy;
};


//adds a tic bit of material to clock and return new tic bit of result
export const pushClock = async (cpy: ClockModel, bal: ClockBit, ste: State) => {

  bit = await ste.hunt(ActClk.READ_CLOCK, { idx: bal.idx })
  var dat: TicBit = bit.clkBit.dat
  var date = DateTime.local(dat.yrs, dat.mth, dat.day, dat.hrs, dat.min, dat.sec);

  var upd = bal.dat


  return cpy;
};


export const blockClock = async (cpy: ClockModel, bal: ClockBit, ste: State) => {

  var url = 'https://cardano-mainnet.blockfrost.io/api/v0/blocks/latest/';

  if (bal.idx == null) {
    return bal.slv({ clkBit: { idx: "block-clock-error", src: 'no-blockfrost-idx' } });
  }

  var blockfrost = bal.idx;

  fetch(url, {
    method: 'GET',
    headers: { 'project_id': blockfrost },
  })
    .then(response => response.json())
    .then(async response => {

      const rsp: BlockBit = response;
      var diff;

      if (rsp.epoch_slot == cpy.slot) {
        cpy.tick = false
      }
      else {
        cpy.tick = true

        var dt1 = DateTime.fromSeconds(cpy.slotTime)
        var dt2 = DateTime.fromSeconds(rsp.time)
        diff = dt1.diff(dt2, [ "seconds"])

        //console.log(diff.toObject())
        //we need to calculate a time difference 
        //and we will call it score

        cpy.slot = rsp.epoch_slot
        cpy.slotTime = rsp.time

        var obj = diff.toObject();
        
        for ( var key in obj ){
          obj[key] *= -1
        }

        cpy.score = obj.seconds

      }

      val = cpy.tick;
      dex = cpy.slot

      rsp.score = cpy.score

      dat = JSON.stringify(rsp)

      //can we convert some some time
      //going to give it the time of the response
      //covert to label
      //bit = await ste.hunt(ActClk.WRITE_CLOCK, { idx: bal.idx })
      //var clk:TicBit = bit.clkBit.dat;
      //debugger

      return bal.slv({ clkBit: { idx: "block-clock", val, dex, dat } });

    })
    .catch(err => {

      val = cpy.tick
      dex = cpy.slot

      bal.slv({ clkBit: { idx: "block-clock", val, dex } });
      console.error(err);

    })

  return cpy;
};


export const listClock = async (cpy: ClockModel, bal: ClockBit, ste: State) => {

  dat = null

  bit = await ste.hunt(ActCol.FETCH_COLLECT, { val: 0, bit: ActClk.CREATE_CLOCK })

  if (bit.clcBit.dat == null) lst = []
  else dat = bit.clcBit.dat;

  if (dat != null) {
    dat.bitList.forEach((a) => {
      lst = []
      lst.push((a.idx))
    })
  }


  if (bal.slv != null) bal.slv({ clkBit: { idx: 'list-clock', lst } });


  return cpy;
};


export const testClock = (cpy: ClockModel, bal: ClockBit, ste: State) => {
  debugger
  return cpy;
};



import { ClockModel } from "../clock.model";
import ClockBit from "../fce/clock.bit";
import State from "../../99.core/state";
import TicBit from "../fce/tic.bit";
import { DateTime } from "luxon";
import { BlockBit } from "../fce/blockbit";

//pnpm i --save-dev @types/luxon