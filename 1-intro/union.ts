// when you dont what type our variable are? instead of using (any) we can use union

let score: number | string = 233; // we dont know wheather it will always be a number

score = 44;
score = "33"

//example 
type User = {
    name : string;
    id: number
}

type admin = {
    username ?: string;
    id: number
}

let nakul : User | admin = {
    name : "nakul",
    id: 33
}

nakul = {username : "hc", id: 339}

function getDbId(id: number| string){
    id.toLowerCase(); // this is a error because this type of declaration makes the id neither number or string
    console.log(`DB id is: ${id}`)
    // To make this work 
    if(typeof id === "string")
    {
        id.toLocaleLowerCase()
    }
    else id+3;
}


// array

const data : number[] = [3,4,5,5];
const data2 : string[] = ["3","3", "8"]
const data3 : string[] | number[] = [3,4,"3"] // this gives error because this type of declaration tells the array is made of totally of number or totally with strings
//correct syntax
const data4 : (string | number| boolean )[] = ["3",3,"nakul",true]



