function computerPlay() {
    // Make a variable to hold for rock, papper and scissor
    let gameWords = ['Rock', 'Paper', 'Scissors'];
    // Randomly selects from the options of words
    let words = gameWords[Math.floor(Math.random() * gameWords.length)];
    return words;
}
console.log(computerPlay());

