let playerScore = 0;
let computerScore = 0;
function computerPlay() {
    // Make a variable to hold for rock, papper and scissor
    let gameWords = ['Rock', 'Paper', 'Scissors'];
    // Randomly selects from the options of words
    let words = gameWords[Math.floor(Math.random() * gameWords.length)];
    return words.toUpperCase();
}

function playRound() {
    // Variable for player's selection
    let playerSelection = prompt('Choose Between Rock, Paper Or Scissors').toUpperCase();
    // Variable for computer's rsndomly selection
    let computerSelection = computerPlay();
    // Checks to see if both players have the same pick
    if(playerSelection === computerSelection) {
        return 'It\'s a draw'
    // Checks for both players selection for rock or scissors
    } else if(playerSelection === 'ROCK' && computerSelection === 'SCISSORS' || computerSelection === 'ROCK' && playerSelection === 'SCISSORS') {
        // Checks if player's selection is rock or scissor
        if(playerSelection === 'ROCK') {
        // Congratulates player if rock
            playerScore+= 1;
            return 'Player Wins! Rock beats Scissors'
        } else {
        // Congratulates computer if rock
            computerScore+= 1;
            return 'You Lose! Rock beats Scissors'
        }
    // Checks player selection and computer selection for paper or rock
    } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK' || computerSelection === 'PAPER' && playerSelection === 'ROCK') {
        // Checks if player's selection is paper
        if(playerSelection === 'PAPER') {
        // Congratulates player if paper
            playerScore+= 1;
            return 'Player Wins! Paper beats Rock'
        } else {
        // Congratulates  computer if paper
            computerScore+= 1;
            return 'You Lose! Paper beats Rock'
        }
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER' || computerSelection === 'SCISSORS' && playerSelection === 'PAPER') {
        if(playerSelection === 'SCISSORS') {
            playerScore+= 1;
            return 'Player Wins! Scissors beats Paper'
        } else {
            computerScore+= 1;
            return 'You Lose! Scissors beats Paper'
        }
    }
};

function finalWinner() {
    if(playerScore > computerScore) {
        return 'HURRAY!!! PLAYER IS THE WINNER'
    } else if(playerScore < computerScore) {
        return 'HURRAY!!! COMPUTER IS THE WINNER'
    } else {
        return 'OOPS! GAME ENDED IN A DRAW'
    }
};

function game() {
    for(let i = 1; i <= 5; i++) {
       console.log(playRound());
    }
    console.log(finalWinner());
};

game()