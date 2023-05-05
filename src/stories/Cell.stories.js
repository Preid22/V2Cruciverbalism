
import Cell from './Cell';

// This is the base Story

export default {
    title: 'Cell',
    component: Cell  //component imported from ln.2
};


// These are our named Stories (variations on base Story),

export const Cell1 = {
    args: {
        isBlack: true
    }
};

export const Cell2 = () => {
    return (
        <Cell />
    )
};


// Initial writing of Cell2:
// export const Cell2 = {
//     args: {
//         isBlack: false
//     }
// }

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


