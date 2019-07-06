// // Greeting player
// var greetings = prompt("Please enter your name.")
// var playerName = alert("Hello " + greetings + " and welcome to Joe's Psychic Game.  Good luck and have fun!")

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var letterGuessed = [];

// alphabet array
var alphabet = "abcdefghijklmnopqrstuvwxyz";

// Generating random letter
var randomLetter = alphabet[Math.ceil(Math.random()*alphabet.length)];

// Detect player key hit
document.onkeypress = function(event) {
    var userGuess = event.key;

    if(userGuess === randomLetter){
        wins++;
    }else{
        guesses--;
    }

    if(guesses === 0){
        losses++
    }
    
    // Output
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;

} 
