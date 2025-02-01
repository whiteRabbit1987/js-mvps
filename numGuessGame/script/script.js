const min = 1;
const max = 10;
const result = Math.floor(Math.random() * (max - min + 1) + min);

let tries = 0;
let guess;

while(true){
    guess = parseInt(prompt(`Guess a number from ${min} to ${max}!`));
   if(isNaN(guess) || guess < min || guess > max){
        alert(`Please enter a valid number in the range of ${min} to ${max}`);
    } else {
        tries++;
        if(guess < result || guess > result){
            alert("Wrong! Guess again!");
        }
        else {
            alert(`Congrats! your guess ${guess} equals ${result}. You win after ${tries}!`);
            break;
        }
    }
}