
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


let computerSelection = '';
let playerSelection = '';
let playerScore = 0;
let compScore = 0;
const outcomeDiv = document.querySelector('.outcome')
function playRound(playerSelection, computerSelection) {
    const p = document.createElement('p')
    playerSelection = playerSelection.toLowerCase ();
    if (playerSelection === "stone" && computerSelection === "paper") {
        compScore++;
        p.innerText= `You Lose! Paper beats Stone.       You: ${playerScore} Computer: ${compScore}`;
    } else if (playerSelection === "stone" && computerSelection === "scissors") {
        playerScore++;
        p.innerText= `You Win! Stone beats Scissors.     You: ${playerScore} Computer: ${compScore}`;
    } else if (playerSelection === "paper" && computerSelection === "stone") {
        playerScore++;
        p.innerText= `You Win! Paper beats Stone.        You: ${playerScore} Computer: ${compScore}`;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        compScore++;
        p.innerText= `You Lose! Scissors beats Paper.    You: ${playerScore} Computer: ${compScore}`;
    } else if (playerSelection === "scissors" && computerSelection === "stone") {
        compScore++;
        p.innerText= `You Lose! Stone beats Scissors.    You: ${playerScore} Computer: ${compScore}`; 
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        p.innerText= `You Win! Scissors beats Paper.     You: ${playerScore} Computer: ${compScore}`;
    } else if (playerSelection === computerSelection) {
        p.innerText= `Nobody wins!      You: ${playerScore} Computer: ${compScore}`;
        
    }
  outcomeDiv.appendChild(p);
}


const paperButton = document.querySelector('.paper-button')
const scissorsButton = document.querySelector('.scissors-button')
const stoneButton = document.querySelector('.stone-button')

console.log(paperButton);

paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "paper";
    playRound (playerSelection, computerSelection);
    checkForWinner (playerScore, compScore);
})

scissorsButton.addEventListener('click', ()=> {
    const computerSelection = getComputerChoice();
    const playerSelection = "scissors";
    playRound (playerSelection, computerSelection);
    checkForWinner (playerScore, compScore);
} )

stoneButton.addEventListener('click', ()=> {
    const computerSelection = getComputerChoice();
    const playerSelection = "stone";
    playRound (playerSelection, computerSelection);
    checkForWinner (playerScore, compScore);
})


const checkForWinner = (playerScore, compScore) => {
    const h2 = document.createElement('h2')
    if (playerScore === 5) {
        h2.innerText = `You won 5 games! and the computer won ${compScore} games`;
    } else if (compScore === 5) {
        h2.innerText = `You lost! The computer won 5 games and you won ${playerScore} games`;
        
    }
    outcomeDiv.appendChild(h2);
}
