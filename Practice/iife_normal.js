//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS
(function print(){
    console.log("DataBase is connected  Successfully")
})();
//IIFE is a function that is executed right after it is created
((string) => {
    console.log(`${string} is also connected successfully`)
})("Backend Server");