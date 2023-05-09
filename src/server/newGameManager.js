function getCrosswordData(date){
 const [year, month, day] = date.split("-");
 const puzzle = require(`./Data/crosswords/${year}/${month}/${day}.json`);
 return puzzleMap(puzzle);
}

function puzzleMap(puzzle){
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