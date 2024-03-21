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
    if(playerSelection === computerSelection){
        result.textContent = "It's a tie!"
    }
    
    if(playerSelection == "rock"){
        if(computerSelection == "paper"){
            ++computerWin;
            cScore.textContent = computerWin;
            result.textContent = "You Lose! Paper beats Rock!"
        } else if(computerSelection == "scissors"){
            ++playerWin;
            pScore.textContent = playerWin;
            result.textContent = "You Win! Scissors can't cut Rock!"
        }
    } else if (playerSelection == "paper"){
        if(computerSelection == "scissors"){
            ++computerWin;
            cScore.textContent = computerWin;
            result.textContent = "You Lose! Scissors cuts Paper!"
        } else if(computerSelection == "rock"){
            ++playerWin;
            pScore.textContent = playerWin;
            result.textContent = "You Win! Paper beats Rock!"
        } 
    } else if (playerSelection == "scissors"){
        if(computerSelection == "paper"){
            ++playerWin;
            pScore.textContent = playerWin;
            result.textContent = "You Win! Scissors cuts Paper"
        } else if (computerSelection == "rock"){
            ++computerWin;
            cScore.textContent = computerWin;
            result.textContent = "You Lose! Rock beat Scissors!"
        }
    }
};

// create a function that would choose random item for the computer
function getComputerChoice(){
    const item = ["rock","paper","scissors"]
    let chooseItem = Math.floor(Math.random() * item.length)
    return item[chooseItem]
};

const isGameOver = () => {
    return playerWin === 5 || computerWin === 5;
}

function playGame(){
    if(isGameOver()){
        openEndgameModal();
        return
    }

    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

    if (isGameOver()) {
        openEndgameModal()
        setFinalMessage()
    }
};

function openEndgameModal() {
    endgameModal.classList.add('active')
    overlay.classList.add('active')
}
  
function closeEndgameModal() {
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
}
