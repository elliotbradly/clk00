import Plot from "./fce/plot.interface";
import PlotBit from "./fce/plot.interface";

export class PlotModel implements Plot {
 //idx:string;
 plotBitList: PlotBit[] = [];
 plotBits: any = {};
}
