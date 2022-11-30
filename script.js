
function getComputerChoice() {
    let random = Math.floor(Math.random () * 3 + 1);
    if (random == 1) {
        choice = "paper";
    } else if (random == 2) {
        choice = "scissors";
    } else {
        choice = "stone";
    } return choice;
}

function playerChoice() {
    let input = prompt("What is your move? Paper, Scissors, or Stone?");
    return input;
}

const playerSelection = playerChoice();
const computerSelection = getComputerChoice();

let playerScore = 0;
let compScore = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase ();
    if (playerSelection == "stone" && computerSelection == "paper") {
        compScore = compScore++;
        return "You Lose! Paper beats Stone";
    } else if (playerSelection == "stone" && computerSelection == "scissors") {
        playerScore = playerScore++;
        return "You Win! Stone beats Scissors";
    } else if (playerSelection == "paper" && computerSelection == "stone") {
        playerScore = playerScore++;
        return "You Win! Paper beats Stone";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        compScore = compScore++;
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection == "scissors" && computerSelection == "stone") {
        compScore = compScore++;
        return "You Lose! Stone beats Scissors";  
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore = playerScore++;
        return "You Win! Scissors beats Paper";
    } else if (playerSelection == computerSelection) {
        return "Nobody wins!";
    }
}
function scoreboard () {
    if (playerScore > compScore) {
        return "You won!";
    } else if (playerScore < compScore) {
        return "You lose!";
    } else {
        return "Nobody wins!";
    }
}
function game() {
    for (let i = 0; i < 5; i++) {
       playerChoice();
       getComputerChoice();
       playRound (playerSelection, computerSelection);
       console.log (playRound (playerSelection, computerSelection));
    }
    scoreboard();
}
console.log (playRound (playerSelection, computerSelection));
console.log (game());
   

/* problems: it returns the same message after every round
             it doesn't seem to update computerchoice
             scoreboard function and the score variables don't work*/