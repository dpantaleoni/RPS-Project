const choices = ['rock', 'paper', 'scissors'];
let playerInput = document.getElementById("text").value.toLowerCase();
    document.write(playerInput.value);             
let playerChoice = playerInput;
let computerChoice = computerPlay();

function computerPlay() {
return (choices[Math.floor(Math.random() * choices.length)]);
}

function playRound(playerChoice, computerChoice) {
if (playerChoice === computerChoice) {
    return alert("Tie! Please play again");
}
else if (playerChoice === 'rock' && computerChoice === 'paper') {
    return alert("You lose! Paper beats rock");
}
else if (playerChoice === 'rock' && computerChoice === 'scissors') {
    return alert("You win! Rock beats scissors");
}
else if (playerChoice === 'paper' && computerChoice === 'scissors') {
    return alert("You lose! Scissors beats paper");
}
else if (playerChoice === 'paper' && computerChoice === 'rock') {
    return alert("You win! Paper beats rock");
}
else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    return alert("You win! Scissors beats paper");
}
else if (playerChoice === 'scissors' && computerChoice === 'rock') {
    return alert("You lose! Rock beats scissors");
}
else if (playerChoice === 'rock' && computerChoice === 'paper') {
    return alert("You lose! Paper beats rock");
}
else {
    return alert("Error! Please play again");
}
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound( playerChoice, computerChoice);
    }
}

console.log(playerChoice);
console.log(computerChoice);