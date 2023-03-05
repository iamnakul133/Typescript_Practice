"use strict";
//syntax of assigning a type
exports.__esModule = true;
//string
var greeetings = "hello Naku";
greeetings = 1;
//typescript shows an error when string is assigned a number
//number
var mynum = 3;
// In typescript it doesn't distinguish between int and float for it both are numbers.
mynum = 3.3;
// we don't need to always mention about the type typescript is clever to understand that.
var mynum2 = 3;
//boolean
var isLoogedIN = false;
//any
var hero; // we are not sure which value is return to it is type is any
function getHero() {
    return "thor";
}
hero = getHero(); // any is not any type of variable in javascript is just that javascript dont check the type for this variable
