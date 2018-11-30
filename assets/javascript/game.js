
var lettersGuessed = document.getElementById("lettersGuessed");
var guessesRemaining = document.getElementById("guessesRemaining");

var words = ["Uga", "Sanford", "Rodrigo", "Hedges", "Kirby", "Chubb", "Gurley",];
var userGuesses = [];


function selectWord() {
    var activeWord = words[Math.floor(Math.random() * words.length)];
    console.log(activeWord);
}
selectWord();

document.onkeydown = function (event) {

    if (userGuesses.length < 10) {
        var Guess = event.key;
        if (userGuesses.indexOf(Guess) === -1) {
            userGuesses.push(Guess);
            lettersGuessed.innerHTML = userGuesses;
        }
    }
}