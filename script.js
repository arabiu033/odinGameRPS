// creating a game :)

let p=0;
let c=0;

function computerPlay(){
  let choose = Math.floor(Math.random * 100);
  let dec1 = "rock";
  let dec2 = "paper";
  let dec3 = "scissors"
  let pick;

  if (choose % 3 == 0 || choose % 5 == 0)
    pick = dec1;
  else if (choose % 2 == 0)
    pick = dec2;
  else
    pick = dec3;

  return pick;
}

function playRound(playerSelection, computerSelection){
  let winner = "";
  let holder = playerSelection.concat(computerSelection);
  if (holder == "rockrock" || holder == "paperpaper" || holder == "scissorsscissors")
    winner = "It's a tie. Nobody Wins";
  else if (holder == "rockpaper" || holder == "paperrock") {
    winner = (playerSelection == "paper") ? "You Win! "+ playerSelection +" beats "+ computerSelection : "You Lose! "+ computerSelection +" beats "+ playerSelection;
    playerSelection === "paper" ? ++p : ++c;
    }
  else if (holder == "rockscissors" || holder == "scissorsrock"){
    winner = (playerSelection == "rock") ? "You Win! "+ playerSelection +" beats "+ computerSelection : "You Lose! "+ computerSelection +" beats "+ playerSelection;
    playerSelection === "rock" ? ++p : ++c;
    }
  else if (holder == "paperscissors" || holder == "scissorspaper"){
    winner = (playerSelection == "scissors") ? "You Win! "+ playerSelection +" beats "+ computerSelection : "You Lose! "+ computerSelection +" beats "+ playerSelection;
    playerSelection === "scissors" ? ++p : ++c;
  else
    winner ="Something is wrong. check your spellings";

  return winner;
}

function game(){
  for (let i=0; i<5; i++){
    const player = (prompt("Lets play! Enter rock, paper or scissors:").toLowerCase();
      const computer = computerPlay();

      if (player === "rock" || player === "paper" || player === "scissors"){
	console.log(playerRound(player, computer));
	console.log("Score board:\n"+ "You - "+ p +"\n"+ "Computer - "+ c);	
      }
      else {
	console.log("Inputed a wrong value. Check your spellings");
	--i;
      }
  }
}
