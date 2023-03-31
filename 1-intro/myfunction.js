"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
}
addTwo(8);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("hello");
function signUpUser(name, email, password) { }
signUpUser("hi", "dll", "password");
//to specify to get a specify a return type
function addTwwo(num) {
    return num + 2;
}
// this type of senario can happen when a return type can be both a string or a boolean
function getValue(val) {
    if (val > 5) {
        return true;
    }
    return "200 OK";
}
var getHello = function (s) {
    return "Hello";
};
// here is typescript understand that our array is string so it know that the parameters are string
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
// consoleError (return void i.e. returns nothing)
function consoleError(errmsg) {
    console.log(errmsg);
}
//never (never returns anything not even void)
function handleError(val) {
    throw new Error(val);
}
