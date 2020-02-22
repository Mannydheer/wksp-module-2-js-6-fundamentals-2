let verifyEquals = require('../../assets/verify-equals');

// Problem 10
// ----------
// Make this function return the input string, capitalized. You must use a for loop. For example:
// f("hello world"); // Hello World
// f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

// HINT:
//    - Use a for loop to capitalize the words one by one
//    - Use the toUpperCase string method




function f(str) {
  const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  return str
    .split(' ')
    .map(capitalize)
    .join(' ');
}


// Test cases
let inputs = ['hello dear', 'welcome home', 'homerun', true, 'dearoei jo'];
let outputs = ['Hello Dear', 'Welcome Home', 'Homerun', undefined, "Dearoei Jo"];

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