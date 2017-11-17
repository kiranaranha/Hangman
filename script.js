
//global variables
var word = '';
var easyWords = ['cat', 'dog', 'mouse', 'horse', 'apple', 'banana', 'stop', 'lamp', 'tree', 'happy', 'life', 'dirt',
    'computer'];
var mediumWords = ['operating system', 'procrastination', 'lynx', 'solar system', 'watermelon', 'asparagus',
    'sandwich'];
var hardWords = ['endoplasmic reticulum', 'megalomaniac', 'xylophone', 'australopithecus', 'declaration',
    'extraterrestrial', 'spaghetti', 'advantageous', 'iteration'];
var guesses = 0;
var wrongLetters = [];
var letterList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function letterButtons(){
    document.getElementById("letterBox").innerHTML = '';
    for(var i = 0; i <= 25; i++){
        document.getElementById("letterBox").innerHTML += "<option value=" + "'" + letterList[i] + "'" + ">" + letterList[i] + "</option>";
    }
}

function getWord(){
    var words = [];
    if(document.getElementById("modeBox").value == 1){
        words = easyWords;
    }
    if(document.getElementById("modeBox").value == 2){
        words = mediumWords;
    }
    if(document.getElementById("modeBox").value == 3){
        words = hardWords;
    }
    word = words[Math.floor(Math.random() * words.length)];
    return word;
}

function hangmanImage(){
    return "images/" + guesses + ".jpg";
}

function handleGuess(){
    if(word.includes(document.getElementById("letterBox").value){

    }
}

function startGame(){
    getWord();
    letterButtons();

    document.getElementById("output").innerHTML = word;
    document.getElementById("image").innerHTML = "<img src= " + "'" + hangmanImage() + "'" + "/>";
    document.getElementById("makeGuessButton").innerHTML = "<button class='button' onclick='handleGuess()'>Make guess!</button>";
}