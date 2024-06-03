// SYNCHRONOUS ACTIONS
// let a= prompt("enter name");

// let b= prompt("enter age");
// let c = prompt("enter favourite color");
// alert(`${a} is ${b}years old and likes the ${c}color the most`);


// ASYNCHRONOUS ACTIONS
// alert("start");
// setTimeout(function (){
//     alert("this is a timeout function");
// },5000);
// alert("end");

//SIMPLE CALLBACK FUNCTION
function load(src,call){
    let script  = document.createElement('script');//created a script tag in html body
    script.src = src;
    script.onload = function(){
        console.log("script loaded " + src);
        call(null,src);
       
    }
    script.onerror = function(){
console.log("script not loaded" + src);
call(new error("could not load script"));
    }
    document.body.appendChild(script);
}
function goodmrng(error,src){
    if(error){
        console.log("error"+ src  );
    }
    else{
    console.log("hi, good morning from happy yadav");
}
}
load("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz",goodmrng);