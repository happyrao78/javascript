let c  = function(e){
    alert("hello hishita");
}

let d = function(e){
    alert("hello happy");
}

let x = document.getElementsByTagName("button")[0];
x.addEventListener("click",c);
x.addEventListener("click",d);
let pro = prompt("please enter your choice: 1 or 2 to remove event listener");
pro = parseInt(pro);
if(pro == 1){
    x.removeEventListener("click",d);
}
else{
    x.removeEventListener("click",c);
}

