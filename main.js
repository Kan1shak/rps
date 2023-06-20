function getComputerChoice(){
    options = ['rock', 'paper', 'scissor'];
    randomChoice = Math.floor(Math.random() * 3);
    return randomChoice;
}

function getPlayerChoice(){
    options = ['rock', 'paper', 'scissor'];
    let playerChoice = prompt("Write what do you pick from rock, paper and scissor:");
    playerChoice = playerChoice.toLowerCase();
    for (let i = 0; i < options.length; i++){
        if (playerChoice === options[i]){
            playerChoice = i;
        }
    }
    return playerChoice
}


function Result(computerChoice, playerChoice){
    let result = false;
    if (computerChoice === playerChoice){
        result = null;
    }
    else if (playerChoice === computerChoice + 1){
        result = true;
    }
    else if (playerChoice === 0 && computerChoice === 2){
        result = true;
    }
    return result;
}

function play(choice){
    options = ['rock', 'paper', 'scissor'];
    let computerChoice = getComputerChoice();
    let playerChoice = choice;
    console.log("Player choice: " + options[playerChoice]);
    let result = Result(computerChoice, playerChoice);
    console.log("Computer choice: " + options[computerChoice]);
    if (result){
        return 1;
    }
    else if (result === null){
        return 0;
    }
    else{
        return 2;
    } 
}

// function game(){
//     let playerScore = 0;
//     let computerScore = 0;
//     let result;
//     for (let i = 0; i < 5; i++){
//         result = play();
//         if (result === 1){
//             playerScore += 1;
//         }
//         else if (result === 2){
//             computerScore += 1;
//         }
//     }
//     console.log("Player score: " + playerScore);
//     console.log("Computer score: " + computerScore);
//     if (playerScore > computerScore){
//         console.log("Player wins");
//     }
//     else if (playerScore < computerScore){
//         console.log("Computer wins");
//     }
//     else{
//         console.log("Draw");
//     }
// }
//game();

const rockChoice = document.querySelector('.rock');
rockChoice.addEventListener('click', () =>{
    play(0)
});

const paperChoice = document.querySelector('.paper');
paperChoice.addEventListener('click', () =>{
    play(1);
});

const scissorChoice = document.querySelector('.scissor');
scissorChoice.addEventListener('click', () =>{
    play(2);
});