// Exercise 1.3
// ----------

// STEP 1
// Reimplement the functionality of 1.1 and 1.2
// - button one disappears
// - button two turns 'crimson'
// - button three turns 'lightblue'
// - button four starts shaking... (animation provided in styles.css)
// - This time the buttons should toggle.
// - Meaning if the user clicks on them a second time, it should go back to initial state.
// - initial button color is 'gold'
// - initial opacity is '100'

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// STEP 2
// The new RESET button should reset all of the buttons to their original state.

// HINT:
// to remove the 'jitters' class, check the length of the classList.



const buttonEvent = document.getElementById('btn-list');


//this will make all the buttons background to gold. 
function makebuttonsGold() {
    for (i = 1; i <= 4; i++) {
        let goldButtons = document.getElementById(`btn-${i}`)
        goldButtons.style.backgroundColor = 'gold';
        goldButtons.style.opacity = 100;
    }
}
//make buttons gold initially. 
makebuttonsGold();

function toggleColor(id) {
    let toggleGold = document.getElementById(id);

    toggleGold.style.backgroundColor = 'gold';
}

// switch statement that will change the color on click. 
const buttonClick = (event) => {
    const getbtnId = event.target.id;
    const buttonTag = document.getElementById(getbtnId);
    switch (getbtnId) {

        case 'btn-1':
            if (buttonTag.style.opacity === '100') {
                buttonTag.style.opacity = '0';
            } else {
                buttonTag.style.opacity = '100';
            }
            break;
        case 'btn-2':
            if (buttonTag.style.backgroundColor === 'crimson') {
                toggleColor(getbtnId);
            } else {
                buttonTag.style.backgroundColor = 'crimson';
            }

            break;
        case 'btn-3':
            if (buttonTag.style.backgroundColor === 'lightblue') {
                toggleColor(getbtnId);
            } else {
                buttonTag.style.backgroundColor = 'lightblue';
            }
            break;
        case 'btn-4':
            //turning the class on and off.
            buttonTag.classList.toggle('jitters');
            break;
        case 'reset':
            //here when I call my function, it will them all gold and then initialize the opacity to it gets back to normal.
            
            let removeJitters = document.getElementById('btn-4');
            removeJitters.classList.remove('jitters');
            makebuttonsGold();

            break;
        default:
            break;
    }
}
buttonEvent.addEventListener('click', buttonClick);