function getComputerChoice(){
    options = ['rock', 'paper', 'scissor'];
    randomChoice = Math.floor(Math.random() * 3);
    return randomChoice;
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
    let result = Result(computerChoice, playerChoice);
    displayChoicePlayer.textContent = "You chose " + options[playerChoice];
    displayChoiceComputer.textContent = "Computer chose " + options[computerChoice];
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

var playerScore = 0;
var computerScore = 0;
var winner = ""
const playerDisplay = document.querySelector('.player');
const computerDisplay = document.querySelector('.computer');
const resultDiv = document.querySelector('.result') ;
const displayChoicePlayer = document.querySelector('.by-player');
const displayChoiceComputer = document.querySelector('.by-computer');
const resetButton = document.querySelector('.reset');
resetButton.style.display = 'none';
function game (choice){
    result = play(choice);
    if (result === 1){
        playerScore++;
    }
    else if (result ==2){
        computerScore++;
    }
    playerDisplay.textContent = "Player: " + playerScore;
    computerDisplay.textContent = "Computer: " +computerScore;

    if (playerScore >= 5 && !(computerScore >= 5) ){
        winner = "Player wins! Click on the button below to reset";
    } else if (computerScore >= 5 && !(playerScore >= 5) ){
        winner = "Computer wins! Click on the button below to reset";
    }else if (playerScore <= 5 && computerScore <= 5){
        winner = "First to 5 wins!";
    }
    resultDiv.textContent = winner;

    if (playerScore >=5 || computerScore >=5){
        resetButton.style.display = 'block';
        resetButton.textContent = "Click here to reset!";
    }
}

const rockChoice = document.querySelector('.rock');
rockChoice.addEventListener('click', () =>{
    game(0)
});

const paperChoice = document.querySelector('.paper');
paperChoice.addEventListener('click', () =>{
    game(1);
});

const scissorChoice = document.querySelector('.scissor');
scissorChoice.addEventListener('click', () =>{
    game(2);
});

resetButton.addEventListener('click', () =>{
    computerScore = 0;
    playerScore = 0;
    resultDiv.textContent = "";
    playerDisplay.textContent = "";
    computerDisplay.textContent = "";
    displayChoicePlayer.textContent = "";
    displayChoiceComputer.textContent = "";
    resetButton.style.display = 'none';

})