//randomly chooses Rock, Paper, or Scissors
let choices = [ "Rock", "Paper", "Scissors"];


function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}

//play single round of Rock, Paper, Scissors




function playRound(playerSelection, computerSelection){
    if (playerSelection === "rock" && computerSelection === "paper"){
        return "You lose! Paper beats rock!";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        return "You win! Rock beats scissors!";
    }
    else {
        return "Tie!";
    }
}
   
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));