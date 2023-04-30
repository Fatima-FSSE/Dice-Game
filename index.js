function rollDice(){

var player1 = Math.floor(Math.random()*6)+1;
var player2 = Math.floor(Math.random()*6)+1;

var randomDiceImage = "images/dice" + player1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage);

var image2 = document.querySelectorAll("img")[1];

randomDiceImage = "images/dice" + player2 + ".png";

image2.setAttribute("src", randomDiceImage);

if(player1 > player2){
    document.querySelector("h1").innerHTML = "🚩Player1 Wins!";
}
else if (player2 > player1){
    document.querySelector("h1").innerHTML = "player2 Wins!🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw!🚩";
}

}