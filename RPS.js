    //console.log("Hello, World!");

    // Get the random computer value of RPS
    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissor'];
        const computerSelection = choices[Math.floor(Math.random() * choices.length)];
        //console.log(computerSelection);  
        return computerSelection;
    }
    

    // Ask user for their value of RPS. Text input. Case-insensitive.
    function getPlayerChoice() {
        const playerSelection = prompt('Play 5 rounds! Type rock, paper, or scissor!').toLowerCase();

        if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissor') {
            return playerSelection;
        } 
        else {
            alert("I don't understand. Please check your spelling");
            const playerSelection = getPlayerChoice();
            return playerSelection;
        }
        
        /*
        if (playerSelection.localeCompare('rock', 'en', { sensitivity: "base" }) == 0 || playerSelection.localeCompare('paper', 'en', { sensitivity: "base" }) == 0 || playerSelection.localeCompare('scissor', 'en', { sensitivity: "base" }) == 0) {
            return playerSelection;
        } 
        else {
            alert("I don't understand. Please check your spelling");
            const playerSelection = getPlayerChoice();
            return playerSelection;
        }
        */
    }

    //playaround. Return & Declare a winner or a tie
    function playRound(playerSelection,computerSelection) {
        if (playerSelection == computerSelection) {
            return "Tie";
        }
        else if ((playerSelection == 'rock' && computerSelection == 'scissor') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissor' && computerSelection == 'paper')) {
            return "Win";
        }
        else {
            return "Lose";
        }
    }


    const btnRock = document.getElementById('btnRock');
    btnRock.addEventListener('click', function() {
        compChoice = getComputerChoice();
        outcome = playRound('rock',compChoice);

        if (outcome == 'Win') {
            playerScore += 1;
            score.textContent = `Current Score: ${playerScore} : ${computerScore} You Won!`;
            if (playerScore == 5) {
                score.textContent = `Congrats! You defeated the computer. How about another go?`
                playerScore = 0;
                computerScore = 0;
            }

        }
        else if (outcome == 'Lose') {
            computerScore += 1;
            score.textContent = `Current Score: ${playerScore} : ${computerScore} You Lost!`;
            if (computerScore == 5) {
                score.textContent = `Sorry! You lost to the computer. How about chance at it?`
                playerScore = 0;
                computerScore = 0;
            }

        }
        else {
            score.textContent = `Current Score: ${playerScore} : ${computerScore} Tie!`;
            return;
        }

    });

    const btnPaper = document.getElementById('btnPaper');
    btnPaper.addEventListener('click', function() {
        compChoice = getComputerChoice();
        outcome = playRound('paper',compChoice);

        if (outcome == 'Win') {
            playerScore += 1;
            score.textContent = `Current Score: ${playerScore} : ${computerScore} You Won!`;
            if (playerScore == 5) {
                score.textContent = `Congrats! You defeated the computer. How about another go?`
                playerScore = 0;
                computerScore = 0;
            }

        }
        else if (outcome == 'Lose') {
            computerScore += 1;
            score.textContent = `Current Score: ${playerScore} : ${computerScore} You Lost!`;
            if (computerScore == 5) {
                score.textContent = `Sorry! You lost to the computer. How about chance at it?`
                playerScore = 0;
                computerScore = 0;
            }

        }
        else {
            score.textContent = `Current Score: ${playerScore} : ${computerScore} Tie!`;
            return;
        }
    });

    const btnScissor = document.getElementById('btnScissor');
    btnScissor.addEventListener('click', function() {
        compChoice = getComputerChoice();
        outcome = playRound('scissor',compChoice);
        //console.log(outcome);
        if (outcome == 'Win') {
            playerScore += 1;
            score.textContent = `Current Score: ${playerScore} : ${computerScore} You Won!`;
            if (playerScore == 5) {
                score.textContent = `Congrats! You defeated the computer. How about another go?`
                playerScore = 0;
                computerScore = 0;
            }

        }
        else if (outcome == 'Lose') {
            computerScore += 1;
            score.textContent = `Current Score: ${playerScore} : ${computerScore} You Lost!`;
            if (computerScore == 5) {
                score.textContent = `Sorry! You lost to the computer. How about chance at it?`
                playerScore = 0;
                computerScore = 0;
            }

        }
        else {
            score.textContent = `Current Score: ${playerScore} : ${computerScore} Tie!`;
            return;
        }
        //console.log(playerScore);

    });

    var playerScore = 0;
    var computerScore = 0;

    const score = document.getElementById('score');
    score.classList.add('score');
    score.textContent = `First player to 5 points wins.`;




    //play a 5 round game with inputs.
    /*
    function game() {
        let wins = 0;
        let losses = 0;
        let ties = 0;
        for (let i = 1; i <= 5; i++) {
            const computerchoice = getComputerChoice();
            const playerchoice = getPlayerChoice();
            result = playRound(playerchoice, computerchoice);
            if (result == "Tie") {
                //console.log(ties);
                ties = ties + 1;
                //console.log(ties);
                alert("It's a tie!")
                console.log(`It's a Tie! Current score: ${wins}W ${losses}L ${ties}T`);
            }
            else if (result == "Win") {
                wins = wins + 1;
                alert("You Win!")
                console.log(`You Win! Current score: ${wins}W ${losses}L ${ties}T`)
            }
            else { 
                losses = losses + 1;
                alert("You Lose!")
                console.log(`You Lose! Current score: ${wins}W ${losses}L ${ties}T`)
            }
          }

        let FinalScore = (`Final Score: ${wins}W ${losses}L ${ties}T `);
        document.write(FinalScore);

        console.log(wins);

        
        if (wins > 2) {
            document.write("   ...Well done!")
        }
        else if (wins > 0) {
            document.write("   ...I've seen better.")
        }            
        else {
               document.write("   ...No wins? Did you even try?")
        }
        
        alert(FinalScore);      

    }


    game();

*/





