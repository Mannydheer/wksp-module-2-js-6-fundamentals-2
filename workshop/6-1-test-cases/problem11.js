let verifyEquals = require('./verify-equals.js');

// Problem 11
// ----------
// Make this function return the sum of all the numbers in the input array.
// If any element in the array is not a number, skip it. If the array is empty, return zero.

function f(arr) {
    let sum = 0;
    arr.forEach(element => {
        //only will add if its numbers, fi string or boolean, will ignore it. 
        if (typeof element === "number") {
            sum += element;
        }
        else if (typeof element === 'boolean' || typeof element === 'string') {
          element = 0;
          sum += element
        } 
        else {
          return 0;
        }

    });
    return sum;
}

// Test cases
let inputs = [
    [2, 3, 4, 5], [2,3, true], [false, false, 5], ['',5,6],[true, '', 5]];
let outputs = [14,5,5,11,5];

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