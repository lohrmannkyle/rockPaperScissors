
function game(){
    function getComputerChoice(){
        choices = ['rock', 'paper', 'scissors']
        return choices[Math.round(Math.random()*2)]
    }
    
    function getPlayerChoice(){
        return prompt("Please enter 'rock', 'paper' or 'scissors'.").toLowerCase()
        Enumerator
    }

    function getWinner(pChoice, cChoice){
        if (pChoice === 'rock' && cChoice === 'scissors'
        || pChoice === 'paper' && cChoice === 'rock'
        || pChoice === 'scissors' && cChoice === 'paper'){
            return 1
        } 
        else if (pChoice === cChoice) {
            return 0
        } else {
            return 2
        }
        
    }   
    
    let playerWins = 0
    let computerWins = 0

    for (let i = 0; i < 5; i++){
        const player = getPlayerChoice()
        const computer = getComputerChoice()

        let winner = getWinner(player, computer)

        if (winner === 1){
            playerWins++
            console.log(`You win, ${player} beats ${computer}!`)
        } else if (winner === 2) {
            computerWins++
            console.log(`You lose, ${computer} beats ${player}!`)
        } else {
            console.log('Tie!')
        }
    }
    console.log(`Score\nComputer: ${computerWins}\nPlayer: ${playerWins}`)
}

game()

