
//assigning button choices
let magicChoice = document.getElementById("magicbtn");
let meleeChoice = document.getElementById("meleebtn");
let rangedChoice = document.getElementById("rangedbtn");

//button choice events
magicChoice.addEventListener('click', chooseMagic);
meleeChoice.addEventListener('click', chooseMelee);
rangedChoice.addEventListener('click', chooseRanged);

//choose Magic button
function chooseMagic(){
    playRound('magic', getComputerChoice());
}

// choose Melee Button
function chooseMelee(){
    playRound('melee', getComputerChoice());
}

// choose ranged Button
function chooseRanged(){
    playRound('ranged', getComputerChoice());
}




//computer randomly chooses Rock, Paper, or Scissors
let cpuChoices = [ "magic", "melee", "ranged"];

function getComputerChoice(){
    return cpuChoices[Math.floor(Math.random() * cpuChoices.length)];
}


//playing rock, paper, scissors 
let computerScore = 0;
let playerScore = 0;


function playRound(playerSelection, computerSelection){
    if (playerSelection === "magic"  && computerSelection === "melee"){
        playerScore++;
        document.getElementById('player1').textContent = "Player Score: " + playerScore;
        document.getElementById('battleEnemy').textContent = "You fried them! Magic beats Melee.";
    }
    if (playerSelection === "magic"  && computerSelection === "ranged"){
        computerScore++;
        document.getElementById('player2').textContent = "Computer Score: " + computerScore;
        document.getElementById('battleEnemy').textContent = "You are riddled with holes! Ranged Beats Magic.";
    }
    if (playerSelection === "melee" && computerSelection === "ranged"){
        playerScore++;
        document.getElementById('player1').textContent = "Player Score: " + playerScore;
        document.getElementById('battleEnemy').textContent = "You cleaved through! Melee beats Ranged.";
    }
    if (playerSelection === "melee"  && computerSelection === "magic"){
        computerScore++;
        document.getElementById('player2').textContent = "Computer Score: " + computerScore;
        document.getElementById('battleEnemy').textContent = "You were vaporized! Magic beats Melee.";
    }
    if (playerSelection === "ranged"  && computerSelection === "magic"){
        playerScore++;
        document.getElementById('player1').textContent = "Player Score: " + playerScore;
        document.getElementById('battleEnemy').textContent = "You made them swiss cheese! Ranged beats Magic";
    }  
    if (playerSelection === "ranged" && computerSelection === "melee"){
        computerScore++;
        document.getElementById('player2').textContent = "Computer Score: " + computerScore;
        document.getElementById('battleEnemy').textContent = "They were too strong! Melee beats Ranged.";
    }
    if (playerSelection === computerSelection){
        document.getElementById('battleEnemy').textContent = "You clashed in a tie! Try again.";
    }



}

//five rounds



    if(playerScore === 5){
        
            document.getElementsByClassName('player1').textContent = "You scored 5 points and defeated the enemy!";
            document.getElementsByClassName('player2').textContent = " ";
        
    }

    if(computerScore === 5){
        function cpuWinner(){
            document.getElementsByClassName('player1').textContent = "The enemy has scored 5 points and overwhelmed you...";
            document.getElementsByClassName('player2').textContent = " ";
        }
    }


//update scores

document.getElementById('player1').textContent = "Player Score: " + playerScore;
document.getElementById('player2').textContent = "Computer Score: " + computerScore;















//old logic that plays exactly five rounds

    // keep score after playing rock paper scissors & play until 5 wins/losses.
    // function game(){ 
    //     if (playerScore === 5){
    //         alert("You won!" + "     " + "Player:" + " "+ playerScore + "     " + "Computer:" + " " + computerScore);
    //         if (confirm("Play again?") == true){
    //             console.log(game());
    //         }
    //         if (confirm("Play again?") == false){
    //             alert("Rest now. You've saved us.");
    //         }
            
    //         }
    //     else if (computerScore === 5){
    //         alert("You lose!" + "     " + "Player:" + " "+ playerScore + "     " + "Computer:" + " " + computerScore);
    //         if (confirm("Try again?") == true){
    //             console.log(game());
    //         }
    //         if (confirm("Try again?") === false) {
    //             alert("Th e robots are taking over!");
                
    //         }
            
    //         }  
    // const playerSelection;
    // 
    // console.log(playRound(playerSelection.toLowerCase(), computerSelection));
    // 
    // return game();
    // }





