import react from "react";
import "./components.css";

function Square({ children, color, position, onDrop }) {
  const background = color ? "black" : "white";
  return (
    <div 
    className={`square ${background}`} 
    onDrop={(e) => {onDrop(e, position)}} 
    onDragOver={(e) => e.preventDefault()}>
      {children}
    </div>
  );
}
export default Square;