class user{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
    //getter and setter are used so that we can access the private variables
    //es2022 me ek proposal diya gya hai # use krne ka  jisse hum kisi bhi  property ko private bna skte hai
    get email(){
        return `${this._email}`
    }
    set email(id){
        this._email=id;
    }
    get password(){
        return `${this._password}abc`
    }
    set password(value){
        this._password=value;
    }
}
const admin= new user("happyrao1234@google.com","12345")
console.log(admin._email);