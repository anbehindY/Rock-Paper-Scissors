const getComputerChoice = () => {
    const choices = ['Rock','Paper','Scissors'];
    const index = Math.floor(Math.random()*choices.length);
    return choices[index];
};

let score = 0;

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return 'Draw!!';
    } else if (playerSelection === 'rock' && computerSelection == 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper'){
        score += 1;
        return 'You win!';
    } else {
        score -= 1;
        return 'You lose!';
    }
  };
   
  const playerSelection = prompt();
  const computerSelection = getComputerChoice().toLowerCase();
  console.log(playRound(playerSelection, computerSelection));
