//Arrow funnctions do not have their own this context. In detail if we talk about so in arrow functions  this returns an emptyobject whereas in normal functions this returns the global object.

// const userData = (username)=>{
//     this.username=username;
//     console.log("databse is reached!!")
// }
// const discord=(username,email,gender)=>{
//     userData.call(this,username);
//     this.email=email;
//     this.gender=gender;
// }
// const result = new discord("happy_yadav","happy1234@chaiaurcode.com","Male");
// console.log(result);
function userData(username){
    this.username=username;
    console.log("database is fetched successfully !!!");
}
function discord(username,email,gender){
    userData.call(this,username);
    this.email=email;
    this.gender=gender;
    console.log(`Username is ${this.username} , email is ${this.email} & gender is ${this.gender}`)
}

const result=new discord("happy_yadav","happy1234@chaiaurcode","Male");
console.log(result);