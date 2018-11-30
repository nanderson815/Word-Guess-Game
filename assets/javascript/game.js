
// Gets lettersGuessed element from HTML
var lettersGuessed = document.getElementById("lettersGuessed");


// Guesses Counter Variables
var guessesCounter = document.getElementById("guessesCounter");
var guessesRemaining = 10;

// Array of hangman words
var words = ["uga", "sanford", "rodrigo", "hedges", "kirby", "chubb", "gurley",];

// grabs correct letters HTML Id
var correctLetters = document.getElementById("correctLetters");

// Holds Activeword as string
var activeWord;

// Array to hold unique user letter guesses
var userGuesses = [];

// Array to hold guessed letters and dashes for unknown letters.
var wordInProgress = [];

// Selects random word from words array on load
function selectWord() {
    activeWord = words[Math.floor(Math.random() * words.length)];
    for (i = 0; i < activeWord.length; i++) {
        var unknown = "—";
        wordInProgress.push(unknown);
        correctLetters.innerHTML = wordInProgress.join("  ");
    }
}
selectWord();
console.log(activeWord);


// executes on key down....
document.onkeydown = function (event) {

    if (userGuesses.length < 10) {
        var Guess = event.key;
        if (userGuesses.indexOf(Guess) === -1) {
            userGuesses.push(Guess);

            for (i = 0; i < wordInProgress.length; i++) {
                if (activeWord[i] === Guess) {
                    wordInProgress[i] = Guess;
                }
                correctLetters.innerHTML = wordInProgress.join("  ");
            }

            lettersGuessed.innerHTML = userGuesses.join(", ");
            guessesRemaining -= 1;
            guessesCounter.innerHTML = guessesRemaining;
        }
    }
}