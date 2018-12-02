
// Gets lettersGuessed element from HTML
var lettersGuessed = document.getElementById("lettersGuessed");


// Guesses Counter Variables
var guessesCounter = document.getElementById("guessesCounter");
var guessesRemaining = 10;

// Array of hangman words
var words = ["uga", "sanford", "rodrigo", "hedges", "kirby", "chubb", "gurley", "athens", "dawgs", "bulldawgs"];

// grabs correct letters HTML Id
var correctLetters = document.getElementById("correctLetters");

// Holds Activeword as string
var activeWord;

// Array to hold unique user letter guesses
var userGuesses = [];

// Array to hold guessed letters and dashes for unknown letters.
var wordInProgress = [];

var leftImage = document.getElementById("leftImage");

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
    audio.currentTime = 0;
    // Removes all guessed letters and replace with dashes.
    wordInProgress = [];
    userGuesses = [];
    lettersGuessed.innerHTML = userGuesses.join(", ");
    // Resets number of guesses.
    guessesRemaining = 10;
    guessesCounter.innerHTML = guessesRemaining;
    // Hides the play again button.
    resetButton.style.visibility = "hidden";
    leftImage.src = "assets/images/dummyImage.png";
}

// On Click resets game
var resetButton = document.getElementById("resetButton");
resetButton.onclick = function reset() {
    resetGame();
    selectWord();
    console.log(activeWord);
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
    // If array still contains "-" when user is out of guesses...
    if (wordInProgress.indexOf('—') > -1) {
        if (userGuesses.length == 10) {
            // Alert "you lose!", show reset button.
            alert("You lose! The correct word was: " + activeWord);
            resetButton.style.visibility = "visible";
        }
        // If dashes are gone, than the user has correctly guessed the word.
    } else {
        // play UGA fight song. Show reset button.
        audio.play();
        resetButton.style.visibility = "visible";
        if (activeWord == "rodrigo") {
            leftImage.src = "assets/images/rodrigo.jpg";
        } else if  (activeWord == "uga"){
            leftImage.src = "assets/images/uga.jpg";
        } else if (activeWord == "sanford"){
            leftImage.src = "assets/images/sanford.jpg";
        } else if (activeWord == "hedges"){
            leftImage.src = "assets/images/hedges.jpg";
        } else if (activeWord == "kirby"){
            leftImage.src = "assets/images/kirby.jpg";
        } else if (activeWord == "chubb"){
            leftImage.src = "assets/images/chubb.jpg";
        } else if (activeWord == "gurley"){
            leftImage.src = "assets/images/gurley.jpg";
        } else if (activeWord == "athens"){
            leftImage.src = "assets/images/athens.jpeg";
        } else if (activeWord == "dawgs"){
            leftImage.src = "assets/images/dawgs.jpg";
        } else if (activeWord == "bulldawgs"){
            leftImage.src = "assets/images/bulldawgs.jpg";
        } else {
            leftImage.src = "assets/images/football.jpg";
        }
    }
}