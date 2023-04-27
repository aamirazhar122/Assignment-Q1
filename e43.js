"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_great(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push("the Great " + magicians[i]);
    }
    return greatMagicians;
}
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
var magicians = ["samuel", "Alic", "John", "Eric", "Boby"];
var greatMagicians = make_great(magicians);
show_magicians(magicians);
show_magicians(greatMagicians);
