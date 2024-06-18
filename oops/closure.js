const user =()=>{
    let name ='happy yadav';
    const display = ()=>{
        console.log(name);
    }
    return display;//returning the full function along with its variable
}
const print =user();
print();//it can access the name variable from user function