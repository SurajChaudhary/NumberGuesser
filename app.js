/*
Game functions :
  - Player must guess a number between a min and max.
  - Player gets a certain amount of guesses.
  - Notify player of guesses remaining.
  - Notify the player of the correct answer if loose.
  - Let player choose to play again.
*/

//Game values
let min = 1, 
    max = 10,
    winningNumber = getRandomNumber(min,max),
    guessesLeft = 3;

//UI elements

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Play again event listener using event delegation.
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    //Reload page
    window.location.reload();
  }
});
//Listener for guess button
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);

  //Validate
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`,'red');
  }
  //Check if WON
  if (guess === winningNumber) {
    gameOver(true, `${winningNumber} is correct, YOU WIN!`,'green');
  } else {
    //reduce guess chances
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      //Game lost
      gameOver(false,`GAME OVER, you lost, Correct number was ${winningNumber}`);
    } else {
      // Game continues.
      
      //Enable input
      guessInput.disabled = false;
      //change border color
      guessInput.style.borderColor = 'red';
      // Set message
      setMessage(`${guess} is not correct! ${guessesLeft} guesses left.`,'red');
      //Clear input
      guessInput.value = '';
    }
  }
});


function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

function gameOver(won, msg) {
  
  //Disable input
  guessInput.disabled = true;
  
  //change border color
  let color;
  won === true ? color = 'green' : color = 'red';
  
  guessInput.style.borderColor = color;
  setMessage(msg,color);

  //Play again
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

//Get random number
function getRandomNumber(min,max) {
  return Math.floor(Math.random()*(((max-min)+1)+min));
}