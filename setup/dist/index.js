"use strict";
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
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        //protected available for this class and classes inherited from this class
        this._courseCount = 1;
        this.city = "sangamner";
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    //setter should not return anything not even void
    set courseCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error("there should at learst one course");
        }
        this._courseCount = courseNumber;
    }
    // private method
    deleteToken() {
    }
}
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isfamily = true;
    }
    updateCourseCount() {
        this._courseCount = 1;
    }
}
const nakul = new User("nak@s.com", "nakul");
// city is marked as private so it is not assecible
//nakul.city= "pune"
