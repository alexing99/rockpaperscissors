
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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase ();
    if (playerSelection == "stone" && computerSelection == "paper") {
        return "You Lose! Paper beats Stone";
    } else if (playerSelection == "stone" && computerSelection == "scissors") {
        return "You Win! Stone beats Scissors";
    } else if (playerSelection == "paper" && computerSelection == "stone") {
        return "You Win! Paper beats Stone";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You Lose! Scissors beats Stone";
    } else if (playerSelection == "scissors" && computerSelection == "stone") {
        return "You Lose! Stone beats Scissors";  
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You Win! Scissors beats Paper"
    } else if (playerSelection == computerSelection) {
        return "Nobody wins!";
    }
}

const playerSelection = "sTone";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


/* make a case insensitive function that lets a player input p s s */

/* make a return string that that declares winner */

/* paper beats rock rock beats scissors scissors beats paper*/

/* makea new function for 5 round games and keeps score then reports the winner at the end*/
