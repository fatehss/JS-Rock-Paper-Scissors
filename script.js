function getComputerChoice(){
    let a = Math.floor(Math.random()*3);
    if (a==0){ return "rock";}
    else if (a==1) {return "paper";}
    else {return "scissors";}
}

function playRound(pc, computerChoice){

    let playerChoice = pc.toLowerCase();

    if (playerChoice === computerChoice){
        return ["draw","Draw! Computer chose "+computerChoice];
    }

    let win = 1;
    
    if (playerChoice === "paper"){
        if (computerChoice === "scissors"){ win = 0;}
    }
    else if (playerChoice === "scissors"){
        if (computerChoice === "rock"){ win = 0;}
    }
    else if (playerChoice === "rock"){ //player choice is rock
        if (computerChoice === "rock"){win = 0;}
    }
    else{
        return ["invalid", "Please enter rock/paper/scissors."];
    }

    if (win === 1){ return ["win","You win! " + playerChoice + " beats " + computerChoice + '.']}
    else { return ["lose","You lose! " +  computerChoice + " beats " + playerChoice + '.']}
}

function playGame(){

    let playerScore = 0;
    let computerScore = 0;
    for (let i=0; i<5; ++i){
        let val = prompt("What is your choice? rock/paper/scissors");
        let outcome = playRound(val, getComputerChoice());

        console.log(outcome[1]);

        if (outcome[0] === "win"){playerScore++;}
        else if (outcome[0] ==="lose"){computerScore++;}
        else if (outcome[0] === "invalid"){i--;}
        console.log("Player "+playerScore+" - "+computerScore+" Computer")
    }
    console.log("Game over! The score is player "+playerScore + " - "+computerScore+" computer.");
}