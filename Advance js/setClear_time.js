const text = function(){
    document.body.innerHTML = "<h1>ram ram bhai</h1>"
}
const deploy = setTimeout(text,2000)
document.querySelector('#btn').addEventListener('click',()=>{
    clearTimeout(deploy)
    document.body.innerHTML = "<a href='https://www.happyrao.tech'>my website</a>"
})