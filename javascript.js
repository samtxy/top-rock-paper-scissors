const ROCK = "rock"
const PAPER = "paper"
const SCISSORS = "scissors"

let humanScore = 0
let computerScore = 0

function getComputerChoice(){
    let randomNum = Math.random()

    if (randomNum >= 0.33){
        return ROCK
    } else if (randomNum >= 0.66){
        return PAPER
    } else {
        return SCISSORS
    }
}

function getHumanChoice(){
    let humanChoice = prompt('Choose: Rock, Paper, or Scissors');
    humanChoice = humanChoice.toUpperCase();

    while (humanChoice != "ROCK" && humanChoice != "PAPER" && humanChoice != "SCISSORS") {
        humanChoice = prompt('You should choose Rock, Paper, or Scissors.');
        humanChoice = humanChoice.toUpperCase();
    }

    return humanChoice
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        return "It's a tie!"
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        return "You win!"

    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        return "You win!"
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        return "You win!"
    }
    else {
        return "Computer wins!"
    }
}

// Create buttons:
const rockButton = document.createElement("button");
rockButton.textContent = "Rock";
const paperButton = document.createElement("button");
paperButton.textContent = "Paper";
const scissorsButton = document.createElement("button");
scissorsButton.textContent = "Scissors";

// Append buttons to the body (or another container element):
document.body.appendChild(rockButton);
document.body.appendChild(paperButton);
document.body.appendChild(scissorsButton);

// Create a div for displaying results:
const resultDisplay = document.createElement("div");
resultDisplay.id = "result-display"; // Optional: Add an ID for styling or reference
document.body.appendChild(resultDisplay); // Append the div to the body

// Add event listeners to the buttons (optional):
rockButton.addEventListener("click", () => {
    const humanChoice = ROCK;
    const computerChoice = getComputerChoice();

    function handleThisGameRound(){
        let result = playRound(humanChoice, computerChoice);

        // Update scores:
        if (result === "You win!") humanScore++;
        if (result === "Computer wins!") computerScore++;
        // Update displays: 
        resultDisplay.innerHTML = `Human score: ${humanScore}<br>Computer score: ${computerScore}<br>`;
        resultDisplay.innerHTML = resultDisplay.innerHTML + `Result of this round: ${result}<br>`;

        // Check for a winner: 
        if (humanScore >= 5 || computerScore >= 5){
            const winner = humanScore >= 5 ? "Human" : "Computer";
            resultDisplay.innerHTML = resultDisplay.innerHTML + `${winner} won the game! Reload to play again.`;

            // Reset the scores:
            humanScore = 0;
            computerScore = 0;
        }
    }

    handleThisGameRound();
});

paperButton.addEventListener("click", () => {
    const humanChoice = PAPER;
    const computerChoice = getComputerChoice();

    function handleThisGameRound(){
        let result = playRound(humanChoice, computerChoice);

        // Update scores:
        if (result === "You win!") humanScore++;
        if (result === "Computer wins!") computerScore++;
        // Update displays: 
        resultDisplay.innerHTML = `Human score: ${humanScore}<br>Computer score: ${computerScore}<br>`;
        resultDisplay.innerHTML = resultDisplay.innerHTML + `Result of this round: ${result}<br>`;

        // Check for a winner: 
        if (humanScore >= 5 || computerScore >= 5){
            const winner = humanScore >= 5 ? "Human" : "Computer";
            resultDisplay.innerHTML = resultDisplay.innerHTML + `${winner} won the game! Reload to play again.`;

            // Reset the scores:
            humanScore = 0;
            computerScore = 0;
        }
    }

    handleThisGameRound();
});

scissorsButton.addEventListener("click", () => {
    const humanChoice = SCISSORS;
    const computerChoice = getComputerChoice();

    function handleThisGameRound(){
        let result = playRound(humanChoice, computerChoice);

        // Update scores:
        if (result === "You win!") humanScore++;
        if (result === "Computer wins!") computerScore++;
        // Update displays: 
        resultDisplay.innerHTML = `Human score: ${humanScore}<br>Computer score: ${computerScore}<br>`;
        resultDisplay.innerHTML = resultDisplay.innerHTML + `Result of this round: ${result}<br>`;

        // Check for a winner: 
        if (humanScore >= 5 || computerScore >= 5){
            const winner = humanScore >= 5 ? "Human" : "Computer";
            resultDisplay.innerHTML = resultDisplay.innerHTML + `${winner} won the game! Reload to play again.`;

            // Reset the scores:
            humanScore = 0;
            computerScore = 0;
        }
    }

    handleThisGameRound();
});
