let a = Math.random()*100;
let n  = prompt('enter your name:');
a=Number.parseInt(a);
let inpt;
let score=100;
while(inpt!=a){
    score -=1;
    inpt= prompt('enter the number:');
if(inpt ==a){
    console.log('congratulations you have guessed the number');
    console.log(`you guess in ${100-score} attempts`)
}
else if( inpt > a && inpt < 100){
    console.log('your guess is high');
}
else if( inpt < a && inpt > 0){
    console.log("your guess is low");
}
else{
    console.log("enter no.betweeen 1 to 100");
}

}
console.log(`Congratulations ${n} you have won the game with score ${score} points`);