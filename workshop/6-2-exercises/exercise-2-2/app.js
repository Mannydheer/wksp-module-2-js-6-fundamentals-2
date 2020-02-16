// Exercise 2.2 - the Custom Grid
// ------------

// Use the grid code you wrote in 2.1

// Objectives
// Allow the user to create cells on the board based on values he/she inputs.
// - Ask the user the number of ROWS and COLUMNS
// - Use those values to generate a grid

// Hints
// - use the 'blur' event
// - one event listener per input

// If you need extra hints, see somebody... :)



const boardSize = document.getElementById('board');
boardSize.style.width = '600px';
boardSize.style.height = '600px';

// boardSize.style.gridTemplateColumns = `repeat(${BOARDCOLUMNS}, 1fr)`;
// boardSize.style.gridTemplateRows = `repeat(${BOARDROWS}, 1fr)`;




//add event listener ROWS. 
let inputrowsEvent = document.getElementById('rows-input');
inputrowsEvent.addEventListener('input', updateValue);
//add event listener COLUMNS
let inputcolumnEvent = document.getElementById('columns-input');
inputcolumnEvent.addEventListener('input', updateValue);

//add values for input rows which is going to store what was entered. 

// create divs all along the way, SInce it is styled already, it will fix the fact that they are block level elements. 
function makeTable() {
    //make tablle will store values of row and column in variables. 
    let rowValue = inputrowsEvent.value;
    let columnValue = inputcolumnEvent.value;

    if (rowValue > 0 && columnValue > 0 ) {
         //make grid based on those values. 
    boardSize.style.gridTemplateColumns = `repeat(${columnValue}, 1fr)`;
    boardSize.style.gridTemplateRows = `repeat(${rowValue}, 1fr)`;

    //make the actual cells. 
    for (let cellNum = 0; cellNum <= rowValue * columnValue; cellNum++) {
        let cellCreate = document.createElement('div');
        document.getElementById('board').appendChild(cellCreate);
        cellCreate.id = `cell-${cellNum}`;
        cellCreate.classList.add('cell');
        }

    }

}

// ---------------
//function that will update values for INPUT ROWS
function updateValue() {
    //on we click out , we call our function makeTable()l
    inputrowsEvent.onblur = makeTable();
    inputcolumnEvent.onblur = makeTable();
}