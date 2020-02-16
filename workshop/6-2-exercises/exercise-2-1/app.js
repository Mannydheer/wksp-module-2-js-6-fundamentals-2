// Exercise 2.1 - The GRID
// ------------

// Create a game board.
// The CSS will, for the most part, take care of itself
// as long as you assign the right classes to the cells.

// Objectives
// - set the size of the board to a square of 600px;
// - set a number of cells per row;
// - the cells should all be square.
// - cells should have a class of 'cell'
// - cells should have and id of 'cell-#'

const BOARDROWS = 5;
const BOARDCOLUMNS = 5;

const boardSize = document.getElementById('board');
boardSize.style.width = '600px';
boardSize.style.height = '600px';

boardSize.style.gridTemplateColumns = `repeat(${BOARDCOLUMNS}, 1fr)`;
boardSize.style.gridTemplateRows = `repeat(${BOARDROWS}, 1fr)`;


// create divs all along the way, SInce it is styled already, it will fix the fact that they are block level elements. 

for (let cellNum = 0; cellNum <= 25; cellNum++) {
    let cellCreate = document.createElement('div');
    document.getElementById('board').appendChild(cellCreate);
    cellCreate.id = `cell-${cellNum}`;
    cellCreate.classList.add('cell');

}