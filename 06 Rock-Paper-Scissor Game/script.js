const game = [
    { name: "rock", win: "scissors", lose: "paper", emoji: "👊" },
    { name: "paper", win: "rock", lose: "scissors", emoji: "✋" },
    { name: "scissors", win: "paper", lose: "rock", emoji: "✌" }
]


const place = { rock: 0, paper: 1, scissors: 2 };

// ============================ creating conditions for the game ================
function getBotChoice() {
    const randomChoice = Math.floor(Math.random() * 3);
    const botChoice = game[randomChoice].name;
    return botChoice;
}

// this will display the result
function userResult(userChoice, botChoice) {
    if (botChoice === game[place[userChoice]].win) return "You Win!";
    else if (botChoice === game[place[userChoice]].lose) return "You Lose!"
    return "It's a Draw"
}

// =========== start reading the code from here ===================================
const options = document.querySelector(".options");

const userScore = document.querySelector(".user-score");
const botScore = document.querySelector(".bot-score");

const currentResults = document.querySelector(".current-results");

const userChoiceDom = currentResults.children[0];
const resultText = currentResults.children[1];
const botChoiceDom = currentResults.children[2];

options.addEventListener("click", (e) => {
    const userChoice = e.target.classList[0];

    if (!(userChoice === "rock" || userChoice === "paper" || userChoice === "scissors")) return;

    // in this we have created the condition above at line no.11
    const botChoice = getBotChoice();

    // we have created the condition for the results at line no.18
    const result = userResult(userChoice, botChoice);

    // adding +1 to the winners
    if (result === "You Win!") {
        userScore.textContent = +userScore.textContent + 1;
    } else if (result === "You Lose!") {
        botScore.textContent = +botScore.textContent + 1;
    }


    // setting emoji choices with every click
    userChoiceDom.textContent = game[place[userChoice]].emoji;
    botChoiceDom.textContent = game[place[botChoice]].emoji;
    resultText.textContent = result;
})


// ================ function performing on the restart button =============================
const restart = document.querySelector('.restart');

restart.addEventListener('click', (e) => {
    userChoiceDom.textContent = "❓";
    resultText.textContent = "Result";
    botChoiceDom.textContent = "❓"

    if (+userScore.textContent === 0 && +botScore.textContent === 0) {
        alert("Please play first..");
        return;
    }

    let msg = +userScore.textContent > +botScore.textContent ? "Win!" :
        +userScore.textContent < +botScore.textContent ? "Lose!" :
            "Draw!";
    alert(msg);

    userScore.textContent = 0;
    botScore.textContent = 0;
})