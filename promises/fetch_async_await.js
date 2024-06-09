//using the async await
async function fetched(){
    try{
    const response = await fetch('https://api.github.com/users/hishitagupta')
    const data =  await response.json()//converts the string to json
    console.log(data.avatar_url)
}
catch(error){
    console.log("There was an error while  fetching the URL for the github account")
}
finally{
    console.log('Successful')
}
}
fetched();