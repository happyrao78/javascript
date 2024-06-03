//nulish coalescing operator(??) is used to assign default value to a variable if the variable is null or undefined.
let val1=null ?? 'default value w.r.t null';
console.log(val1);
let val2=undefined ?? 'default value w.r.t undefined';
console.log(val2);