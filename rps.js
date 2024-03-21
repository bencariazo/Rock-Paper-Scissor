// create a function that would choose random item for the computer
function getComputerChoice(){
    const item = ["rock","paper","scissors"]
    let chooseItem = Math.floor(Math.random() * item.length)
    return item[chooseItem]
};

// create a function that would play the game

let playerWin = 0;
let computerWin = 0;
const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");
const pScore = document.querySelector(".player-score span");
const cScore = document.querySelector(".computer-score span");
const endgameModal = document.querySelector('#endgameModal')
const restartBtn = document.querySelector('.btn-restart');
const overlay = document.querySelector('.overlay');
const endgameMsg = document.querySelector('#endgameMsg')

const result = document.querySelector("div.result")
btnRock.addEventListener('click', (e) => {
    playerSelection = e.target.className;
    playGame();
});

btnPaper.addEventListener('click', (e) => {
    playerSelection = e.target.className;
    playGame();
});

btnScissors.addEventListener('click', (e) => {
    playerSelection = e.target.className;
    playGame();
});
const resetScores = () => {
    playerWin = 0;
    computerWin = 0;
    pScore.textContent = playerWin;
    cScore.textContent = computerWin;
    result.textContent = '';
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
}
function playRound(playerSelection, computerSelection){
    if(playerSelection == "rock"){
        if(computerSelection == "paper"){
            computerWin++
            console.log(`You Lose! Paper beats Rock!`)
        } else if(computerSelection == "scissors"){
            playerWin++
            console.log("You Win! Scissors can't cut Rock!")
        } else {
            console.log("It's a tie!")
        }
    } else if (playerSelection == "paper"){
        if(computerSelection == "scissors"){
            computerWin++
            console.log("You Lose! Scissors cuts Paper!")
        } else if(computerSelection == "rock"){
            playerWin++
            // console.log(`Player Score: ${playerWin}, Computer Score: ${computerWin}`)
            console.log("You Win! Paper beats Rock!")
        } else {
            // console.log(`Player Score: ${playerWin}, Computer Score: ${computerWin}`)
            console.log("It's a tie!")
        }
    } else if (playerSelection == "scissors"){
        if(computerSelection == "paper"){
            playerWin++
            // console.log(`Player Score: ${playerWin}, Computer Score: ${computerWin}`)
            console.log("You Win! Scissors cuts Paper")
        } else if (computerSelection == "rock"){
            computerWin++
            // console.log(`Player Score: ${playerWin}, Computer Score: ${computerWin}`)
            console.log("You Lose! Rock beat Scissors!")
        } else {
            console.log("It's a tie!")
        }
    }
};
// const playerSelection = "rock"

function game(){
    const playerSelection = prompt("What would you choose (Rock, Paper, or Scissors)?")
    const computerSelection = getComputerChoice();
    // console.log(computerSelection)
    playRound(playerSelection.toLowerCase(),computerSelection)
    return `Player Score: ${playerWin}, Computer Score: ${computerWin}`
}

let result = playerWin > computerWin ? "You Win the game!" : "You lose the game :("

let gamesPlayed = 0;

while(gamesPlayed < 5){
    console.log(game())
    gamesPlayed++
}

alert(result)



