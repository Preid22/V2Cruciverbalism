import React from "react";

function Cell({ id, letter, isBlack, isHighlighted, isSelected, handleClick }) {
  return (
    <svg>
      <rect
        x='2'
        y='2'
        width="40"
        height="40"
        rx='5'
        stroke={isSelected ? 'blue' : 'yellow'}
        stroke-width='2'
        fill= {isBlack ? "black" : "white"}
      />
    </svg>
  );
}

export default Cell;

/*
Functional component 'Cell' takes the following props:
    - 'id' (string): Unique identifier for the cell
    - 'letter' (string): The letter displayed in the cell (if any)
    - 'isBlack' (boolean): Indicates whether the cell is part of the currently selected clue
    - 'isHighlighted' (boolean): Indicates whether the cell is part of the currently selected clue
    - 'isSelected' (boolean): Indicates whether the cell is currently selected or not
    - 'handleClick' (function): The function that is called when cell is clicked
*/

//style={{ fill: isBlack ? "black" : "white" }}