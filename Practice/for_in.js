const myobject ={
    js: 'Javascript',
    cpp : "C++",
    PY :'Python',
    java:'java',
    csharp: 'c#'
}
for(const key in myobject){
    console.log(`"${key}" is the extension for the language=> ${myobject[key]}`)
}