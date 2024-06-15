class user{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }
    passwordGenerator(){
        return `Your password is ${this.password}xyhwoed&6nis`;
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const chai = new user("happy yadav","hrao1234@hunar.ai","oww@")
console.log(chai.passwordGenerator());
console.log(chai.changeUsername());