import { JSX } from "react";
import { Cell } from "../models/cell";

interface CellProps {
  cell: Cell;
}

function CellComponent({ cell }: CellProps): JSX.Element {
  return <div className={["cell", cell.color].join(" ")}></div>;
}

export { CellComponent };
