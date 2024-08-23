import Model from "./99.core/interface/model.interface";
import Terminal from "./00.terminal.unit/fce/terminal.interface";
import Grid from "./01.grid.unit/fce/grid.interface";
import Canvas from "./02.canvas.unit/fce/canvas.interface";
import Console from "./03.console.unit/fce/console.interface";
import Input from "./04.input.unit/fce/input.interface";
import Choice from "./05.choice.unit/fce/choice.interface";
import Container from "./10.container.unit/fce/container.interface";
import Graphic from "./11.graphic.unit/fce/graphic.interface";
import Hexagon from "./12.hexagon.unit/fce/hexagon.interface";
import Sprite from "./13.sprite.unit/fce/sprite.interface";
import Text from "./14.text.unit/fce/text.interface";
import Collect from "./97.collect.unit/fce/collect.interface";
import Menu from "./98.menu.unit/fce/menu.interface";
import Bus from "./99.bus.unit/fce/bus.interface";
export declare const list: Array<any>;
export declare const reducer: any;
export default class UnitData implements Model {
    terminal: Terminal;
    grid: Grid;
    canvas: Canvas;
    console: Console;
    input: Input;
    choice: Choice;
    container: Container;
    graphic: Graphic;
    hexagon: Hexagon;
    sprite: Sprite;
    text: Text;
    collect: Collect;
    menu: Menu;
    bus: Bus;
}