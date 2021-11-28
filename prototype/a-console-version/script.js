// Declaring variables
  var lowerLimit;
  var upperLimit;
  var tries;
  var answer;
  var guess;
  var message;
  // Enter : seize
  var lowerLimit = 1;
  var upperLimit = 100;
  var tries = 10;
  var answer = Math.floor(Math.random() * 100);
  var message = 'Guess a number between ' + lowerLimit + ' and ' + upperLimit + ':';
   // treatment
  // Keep prompting the user for a guess until the game ends.
  while (tries > 0) {
      // Prompt the user for a guess.
      guess = prompt(message);
      
      // If the cancel button was pushed, let the user know the game is ending and
      // break out of the loop.
      if (guess == null) {
          alert('Quitting game now.');
          break;
      }
      // If the guess is a number...
      else if (isFinite(guess)) {

          // If the guess is less than the range let the user know.
          if (guess < lowerLimit) {
              alert('Your guess should be no less than ' + lowerLimit + '.');
          }
          // If the guess is greater than the range let the user know.
          else if (guess > upperLimit) {
              alert('Your guess should be no greater than ' + upperLimit + '.');
          }
          // If the guess is too high let the user know.
          else if (guess > answer) {
              alert('Your guess is too high.');
          }
          // If the guess is too low let the user know.
          else if (guess < answer) {
              alert('Your guess is too low');
          }
          // If none of the other cases were true that means the answer must have
          // been guessed. so let the user know and break out of the loop.
          else {
              alert('Great job, you got it!');
              break;
          }
      }
      // If the guess is not a number, let the user know.
      else {
          alert('You must enter a number as a guess.');
      }
      
      tries = tries - 1;
  }
  
  if (tries == 0) {
      alert('You ran out of tries.  The number was ' + answer + '.');
  }