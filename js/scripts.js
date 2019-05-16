let randomNumber = Math.floor(Math.random() * 10)
console.log( 'numberRandom', randomNumber)
let numberOfGuesses = 10
let guessHistory = []
let guessHistoryBig = [[],' ' ,' ', ' ' ]



function resultLastRound(){
writeGuessHistory()

}
  

function writeGuessHistory(guess) {
    guessHistory.push(guess)
    let listOfUserGuesses = ''
    guessHistory.map((guess) => {
        listOfUserGuesses =  `${guess}, ${listOfUserGuesses}`
    })
    document.getElementById('guessHistory').innerHTML = guessHistory
    

}

function promptUserAccording(buttonClass, promptDialogue) {
    document.getElementById('userPrompt').style.visibility = 'visible'
    document.getElementById("userPrompt").className = buttonClass;
    document.getElementById("userPrompt").innerHTML = promptDialogue
}

function userGuess() {
    
    const numberGuessed = parseInt(document.getElementById('guess').value)
   
    if (numberGuessed > 100 || numberGuessed < 0 ){
        promptUserAccording("alert-danger", `Your guess of ${numberGuessed} must between 1~100`)   
        return 
    }
    if (numberOfGuesses === 0) {
        promptUserAccording("alert-warning", `Out of Guesses`)
        return
    }  
    if (numberGuessed === randomNumber) {
        promptUserAccording("alert-success", `Your guess of ${numberGuessed} was correct!`)
        guessHistoryBig.unshift(guessHistory)
        console.log(guessHistory)
        console.log(guessHistoryBig)
        document.getElementById('historyGuess1').innerHTML =   guessHistoryBig[0].join(',')
        // document.getElementById('historyGuess2').innerHTML = "II" +  guessHistoryBig[1]
        // document.getElementById('historyGuess3').innerHTML = "III" +  guessHistoryBig[2]
        // document.getElementById('historyGuess4').innerHTML = "IV"  + guessHistoryBig[3]
        return 
    } else if (numberGuessed > randomNumber) {
        promptUserAccording("alert-danger", `Your guess of ${numberGuessed} was wrong! It's too high...`)
    } else if (numberGuessed < randomNumber) {
        promptUserAccording("alert-danger", `Your guess of ${numberGuessed} was wrong! It's too low...`)
        
    }
if (guessHistory.includes(numberGuessed)){
    promptUserAccording("alert-danger", `Your guess of ${numberGuessed} was duplice`)
    return
}


    writeGuessHistory(numberGuessed)
    numberOfGuesses -= 1
    document.getElementById('numberOfRemainingGuesses').innerHTML = numberOfGuesses
    document.getElementById("guess").value = ''
 
   
}

function resetGame() {
    numberOfGuesses = 10
    document.getElementById('userPrompt').style.visibility = 'hidden'
    document.getElementById('numberOfRemainingGuesses').innerHTML = numberOfGuesses
    document.getElementById("guess").value = ''
    document.getElementById('guessHistory').innerHTML = ''
}

// let timeHistory = []

// let time = 0
// function timeGuesses() {    
//   // setInterval(/* code */, 1000)
//   setInterval(() => {
//     time += 1
//     document.getElementById('guessRoundTime').innerHTML = time
//   }, 1000)
  
// }

// function resetTimer() {
//   timeHistory.push(time)
//   console.log('TimeHistory', timeHistory)
//   time = 0
// }


// timeGuesses()