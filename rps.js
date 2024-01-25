// create a function that would choose random item for the computer
function getComputerChoice(){
    const item = ["rock","paper","scissors"]
    let chooseItem = Math.floor(Math.random() * item.length)
    return item[chooseItem]
};

// create a function that would play the game
function playRound(playerSelection, computerSelection){
    if(playerSelection == "rock"){
        if(computerSelection == "paper"){
            return "You Lose! Paper beats Rock!"
        } else if(computerSelection == "scissors"){
            return "You Win! Scissors can't cut Rock!"
        } else {
            return "It's a tie!"
        }
    } else if (playerSelection == "paper"){
        if(computerSelection == "scissors"){
            return "You Lose! Scissors cuts Paper!"
        } else if(computerSelection == "rock"){
            return "You Win! Paper beats Rock!"
        } else {
            return "It's a tie!"
        }
    } else if (playerSelection == "scissors"){
        if(computerSelection == "paper"){
            return "You Win! Scissors cuts Paper"
        } else if (computerSelection == "rock"){
            return "You Lose! Rock beat Scissors!"
        } else {
            return "It's a tie!"
        }
    }
};

const playerSelection = prompt("What would you choose (Rock, Paper, or Scissors)?")
const computerSelection = getComputerChoice();
console.log(computerSelection)


console.log(playRound(playerSelection.toLowerCase(),computerSelection))