let player = document.getElementById('player-res');
let computer = document.getElementById('computer-res');
let result = document.getElementById('final-result');

let playerScore = document.getElementById('Human-Score');
let computerScore = document.getElementById('Computer-Score');
let playerScoreNumber = 0;
let computerScoreNumber = 0;

const computerArray = ['Rock', 'Paper', 'Scissors'];


let buttons = Array.from(document.getElementsByClassName('in-btns'));

buttons.map(button=>{
    button.addEventListener('click',(e)=>{

        let rand = randomIntFromInterval(0,2);
        let computerChoice = computerArray[rand];
        computer.innerText = computerChoice;

        switch(e.target.innerText) {
            case 'Rock':
                player.innerText = ' Rock'

                if(computerChoice == 'Rock') {
                    result.innerText = 'Draw, You both chose Rock!';
                }
                else if(computerChoice == 'Paper') {
                    result.innerText = 'You lost, Rock loses to Paper!';
                    computerWin();
                }
                else if(computerChoice == 'Scissors') {
                    result.innerText = 'You won, Rock win over Scissors!';
                    playerWin();
                }
                break;
                

            case 'Paper':
                player.innerText = ' Paper'

                if(computerChoice == 'Paper') {
                    result.innerText = 'Draw, You both chose Paper!';
                }
                else if(computerChoice == 'Scissors') {
                    result.innerText = 'You lost, Paper loses to Scissors!';
                    computerWin();
                }
                else if(computerChoice == 'Rock') {
                    result.innerText = 'You won, Paper win over Rock!';
                    playerWin();
                }
                break;
                

            case 'Scissors':
                player.innerText = ' Scissors'

                if(computerChoice == 'Scissors') {
                    result.innerText = 'Draw, You both chose Scissors!';
                }
                else if(computerChoice == 'Rock') {
                    result.innerText = 'You lost, Scissors loses to Rock!';
                    computerWin();
                }
                else if(computerChoice == 'Paper') {
                    result.innerText = 'You won, Scissors win over Paper!';
                    playerWin();
                }
                break;


            case 'Reset':
                resetScores();
                break;

        }

    })
})

function playerWin() {
    playerScoreNumber++;
    playerScore.innerText = 'Human Score: ' + playerScoreNumber;
}

function computerWin() {
    computerScoreNumber++;
    computerScore.innerText = 'Computer Score: ' + computerScoreNumber;
}

function resetScores() {
    computerScoreNumber = 0;
    playerScoreNumber = 0;

    result.innerText = '-';
    playerScore.innerText = 'Human Score: ' + playerScoreNumber;
    computerScore.innerText = 'Computer Score: ' + computerScoreNumber;

    player.innerText = '-';
    computer.innerText = '-';
}


function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
