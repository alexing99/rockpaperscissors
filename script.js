
function getComputerChoice() {
    let random = Math.floor(Math.random () * 3 + 1);
    if (random === 1) {
        choice = "paper";
    } else if (random === 2) {
        choice = "scissors";
    } else {
        choice = "stone";
    } return choice;
}

function getPlayerChoice() {
    let input = prompt("What is your move? Paper, Scissors, or Stone?");
    return input;
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

let playerScore = 0;
let compScore = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase ();
    if (playerSelection === "stone" && computerSelection === "paper") {
        compScore++;
        return "You Lose! Paper beats Stone";
    } else if (playerSelection === "stone" && computerSelection === "scissors") {
        playerScore++;
        return "You Win! Stone beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "stone") {
        playerScore++;
        return "You Win! Paper beats Stone";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        compScore++;
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection === "scissors" && computerSelection === "stone") {
        compScore++;
        return "You Lose! Stone beats Scissors";  
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return "You Win! Scissors beats Paper";
    } else if (playerSelection === computerSelection) {
        return "Nobody wins!";
    }
}

console.log(playRound (playerSelection, computerSelection));

function scoreboard() {
    if (playerScore > compScore) {
        return "You won!";
    } else if (playerScore < compScore) {
        return "You lose!";
    } else {
        return "Nobody wins!";
    }
}

function game() {
    for (let i = 1; i < 5; i++) {
       let playerSelection = getPlayerChoice();
       let computerSelection = getComputerChoice();
       playRound(playerSelection, computerSelection);
       console.log(playRound (playerSelection, computerSelection));
    }
    return scoreboard();

}
console.log(game());