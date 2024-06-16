const user=Object.getOwnPropertyDescriptor(Math,'PI');
console.log(user);//it cant be changed as its writable property is false
console.log(Math.PI);//3.141592653589793


// Object.defineProperty(Math,'PI',{
//     writable:true,
//     enumerable:true,
//     configurable:true
// })


console.log(Math.PI);

 const chai ={
    name:"ginger tea",
    price:2500,
    isAvailable: true,
    order:  ()=>{
        console.log("order placed")
    }
 }

 console.log(Object.getOwnPropertyDescriptor(chai,'name'))
 //kisi bhi object ki property ki description nikalne k liye
 Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:true,
 })
 for(let [key,value] of Object.entries(chai)){
    if(typeof value !== 'function'){
    console.log(`${key}:${value}`);
    }
 }