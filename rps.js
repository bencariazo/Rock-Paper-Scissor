// create a function that would choose random item for the computer
function getComputerChoice(){
    const item = ["rock","paper","scissors"]
    let chooseItem = Math.floor(Math.random() * item.length)
    return item[chooseItem]
}

