import { JSX } from "react";
import { Board } from "../models/board";
import { CellComponent } from "./cell-component";
import React from "react";

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

function BoardComponent({ board, setBoard }: BoardProps): JSX.Element {
  return (
    <div className="board">
      {board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((cell) => (
            <CellComponent cell={cell} key={cell.id}></CellComponent>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}

export { BoardComponent };
