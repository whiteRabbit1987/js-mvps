const choices = ['rock', 'paper', 'scissors'];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';

    if (playerChoice === computerChoice) {
        result = "It's a tie!"
    }
    else {
        switch (playerChoice) {
            case 'rock':
                result = (computerChoice === 'scissors') ? 'You win!' : 'You Loose!';
                break;
            case 'paper':
                result = (computerChoice === 'rock') ? 'You win!' : 'You Loose!';
                break;
            case 'scissors':
                result = (computerChoice === 'paper') ? 'You win!' : 'You Loose!';
                break;
        }
    }
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove('win', 'loose');
    
    switch(result){
        case 'You win!':
            resultDisplay.classList.add('win');
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case 'You Loose!':
            resultDisplay.classList.add('loose');
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
        default:
    }
}
