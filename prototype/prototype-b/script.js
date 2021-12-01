// Declaring variabeles 
var btn ;
var output ;
var number ;
var guessedNumber ;

 // seize
 btn = document.getElementById('btn');
 output = document.getElementById('outputText');
 number = Math.floor(Math.random() * 100);
  console.log(number);
 // traitement 

   function play(){

    guessedNumber=document.getElementById("userInput").value;
   if ( guessedNumber == number ){ 
     output.innerHTML = "Félicitations" 
   }else 
   if (guessedNumber < number) {
   output.innerHTML ="c'est number est plus petit "
   }else {
     output.innerHTML= "c'est number est plus grand"
   }
  
 };