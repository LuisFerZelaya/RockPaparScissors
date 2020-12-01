let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let results;
const scorePlayer = document.querySelector(".scorePlayer")
const scoreComputer = document.querySelector(".scoreComputer")
const message = document.querySelector(".message")
const log = document.querySelector(".log")

function computerPlay(){
    let cpu = Math.floor(Math.random() * 3);
    if (cpu === 0){return 'rock';}
    else if (cpu === 1){return 'paper';}
    else if (cpu === 2){return 'scissors';}
}


function playRound(player, computer){
   if ((player == 'rock' && computer == 'scissors') || (player == 'paper' && computer == 'rock') || (player == 'scisssors' && computer == 'paper'))
    return 'Win!' ;
    else if ((player == 'scissors' && computer == 'rock') || (player == 'rock' && computer == 'paper') || (player == 'paper' && computer == 'scissors'))
    return 'Lose!';
    else if ((player == 'rock' && computer == 'rock') || (player == 'paper' && computer == 'paper') || (player == 'scissors' && computer == 'scissors'))
    return 'Tie!'
}


function game(player){
    let computerSelection = computerPlay();
    let playerSelection = player;
    let result = playRound(playerSelection, computerSelection);
    if (result == 'Win!'){
        playerScore = ++playerScore;
        scorePlayer.textContent = playerScore
       }
    else if (result == 'Lose!'){
        
        computerScore = ++computerScore;
        scoreComputer.textContent = computerScore
    }
    if (playerScore >= 5 && computerScore < 5) {
        results = 'Game Over. You Win!';
        message.textContent = results
        playerScore = 0;
    }
    else if (playerScore < 5 && computerScore >= 5) {
        results = 'Game Over. You Lose!';
        message.textContent = results
        computerScore = 0;
    }
    log.textContent = result
}