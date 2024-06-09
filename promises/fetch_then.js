fetch('https://api.github.com/users/hishitagupta').then((response)=>{
    return response.json()
}).then((datas)=>{
    console.log(datas)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("task done");
})