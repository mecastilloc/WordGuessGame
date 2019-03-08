var listWords = ["saturday night", "be my lover", "it's my life",
    "mr. vain", "tonight's the nigth", "barbie girl",
    "macarena", "rhythm is a dancer", "show me love",
    "gonna make you swet", "i'm too sexy", "i like to move it",
    "we like to party", "another night","get ready for this",
    "no limits", "what is love", "run away", "Rhythm of the Night",
    "i'm the scatman"];
const totalTries = 10;
var gameWord;
var wLength;
var template = [];
var tries = 10;
var choosenLetters = [];
var wins = 0;
var losses = 0;
var correctSound = new Audio("assets/sounds/found.mp3");
var incorrectSound = new Audio("assets/sounds/incorrect.mp3");
var winSound = new Audio("assets/sounds/win.mp3");
var looseSound = new Audio("assets/sounds/loose.mp3");
var startSound = new Audio("assets/sounds/start.mp3");
//helps know if the game is alive or not
var gameAlive = true;

//game begins
getWord();

document.onkeydown = function (event) {
        if (tries > 0 && gameAlive && !/[^a-zA-Z]/.test(event.key)) {
        letterFound(event.key.toUpperCase());
        if ((template.join("") == gameWord) && (tries > 0)) {
            winSound.play();
            wins++;
            document.getElementById("youwin-txt").innerHTML = "Awesome!!!";
            gameAlive = false;
            setTimeout(getWord, 3000);
        }
        else if (tries == 0) {
            looseSound.play();
            losses++;
            document.getElementById("youloose-txt").innerHTML = "Try Again";
            document.getElementById("template-txt").innerHTML = gameWord;
            gameAlive = false;
            setTimeout(getWord, 3000);
        }
        stats();
    }
}

///game Functions
//reset game & gets the word to guess
function getWord() {
    tries = totalTries;
    template = [];
    choosenLetters = [];
    startSound.play();
    document.getElementById("youwin-txt").innerHTML = "";
    document.getElementById("youloose-txt").innerHTML = "";
    gameWord = listWords[Math.floor(Math.random() * listWords.length)].toUpperCase();
    console.log(gameWord);
    wLength = gameWord.length;
    createTemplate();
    stats();
    gameAlive = true;
}
//creates the tamplate whit the underscores
function createTemplate() {
    for (i = 0, j = wLength; i < j; i++) {
        if (gameWord[i] === " ") {
            template.push(" ");
        }
        else if (gameWord[i] === "'") {

            template.push("'");
        }
        else if (gameWord[i] === ".") {

            template.push(".");
        }
        else {
            template.push("_");
        }
    }
    document.getElementById("template-txt").innerHTML = template.join("");
}
//compares the letter from user with the word and pushes it to the Guessed letters array
function letterFound(letter) {
    var t = 0;
    if (tries > 0) {
        if (choosenLetters.includes(letter)) {
            tries++;
        }
        else {
            for (i = 0, j = wLength; i < j; i++) {
                if (gameWord[i] == letter) {
                    correctSound.play();
                    template[i] = letter;
                    t++;
                }
            }
            choosenLetters.push(letter);
            document.getElementById("template-txt").innerHTML = template.join("");
        }
        if (t == 0) {
            tries--;
            incorrectSound.play();
        }
    }
}

//Update stats
function stats() {
    document.getElementById("tries-txt").innerHTML = tries;
    document.getElementById("letters-txt").innerHTML = choosenLetters.join(" ");
    document.getElementById("wins-txt").innerHTML = wins;
    document.getElementById("losses-txt").innerHTML = losses;
}



