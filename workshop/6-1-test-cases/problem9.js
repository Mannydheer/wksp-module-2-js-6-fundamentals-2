let verifyEquals = require('../../assets/verify-equals');

// Problem 9
// ---------
// Make this function return the longest word in the input string. If the input string is empty then return an empty string.
// If multiple words have the same length, return the last one that matches.

// Example
//   f("hey hello morning") returns "morning"

// HINTS: 
//    - You'll need to use the split string method
//    - A for loop might be helpful
let emptyArray = [];

function f(str) {
    //split the words into their own strings. 
    const words = str.split(' ');
    //declare empty string. 
    let longest = '';

    for (let i = 0; i < words.length; i++) {
        //first iteration, longestlength is 0. Then store the first word in longest.

        if (longest.length <= words[i].length) longest = words[i];
    }
    return longest;
}

f('hey hello morning');

// Test cases
let inputs = ['hi how r u', 'whatsup loser', 'computermac lol', 'come home', ''];
let outputs = ['how', 'whatsup', 'computermac', 'home', ''];

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