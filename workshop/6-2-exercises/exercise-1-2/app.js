// Exercise 1.2
// ----------

// STEP 1
// Reimplement the functionality of 1.1 (Try to NOT look at your previous solution)
// button one disappears
// button two turns 'crimson'
// button three turns 'lightblue'
// button four starts shaking... (animation provided in styles.css)

// STEP 2
// This time the buttons should toggle.
// Meaning if the user clicks on them a second time, it should go back to initial state.
// initial button color is 'gold'

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Hint:
// create a toggleColor function
// Because we are now going to work with the opacity and background of the buttons,
// they need to be set here. So that they are referencable via the the style attribute.
// initialize the background color for all of the buttons in here. (for loop)


const buttonEvent = document.getElementById('btn-list');




//this will make all the buttons background to gold. 
for (i = 1; i <= 4; i++) {
    let goldButtons = document.getElementById(`btn-${i}`)
    goldButtons.style.backgroundColor = 'gold';
    goldButtons.style.opacity = 100;
}

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
        default:
            break;
    }


}
buttonEvent.addEventListener('click', buttonClick);