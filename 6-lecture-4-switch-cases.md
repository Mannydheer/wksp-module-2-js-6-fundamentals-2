# 2.6.4 - JS More Fundamentals - Switch Cases

---

## The [Switch statement](https://love2dev.com/blog/javascript-switch-statement/)

is used as an alternate to multiple if / else statements.

---

Switch statements are a more efficient way to code when testing _multiple_ conditions.

---

### Characteristics

- The switch expression is evaluated once.
- The value of the expression is compared with the value of each case in order.
- If there is a match, the associated block of code is executed.
- A default case can be defined when the expression does not match a case.

---

### Example

```js
//if the time is equal to 6, then do whatever is in case 6. 
//notice the break at the end.
//notice you have to say case. 
switch (time) {
    case 6:
        console.log('Wake up!');
        alarm();
        //BREAK will gtfo of the wgike swutcg statement,. 
        break;
    case 22:
        console.log('off to bed');
        turnOffComputer();
        break;
        //dont necesarrily need to have a default. But it's better practise even if it does nothing. 
        //What is means: If none of the cases above are "called"
    default:
        console.log('Keep doing what you\'re doing');
        noChange();
        break;
        //If I dont put break, it will not jump back out and look at the case, it will remain inside since there is no break. 
}
```

---

### `break` vs `return`

- `break` will _break_ out of the switch case.
- Without a `break`, the following cases will also be evaluated.
- `return` will stop the rest of the function from being evaluated.

---

see example (sample-switch.js)