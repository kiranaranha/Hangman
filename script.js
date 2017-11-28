
//global variables
var word = '';
var easyWords = ['cat', 'dog', 'mouse', 'horse', 'apple', 'banana', 'stop', 'lamp', 'tree', 'happy', 'life', 'dirt',
    'computer', 'butter', 'igloo', 'panda'];
var mediumWords = ['system', 'procrastination', 'lynx', 'pineapple', 'watermelon', 'asparagus',
    'sandwich', 'peanut', 'monkey', 'giraffe', 'forest'];
var hardWords = ['chicken', 'megalomaniac', 'xylophone', 'australopithecus', 'declaration',
    'extraterrestrial', 'spaghetti', 'advantageous', 'iteration', 'sausage', 'stupendous'];
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
    console.log(guesses);
    document.getElementById("message").innerHTML = '';
    if(wrongLetters.includes(document.getElementById("letterBox").value)){
        document.getElementById("message").innerHTML = 'You have already guessed this letter! Please choose another letter.';
    }else if(word.includes(document.getElementById("letterBox").value)){
        for(var i = 0; i < word.length; i++){
            if(word[i] == document.getElementById("letterBox").value){
                dash = dash.substring(0,i) + document.getElementById("letterBox").value + dash.substring(i + 1, word.length);
            }
        }
        document.getElementById("output").innerHTML = dash;
        if(dash.includes('-') != true){
            document.getElementById("message").innerHTML = 'You win! Start a new game!';
            document.getElementById("makeGuessButton").innerHTML = '';
            document.getElementById("letterMenu").innerHTML = '';
        }
    }else{
        guesses += 1;
        wrongLetters.push(document.getElementById("letterBox").value);
    }
    document.getElementById("wrongLetters").innerHTML = 'Guessed Letter: ' + wrongLetters;
    hangmanImage();
    document.getElementById("image").innerHTML = "<img src= " + "'" + hangmanImage() + "'" + "/>";

    if(guesses == 10){
        document.getElementById("message").innerHTML = 'You loose! HA! HA! HA! Start a new game!';
        document.getElementById("makeGuessButton").innerHTML = '';
        document.getElementById("letterMenu").innerHTML = '';
    }
}

function startGame(){
    guesses = 0;
    wrongLetters = [];
    document.getElementById("wrongLetters").innerHTML = '';
    document.getElementById("message").innerHTML = '';
    getWord();
    document.getElementById("output").innerHTML = wordDisplay();
    document.getElementById("image").innerHTML = "<img src= " + "'" + hangmanImage() + "'" + "/>";
    document.getElementById("letterMenu").innerHTML = "<select id = 'letterBox' onclick='letterBox()'>\n" +
        "        </select>";
    document.getElementById("makeGuessButton").innerHTML = "<button onclick=\"handleGuess()\">Make guess!</button>";
}