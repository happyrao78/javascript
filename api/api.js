let  picture;
const requestUrl = 'https://api.github.com/users/happyrao78'
const xhr = new XMLHttpRequest()
xhr.open('GET',requestUrl)
xhr.onreadystatechange= ()=>{
    console.log(xhr.readyState);
    if(xhr.readyState ===4){
        const data = JSON.parse(xhr.responseText)
         picture = data.avatar_url
        // console.log(picture)
    }
}

const div = document.querySelector('.image')
 const web = document.querySelector('#btn').addEventListener('click', ()=>{
    div.innerHTML=`<img src=${picture} alt="happy" height="300px" width="300px" style= border-radius:20px></img>`
})

xhr.send()