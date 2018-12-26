var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const scissors_div = document.getElementById("s");
const paper_div = document.getElementById("p");

main();

function main(){
  rock_div.addEventListener('click', function(){
    game('r');
  })

  scissors_div.addEventListener('click', function(){
    game('s');
  })

  paper_div.addEventListener('click', function(){
    game('p');
  })
}

function game(userChoice){
  const computerChoice = getComputerChoice();
  switch(userChoice+computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "sr":
    case "rp":
    case "ps":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
    default:

  }
}

function getComputerChoice(){
    const choices = ['r', 's', 'p'];
    const choice = Math.floor(Math.random()*3);
    return choices[choice];
}

function win(user, computer){
  userScore++;
  result_div.innerHTML = convertChoice(user) + " beats " + convertChoice(computer) + ". You win!";
  userScore_span.innerHTML = userScore;
}

function lose(user, computer) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = convertChoice(user) + " lose to " + convertChoice(computer) + ". You lose!";
}

function draw(user, computer) {
  result_div.innerHTML = convertChoice(user) + " draw to " + convertChoice(computer) + ". It's a draw!";
}

function convertChoice(choice) {
  if(choice == 'r'){
    return "rock";
  }else if(choice == 's'){
    return "scissors";
  }else{
    return "paper";
  }
}
