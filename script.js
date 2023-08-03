const array = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return array[~~(Math.random()*array.length)];
}

function playRound(playerSelection, computerSelection){
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection == "rock"){
    if (computerSelection == "rock"){
      return "Match Tied!!";
    }else if(computerSelection == "paper"){
      return "You lose! One step closer to conquering the world!!!";
    }else if (computerSelection == "scissors"){
      return "You win! You get to live another day!";
    }
  } else if (playerSelection == "paper"){
    if (computerSelection == "paper"){
      return "Match Tied!!";
    }else if(computerSelection == "scissors"){
      return "You lose! One step closer to conquering the world!!!";
    }else if (computerSelection == "rock"){
      return "You win! You get to live another day!";
    }
  } else if (playerSelection == "scissors"){
    if (computerSelection == "scissors"){
      return "Match Tied!!";
    }else if(computerSelection == "rock"){
      return "You lose! One step closer to conquering the world!!!";
    }else if (computerSelection == "paper"){
      return "You win! You get to live another day!";
    }
  }
}

function game(){
  player = 0;
  cpu = 0;
  for (let i=0; i <= 5; i++){
    playerSelection = prompt("Chose your weapon!")
    computerSelection = getComputerChoice()
    round = playRound(playerSelection,computerSelection)
    console.log(round)

    if(round == "You win! You get to live another day!"){
      ++player
    }else if (round == "You lose! One step closer to conquering the world!!!"){
      ++cpu
    }else if (round = "Match Tied!!"){

    }
    console.log ("Result | Player " + player + "-" + cpu + " CPU" )
  }

  if(player<cpu){
    return "You are a disgrace for you kind, the world just fell into the hands of the machines!"
  }else if(player>cpu){
    return "Yeayyy you've saved us!!!"
  }else if(player == cpu){
    return "They managed to escape this time, get ready for the next wave!"
  }

}

console.log(game())