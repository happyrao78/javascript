//let sum = add(1,2,3,4,5,6,7,8,9,10);
// console.log(sum);

// high order functions & call back function

// function add(a, b, cb) {
//    let result = a + b;
//    cb(result);
// }
// add(100, 200, val => {
//    console.log(val)
// });

// //returning function from function
//  function multiplication(a,b,cb){
//    let product = a*b;
//    cb (product);// cb is a callback function that is passed as an argument to the high order function i.e multiplication function
//    return () => console.log(product);
//  }
//  let newFunction = multiplication(400,100, () => {});
//  newFunction();

//arrays in javascript
// const employees = ['Happy' , 50000, true, '😍' ];
// employees.push('raosab');//adds yadav to the end
// employees.reverse();//reverse the elements in array
// employees.pop();//removes the last element from array
// console.log(employees);// displays the whole array
// console.log(employees[0]);//displays the first element of array i.e happy

//HIGH ORDER ARRAY FUNCTION:
// const number=[1,2,3,4,5,6,7,8,9,10];
//.foreach
// const result = number.forEach((val) => console.log(val));
// console.log(result);
//.map
// function double(n){
//     return n*2;
// }
// let newArr = number.map(double);
// console.log(newArr);
//.find
// let ans = number.find((num) => num === 2);//=== always returns a boolean value
// console.log(ans);
//.filter
// let ans = number.filter((num) => num % 2 ==0);
// console.log(ans);

//.slice & splice
// let ans = number.slice(1,4);
// console.log(ans);

// let ans = number.  splice(1,6); // 1 to 6th index elements are removed 
// console.log(ans);
// console.log(number);

