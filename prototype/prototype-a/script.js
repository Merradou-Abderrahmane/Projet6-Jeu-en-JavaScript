        // Declaring variables 
        var randomNumber;
        var userInput;
        var message;
        // Enter : seize  
         randomNumber = Math.floor(Math.random() * 101);
         userInput = prompt("seize a number");
        // treatment 
        var n = parseInt(userInput);
        if (randomNumber > userInput) {

            message = userInput + "  "  + "is smaller than" + "  " + randomNumber;
            
        }

        else if (randomNumber < userInput) {

            message = userInput + "  " + "is greater than" + "  " + randomNumber;
        }

        else {
            message = "You guessed it right" + " " + "!! Bravo !";

        }
        // exit : display
        console.log(randomNumber);
        alert(message);