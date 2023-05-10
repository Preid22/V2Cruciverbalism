function getCrosswordData(date) {
  const [year, month, day] = date.split("-");
  const puzzle = require(`./Data/crosswords/${year}/${month}/${day}.json`);
  return puzzleMap(puzzle);
}

function puzzleMap(puzzle) {
  const p = {};
  p.answers = puzzle.answers;
  p.author = puzzle.author;
  p.size = puzzle.size;
  p.acrossCluesArr = generateClueArray(puzzle.clues.across);
  p.downCluesArr = generateClueArray(puzzle.clues.down);
  p.acrossCluesMap = generateClueMap(puzzle.clues.across);
  p.downCluesMap = generateClueMap(puzzle.clues.down);
  p.copyright = puzzle.copyright;
  p.date = puzzle.date;
  p.editor = puzzle.editor;
  p.cells = generateCells(puzzle.grid, puzzle.size.rows);
  p.gridnums = puzzle.gridnums;
  p.publisher = puzzle.publisher;
  p.size = puzzle.size;
  p.title = puzzle.title;
  return p;
}

function generateClueArray(clues) {
  return clues.map((clue) => {
    const [num, clueString] = clue.split(".");
    return {
      num,
      clueString,
    };
  });
}

/* 
 - ln. 1: declare function getCrosswordData(date) which takes in a date,
 spreads the YEAR, MONTH, and DAY vals to named variables and then brings in
 the puzzle JSON from ./Data via require. It then returns the function
 puzzleMap (see below)

 - ln. 9: puzzleMap(puzzle) takes in puzzle which is the raw json, brought
 in via require, and outputs an object, p, which contains all the fields in
 lns. 9-23

 - ln. 27: a helper function which is used inside of the puzzlemap func to generate
 an array containing the clues and their corresponding numbers, split into individual
 strings. It takes in clues.across or clues.down from the puzzle object and maps over it,
 splitting the original format ( "1. Attention getter" ) into a more usable one
 ( {
    clueString: "Attention getter",
    num: "1"
 } )


*/
