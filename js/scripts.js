let randomNumber = Math.floor(Math.random() * 10)
let numberOfGuesses = 3
let guessHistory = []

function writeGuessHistory(guess) {
    guessHistory.push(guess)
    let listOfUserGuesses = ''
    guessHistory.map((guess) => {
        listOfUserGuesses =  `${guess}, ${listOfUserGuesses}`
    })
    document.getElementById('guessHistory').innerHTML = listOfUserGuesses
}

function promptUserAccording(buttonClass, promptDialogue) {
    document.getElementById('userPrompt').style.visibility = 'visible'
    document.getElementById("userPrompt").className = buttonClass;
    document.getElementById("userPrompt").innerHTML = promptDialogue
}

function userGuess() {
    if (numberOfGuesses === 0) {
        promptUserAccording("alert-warning", `Out of Guesses`)
        return
    }
    const numberGuessed = parseInt(document.getElementById('guess').value)
    if (numberGuessed === randomNumber) {
        promptUserAccording("alert-success", `Your guess of ${numberGuessed} was correct!`)
    } else if (numberGuessed > randomNumber) {
        promptUserAccording("alert-danger", `Your guess of ${numberGuessed} was wrong! It's too high...`)
    } else if (numberGuessed < randomNumber) {
        promptUserAccording("alert-danger", `Your guess of ${numberGuessed} was wrong! It's too low...`)
        
    }

    writeGuessHistory(numberGuessed)
    numberOfGuesses -= 1
    document.getElementById('numberOfRemainingGuesses').innerHTML = numberOfGuesses
    document.getElementById("guess").value = ''
}

function resetGame() {
    numberOfGuesses = 3
    document.getElementById('userPrompt').style.visibility = 'hidden'
    document.getElementById('numberOfRemainingGuesses').innerHTML = numberOfGuesses
    document.getElementById("guess").value = ''
}