//Game object
var game = {
    template: [],
    choosenLetters: [],
    gameWord: "",
    wLength: 0,
    tries: 10,
    wins: 0,
    losses: 0,
    gameAlive: true,
    totalTries: 10,
    correctSound: new Audio("assets/sounds/found.mp3"),
    incorrectSound: new Audio("assets/sounds/incorrect.mp3"),
    winSound: new Audio("assets/sounds/win.mp3"),
    looseSound: new Audio("assets/sounds/loose.mp3"),
    startSound: new Audio("assets/sounds/start.mp3"),
    listWords: ["saturday night", "be my lover", "it's my life",
    "mr. vain", "tonight's the night", "barbie girl",
    "macarena", "rhythm is a dancer", "show me love",
    "gonna make you sweat", "i'm too sexy", "i like to move it",
    "we like to party", "another night","get ready for this",
    "no limits", "what is love", "run away", "rhythm of the night",
    "i'm the scatman", "pump up the jam", "right in the night",
    "beach ball", "the night train", "children", "two times",
    "angel of love", "gimme yourself","u got to let the music",
    "the summer is magic", "x files", "up and down", "think about the way",
    "it's a rainy day"],
    //reset game & gets the word to guess
    getWord: function () {
        game.tries = game.totalTries;
        game.template = [];
        game.choosenLetters = [];
        game.startSound.play();
        document.getElementById("youwin-txt").innerHTML = "";
        document.getElementById("youloose-txt").innerHTML = "";
        game.gameWord = game.listWords[Math.floor(Math.random() * game.listWords.length)].toUpperCase();
        console.log(game.gameWord);
        game.wLength = game.gameWord.length;
        game.createTemplate();
        game.stats();
        game.gameAlive = true;
    },
    //creates the tamplate whit the underscores
    createTemplate: function () {
        for (i = 0, j = game.wLength; i < j; i++) {
            if (game.gameWord[i] === " ") {
                game.template.push(" ");
            }
            else if (game.gameWord[i] === "'") {

                game.template.push("'");
            }
            else if (game.gameWord[i] === ".") {

                game.template.push(".");
            }
            else {
                game.template.push("_");
            }
        }
        document.getElementById("template-txt").innerHTML = game.template.join("");
    },
    //compares the letter from user with the word and pushes it to the Guessed letters array
    letterFound: function (letter) {
        var t = 0;
        if (game.tries > 0) {
            if (game.choosenLetters.includes(letter)) {
                game.tries++;
            }
            else {
                for (i = 0, j = game.wLength; i < j; i++) {
                    if (game.gameWord[i] == letter) {
                        game.correctSound.play();
                        game.template[i] = letter;
                        t++;
                    }
                }
                game.choosenLetters.push(letter);
                document.getElementById("template-txt").innerHTML = game.template.join("");
            }
            if (t == 0) {
                game.tries--;
                game.incorrectSound.play();
            }
        }
    },
    //update game stats
    stats: function () {
        document.getElementById("tries-txt").innerHTML = game.tries;
        document.getElementById("letters-txt").innerHTML = game.choosenLetters.join(" ");
        document.getElementById("wins-txt").innerHTML = game.wins;
        document.getElementById("losses-txt").innerHTML = game.losses;
    },
    //main logic of the game
    mainLogic: function () {
        if (game.tries > 0 && game.gameAlive && !/[^a-zA-Z]/.test(event.key)) {
            game.letterFound(event.key.toUpperCase());
            if ((game.template.join("") == game.gameWord) && (game.tries > 0)) {
                game.winSound.play();
                game.wins++;
                document.getElementById("youwin-txt").innerHTML = "Awesome!!!";
                game.gameAlive = false;
                setTimeout(game.getWord, 3000);
            }
            else if (game.tries == 0) {
                game.looseSound.play();
                game.losses++;
                document.getElementById("youloose-txt").innerHTML = "Try Again";
                document.getElementById("template-txt").innerHTML = game.gameWord;
                game.gameAlive = false;
                setTimeout(game.getWord, 3000);
            }
            game.stats();
        }
    },
}

//game begins
game.getWord();

document.onkeydown = function (event) {

    game.mainLogic();
}
















