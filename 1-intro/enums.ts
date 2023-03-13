// Restrict user with certain value

const aisle =0;
const middle =1;
const windows =2;
let seat;
if(seat ===aisle){

}

//enums can be used in above case
//const before the enum helps to not generate not a lot of code of javascript
const enum SeatChoice{
    // we can assign values
    aisle=10,
    middle=11,
    windows="skd",
}

const hcSeat = SeatChoice.aisle

// in javascript these restriction is not visible it will just as assign the value to that variable like 

// const hcSeat = 10