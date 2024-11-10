// hoisting and strict mode

x = 20;
console.log(x)

"use strict";

function strictExample() {
    x = 3.14; // Error: x is not defined (because of strict mode)
}

strictExample();

