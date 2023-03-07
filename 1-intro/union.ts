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