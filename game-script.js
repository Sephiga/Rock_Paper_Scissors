//randomly chooses Rock, Paper, or Scissors
let choices = [ "Magic", "Melee", "Ranged"];
function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}

//playing rock, paper, scissors 
let computerScore = 0;
let playerScore = 0;
let playerSelection;
let computerSelection;

function playRound(playerSelection, computerSelection){
    
    if (playerSelection === "magic"  && computerSelection === "Melee"){
        playerScore++;
        return "You fried them! Magic beats Melee.";
    }
    if (playerSelection === "magic"  && computerSelection === "Ranged"){
        computerScore++;
        return "You are riddled with holes! Ranged Beats Magic.";
    }
    if (playerSelection === "melee" && computerSelection === "Ranged"){
        playerScore++;
        return "You cleaved through! Melee beats Ranged.";
    }
    if (playerSelection === "melee"  && computerSelection === "Magic"){
        computerScore++;
        return  "You were vaporized! Magic beats Melee.";
    }
    if (playerSelection === "ranged"  && computerSelection === "Magic"){
        playerScore++;
        return  "You made them swiss cheese! Ranged beats Magic";
    }  
    if (playerSelection === "ranged" && computerSelection === "Melee"){
        computerScore++;
        return  "They were too strong! Melee beats Ranged.";
    }
    else {
        return "Tie! Go again.";
    }
}




//keep score after playing rock paper scissors & play until 5 wins/losses.
function game(){ 
    if (playerScore === 5){
        alert("You won!" + "     " + "Player:" + " "+ playerScore + "     " + "Computer:" + " " + computerScore);
        /*if (confirm("Play again?") == true){
            console.log(game());
        }
        if (confirm("Play again?") == false){
            alert("Rest now. You've saved us.");
        }
        */
        }
    else if (computerScore === 5){
        alert("You lose!" + "     " + "Player:" + " "+ playerScore + "     " + "Computer:" + " " + computerScore);
        /*if (confirm("Try again?") == true){
            console.log(game());
        }
        if (confirm("Try again?") === false) {
            alert("Th e robots are taking over!");
            
        }
        */
        }  
const playerSelection = document.getElementsByClassName('buttons').addEventListener('onclick', selectChoice);
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection.toLowerCase(), computerSelection));
console.log('Player:' + playerScore + '   ' + 'Computer:' + computerScore);
return game();
}





