//PROMISE DECLARATION
const promise_one = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("DB connected successfully");
        resolve()
    },1000)
})
//PROMISE CONSUMPTION
promise_one.then(()=>{
    console.log("Connected to backend")
})