let guessingGame = function() {
    let randNum = Math.floor(Math.random() * 100)
    let count = 0
    let hasWon = false;
    return function(guess){
        count++
        if (hasWon){
            return "The game is over, you already won!"
        }
        
        if (guess === randNum){
            hasWon = true;
            return `You win!, You found ${randNum} in ${count} guesses`
        }
        else if (guess > randNum){
            return `${guess} is too high!`
        }
        else {
            return `${guess} is too low`
        }
        
    }
}
module.exports = { guessingGame };
