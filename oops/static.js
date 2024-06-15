class user{
    constructor(username){
        this.username=username;
    }
    login(){
        console.lof(`Username : ${this.username}`);
    }
    static createId(){//it cant be  extended and it is not inherited
        return `1234`
    }
}
const print =new user("happy_yadav");
console.log(print.createId());
class teacher{
    constructor(username,email){
        super(username);
        this.email=email;
    }
}
const type = new teacher("happy_yadav","rao123@google.com");
console.log(type.createId());