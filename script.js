function computerPlay() {
    // Make a variable to hold for rock, papper and scissor
    let gameWords = ['Rock', 'Paper', 'Scissors'];
    // Randomly selects from the options of words
    let words = gameWords[Math.floor(Math.random() * gameWords.length)];
    return words.toUpperCase();
}
// console.log(computerPlay());

function playRound() {
    // Checks to see if both players have the same pick
    if(playerSelection === computerSelection) {
        return 'It\'s a draw'
    // Checks for both players selection for rock or scissors
    } else if(playerSelection === 'ROCK' && computerSelection === 'SCISSORS' || computerSelection === 'ROCK' && playerSelection === 'SCISSORS') {
        // Checks if player's selection is rock or scissor
        if(playerSelection === 'ROCK') {
        // Congratulates player's selection if rock
            return 'Player Wins! Rock beats Scissors'
        } else {
            return 'You Lose! Rock beats Scissors'
        }
    } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK' || computerSelection === 'PAPER' && playerSelection === 'ROCK') {
        if(playerSelection === 'PAPER') {
            return 'Player Wins! Paper beats Rock'
        } else {
            return 'You Lose! Paper beats Rock'
        }
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER' || computerSelection === 'SCISSORS' && playerSelection === 'PAPER') {
        if(playerSelection === 'SCISSORS') {
            return 'Player Wins! Scissors beats Paper'
        } else {
            return 'You Lose! Scissors beats Paper'
        }
    }
}

let playerSelection = prompt('Choose Between Rock, Paper Or Scissors').toUpperCase();
let computerSelection = computerPlay();
console.log(playRound())