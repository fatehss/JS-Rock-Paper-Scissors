function getComputerChoice(){
    let a = Math.floor(Math.random()*3);
    if (a==0){ return "rock";}
    else if (a==1) {return "paper";}
    else {return "scissors";}
}

function isValidInput(playerInput){

    let lowerCase = playerInput.toLowerCase();
    if (lowerCase === "rock" || lowerCase === "paper" || lowerCase ==="scissors")
    {
        return true;
    }
    else return false;

}

function playRound(playerChoice, computerChoice){

    if (playerChoice === computerChoice){
        return "Draw! Computer chose "+computerChoice;
    }

    let win = 1;
    
    if (playerChoice === "paper"){
        if (computerChoice === "scissors"){ win = 0;}
    }
    else if (playerChoice === "scissors"){
        if (computerChoice === "rock"){ win = 0;}
    }
    else{ //player choice is rock
        if (computerChoice === "rock"){win = 0;}
    }

    if (win === 1){ return "You win! " + playerChoice + " beats " + computerChoice + '.';}
    else { return "You lose! " +  computerChoice + " beats " + playerChoice + '.';}
}