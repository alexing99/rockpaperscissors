
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

/*function getPlayerChoice() {
    let input = prompt("What is your move? Paper, Scissors, or Stone?");
    return input;
}*/

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

let playerScore = 0;
let compScore = 0;

function playRound(playerSelection, computerSelection) {
    const outcomeDiv = document.querySelector('.outcome')
    playerSelection = playerSelection.toLowerCase ();
    if (playerSelection === "stone" && computerSelection === "paper") {
        compScore++;
        const p = document.createElement('p')
        p.innerText= "You Lose! Paper beats Stone";
        outcomeDiv.appendChild(p);
    } else if (playerSelection === "stone" && computerSelection === "scissors") {
        playerScore++;
        const p = document.createElement('p')
        p.innerText= "You Win! Stone beats Scissors";
        outcomeDiv.appendChild(p);
    } else if (playerSelection === "paper" && computerSelection === "stone") {
        playerScore++;
        const p = document.createElement('p')
        p.innerText= "You Win! Paper beats Stone";
        outcomeDiv.appendChild(p);
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        compScore++;
        const p = document.createElement('p')
        p.innerText= "You Lose! Scissors beats Paper";
        outcomeDiv.appendChild(p);
    } else if (playerSelection === "scissors" && computerSelection === "stone") {
        compScore++;
        const p = document.createElement('p')
        p.innerText= "You Lose! Stone beats Scissors"; 
        outcomeDiv.appendChild(p); 
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        const p = document.createElement('p')
        p.innerText= "You Win! Scissors beats Paper";
        outcomeDiv.appendChild(p);
    } else if (playerSelection === computerSelection) {
        const p = document.createElement('p')
        p.innerText= "Nobody wins!";
        outcomeDiv.appendChild(p);
    }
}


const paperButton = document.querySelector('paper-button')
const scissorsButton = document.querySelector('.scissors-button')
const stoneButton = document.querySelector('.stone-button')


paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "paper";
    playRound (playerSelection, computerSelection);

})

scissorsButton.addEventListener('click', ()=> {
    const computerSelection = getComputerChoice();
    const playerSelection = "scissors";
    playRound (playerSelection, computerSelection);
} )

stoneButton.addEventListener('click', ()=> {
    const computerSelection = getComputerChoice();
    const playerSelection = "stone";
    playRound (playerSelection, computerSelection);
})

console.log(playRound (playerSelection, computerSelection));

/*function scoreboard() {
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
console.log(game());*/