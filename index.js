const options = ["r", "p", "s"];
const display = { r: "Rock", p: "Paper", s: "Scissors" };

const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
};

const getUserChoice = () => {
  const choice = prompt("Rock, paper or scissors?");
  return choice;
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 0;
  }

  const outcomes = {
    rs: 1,
    pr: 1,
    sp: 1,
    sr: -1,
    rp: -1,
    ps: -1,
  };

  return outcomes[userChoice + computerChoice];
};

const playRound = (userScore, computerScore, maxPoints) => {
  const userChoice = getUserChoice();
  const computerChoice = getComputerChoice();

  const winnerCode = determineWinner(userChoice, computerChoice);
  if (winnerCode === 1) {
    userScore++;
    console.log("You win!");
  } else if (winnerCode === -1) {
    computerScore++;
    console.log("Computer wins!");
  } else {
    console.log("Draw!");
  }
  console.log(`Score is ${userScore} - ${computerScore}`);

  if (userScore === maxPoints) {
    console.log("YOU WIN.");
  } else if (computerScore === maxPoints) {
    console.log("COMPUTER WINS.");
  } else {
    playRound(userScore, computerScore, maxPoints);
  }
};

function main() {
  let userScore = 0;
  let computerScore = 0;
  const maxPoints = 3;

  playRound(userScore, computerScore, maxPoints);
}
main();
