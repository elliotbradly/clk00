export declare const initCanvas: (cpy: CanvasModel, bal: CanvasBit, ste: State) => CanvasModel;
export declare const hexmapCanvas: (cpy: CanvasModel, bal: CanvasBit, ste: State) => CanvasModel;
export declare const updateCanvas: (cpy: CanvasModel, bal: CanvasBit, ste: State) => Promise<CanvasModel>;
export declare const createCanvas: (cpy: CanvasModel, bal: CanvasBit, ste: State) => Promise<CanvasModel>;
export declare const readCanvas: (cpy: CanvasModel, bal: CanvasBit, ste: State) => Promise<CanvasModel>;
export declare const writeCanvas: (cpy: CanvasModel, bal: CanvasBit, ste: State) => Promise<CanvasModel>;
export declare const deleteCanvas: (cpy: CanvasModel, bal: CanvasBit, ste: State) => Promise<CanvasModel>;
export declare const removeCanvas: (cpy: CanvasModel, bal: CanvasBit, ste: State) => Promise<CanvasModel>;
export declare const nestCanvas: (cpy: CanvasModel, bal: CanvasBit, ste: State) => Promise<CanvasModel>;
import { CanvasModel } from "../canvas.model";
import CanvasBit from "../fce/canvas.bit";
import State from "../../99.core/state";
