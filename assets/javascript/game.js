var listWords = ["staurday night", "be my lover", "it's my life",
                "mr vain", "tonight's the nigth", "barbie girl",
                "macarena", "rhythm is a dancer", "show me love",
                "gonna make you swet", "i'm too sexy", "i like to move it",
                "we like to party", "another night"];
                
const totalGuess=10;
var gameWord;
var wLength;
var template=[];
var tries = 10;
var choosenLetters = [];
var wins=0;
var userLetter  = "";
var losses=0;
var correctSound = document.createElement("audio");
var incorrectSound = document.createElement("audio");
var winSound = document.createElement("audio");
var looseSound = document.createElement("audio");
var startSound = document.createElement("audio");
correctSound.setAttribute("src", "assets/sounds/found.mp3");
incorrectSound.setAttribute("src","assets/sounds/incorrect.mp3");
winSound.setAttribute("src", "assets/sounds/win.mp3");
looseSound.setAttribute("src", "assets/sounds/loose.mp3");
startSound.setAttribute("src", "assets/sounds/start.mp3");



getWord ();
userLetter.toLowerCase();
document.onkeypress = function (event) {
    userLetter = event.key;
    userLetter.toLowerCase();
    
  
  // userLetter.lowerCase();
    letterFound ();
          if ((template.join("") == gameWord) && (tries>1)){
               wins++;
        winSound.play();
        document.getElementById("youwin-txt").innerHTML = "Awesome!!!";
        setTimeout(getWord,2000);
        

        
    }
   
    else if (tries<1) {
      losses++;
      document.getElementById("youloose-txt").innerHTML = "Try Again";
      looseSound.play();
        setTimeout(getWord,2000);
    }
    stats ();
}

function stats (){
    document.getElementById("template-txt").innerHTML = template.join("");
    document.getElementById("tries-txt").innerHTML  = tries;
    document.getElementById("letters-txt").innerHTML  =  choosenLetters.join(" ");
    document.getElementById("wins-txt").innerHTML  = wins;
    document.getElementById("losses-txt").innerHTML =  losses;
}


function getWord(){
    tries=totalGuess;
    template=[];
    templateEmpty= [];
    choosenLetters = [];
    templateGuessed= [];
    startSound.play();
    document.getElementById("youwin-txt").innerHTML = "";
    document.getElementById("youloose-txt").innerHTML = "";
    gameWord = listWords [Math.floor(Math.random() * listWords.length)];
    console.log(gameWord);
    wLength = gameWord.length;
   createTemplate ();
   stats ();
}


function createTemplate(){ 

    for(i=0, j=wLength; i<j; i++){
        if(gameWord[i] === " "){
            template.push(" ");
        }
        else if (gameWord[i] === "'"){ 
            
            template.push("'");
        }
        else{
            template.push("_");
        }
    }
        document.getElementById("template-txt").innerText = template.join("");
   
}
 

function letterFound (){
    var t= 0;
    
    
    /*var template = [ "_", "_", " ", "_", "_", "_" ];
    var choosenLetters = [];
    var gameWord = "ap ple"; //dummy to work in test only
    var wLength = 6; // dummy to work in test only
    var userLetter ="a"// dummy to work in test only*/
    
      
 if (choosenLetters.includes(userLetter)){
     tries++;
 }
 else{
    for(i=0, j=wLength; i<j; i++) {
        if(gameWord[i] !=" "){
            if (gameWord[i] == userLetter){
                correctSound.play();
                template[i]=userLetter;
                t++;
                
            }
            else {
                                   
            }
        }
    }
    
    choosenLetters.push(userLetter.toUpperCase());
}
if (t==0) {
      tries--;
      incorrectSound.play(); 
       }
  
    
    
}
 
 function final (){
     console.log("win");
 }

 /*function itsWin (){
   
    var final=template.join("");
    console.log (final);
    if (final == gameWord){
        wins++;
        console.log(wins);
    }
    else{
        tries--;
        console.log(tries);

    }*/

 



    
