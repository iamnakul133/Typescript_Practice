// class User{
//     //default is public
//     public email: string
//     name : string
//      private city? : string ="sangamner"
//     constructor(email: string  , name: string){
//         this.email = email;
//         this.name = name;       
//     }
// }

//optional syntax
class User{

    //protected available for this class and classes inherited from this class

    protected _courseCount =1;
    private city? : string ="sangamner"
        
    constructor(public email: string  , public name: string){     
    }

    get getAppleEmail():string{

        return `apple${this.email}`
    }

    get courseCount(): number{
        return this._courseCount;
    }

    //setter should not return anything not even void
    set courseCount(courseNumber){
        if(courseNumber<=1){
          throw new Error("there should at learst one course")
        }
        this._courseCount=courseNumber;
       
    }

    // private method
    private deleteToken(){

    }
}

class subUser extends User{
    isfamily : boolean = true
    updateCourseCount(){
        this._courseCount =1;
    }
}



const nakul = new User("nak@s.com","nakul")
// city is marked as private so it is not assecible
//nakul.city= "pune"
