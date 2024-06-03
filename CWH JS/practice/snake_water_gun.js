let user = prompt('enter s for snake, w for water, g for gun');
let choices = ['s', 'w', 'g'];
const randomIndex = Math.floor(Math.random() * choices.length);

let computer = choices[randomIndex];

function game(user,computer){
    if(user === computer){
        alert ("its a tie");
    }
    else if(user === 's'){
         computer ==='w' ? alert("user wins") : alert("computer wins");
    }
    else if(user === 'w'){
        computer ==='g' ? alert("user wins") : alert("computer wins");
    }
    else if(user === 'g'){
         computer ==='s' ? alert("user wins") : alert("computer wins");
    }
    
}
game(user,computer);