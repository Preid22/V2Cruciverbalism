import React from "react";
import Grid from "./Grid";

// This is the base Story

export default {
  title: "Grid",
  component: Grid, //component imported from ln.2
};

// These are our named Stories (variations on base Story),

// const Template = (args) => <Cell {...args} />;
// export const Cell1 = Template.bind({});

// ^^^^ Writing it this way throws an unexpected token '<' error

export const Grid1 = {
  args: {
   
  },
};












/*
<Grid
focusCell={focusCell}
cells={gameData.cells} //returns array of letterObs from mapping over .grid {letter:'', row:0, column:0}
gridnums={board.gridnums}
handleSetFocus={handleSetFocus}
handleClick={handleClick}
clickStatus={clicked}
/>

    <Cell
             focusCell={focusCell}
              gridnums={gridnums}//does nothing, no access??
              letter={cell.letter}
              row={cell.row}
              column={cell.column}
              handleSetFocus={handleSetFocus}
              handleClick={handleClick}
              clickStatus={clickStatus}
            />
*/