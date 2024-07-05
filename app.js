let userScore= 0;
let compScore= 0;

const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = ()=>{
    let option= ["rock", "paper", "scissor"];
    const randomIndex= Math.floor(Math.random() * 3)
    return option[randomIndex];
    // computer choose -> rock or paper or scissors randomly by using array
}

const drawGame= () =>{
    // console.log("Game was Draw.");
    msg.innerText= "Game was Draw. Play Again.";
    msg.style.backgroundColor= "#081b31";
}

const showWinner= (userWin,userChoice, compChoice) =>{
    if(userWin){
        // console.log("You Win");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText= `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor= "green";
    }else{
        // console.log("You Lose");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText= `You Lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor= "red";
    }
}


const playGame = (userChoice)=>{
    // console.log("User Choice= ", userChoice);
    // Genrate Comp Choice -> module
    const compChoice= genCompChoice();
    // console.log("Computer Choice= ", compChoice);
    
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin= true;
        if(userChoice === "rock"){
            // comp choice -> paper, scissor
            userWin = compChoice === "paper" ? false : true; 
        }else if(userChoice === "paper"){
            // comp choice -> rock, scissor
            userWin = compChoice === "scissor" ? false : true; 
        }else{
            // comp choice -> rock, paper
            userWin = compChoice === "rock" ? false : true; 
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice= choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});

