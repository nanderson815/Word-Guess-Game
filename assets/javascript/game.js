
var words = [ "Uga", "Sanford", "Rodrigo", "Hedges", "Kirby", "Chubb", "Gurley",];
var userGuesses = [];

document.onkeydown = function(event){
    var Guess = event.key;
    userGuesses.push(Guess);
    console.log(userGuesses);
}