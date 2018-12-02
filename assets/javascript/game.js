
// Gets lettersGuessed element from HTML
var lettersGuessed = document.getElementById("lettersGuessed");


// Guesses Counter Variables
var guessesCounter = document.getElementById("guessesCounter");
var guessesRemaining = 10;

// Array of hangman words
var words = ["uga", "sanford", "rodrigo", "hedges", "kirby", "chubb", "gurley", "athens", "dawgs", "georgia", "sec", "football", "bulldawgs"];

// grabs correct letters HTML Id
var correctLetters = document.getElementById("correctLetters");

// Holds Activeword as string
var activeWord;

// Array to hold unique user letter guesses
var userGuesses = [];

// Array to hold guessed letters and dashes for unknown letters.
var wordInProgress = [];

// Links audio
var audio = new Audio('assets/audio/fightsong.mp3');

// Selects random word from words array on load
function selectWord() {
    activeWord = words[Math.floor(Math.random() * words.length)];
    // Replaces word letters with dashes until the correct character is guessed.
    for (i = 0; i < activeWord.length; i++) {
        var unknown = "—";
        wordInProgress.push(unknown);
        correctLetters.innerHTML = wordInProgress.join("  ");
    }
}
selectWord();
console.log(activeWord);

// Resets the game function
function resetGame() {
    // Stops the music.
    audio.pause();
    // Removes all guessed letters and replace with dashes.
    wordInProgress = [];
    userGuesses = [];
    lettersGuessed.innerHTML = userGuesses.join(", ");
    // Resets number of guesses.
    guessesRemaining = 10;
    guessesCounter.innerHTML = guessesRemaining;
    // Hides the play again button.
    resetButton.style.visibility = "hidden";
}

// On Click resets game
var resetButton = document.getElementById("resetButton");
resetButton.onclick = function reset() {
    resetGame();
    selectWord();
}

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

// Checks to see if guess is correct by looking for "-" in wordInProgress array.
document.onkeyup = function (event) {
    if (wordInProgress.indexOf('—') > -1) {
        if (userGuesses.length == 10) {
            alert("You lose! The correct word was: " + activeWord);
            resetButton.style.visibility = "visible";
        }
    } else {
        console.log("guess is correct.");
        audio.play();
        resetButton.style.visibility = "visible";
    }
}