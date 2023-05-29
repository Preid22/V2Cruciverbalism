import React from "react";
import Cell from "./Cell";

// This is the base Story

export default {
  title: "Cell",
  component: Cell, //component imported from ln.2
};

// These are our named Stories (variations on base Story),

// const Template = (args) => <Cell {...args} />;
// export const Cell1 = Template.bind({});

// ^^^^ Writing it this way throws an unexpected token '<' error

export const Cell1 = {
  args: {
    isBlack: false,
    isSelected: false,
  },
};

//^^^^ This works

/*
Changed to a named export function (export const Cell = () => <Cell />)
and got an unexpected token error. Going to try the format of using a template function
and binding that for export

POSSIBLE EXPLANATION: The Template and .bind format is the older CSF2 format, the plain 
object is the newer CSF3 format which seems simpler and more straightforward.

Read these docs: https://storybook.js.org/docs/react/api/csf#upgrading-from-csf-2-to-csf-3

/*
5/5//23 POINT OF CONFUSION:
    Need to understand better how the export works. All examples show a whole 
    function being exported, but when I do that I get a syntax error 
    (Unexpected token '<') and it seems like it doesn't recognize the component.
    Makes sense that we are exporting objects but I don't understand why the 
    component export doesn't seem to work.

    Learn more about export default vs. export const

    exporting Cell2 as a func throws an Unexpected Token '<' error
*/
