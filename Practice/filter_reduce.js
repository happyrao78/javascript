const books=[
    {
        id:1,name:"book1", price:5000
    },
    {
        id:2,name:"book2", price:6000
    },
    {
        id:3,name:"book3", price:7000
    },
    {
        id:4,name:"book4", price:8000
    }
]
//explicit function return kyuki return lagaya hai and curly braces bhi lagaye hai
const newbook = books.filter((b)=> { b.id >2  && b.price >= 7000}).reduce((acc,cost)=> acc + cost.price,0)
console.table(newbook);