const mymap =  new Map();
mymap.set("IN","INDIA")
mymap.set("UK","UNITED KINGDOM")
mymap.set("US","UNITED STATES")
// console.log(mymap)
//sets an unique order and objects cant be iterated through map
//accessing through for of loop
for(const [key,value] of mymap){
    console.log(`${key} is the shortcut for the country : ${value}`);
}