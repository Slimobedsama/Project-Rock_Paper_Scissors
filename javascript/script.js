// DOM SELECTION
let computerScore = document.querySelector('#com-score');
let computerOutcome = document.querySelector('#com-outcome');
let playRock = document.querySelector('[value="ROCK"]');
let playPaper = document.querySelector('[value="PAPER"]');
let playScissors = document.querySelector('[value="SCISSORS"]');
let playerScore = document.querySelector('#player-score');
let playerOutcome = document.querySelector('#player-outcome');
let finalOutcome = document.querySelector('#final');
let play = document.querySelector('[value="Play"]');

// GAME COUNT
let gameRound = 5;
// SCORES
playerScore.textContent = 'Player Score: ' + +0;
computerScore.textContent = 'Computer Score: ' + +0;
// PLAYER CHOICE
let choice;
// COMPUTER RANDOM CHOICE
function computerPlay() {
    // Make a variable to hold for rock, papper and scissor
    let gameWords = ['rock', 'paper', 'scissors'];
    // Randomly selects from the options of words
    let words = gameWords[Math.floor(Math.random() * gameWords.length)];
    return words.toUpperCase();
}

function playRound() {
    // CLEAR THE OUTPUT AFTER EACH ROUND
    playerOutcome.textContent = '';
    computerOutcome.textContent = '';
    // Variable for player's selection
    let playerSelection = choice;
    // Variable for computer's rsndomly selection
    let computerSelection = computerPlay();
    // Checks to see if both players have the same pick
    if(playerSelection === computerSelection) {
        playerOutcome.textContent = 'It\'s a draw';
        computerOutcome.textContent = 'It\'s a draw';
    // Checks for both players selection for rock or scissors
    } else if(playerSelection === 'ROCK' && computerSelection === 'SCISSORS' || playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        // Checks if player's selection is rock or scissor
        if(playerSelection === 'ROCK') {
        // Congratulates player if rock
            playerScore+= 1;
            playerOutcome.textContent = 'Player Wins! Rock beats Scissors';
        } else {
        // Congratulates computer if rock
            computerScore+= 1;
            computerOutcome.textContent = 'You Lose! Rock beats Scissors';
        }
    // Checks player selection and computer selection for paper or rock
    } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK' || playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        // Checks if player's selection is paper
        if(playerSelection === 'PAPER') {
        // Congratulates player if paper
            playerScore+= 1;
            playerOutcome.textContent = 'Player Wins! Paper beats Rock';
        } else {
        // Congratulates  computer if paper
            computerScore+= 1;
            computerOutcome.textContent = 'You Lose! Paper beats Rock';
        }
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER' || playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        if(playerSelection === 'SCISSORS') {
            playerScore+= 1;
            playerOutcome.textContent = 'Player Wins! Scissors beats Paper';
        } else {
            computerScore+= 1;
            computerOutcome.textContent = 'You Lose! Scissors beats Paper';
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
    if(gameRound <= 1) {
        finalOutcome.textContent = finalWinner();
        playRock.disabled = true;
        playPaper.disabled = true;
        playScissors.disabled = true;
        play.style.display = 'block';
    }
    --gameRound;
};

// game()
// EVENT LISTENERS
playRock.addEventListener('click', ()=> {
    choice = playRock.value;
    playRound();
    game();
});

playPaper.addEventListener('click', ()=> {
    choice = playPaper.value;
    playRound();
    game();
});

playScissors.addEventListener('click', ()=> {
    choice = playScissors.value;
    playRound();
    game();
});

play.addEventListener('click', ()=> {});