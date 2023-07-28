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


    //play a 5 round game with inputs.
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







