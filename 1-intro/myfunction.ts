function addTwo(num: number) {
  return num + 2;
}

addTwo(8);

function getUpper(val: string) {
  return val.toUpperCase();
}
getUpper("hello");

function signUpUser(name: string, email: string, password: string) {}

signUpUser("hi", "dll", "password");

//to specify to get a specify a return type

function addTwwo(num: number): number {
  return num + 2;
}

// this type of senario can happen when a return type can be both a string or a boolean

function getValue(val: number): string {
  if (val > 5) {
    return true;
  }
  return "200 OK";
}

const getHello = (s: string): string => {
  return "Hello";
};

// here is typescript understand that our array is string so it know that the parameters are string

const heros = ["thor", "spiderman", "ironman"];
heros.map((hero): string => {
  return `hero is ${hero}`;
});

// consoleError (return void i.e. returns nothing)
function consoleError(errmsg: string): void {
  console.log(errmsg);
}

//never (never returns anything not even void)

function handleError(val: string): never {
  throw new Error(val);
}

export {};
