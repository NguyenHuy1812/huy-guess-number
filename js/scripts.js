let randomNumber = Math.floor(Math.random() * 100)
console.log('numberRandom', randomNumber)
let numberOfGuesses = 10
var guessHistory = []
var fourRoundGuessHistory = ['','','']


// create a array of input data
function writeGuessHistory(inputGuessdata,arrayHistory) {
   arrayHistory.push(inputGuessdata)
    console.log('something' ,arrayHistory)
    console.log('typeof arrayHistory', typeof arrayHistory)
    return arrayHistory

}
console.log('result data array', guessHistory)
// create the userGuess main function
function userGuess() {
   

    const numberGuessed = parseInt(document.getElementById('guess').value)

    console.log('dataInput', numberGuessed)
    document.getElementById('numberOfRemainingGuesses').innerHTML = numberOfGuesses
    document.getElementById("guess").value = ''
        if(numberOfGuesses === 0){
        document.getElementById('alert-part').style.visibility = 'visible'
        document.getElementById("alert-part").className = ' alert alert-warning'
        document.getElementById('alert-part').innerHTML = "Out Of Guess "
        return
        }
        if (numberGuessed > 100 || numberGuessed < 0) {
            document.getElementById('alert-part').style.visibility = 'visible'
            document.getElementById("alert-part").className = ' alert alert-warning'
            document.getElementById('alert-part').innerHTML = "Please input between 0~100"                    
            return
        }
        if (guessHistory.includes(numberGuessed)) {
            document.getElementById('alert-part').innerHTML = "Your GUESS WAS DUPLICA "
            document.getElementById('alert-part').style.visibility = 'visible'
            document.getElementById("alert-part").className = ' alert alert-danger'
            guessHistory
            return
        }
    writeGuessHistory(numberGuessed,guessHistory)
    console.log('resultInputArray', guessHistory)
    numberOfGuesses -= 1
   
    
//If inputData **** randomNumber

// some problem here, noted to find help ( line 53 to 57)
// Try to put the array 'guessHistory' to the bigger array " fourRoundGuessHistory", but not work, the document for guessResultR1-R2 also not work for not know reason.
        if (numberGuessed === randomNumber) {
            let fourRoundGuessHistory = []
             fourRoundGuessHistory.unshift(guessHistory)
             console.log('tong cong', fourRoundGuessHistory)
            document.getElementById('guessResultR1').innerHTLM = "RESULT ROUND 1" 
            document.getElementById('guessResultR2').innerHTLM = "RESULT ROUND 2" 
            document.getElementById('guessResultR3').innerHTLM = "RESULT ROUND 3" 
            document.getElementById('guessResultR4').innerHTLM = "RESULT ROUND 4" 
            document.getElementById('alert-part').innerHTML = "YOUR GUESS WAS CORRECT "
           
            document.getElementById("alert-part").className = ' alert alert-success'
            // document.getElementById('bestscore').innerHTML = "Your best" + bestscore
           
         
            resetGame()
            return
            
        } else if (numberGuessed > randomNumber) {
            document.getElementById('alert-part').innerHTML = "YOUR GUESS WAS TOO HIGH "
            document.getElementById('alert-part').style.visibility = 'visible'
            document.getElementById("alert-part").className = ' alert alert-danger'
           
        } else if (numberGuessed < randomNumber) {
            document.getElementById('alert-part').innerHTML = "YOUR GUESS WAS TOO LOW "
            document.getElementById('alert-part').style.visibility = 'visible'
            document.getElementById("alert-part").className = ' alert alert-danger'
    
        }
   return guessHistory

    }
  console.log('test guy', userGuess())
function resetGame() {
    
   
    numberOfGuesses = 10
    guessHistory = []
    console.log(guessHistory)
    document.getElementById('numberOfRemainingGuesses').innerHTML = numberOfGuesses
    document.getElementById("guess").value = ''
    // document.getElementById('').innerHTML = ''

}

