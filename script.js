// Game loads
let playerHand = "";
let enemyHand = "";
let rng = "";
let playerPoints = 0;
let enemyPoints = 0;

window.addEventListener("DOMContentloaded", start());

function start() {
    console.log("start");
    gameLoad();
    let playerHand = "";
    let enemyHand = "";
    let rng = "";
    document.querySelector("#win").classList.add("hidden");
    document.querySelector("#lose").classList.add("hidden");
    document.querySelector("#draw").classList.add("hidden");
    document.querySelectorAll(".player").forEach((el) => el.classList.remove("shake"));
}

function gameLoad() {
    document.querySelector(".rock").addEventListener("click", chooseRock);
    document.querySelector(".scissors").addEventListener("click", chooseScissors);
    document.querySelector(".paper").addEventListener("click", choosePaper);
}

// Player must choose 1/3 rock, paper or scissors,
// click on buttons
// playerHand = rock/paper/scissors (1, 2, 3?)

function chooseRock() {
    //add Rock to playerHand
    playerHand = "rock";
    enemyChoose();
    console.log("rock");
}

function chooseScissors() {
    //add Scissors to playerHand
    playerHand = "scissors";
    enemyChoose();
    console.log("scissors");
}

function choosePaper() {
    //add Paper to Playerhand
    playerHand = "paper";
    enemyChoose();
    console.log("paper")
}

// Game must randomly generate enemy hand, 1/3 rock, paper or scissors

function enemyChoose() {
    //rng * 3 + 1 
    rng = Math.floor(Math.random() * 3 + 1);
    //add number to enemyHand
    if (rng === 1) {
        enemyHand = "rock"
        console.log("enemyRock")
    } else if (rng === 2) {
        enemyHand = "scissors"
        console.log("enemyScissors")
    } else if (rng === 3) {
        enemyHand = "paper"
        console.log("enemyPaper")
    }
    console.log("enemy chosen")
    shake();
}


//show hands

function shake() {
    console.log("shakeitbabee")
    document.querySelectorAll(".player").forEach((el) => el.classList.add("shake"));
}

document.querySelectorAll("#player1").forEach((el) => el.addEventListener("animationend", decideWinner))
//decide winner 
// if Else based on playerHand, one function per playHand option, 
// resulting in three options based on enemyHand (Win Lose Draw)

//if playerHand === Rock {
//    if enemyHand=== Rock {
//     draw()
//     }
//     else if enemyHand === Scissors {
//         win()
//     }
//     else if enemyHand === Paper {
//     lose()
//     }
// // }
function decideWinner() {
    console.log("decideWinner")
    if (playerHand === "rock") {
        if (enemyHand === "rock") {
            youDraw()
        } else if (enemyHand === "scissors") {
            youWin()
        } else if (enemyHand === "paper") {
            youLose()
        }

    } else if (playerHand === "scissors") {
        if (enemyHand === "rock") {
            youLose()
        } else if (enemyHand === "scissors") {
            youDraw();
        } else if (enemyHand === "paper") {
            youWin();
        }

    } else if (playerHand === "paper") {
        if (enemyHand === "rock") {
            youWin()
        } else if (enemyHand === "scissors") {
            youLose()
        } else if (enemyHand === "paper") {
            youDraw()
        }
    }
}

// round concludes with youWin youLose or youDraw
// player score must be updated 
// if win ++
// if lose —
// if draw nothing

function youWin() {
    playerPoints++;
    //remove class from win
    console.log(playerPoints);
    console.log(enemyPoints);
    document.querySelector("#win").classList.remove("hidden");
    console.log("YOUWIN")
}

function youDraw() {
    //remove class from draw
    console.log(playerPoints);
    console.log(enemyPoints);
    document.querySelector("#draw").classList.remove("hidden");
    console.log("YOUDRAW")
}

function youLose() {
    enemyPoints++;
    console.log(playerPoints);
    console.log(enemyPoints);
    //remove class from lose
    document.querySelector("#lose").classList.remove("hidden");
    console.log("YOULOSE")
}

document.querySelector("#gamefield").addEventListener("click", tryAgain);

//reset
function tryAgain() {

    console.log("tryAgain");
    if (playerPoints > 4) {
        gameWin();
    } else if (enemyPoints > 4) {
        gameOver();
    } else {
        start();
    }
}
//overall winner determined
// if playerScore === 5 game WIN
// if enemyScore === 5 game LOSE 

function gameOver() {
    window.alert("GAME OVER BITCH");
}

function gameWin() {
    window.alert("YOU WIN BITCH");
}