import * as React from "react";

export interface SquareProps {
  value: string | null;
  onClick: () => void;
}

function Square(props: SquareProps) {
  return (
    <button 
      className="square" 
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

export default Square;
