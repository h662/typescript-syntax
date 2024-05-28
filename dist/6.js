"use strict";
function greet(name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    return "".concat(greeting, ", ").concat(name, "!");
}
console.log(greet("h662"));
console.log(greet("h662", "Bye"));
