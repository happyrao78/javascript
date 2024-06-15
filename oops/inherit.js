class user{
    constructor(username){
        this.username=username;
    }
    login(){
    console.log(`Username : ${this.username}`);
    }
}
class teacher extends user{
    constructor(username,email,password){
        super(username);
        this.email=email;
        this.password=password
    }
    newcourse(){
        console.log(`New course was added by : ${this.username}`)
    }
}
const test =new teacher("happy_yadav","rao123@google.com","happy1234");
test.newcourse();
test.login();
const test2= new user("happy_yadav");
test2.login();
console.log(test instanceof teacher);//true
console.log(test instanceof user);//true
console.log(test2 instanceof teacher);//false