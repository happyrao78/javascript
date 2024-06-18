const outer = ()=>{
    let name="happy";
    const  inner = ()=>{
        console.log(name);
    }
    inner();//it can access the name variable from outer function
}
outer();