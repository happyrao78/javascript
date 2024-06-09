const db = new Promise((resolve,reejct)=>{
    const status = true;
    if(status){
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

//CONSUMPTION OF PROMISE USING ASYNC AWAIT which never returns any error but returns undefined
async function consume(){
    try {
        const response = await db;
        console.log(response.email)
    } 

    catch (error) {
        console.log(error)
        
    }
    finally{
        console.log("!!SUCCESSFUL!!")
    }
}
consume();
