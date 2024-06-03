let a = document.getElementsByClassName("container")[0];
a.onclick =() => {
    let b= document.getElementsByClassName("bodyinside")[0];
    b.innerHTML= "replaced the class named happy with this text"
}
let c= document.getElementsByTagName("button")[0];
c.onclick = () =>{
    c.innerHTML = "clicked";
}