// Declaring variabels
var userInput;
var answer;
var output;
var guessedNumber;

// seize : enter
answer = Math.floor(Math.random() * 100+1 );
userInput = document.getElementById('userInput');
output = document.getElementById('output');
console.log(answer);

// Treatment

function play() {

    guessedNumber=document.getElementById("userInput").value;

    if (guessedNumber==answer )
    { output.innerHTML="Bravo"

    }
    else { 
        if(guessedNumber<answer) {
            output.innerHTML="try a bigger number"
        }

        else{
            output.innerHTML="try a smaller number"
   }
    

    } 

}