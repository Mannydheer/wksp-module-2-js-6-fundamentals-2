let verifyEquals = require('../../assets/verify-equals');

// Problem 13 - done
// ----------
// Make this function return true if the input string is a palindrome,
// and false otherwise.
// A palindrome is a string that is the same if you reverse it.
// RADAR -> Yes
// JAVASCRIPT -> No

function f(str) {
    //reverse both and then compare. 
    let palindrome = false;
    let splitWord = str.split('');
    let reverseWord = splitWord.reverse();
    let splitJoin = reverseWord.join('');

    //
    if (str === splitJoin) {
        palindrome = true;
    }
    return palindrome;
}

// Test cases
let inputs = ['radar', 'welcome', '111', 'anna', 'civic'];
let outputs = [true, false, true, true, true];


// STOP -----------------------------------------------------------------
// No code changes below. This is the actual test that will run your test cases and validate your function.
function runTest(i) {
    if (i >= inputs.length) throw new Error('You do not have enough test cases');
    let expected = outputs[i];
    let actual = f(inputs[i]);
    verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

console.log('All tests passed for ' + __filename);