let playerWins = 0;
let computerWins = 0;


function getComputerChoice(){
    choices = ['rock', 'paper', 'scissors'];
    return choices[Math.round(Math.random()*2)];
}

function getWinner(pChoice, cChoice){
    if (pChoice === 'rock' && cChoice === 'scissors'
    || pChoice === 'paper' && cChoice === 'rock'
    || pChoice === 'scissors' && cChoice === 'paper'){
        return 1;
    } 
    else if (pChoice === cChoice) {
        return 0;
    } else {
        return 2;
    }
    
}   

function displayWInner(){
    const parent = document.querySelector('.score');
    const score = document.createElement('p');
    score.textContent = 
    `Score
    Computer: ${computerWins}
    Player: ${playerWins}`;

    parent.appendChild(score);
}
function removeButtons(){
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.style.display="none");
}

function playRound(player){
    const computer = getComputerChoice();

    let winner = getWinner(player, computer);
    
    if (winner === 1){
        playerWins++;
        console.log(`You win, ${player} beats ${computer}!`);
    } else if (winner === 2) {
        computerWins++;
        console.log(`You lose, ${computer} beats ${player}!`);
    } else {
        console.log('Tie!');
    }
    if (playerWins === 5 || computerWins === 5) {
        displayWInner();
        removeButtons();
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click',() => {
    const player = button.classList.value;
    console.log(player);
    playRound(player);
}))




