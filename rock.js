//Radom computer selection
function computerPlay () {
    var possibleChoices = ["Rock", "Paper", "Scissors"];
    var computerSelection = (Math.floor(Math.random()*(2-0+1)));
    return possibleChoices[computerSelection];
}

// playing one round
function playRound(selection) {
    var player = selection;
    var computer = computerPlay();
    var gameResult = "";
   
    if (player === "Rock" && computer === "Rock") {
        gameResult = "tie";
        roundResult.textContent = "Tie round! No winners.";
    } else if(player === "Rock" && computer === "Paper") {
        gameResult = "lose";
        roundResult.textContent = "You lose! Paper covers rock.";
    } else if (player === "Rock" && computer === "Scissors") {
        gameResult = "win";
        roundResult.textContent = "You won! Rock smashes scissors.";
    } else if (player === "Paper" && computer === "Paper") {
        gameResult = "tie";
        roundResult.textContent = "Tie round! No winners.";
    } else if (player === "Paper" && computer === "Rock") {
        gameResult = "win";
        roundResult.textContent = "You won! Paper covers rock.";
    } else if (player === "Paper" && computer === "Scissors") {
        gameResult = "lose";
        roundResult.textContent = "You lose! Scissors cuts paper!";
    } else if (player === "Scissors" && computer === "Scissors") {
        gameResult = "tie";
        roundResult.textContent = "Tie round! No winners.";
    } else if (player === "Scissors" && computer === "Rock") {
        gameResult = "lose";
        roundResult.textContent = "You lose! Rock smashes scissors.";
    } else if (player === "Scissors" && computer === "Paper") {
        gameResult = "win";
        roundResult.textContent = "You won! Scissors cuts paper.";
    } 
    return gameResult;
}

//create elements
const container = document.querySelector('body > div.container');
const roundResult = document.createElement('div');
const roundSelection = document.createElement('div');
const playerScoreElement = document.createElement('div');
const computerScoreElement = document.createElement('div');
const finalButton = document.createElement('button');

roundResult.classList.add('hidden');
roundResult.setAttribute('id', 'roundResult');
roundSelection.classList.add('hidden');
roundSelection.setAttribute('id', 'roundSelection');
playerScoreElement.classList.add('score');
computerScoreElement.classList.add('score');
finalButton.classList.add('hidden');
finalButton.setAttribute('id', 'finalButton')

let roundCount = 0;
var playerScore = 0; 
var computerScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        game(button);
        button.classList.add('playing');
        setTimeout(() => {  button.classList.remove('playing');}, 150);
   });
});

//plays 5 rounds and displays info to page
function game(button) {
    if (roundCount < 4){
        roundPlayAndScore(button);
    } else if (roundCount >=4 && roundCount <5) {  
        roundPlayAndScore(button);
        if (playerScore < 1) {
            finalButton.textContent = "You lose! Better luck next time!"
            finalButton.classList.remove('hidden');
        } else {
            finalButton.textContent = "Congratulation, you won! Want to play again?"
            finalButton.classList.remove('hidden');
        }
    resetGame();
    }
}

function roundPlayAndScore(button) {
    roundSelection.textContent = ("You chose: " + button.id);
    var oneRoundResult = playRound(button.id);
    container.appendChild(roundSelection);
    container.appendChild(roundResult);

    if (oneRoundResult === "win") {
        roundCount++;
        playerScore++;
        computerScore--;
    } else if (oneRoundResult === "lose") {
        roundCount++;
        playerScore--;
        computerScore++;
    } else {
        roundCount = roundCount;
        playerScore = playerScore;
    }
    
    playerScoreElement.textContent = ("Player score: " + playerScore);
    computerScoreElement.textContent = ("Computer score: " + computerScore);
    container.appendChild(playerScoreElement);
    container.appendChild(computerScoreElement);

    roundSelection.classList.remove('hidden');
    roundResult.classList.remove('hidden');
}

function resetGame() {
    container.appendChild(finalButton);
    finalButton.addEventListener('click', () => {
        roundCount = 0;
        playerScore = 0;
        computerScore = 0;
        playerScoreElement.textContent = ("Player score: " + playerScore);
        computerScoreElement.textContent = ("Computer score: " + computerScore);
        container.appendChild(playerScoreElement);
        container.appendChild(computerScoreElement);

        roundSelection.classList.add('hidden');
        roundResult.classList.add('hidden');
        finalButton.classList.add('hidden');
    });
}