
let result = document.getElementById("result");

const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const winsScore = document.getElementById("wins")
const lossScore = document.getElementById("losses")
const tieScore = document.getElementById("ties")
const reset1 = document.getElementById("reset")
const computer = document.getElementById("computer-move")

let score ={
    wins:0,
    losses:0,
    ties:0
}
function getPcMove(){
  const random = Math.random();
  
  if(random > 0 && random <= 0.3){
      return 'rock'
  }
  else if(random > 0.3 && random <= 0.6){
      return 'paper'
  }
  else if(random > 0.6 && random < 1){
      return 'scissors'
  }
}
 
function playGame(userMove){
   
    let computerMove = getPcMove();

    if(computerMove === userMove){
        result.textContent = 'tie' + '😎';
        computer.textContent = computerMove;
        score.ties+=1;
    }
    else if((computerMove === 'paper' && userMove === 'rock') || (computerMove === 'rock' && userMove === 'scissors') || (computerMove === 'scissors' && userMove === 'paper')){
        result.textContent = 'you lose' +'😞';
        computer.textContent = computerMove;
        score.losses+=1;
    }
    else {
        result.textContent = 'you win' + '🏆';
        computer.textContent = computerMove;
        score.wins+=1;
    }
     updateScore();
}
function updateScore(){
  winsScore.textContent = 'WINS 🏆: ' + score.wins;
  lossScore.textContent = 'LOSSES 😞: '+score.losses;
  tieScore.textContent = 'TIES 😎: '+ score.ties;
}
function resetGame(){
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    result.textContent = '';
    computer.textContent = '';
    updateScore();
}

rock.onclick = () => playGame('rock');
paper.onclick = () => playGame('paper');
scissors.onclick = () => playGame('scissors')
reset1.onclick =  resetGame;

