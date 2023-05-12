    * The function generateClueArray takes in an object (puzzle, written as clues in the func) and returns an array of objects, each with two properties; clueString and num (the corresponding first cell number.) This array is formed using .map(). Because .map() outputs an array we return clues.map(). The function run on each element by .map iterates over the array of clue strings ("1. Attention getter") and at each one declares vars num and clueString, .splits the clue arg and assigns those to num and clueString via de-structuring. Then, an object containing properties num and clueString is returned which outputs with the necessary vals.
A function that takes in the CW JSON and outputs an array containing objects that have fields for num and clueString
function generateClueArray(clues){
    return clues.map((clue)={
        const [num, clueString] = clue.split('.');
        return {
            num,
            clueString
        };
    });
};



    * The function generateClueMap also iterates over the JSON data to output an object containing clues and their corresponding numbers. Instead of using the .map() method and outputting an array of objects, generateClueMap uses the .reduce() function to output an object.

    It takes in the clues JSON and returns the output of the reduce method called on the clues. The reduce callback is given accum and current args, and an empty object is supplied as the initial accum value. The clue strings are .split() in the same manner as generateClueArray, as well as the destructuring assignment to variables. The main difference is that in the next step we assign the num variable as a key in the accum object with the clueString as the property, we then return the accum object.

A function that takes in the CW JSON and outputs an object with fields for num and clueString
function generateClueMap(clues){
    return clues.reduce((accum, cur)=>{
        const [num, clueString] = cur.split('.');
        accum[num] = clueString;
        return accum;
    },{})
}

In the function generateCells we take two args, letters (puzzle.grid: ['A','H','E','M','.']) and size (an int for number of cols and rows). We return the output of using the .map() method on letters. The callback func for letters.map takes two args, letter and index with letter being the letter string val and index being the index number (duh!). Within the callback we declare a row variable which is determined by taking the floor (largest integer less than or equal to given val, rounded down) of current index value divided by the size value. We also declare a column value which is equal to the modulo of index % size. Finally we declare an empty object, letterObj. Go on to declare key props in letterObj for letter, row, and column with the respective vals as properties. Then return letterObj.

function generateCells(letters*puzzle.grid*, size*puzzle.size.rows*) {
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

function generateClueArray(clues) {
return clues.map((clue) => {
const [num, clueString] = clue.split(".");
return {
num,
clueString,
};
});
}

function generateClueMap(clues) {
return clues.reduce((accum, cur)=>{
const [num, clueString] = cur.split(".");
accum[num] = clueString;
return accum;
},{})
}
