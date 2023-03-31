type User = {
    name: string;
    email: string;
    isActive: boolean;
}

const createUser = (user : User): User => {
    return {name: "nakul", email: "nakul@22", isActive: true}
}

createUser({name : "nakul", email: "nakul@124", isActive: false})
export{}


// readonly 

type Users = {
    readonly _id: string;
    name : string;
    email : string;
    isActive: boolean;
    creditCard ?: number// not all the users will have creditcard(optional property)(?)
}


let myUser: Users = {
    _id : "334",
    name: "h",
    email : "naj",
    isActive:true
}

// (&) to merge type in a type
type cardNumber = {
    cardnumber : string;
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv : number;
}


myUser.email = "nakul@123";
//shows error as as id is readonly
myUser._id= "kdjk";