let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
// caching, storing something for future use

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

function convertToWord(letter) {
  if (letter == 'r') return 'Rock';
  if (letter == 'p') return 'Paper';
  if (letter == 's') return 'Scissors';
}

function win(userChoice, computerChoice) {
  userScore ++;
  userScore_span.innerHTML = userScore;
  const USERCHOICE = convertToWord(userChoice);
  const COMPUTERCHOICE = convertToWord(computerChoice);
  const userSubscipt = 'user'.fontsize(3).sub()
  const compSubscipt = 'comp'.fontsize(3).sub()
  result_p.innerHTML = USERCHOICE + userSubscipt + ' beats ' + COMPUTERCHOICE + compSubscipt + '. You win!';
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow')}, 400)
}



function lose(userChoice, computerChoice) {
  computerScore ++;
  computerScore_span.innerHTML = computerScore;
  const USERCHOICE = convertToWord(userChoice);
  const COMPUTERCHOICE = convertToWord(computerChoice);
  const userSubscipt = 'user'.fontsize(3).sub()
  const compSubscipt = 'comp'.fontsize(3).sub()
  result_p.innerHTML = COMPUTERCHOICE + compSubscipt + ' beats ' + USERCHOICE + userSubscipt + '. You Lose.';
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow')}, 400)
}

function draw(userChoice, computerChoice) {
  const USERCHOICE = convertToWord(userChoice);
  const COMPUTERCHOICE = convertToWord(computerChoice);
  const userSubscipt = 'user'.fontsize(3).sub()
  const compSubscipt = 'comp'.fontsize(3).sub()
  result_p.innerHTML = USERCHOICE + userSubscipt + ' ties ' + COMPUTERCHOICE + compSubscipt + '. You draw';
  document.getElementById(userChoice).classList.add('gray-glow');
  setTimeout(function() {document.getElementById(userChoice).classList.remove('gray-glow')}, 400)
}


function game(userChoice) {
  const computerChoice = getComputerChoice();

  switch(userChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice, computerChoice);
      break;
    case 'sr':
    case 'rp':
    case 'ps':
      lose(userChoice, computerChoice);
      break;
    case 'rr':
    case 'pp':
    case 'ss':
      draw(userChoice, computerChoice);
      break;


  }

}


function main() {
  rock_div.addEventListener('click', function() {
    game('r')
  })

  paper_div.addEventListener('click', function() {
    game('p')
  })

  scissors_div.addEventListener('click', function() {
    game('s')
  })
}

main();
