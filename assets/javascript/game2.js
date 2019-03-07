var listWords = ["staurday night", "be my lover", "it's my life",
    "mr vain", "tonight's the nigth", "barbie girl",
    "macarena", "rhythm is a dancer", "show me love",
    "gonna make you swet", "i'm too sexy", "i like to move it",
    "we like to party", "another night"];

const totalTries = 10;
var gameWord;
var wLength;
var template = [];
var tries = 10;
var choosenLetters = [];
var wins = 0;
var userLetter = "";
var losses = 0;
var correctSound = document.createElement("audio");
var incorrectSound = document.createElement("audio");
var winSound = document.createElement("audio");
var looseSound = document.createElement("audio");
var startSound = document.createElement("audio");
correctSound.setAttribute("src", "assets/sounds/found.mp3");
incorrectSound.setAttribute("src", "assets/sounds/incorrect.mp3");
winSound.setAttribute("src", "assets/sounds/win.mp3");
looseSound.setAttribute("src", "assets/sounds/loose.mp3");
startSound.setAttribute("src", "assets/sounds/start.mp3");
//helps know if the game is alive or not
var gameAlive=false;


//document.getElementById("myBtn").addEventListener("click", myFunction);

//function myFunction() {
    

getWord();
    
   
    
//}


        
    document.onkeydown = function (event) {
        //userLetter = event.key.toUpperCase();
      if (tries>0 && !gameAlive){
       if (!/[^a-zA-Z]/.test(event.key)) {
            letterFound(event.key.toUpperCase());

            if ((template.join("") == gameWord) && (tries > 0)) {
                winSound.play();
                wins++;
             document.getElementById("youwin-txt").innerHTML = "Awesome!!!";
             gameAlive=true;
             setTimeout(getWord,3000);
                
            }
            else if (tries ==0) {
                looseSound.play();
                losses++;
                document.getElementById("youloose-txt").innerHTML = "Try Again";
                document.getElementById("template-txt").innerHTML = gameWord;
                gameAlive=true;
                setTimeout(getWord,3000);
                
               
            }
            
            stats();
        }
    
    }
   // }
   
    }
   


  

function stats() {
    document.getElementById("tries-txt").innerHTML = tries;
    document.getElementById("letters-txt").innerHTML = choosenLetters.join(" ");
    document.getElementById("wins-txt").innerHTML = wins;
    document.getElementById("losses-txt").innerHTML = losses;
}

function getWord() {

    tries = totalTries;
    template = [];
    templateEmpty = [];
    choosenLetters = [];
    templateGuessed = [];
    startSound.play();
    document.getElementById("youwin-txt").innerHTML = "";
    document.getElementById("youloose-txt").innerHTML = "";
    gameWord = listWords [Math.floor(Math.random() * listWords.length)].toUpperCase();
    console.log(gameWord);
    wLength = gameWord.length;
    createTemplate();
    stats();
    gameAlive=false;
}

function createTemplate() {

    for (i = 0, j = wLength; i < j; i++) {
        if (gameWord[i] === " ") {
            template.push(" ");
        }
        else if (gameWord[i] === "'") {

            template.push("'");
        }
        else {
            template.push("_");
        }
    }
    document.getElementById("template-txt").innerHTML = template.join("");
    }

function letterFound(letter) {
    var t = 0;
    console.log(choosenLetters.join(""));
        console.log(choosenLetters.join(letter));
    if(tries>0){
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




