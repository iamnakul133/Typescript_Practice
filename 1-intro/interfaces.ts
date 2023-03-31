// senario - there is a user which has email, userid and you want to give this user a trail and also you want to give the user with discount

//interface is basic overview can be called as lose form of class 
interface Users{
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    startTrail(): string,
    //startTrail: () => string
    getCoupon(couponName: string, value: number) : number
}

// reopening of interface

interface Users{
    githubToken:string
}


const nakul : Users = {dbId: 33,email: "h@h.com" ,
githubToken :"sjkdj",
userId: 233,
startTrail:() =>{
    return "trail started"
},
getCoupon: (name :"firstaccess", off: 10) => {
    return 10;
}
}

interface Admin extends Users{
    role: "admin"| "ta"| "learner"
}



