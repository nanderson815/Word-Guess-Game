
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
    // Only Allows the user 10 guesses.
    if (userGuesses.length < 10) {
        // logs user keystroke as Guess
        var Guess = event.key;
        // Only records unique characters in userGuesses array, which displays in html.
        if (userGuesses.indexOf(Guess) === -1) {
            userGuesses.push(Guess);
            // For loop to check if the selecter letter is contained anywhere in the activeWord
            for (i = 0; i < wordInProgress.length; i++) {
                // If letter is included in activeWord, replaces "-" with correctly guessed letter.
                if (activeWord[i] === Guess) {
                    wordInProgress[i] = Guess;
                }
                // Reprints the Correct letters Array to show correct characters guessed.
                correctLetters.innerHTML = wordInProgress.join("  ");
            }
            // Prints all guessed letters to HTML
            lettersGuessed.innerHTML = userGuesses.join(", ");
            
            // Counts down remaining guesses by 1 after each keydown.
            guessesRemaining -= 1;
            guessesCounter.innerHTML = guessesRemaining;
        }
    }
}