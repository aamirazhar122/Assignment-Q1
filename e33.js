"use strict";
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//for loop
for (let i = 0; i < numbers.length; i++) {
    let ordinal;
    if (i + 1 === 1) {
        ordinal = "st";
    }
    else if (i + 1 === 2) {
        ordinal = "nd";
    }
    else if (i + 1 === 3) {
        ordinal = "rd";
    }
    else {
        ordinal = "th";
    }
    console.log(`${i + 1}${ordinal}`);
}
;
