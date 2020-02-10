# 2.6.2 - Hoisting
<!--  -->
---

### Variables

Basically, when Javascript compiles all of your code, all variable declarations using `var` are hoisted/lifted to the top of their functional/local scope regardless of where the actual declaration has been made.
 <!-- takes all your var and brings them to the top of your code. In a more importance stand point. 
 If you were using Var, since it is a global var, it will always go to the top.  -->
--- 

## Functions

Functions declarations are also hoisted, but these go to the very top, so will sit above all of the variable declarations.

---

### Example

```js
// what will output to the console?
console.log(greeting);
var greeting = 'Hello';
// var will only bring the var DECLARATION to the top.
// but it will not bring its value.
// so it is undefined.



// a. 'Hello'
// b. undefined
// c. Uncaught ReferenceError: greeting is not defined
```

---

It is only the variable declarations that get moved to the top, not the actual value given to the variable.

---

```js
// what will output to the console?
console.log(anotherGreeting);
const anotherGreeting = 'Good evening';

// a. 'Good evening'
// b. undefined
// c. ReferenceError: can't access lexical declaration `anotherGreeting' before initialization
```

---

```js
// what will output to the console?
console.log(yetAnotherGreeting);
let yetAnotherGreeting = 'Goodnight';

// a. 'Good evening'
// b. undefined
// c. ReferenceError: can't access lexical declaration `anotherGreeting' before initialization
```

---

Yet another reason to take `var` and bury it somewhere... ⚰️

---

Function _declarations_ are hoisted to the very top of their scope as well.

```js
function greetMe() {
    console.log(`Hi ${yourName}!`);
}
greetMe();
var yourName = 'Fred';
```
<!-- return undefined.  -->
---

Of note, it is not the declarations themselves that are moved to the top, just the JS compiler that reading them first and alloting them memory space.

---