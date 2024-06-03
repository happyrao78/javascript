// let  first = document.querySelector('.happy');
// first.style.color = 'red';
// let first= document.body.firstElementChild.firstElementChild.firstElementChild;
// first.style.color='blue'
// let second = document.body.firstElementChild.firstElementChild.lastElementChild;
// second.style.color='green'
Array.from(document.getElementsByTagName("a")).forEach((element) => {
    element.style.color='cyan';
});
