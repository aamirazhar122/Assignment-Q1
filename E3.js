"use strict";
//Personal Message: Store a person’s name in a variable, and print a message to that person. Your 
//message should be simple, such as, “Hello Eric, 
//would you like to learn some Python today?”
Object.defineProperty(exports, "__esModule", { value: true });
let personName = "Eric";
console.log(personName.toLocaleLowerCase());
console.log(personName.toLocaleUpperCase());
function toTitleCase(string) {
    return string.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}
console.log(toTitleCase(personName));
