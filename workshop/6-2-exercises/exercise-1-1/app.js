// Exercise 1.1
// ----------
// Take a look at the HTML file
// There are 4 buttons that are supposed to do different
// things when clicked.

// button one disappears
// button two turns 'crimson'
// button three turns 'lightblue'
// button four starts shaking... (animation provided in styles.css as a class called 'jitters')

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Guidelines
// - write only one event listener
// - use a switch statement

const buttonEvent = document.getElementById('btn-list');

const buttonClick = (event) => {
    const getbtnId = event.target.id;
    const buttonTag = document.getElementById(getbtnId);
    console.log(getbtnId);
    switch (getbtnId) {

        case 'btn-1':
            buttonTag.style.visibility = 'hidden';
            break;
        case 'btn-2':
            buttonTag.style.backgroundColor = 'crimson';
            break;
        case 'btn-3':
            buttonTag.style.backgroundColor = 'lightblue';
            break;
        case 'btn-4':
            buttonTag.classList.add('jitters');
            break;
        default:
            break;
    }


}
buttonEvent.addEventListener('click', buttonClick);


// ------------------------