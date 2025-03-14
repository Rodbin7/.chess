import Square from "./Square";
import { Pawn } from "./Pawn";

export default function generateBoard( rows, columns, positions, onDragStart, onDrop ) {
    const board = [];
    for (let i = 0; i < rows.length; i++) {
      for (let j = 0; j < columns.length; j++) {
        const color = (i + j) % 2 === 0;
        const index = i * 8 + j;
        let idSquare = columns[j] + rows[i];
        let piece = positions[idSquare];

        board.push(
        <Square 
          key={idSquare} 
          color={color}
          position={idSquare}
          onDrop={onDrop}
          >
            { piece &&
              <Pawn 
                color={piece.color}
                position={idSquare}
                onDragStart={onDragStart}
              />
            }
          </Square>
        );
      }
    }
    return board;
  }