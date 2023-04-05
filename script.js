//randomly chooses Rock, Paper, or Scissors
let choices = [ "Rock", "Paper", "Scissors"];



function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}



//playing rock, paper, scissors and keeping score

function game(){ 
    //play single round of Rock, Paper, Scissors
    function playRound(playerSelection, computerSelection){
        if (playerSelection === "rock"  && computerSelection === "Paper"){
            return "You lose! Paper beats Rock.";
        }
        else if (playerSelection === "rock" && computerSelection === "Scissors"){
            return "You win! Rock beats Scissors";
        }
        else if (playerSelection === "paper"  && computerSelection === "Scissors"){
            return "You lose! Scissors beats paper.";
        }
        else if (playerSelection === "paper"  && computerSelection === "Rock"){
            return "You win! Paper beats rock.";
        }
        else if (playerSelection === "scissors"  && computerSelection === "Rock"){
            return "You lose! Rock beats scissors.";
        }  
        else if (playerSelection === "scissors" && computerSelection === "Paper"){
            return "You win! Scissors beats paper!";
        }
        else {
            return "Tie! Go again.";
        }

    }
    //keep track of player and computer score
    function keepScore(computerScore, playerScore){
        if ("You lose! Paper beats Rock."){
            computerScore + 1;
        }
        else if ("You win! Rock beats Scissors"){
            playerScore + 1;
        }
        else if ("You lose! Scissors beats paper."){
            computerScore + 1;
        }
        else if ("You win! Paper beats rock."){
            playerScore + 1;
        }
        else if ("You lose! Rock beats scissors."){
            computerScore + 1;
        }
        else if ("You win! Scissors beats paper!"){
            playerScore + 1;
        }
        else {
            return 0;
        }
    }
    //determine winner
    function theWinner(){
        if (playerScore === 5){
            return "You are the winner!";
        }
        else if (computerScore === 5){
            return "You lost to the computer! Try again.";
        }
        else {
            return;
        }
    }
    let computerScore = 0;
    let playerScore = 0;
    const playerSelection = window.prompt("Choose your weapon!");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection.toLowerCase(), computerSelection));
    console.log(keepScore(playerScore, computerScore));
    console.log(theWinner());
}
console.log(game());