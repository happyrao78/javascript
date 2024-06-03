let myjoke =  [
{
    "error": false,
    "amount": 10,
    "joke": [
        {
            "category": "Programming",
            "type": "single",
            "joke": "\"We messed up the keming again guys.\"",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 20,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "single",
            "joke": "I have a fish that can breakdance! Only for 20 seconds though, and only once.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 237,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "There are only 10 kinds of people in this world: those who know binary and those who don't.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 35,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Saying that Java is nice because it works on every OS is like saying that anal sex is nice because it works on every gender.",
            "flags": {
                "nsfw": true,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": true
            },
            "id": 30,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Misc",
            "type": "single",
            "joke": "In Soviet Russia, gay sex gets you arrested. In America, getting arrested gets you gay sex.",
            "flags": {
                "nsfw": true,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": true
            },
            "safe": false,
            "id": 289,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "single",
            "joke": "I hate double standards. Burn a body at a crematorium, you're \"being a respectful friend.\" Do it at home and you're \"destroying evidence.\"",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": true
            },
            "safe": false,
            "id": 274,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "single",
            "joke": "My ex had an accident. I told the paramedics the wrong blood type for her. She'll finally experience what rejection is really like.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 152,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Java is like Alzheimer's, it starts off slow, but eventually, your memory is gone.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 27,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Four engineers get into a car. The car won't start.\nThe Mechanical engineer says \"It's a broken starter\".\nThe Electrical engineer says \"Dead battery\".\nThe Chemical engineer says \"Impurities in the gasoline\".\nThe IT engineer says \"Hey guys, I have an idea: How about we all get out of the car and get back in\".",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 132,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Pun",
            "type": "single",
            "joke": "Two fish in a tank. One turns to the other and says, \"Do you know how to drive this thing?\"",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 185,
            "safe": true,
            "lang": "en"
        }
    ]
}
]
function fetchJoke(){
let index = Math.floor(Math.random() * myjoke[0].amount);
console.log(index);
document.getElementById('joke').innerHTML = myjoke[0].joke[index].joke;
}
document.getElementById("btn").addEventListener("click", fetchJoke);
fetchJoke();