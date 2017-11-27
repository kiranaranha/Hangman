
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
var dash = '';

function letterBox(){
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

function wordDisplay(){
    dash = '';
    for(var i = 0; i < word.length; i++){
        dash += '-';
    }
    return dash;
}

function handleGuess(){
    document.getElementById("message").innerHTML = '';
    if(wrongLetters.includes(document.getElementById("letterBox").value)){
        document.getElementById("message").innerHTML = 'You have already guessed this letter! Please choose another letter.';
    }else if(word.includes(document.getElementById("letterBox").value)){
        for(var i = 0; i < word.length; i++){
            if(word[i] == document.getElementById("letterBox").value){
                dash.replaceAt(i, document.getElementById("letterBox").value);
            }
        }
        document.getElementById("output").innerHTML = dash;
        console.log(dash);
    }else{
        guesses += 1;
        wrongLetters.push(document.getElementById("letterBox").value);
    }
    document.getElementById("wrongLetters").innerHTML = 'Guessed Letter: ' + wrongLetters;
    hangmanImage();
    document.getElementById("image").innerHTML = "<img src= " + "'" + hangmanImage() + "'" + "/>";
}

function startGame(){
    guesses = 0;
    wrongLetters = [];
    document.getElementById("wrongLetters").innerHTML = '';
    document.getElementById("message").innerHTML = '';
    getWord();
    document.getElementById("output").innerHTML = word + wordDisplay();
    document.getElementById("image").innerHTML = "<img src= " + "'" + hangmanImage() + "'" + "/>";
    document.getElementById("letterMenu").innerHTML = "<select id = 'letterBox' onclick='letterBox()'>\n" +
        "        </select>";
    document.getElementById("makeGuessButton").innerHTML = "<button onclick=\"handleGuess()\">Make guess!</button>";
}