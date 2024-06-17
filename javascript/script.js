// DOM SELECTION
let computerScore = document.querySelector('#com-score');
let computerOutcome = document.querySelector('#com-outcome');
let playRock = document.querySelector('[value="ROCK"]');
let playPaper = document.querySelector('[value="PAPER"]');
let playScissors = document.querySelector('[value="SCISSORS"]');
let playerScore = document.querySelector('#player-score');
let playerOutcome = document.querySelector('#player-outcome');
let finalOutcome = document.querySelector('#final');
let playButton = document.querySelector('[value="Play"]');

// GAME COUNT
let gameRound = 5;
// SCORES
let humanScore = 0;
let comScore = 0;
playerScore.textContent = `Player Score: ${ humanScore }`;
computerScore.textContent = `Computer Score: ${ comScore }`;
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
            playerScore.textContent = `Player Score: ${ ++humanScore }`;
            playerOutcome.textContent = 'Player Wins! Rock Beats Scissors';
        } else {
        // Congratulates computer if rock
            computerScore.textContent = `Computer Score: ${ ++comScore }`;
            computerOutcome.textContent = 'Computer Wins! Rock Beats Scissors';
        }
    // Checks player selection and computer selection for paper or rock
    } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK' || playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        // Checks if player's selection is paper
        if(playerSelection === 'PAPER') {
        // Congratulates player if paper
            playerScore.textContent = `Player Score: ${ ++humanScore }`;
            playerOutcome.textContent = 'Player Wins! Paper Beats Rock';
        } else {
        // Congratulates  computer if paper
            computerScore.textContent = `Computer Score: ${ ++comScore }`;
            computerOutcome.textContent = 'Computer Wins! Paper Beats Rock';
        }
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER' || playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        if(playerSelection === 'SCISSORS') {
            playerScore.textContent = `Player Score: ${ ++humanScore }`;
            playerOutcome.textContent = 'Player Wins! Scissors Beats Paper';
        } else {
            computerScore.textContent = `Computer Score: ${ ++comScore }`;
            computerOutcome.textContent = 'Computer Wins! Scissors Beats Paper';
        }
    }
};

function finalWinner() {
    if(humanScore > comScore) {
        return 'HURRAY!!! PLAYER IS THE WINNER'
    } else if(humanScore < comScore) {
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
        playButton.style.display = 'block';
    }
    --gameRound;
};

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

playButton.addEventListener('click', ()=> {
    // RESETS ALL TO DEFAULT
    gameRound = 5;
    humanScore = 0;
    comScore = 0;
    finalOutcome.textContent = '';
    playerOutcome.textContent = '';
    computerOutcome.textContent = '';
    playerScore.textContent = `Player Score: ${ humanScore }`;
    computerScore.textContent = `Computer Score: ${ comScore }`;
    playRock.disabled = false;
    playPaper.disabled = false;
    playScissors.disabled = false;
    playButton.style.display = 'none';
});