// creating a game :)

let score = document.querySelectorAll('li');
let msg = document.querySelector('#msg');
let p=0;
let c=0;
let round=true;

function computerPlay(){
  let choose = Math.floor(Math.random() * 100) +1;
  let dec1 = "rock";
  let dec2 = "paper";
  let dec3 = "scissors"
  let pick;

  if (choose % 3 === 0)
    pick = dec1;
  else if (choose % 7 == 0 || choose % 5 === 0)
    pick = dec2;
  else
    pick = dec3;

  return pick;
}

function playRound(playerSelection, computerSelection){

  let holder = playerSelection.concat(computerSelection);

  if (holder === "rockrock" || holder === "paperpaper" || holder === "scissorsscissors")
    msg.textContent = "It's a tie. Nobody Wins";
  else if (holder === "rockpaper" || holder === "paperrock") {
    msg.textContent = (playerSelection === "paper") ? "You Win! "+ playerSelection +" beats "+ computerSelection : "You Lose! "+ computerSelection +" beats "+ playerSelection;
    playerSelection === "paper" ? ++p : ++c;
    }
  else if (holder === "rockscissors" || holder === "scissorsrock"){
    msg.textContent = (playerSelection === "rock") ? "You Win! "+ playerSelection +" beats "+ computerSelection : "You Lose! "+ computerSelection +" beats "+ playerSelection;
    playerSelection === "rock" ? ++p : ++c;
    }
  else if (holder === "paperscissors" || holder === "scissorspaper"){
    msg.textContent = (playerSelection === "scissors") ? "You Win! "+ playerSelection +" beats "+ computerSelection : "You Lose! "+ computerSelection +" beats "+ playerSelection;
    playerSelection === "scissors" ? ++p : ++c;
    }
    else {
      
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {game(button.id)});
});

function game(btn){

    const computer = computerPlay();

    if (btn === "rock" || btn === "paper" || btn === "scissors"){
    	playRound(btn, computer);
      score[1].textContent = "You - "+ p;
      score[2].textContent = "Computer - "+ c;	
      }
    else 
    	console.log("Inputed a wrong value. Check your spellings");

    if (c === 5 || p === 5){
      c = 0;
      p = 0;
      score[1].textContent = "You - "+ p;
      score[2].textContent = "Computer - "+ c;	
     if (c === 5) 
        msg.textContent = "YOU LOST. TRY AGAIN"
     else
      	msg.textContent = "CONGRATULATIONS!!! YOU WIN,"
  }

}
