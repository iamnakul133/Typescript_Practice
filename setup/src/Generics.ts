const score: Array <number> = []
const names : Array <string> = []

function identityOne(val : number| boolean): boolean|number {
    return val
} 

function identitytwo(val: any): any{
    return val

}

// in any we can accept anything and return anything 
// in type we can accept number then we have to return that type only

function identityThree<Type>(val: Type ): Type{
    return val
}

function identityFour<T>(val: T): T{
    return val
}

interface Bootle{
    brand: string,
    type: number
}

identityFour<Bootle>({brand: "skdksd", type: 3}); 

//input as an array

function getSearchProducts<T>(products: T[]) : T{

    //do some database operations
    const myIndex =3;
    return products[myIndex];
}

const getMoreSearchProducts = <T> (products:T[]): T=>{
    //do some database operations
    const myIndex=3;
    return products[3];
}  

//qeneric classes
interface Quiz {
    name : string,
    type: string
}

interface Course{
    name :string,
    type: string,
    subject : string
}

class Sellable<T>{
    public cart: T[]= []

    addToCart(products:T){
        this.cart.push(products)
    }
}