//syntax of assigning a type

//string
let greeetings: string = "hello Naku";
greeetings = 1;
//typescript shows an error when string is assigned a number

//number
let mynum: number = 3;
// In typescript it doesn't distinguish between int and float for it both are numbers.
mynum = 3.3;
// we don't need to always mention about the type typescript is clever to understand that.
let mynum2 = 3;

//boolean
let isLoogedIN: boolean = false;

//any
let hero; // we are not sure which value is return to it is type is any
function getHero() {
  return "thor";
}

hero = getHero(); // any is not any type of variable in javascript is just that javascript dont check the type for this variable

// In typescript we need to avoid use of this type , in the typescript configuration there is property to avoid this i.e. noexplicitany so that it show error when we use any.

export {};
