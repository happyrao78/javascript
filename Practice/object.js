let obj={
    name:"happy",
    sym:"key1",
}
// console.log(obj.sym)
obj.getone = function(){
    console.log("happy yadav")
}
// console.log(obj.getone());
obj.gettwo=function(){
    console.log(`my name is ${this.name} and my key is ${this.sym}`);
}
console.log(obj.gettwo());