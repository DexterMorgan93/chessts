import { Colors } from "../colors";
import logo from "../../assets/black-bishop.png";
import { Cell } from "../cell";

export enum FigureNames {
  FIGURE = "фигура",
  KING = "король",
  KNIGHT = "конь",
  PAWN = "пешка",
  QUEEN = "ферзь",
  ROOK = "ладья",
  BISHOP = "слон",
}

export abstract class Figure {
  color: Colors;
  logo: typeof logo | null;
  cell: Cell;
  name: FigureNames;
  id: number;

  constructor(color: Colors, cell: Cell) {
    this.cell = cell;
    this.color = color;
    this.cell.figure = this;
    this.logo = null;
    this.name = FigureNames.FIGURE;
    this.id = Math.random();
  }

  canMove(target: Cell) {
    return true;
  }

  moveFigure(target: Cell) {}
}
