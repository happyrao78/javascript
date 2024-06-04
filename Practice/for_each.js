const arr=[1,2,3,4,5]
arr.forEach((num,index,arr)=> {//returns the full array for eeach element
    // console.log(num,index,arr)
}
)

//with object
const myobj=[
    {
        name:"happy",
        roll:"7091"
    },
    {
        name:"hishita",
        roll:"7092"
    },
    {
        name:"divjot",
        roll:"7093"
    },
]
myobj.forEach((user)=> {
    console.log(`${user.name}:${user.roll}`)
}
)
//implicit function return