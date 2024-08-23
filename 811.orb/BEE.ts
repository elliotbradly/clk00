import Model from "./99.core/interface/model.interface";

import OrbUnit from "./00.orb.unit/orb.unit";
import EmotionUnit from "./01.emotion.unit/emotion.unit";
import FateUnit from "./02.fate.unit/fate.unit";
import ClockUnit from "./03.clock.unit/clock.unit";
import RiskUnit from "./06.risk.unit/risk.unit";
import WeatherUnit from "./07.weather.unit/weather.unit";
import PlotUnit from "./08.plot.unit/plot.unit";
import CrownUnit from "./09.crown.unit/crown.unit";
import AxisUnit from "./10.axis.unit/axis.unit";
import AmbitUnit from "./11.ambit.unit/ambit.unit";
import ArenaUnit from "./12.arena.unit/arena.unit";
import CollectUnit from "./97.collect.unit/collect.unit";
import MenuUnit from "./98.menu.unit/menu.unit";
import BusUnit from "./99.bus.unit/bus.unit";


import Orb from "./00.orb.unit/fce/orb.interface";
import { OrbModel } from "./00.orb.unit/orb.model";
import Emotion from "./01.emotion.unit/fce/emotion.interface";
import { EmotionModel } from "./01.emotion.unit/emotion.model";
import Fate from "./02.fate.unit/fce/fate.interface";
import { FateModel } from "./02.fate.unit/fate.model";
import Clock from "./03.clock.unit/fce/clock.interface";
import { ClockModel } from "./03.clock.unit/clock.model";
import Risk from "./06.risk.unit/fce/risk.interface";
import { RiskModel } from "./06.risk.unit/risk.model";
import Weather from "./07.weather.unit/fce/weather.interface";
import { WeatherModel } from "./07.weather.unit/weather.model";
import Plot from "./08.plot.unit/fce/plot.interface";
import { PlotModel } from "./08.plot.unit/plot.model";
import Crown from "./09.crown.unit/fce/crown.interface";
import { CrownModel } from "./09.crown.unit/crown.model";
import Axis from "./10.axis.unit/fce/axis.interface";
import { AxisModel } from "./10.axis.unit/axis.model";
import Ambit from "./11.ambit.unit/fce/ambit.interface";
import { AmbitModel } from "./11.ambit.unit/ambit.model";
import Arena from "./12.arena.unit/fce/arena.interface";
import { ArenaModel } from "./12.arena.unit/arena.model";
import Collect from "./97.collect.unit/fce/collect.interface";
import { CollectModel } from "./97.collect.unit/collect.model";
import Menu from "./98.menu.unit/fce/menu.interface";
import { MenuModel } from "./98.menu.unit/menu.model";
import Bus from "./99.bus.unit/fce/bus.interface";
import { BusModel } from "./99.bus.unit/bus.model";


export const list: Array<any> = [OrbUnit,EmotionUnit,FateUnit,ClockUnit,RiskUnit,WeatherUnit,PlotUnit,CrownUnit,AxisUnit,AmbitUnit,ArenaUnit,CollectUnit,MenuUnit,BusUnit];

import * as reduceFromOrb from "./00.orb.unit/orb.reduce";
import * as reduceFromEmotion from "./01.emotion.unit/emotion.reduce";
import * as reduceFromFate from "./02.fate.unit/fate.reduce";
import * as reduceFromClock from "./03.clock.unit/clock.reduce";
import * as reduceFromRisk from "./06.risk.unit/risk.reduce";
import * as reduceFromWeather from "./07.weather.unit/weather.reduce";
import * as reduceFromPlot from "./08.plot.unit/plot.reduce";
import * as reduceFromCrown from "./09.crown.unit/crown.reduce";
import * as reduceFromAxis from "./10.axis.unit/axis.reduce";
import * as reduceFromAmbit from "./11.ambit.unit/ambit.reduce";
import * as reduceFromArena from "./12.arena.unit/arena.reduce";
import * as reduceFromCollect from "./97.collect.unit/collect.reduce";
import * as reduceFromMenu from "./98.menu.unit/menu.reduce";
import * as reduceFromBus from "./99.bus.unit/bus.reduce";


export const reducer: any = {
 orb : reduceFromOrb.reducer, 
emotion : reduceFromEmotion.reducer, 
fate : reduceFromFate.reducer, 
clock : reduceFromClock.reducer, 
risk : reduceFromRisk.reducer, 
weather : reduceFromWeather.reducer, 
plot : reduceFromPlot.reducer, 
crown : reduceFromCrown.reducer, 
axis : reduceFromAxis.reducer, 
ambit : reduceFromAmbit.reducer, 
arena : reduceFromArena.reducer, 
collect : reduceFromCollect.reducer, 
menu : reduceFromMenu.reducer, 
bus : reduceFromBus.reducer, 

};

export default class UnitData implements Model {
 
 orb : Orb = new OrbModel();
emotion : Emotion = new EmotionModel();
fate : Fate = new FateModel();
clock : Clock = new ClockModel();
risk : Risk = new RiskModel();
weather : Weather = new WeatherModel();
plot : Plot = new PlotModel();
crown : Crown = new CrownModel();
axis : Axis = new AxisModel();
ambit : Ambit = new AmbitModel();
arena : Arena = new ArenaModel();
collect : Collect = new CollectModel();
menu : Menu = new MenuModel();
bus : Bus = new BusModel();

 
}
