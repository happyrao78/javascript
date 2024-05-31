//function with objects
function newobj(object){
    console.log(`Name: ${object.name}, website: ${object.website} and email: ${object.email}`);
}
newobj({
    name:"happy yadav",
    email:"happyrao7091@google.com",
    website:"https://www.happyrao.tech"
})
// function with arrays
function array(newArray){
    console.log(`first element in the array is : ${newArray[0]} and it has total ${newArray.length} elements`)
}
array([10,20,30,40,50]);