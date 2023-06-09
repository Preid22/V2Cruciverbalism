function getCrosswordData(date) {
  const [year, month, day] = date.split("-");
  const puzzle = require(`./Data/crosswords/${year}/${month}/${day}.json`);
  return generatePuzzleObj(puzzle);
}

function generatePuzzleObj(puzzle) {
  const puzzleObj = {};
  puzzleObj.author = puzzle.author;
  puzzleObj.answers = puzzle.answers;
  puzzleObj.size = puzzle.size;
  puzzleObj.acrossCluesArr = generateClueArray(puzzle.clues.across);
  puzzleObj.downCluesArr = generateClueArray(puzzle.clues.down);
  puzzleObj.acrossCluesMap = generateClueMap(puzzle.clues.across);
  puzzleObj.downCluesMap = generateClueMap(puzzle.clues.down);
  puzzleObj.copyright = puzzle.copyright;
  puzzleObj.date = puzzle.date;
  puzzleObj.editor = puzzle.editor;
  puzzleObj.cells = generateCells(puzzle.grid, puzzle.size.rows); //outputs {letter:'', row:'', column:' }
  puzzleObj.gridnums = puzzle.gridnums;
  puzzleObj.publisher = puzzle.publisher;
  puzzleObj.size = puzzle.size;
  puzzleObj.title = puzzle.title;
  return puzzleObj;
}

function generateClueArray(clues) {
  return clues.map((clue) => {
    const [num, clueString] = clue.split(".");
    return {
      num,
      clueString,
    };
  });
};

function generateClueMap(clues) {
    return clues.reduce((accum, cur) => {
      const [num, clueString] = cur.split(".");
      accum[num] = clueString;
      return accum;
    }, {});
  };

  function generateCells(letters/*puzzle.grid*/, size/*puzzle.size.rows*/) {
    return letters.map((letter, index) => {
    const row = Math.floor(index / size); //on first row index is < size, > on subsequent rows so dividing gets us row value
    const column = index % size;
    const letterOb = {};
    letterOb.letter = letter;
    letterOb.row = row;
    letterOb.column = column;
    return letterOb;
    });
    }

    /**
     In the puzzleMap function, generateCells takes in puzzle.grid as the letters arg and puzzle.size.rows
     as the the size arg. It then maps over the letters ( .grid ) and returns an object with 
     the row, column, and letter properties.
     */

exports.getCrosswordData = getCrosswordData;

/* 
 - ln. 1: declare function getCrosswordData(date) which takes in a date,
 spreads the YEAR, MONTH, and DAY vals to named variables and then brings in
 the puzzle JSON from ./Data via require. It then returns the function
 puzzleMap (see below)

 - ln. 9: puzzleMap(puzzle) takes in puzzle which is the raw json, brought
 in via require, and outputs an object, p, which contains all the fields in
 lns. 9-23

 - ln. 27: a helper function, generateClueArray, which is used inside of the puzzlemap func
  to generate an array containing the clues and their corresponding numbers, split into individual
 strings. It takes in clues.across or clues.down from the puzzle object and maps over it,
 splitting the original format ( "1. Attention getter" ) and assigning the vars
  into a more usable object format
 ( {
    clueString: "Attention getter",
    num: "1"
 } )

 Within the puzzleMap func, generateClueArray takes in either puzzle.clues.down or
 puzzle.clues.across and returns an array containing objects with properties for the 
 clue as well as the number, this array is the property for p.acrossCluesArr and 
 p.downCluesArr.

 - ln. 37 is similar in that it handles the clue data, but instead of outputting an array
 containing objects with the clueString and number, it outputs an object that contains
 fields with the number as the key and the clueString as the property.


*/
