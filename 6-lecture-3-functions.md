# 2.6.3 - JS More Fundamentals - Functions

---

Functions are a Fundamental building block of JavaScript.

Functions _encapsulate_ a particular task.

---

## Function Parameters and Arguments

---

### A parameter

is a variable in function, or method, definition.

```js
// Example

function greeting(name)
{
    return `${name}! Want some bacon?`;
}
//now need to call it. 
greeting('daniel');



function greeting(names)
{   
    names.forEach(function(name) {
        console.log(`${name}! Want some bacon?`);
    });
}
//now need to call it. 
greeting(['daniel', 'bob', 'clara']);



//need to reutn map to something. retunr the array. 

//need to review.
function greeting(names)
{   
    names.map(function(name) {
        const x = `${name}! Want some bacon?`;
        return x;
    });
}
//now need to call it. 
console.log (greeting(['daniel', 'bob', 'clara']));



//ANYTHING AFTER A RETURN - doesnt read it
```

---

### An argument

is the value given to the parameter when a function, or method is called.

```js
// Example

```

---

What is the output of this function?

```js
//Still will run it, but will ignore bye. 
function f() {
    console.log("hello");
}

f("bye");
```

---

--> Extra arguments are ignored.

---

### Extra arguments vs missing arguments

- Calling a function with extra arguments
    - Never useful
    - Usually an indication of a bug
- Calling a function with fewer arguments
    - Sometimes useful
    - But could also be a mistake

---

### _Defining_ a function

This is how we have been _defining_ (and declaring) functions up-to-now

```js
function someFunc() {
    // do something...
}
```

--- 

There are 2 other ways to _define_ a function

```js
const someFunc = function() {
    // do something...
    //assigning it to a var. 
}
```

This will _define_ a function expression.

⚠️ **Function expressions are NOT hoisted.**

---

The third way is an arrow function

```js
//parameters go in the bracket/
someFunc = (num1, num2) => {
    // do something...
}

names.forEach(name) => console.log(name));
```

This is equivalent to the previous way of _defining_ a function. 

⚠️ **It is NOT hoisted either.**

---

As of now, you are free to use the syntax you wish.

I will let you know when to _not_ use a particular syntax.

---

## What a function `returns`

```js
// Example
someFunc = () => {
    return 'bacon';
}

console.log(someFunc());


// Example
someFunc = () => {
    return 'bacon';
}

otherFunc = (string) => {
    return string.split();
}


//review this. 
console.log(otherFunc(someFunc()));
```






`return` is the end of the line...

---

Functions are a Fundamental building block of JavaScript.

Functions _encapsulate_ a particular task.

---