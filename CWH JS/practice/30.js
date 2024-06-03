let c = document.getElementById("first");
console.log(c.dataset);
let a = document.getElementsByTagName('body')[0];
let div = document.createElement('p');
div.innerText = '<p>Hi myself  happy yadav</p>'
a.appendChild(div);
a.replaceWith(nav);