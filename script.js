
//global variables
var word = '';
var easyWords = ['cat', 'dog', 'mouse', 'horse', 'apple', 'banana', 'stop', 'lamp', 'tree', 'happy', 'life', 'dirt', 'computer'];
var mediumWords = ['operating system', 'procrastination', 'lynx', 'solar system', 'watermelon', 'asparagus', 'sandwich'];
var hardWords = ['endoplasmic reticulum', 'megalomaniac', 'xylophone', 'australopithecus', 'declaration', 'extraterrestrial', 'organisms', 'advantageous', 'iteration']
var guesses = 0;

function letterButtons(){
    var letterList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    document.getElementById("letterButtons").innerHTML = '';
    for(var i = 0; i <= 25; i++){
        document.getElementById("letterButtons").innerHTML += "<button name=" + "'" + letterList[i] + "'" + "class='button' onclick='handleGuess()'>" + letterList[i] + "</button>"
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

}

function startGame(){
    getWord();
    letterButtons();
    document.getElementById("output").innerHTML = word;
    document.getElementById("image").innerHTML = "<img src=" + "'" + hangmanImage() + "'" + "/>";
}