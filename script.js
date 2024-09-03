let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#computer-score");

const generateCompChoice = () => {
  let objects = ["rock", "paper", "scissor"];
  let randInx = Math.floor(Math.random() * 3);
  return objects[randInx];
};

const drawGame = () => {
  msg.innerText = `Game Was Draw , Play again`;
  msg.style.color = "#fff";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win , your choice ${userChoice} beats  ${compChoice}`;
    msg.style.color = "#fff";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You loose , computer choice ${compChoice} beats  ${userChoice}`;
    msg.style.color = "#fff";
  }
};

let playGame = (userChoice) => {
  let compChoice = generateCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if ((userWin = compChoice === "paper")) {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
