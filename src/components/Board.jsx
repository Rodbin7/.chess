import { useState } from "react";
import generateBoard from "./generateBoard";
import "./components.css";

function Board() {

  const [positions, setPositions] = useState({
    a2: { color: 0, type: "pawn" },
    b2: { color: 0, type: "pawn" },
    c2: { color: 0, type: "pawn" },
    d2: { color: 0, type: "pawn" },
    e2: { color: 0, type: "pawn" },
    f2: { color: 0, type: "pawn" },
    g2: { color: 0, type: "pawn" },
    h2: { color: 0, type: "pawn" },
    a7: { color: 1, type: "pawn" },
    b7: { color: 1, type: "pawn" },
    c7: { color: 1, type: "pawn" },
    d7: { color: 1, type: "pawn" },
    e7: { color: 1, type: "pawn" },
    f7: { color: 1, type: "pawn" },
    g7: { color: 1, type: "pawn" },
    h7: { color: 1, type: "pawn" },
  });

  const handleDragStart = (e, fromPosition ) => {
    e.dataTransfer.setData('fromPosition', fromPosition);
  }
  const handleDrop = (e, toPosition ) => {
    let fromPosition = e.dataTransfer.getData('fromPosition');
    console.log('Moviendo de:', fromPosition, 'a:', toPosition);

    if (fromPosition && fromPosition !== toPosition) {
      setPositions((prev) => {
        let newPositions = {...prev};
        newPositions[toPosition] = newPositions[fromPosition];
        delete newPositions[fromPosition];
        return newPositions;
      })
    }
  }
  const rows = [1, 2, 3, 4, 5, 6, 7, 8];
  const columns = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const board = generateBoard(rows, columns, positions, handleDragStart, handleDrop);

  
  return <div className="board">{board}</div>;
}


export default Board;