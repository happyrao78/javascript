new Promise((resolve,reejct)=>{
        const status = false;
        if(!status){
    setTimeout(()=>{
        resolve({ username:"happy yadav",
            email:"happyrao7091@gmail.com",
            contact: 8595864036
        })
    },1000)
}
else{
    console.log("!!ERROR!!")
}
})
.then((user)=>{
    console.log(user);
    return user.contact
})// this then returns the whole object and passes the contact number to the next then
//also known as callback hell
.then((contact_number)=>{
    console.log(contact_number)
})// recives the contatc number from previous then and prints the contact number only 

//this block is executed only if the status in line 2 is true
.catch((errors)=>{
    console.log(errors)
})
.finally(()=>{
    console.log("ALL FETCHING DONE")
})