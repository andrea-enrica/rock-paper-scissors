//Radom computer selection
function computerPlay () {
    var array = ["rock", "paper", "scissors"];
    var result = (Math.floor(Math.random()*(2-0+1)));
    return array[result];
}//end computerPlay

// playing one round
function playRound() {
    var player = prompt("Let's play Rock, Paper and Scissors!").toLowerCase();
    var computer = computerPlay();
    var gameResult = "";

    if (player === "rock" && computer === "rock") {
        gameResult = "tie";
        alert("It was a tie. Try again!");
    } else if(player === "rock" && computer === "paper") {
        gameResult = "lose";
        alert("You lost the round!");
    } else if (player === "rock" && computer === "scissors") {
        gameResult = "win";
        alert("You won the round!");
    } else if (player === "paper" && computer === "paper") {
        gameResult = "tie";
        alert("It was a tie. Try again!");
    } else if (player === "paper" && computer === "rock") {
        gameResult = "win";
        alert("You won the round!");
    } else if (player === "paper" && computer === "scissors") {
        gameResult = "lose";
        alert("You lost the round!");
    } else if (player === "scissors" && computer === "scissors") {
        gameResult = "tie";
        alert("It was a tie. Try again!");
    } else if (player === "scissors" && computer === "rock") {
        gameResult = "lose";
        alert("You lost the round!");
    } else if (player === "scissors" && computer === "paper") {
        gameResult = "win";
        alert("You won the round!");
    } else {
        alert("Invalid Input! Please type Rock, Paper or Scissors!")
    }
    return gameResult;
} //end playRound

// playing 5 rounds
function game() {
    for (i=1; i<=5; i++) {
        var roundResult = playRound();
        var playerScore = 0; 

        if (roundResult === "win") {
            playerScore++;
        } else if (roundResult === "lose") {
            playerScore--;
        } else {
            playRound();
        }
    } 
    
    if (playerScore < 1) {
        alert("You lose! Your score was: " + playerScore)
    } else {
        alert("You win! Your score was: " + playerScore)
    }
}

game();