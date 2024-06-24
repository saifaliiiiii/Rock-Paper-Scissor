let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score")

const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissor'];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "DRAW";
    msg.style.backgroundColor = "#081b31";
}

const winGame = () => {
    console.log("you won");
}
const loseGame = () => {
    console.log("you lost");
}

const showWinner = (userWin) => {
    if (userWin) {
        winGame();
        msg.innerText = "YOU WON";
        msg.style.backgroundColor = "green";
        userScore++;
        userScorepara.innerText = userScore;
    }
    else {
        loseGame();
        msg.innerText = "YOU LOSE";
        msg.style.backgroundColor = "red";
        compScore++;
        compScorepara.innerText = compScore;
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock" && compChoice === "paper") {
            userWin = false;
        }
        else if (userChoice === "rock" && compChoice === "scissor") {
            userWin = true
        }
        else if (userChoice === "paper" && compChoice === "rock") {
            userWin = true
        }
        else if (userChoice === "paper" && compChoice === "scissor") {
            userWin = false;
        }
        else if (userChoice === "scissor" && compChoice === "rock") {
            userWin = false;
        }
        else if (userChoice === "scissor" && compChoice === "paper") {
            userWin = true
        }
        showWinner(userWin);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");

        playGame(userChoice);
    });
});

