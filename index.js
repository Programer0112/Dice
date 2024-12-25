document.querySelector("button").addEventListener("click", rollDice);

var randomNum1 = Math.round(Math.random() * 5) + 1;
var randomNum2 = Math.round(Math.random() * 5) + 1;

document.querySelector(".img1").setAttribute("src", "./dice6.png");
document.querySelector(".img2").setAttribute("src", "./dice6.png");

function rollDice() {   
    randomNum1 = Math.round(Math.random() * 5) + 1;
    randomNum2 = Math.round(Math.random() * 5) + 1;

    document.querySelector(".img1").setAttribute("src", "./dice" + randomNum1 + ".png");
    document.querySelector(".img2").setAttribute("src", "./dice" + randomNum2 + ".png");

    if (randomNum1 > randomNum2) {
        document.querySelector("h1").innerHTML = "Player1 Wins";
    }
    else if (randomNum2 > randomNum1) {
        document.querySelector("h1").innerHTML = "Player2 Wins";
    }
    else {
        document.querySelector("h1").innerHTML = "Draw";
    }
}