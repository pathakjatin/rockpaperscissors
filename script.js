// dark/light mode toggle
let toggle = document.querySelector(".toggle");
let currentMode = "light";
toggle.addEventListener("click",()=>{
    if(currentMode === "light"){
        currentMode = "dark";
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");
    }else{
        currentMode = "light";
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");
    }
    // console.log(currentMode);
})
let playerScore = 0;
let compScore = 0;
let pScore = document.querySelector(".playerScore");
let cScore = document.querySelector(".compScore");
let msg = document.querySelector(".message");
const playGame = (userChoice) =>{
    console.log("user choice :", userChoice);
    let compChoice = genCompChoice();
    console.log("computer choice :", compChoice);
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper"? false : true;
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissor"? false : true;
        }else{ 
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}
const drawGame = () =>{
    msg.innerText = `Its a Draw . Play again`;
    msg.style.backgroundColor = "cyan";
}
const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        playerScore++;
        pScore.innerText = playerScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        cScore.innerText = compScore;
        msg.innerText = `You Lost :( ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const genCompChoice = () =>{
    const option = ["rock", "paper" , "scissors"];
    const optIdx = Math.floor(Math.random() * 3);
    return option[optIdx];
}

let choices = document.querySelectorAll('.option');
choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
let reset = document.querySelector(".reset");
reset.addEventListener("click", ()=>{
    playerScore = 0;
    compScore = 0;
    pScore.innerText = playerScore;
    cScore.innerText = compScore;
    msg.innerText = "Play your move!";
    msg.style.backgroundColor = "#a640e5"; 
})