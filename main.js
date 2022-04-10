/** @var */

/** time to timeout */
var time = 0

/** handlers time and interval thread */
var handleInterval = null
var handleTimeout = null

/** selectors */
var startBtn = document.querySelector('#start')
var game = document.querySelector('#game')

/** ready to play */
var listenerAdded = false

/** game is running */
var isRunning = false

/** return random number (integer) */
function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

/** change the number */
function changeNumber(){
    var number = randomNumber(1,7)
    document.querySelector('#number').innerHTML = number
}

/** show the final result */
function showResult(){
    clearInterval(handleInterval)
    clearTimeout(handleTimeout)
    startBtn.removeEventListener('click',start)
    game.addEventListener('mouseover',addListeners)

    /** not ready to play */
    listenerAdded = false

    /** game is finished */
    isRunning = false
}

/** change the number all 40 ms */
function rollNumber(){
    handleInterval = setInterval(changeNumber,40)
}

/** stop the game */
function stopper(){
    time = randomNumber(3,5) * 1000
    handleTimeout = setTimeout(showResult,time)
}

/** start the game */
function start(){
    if(!isRunning){
        console.log('begin to run')
        isRunning = true
        rollNumber()
        stopper()

    }else{
        console.log('still running')
    }
}

/** make the game ready to play */
function addListeners(){
    console.log('Ready to play')
    if(!listenerAdded){
        startBtn.addEventListener('click', start)
        listenerAdded = true
        game.removeEventListener('mouseover',addListeners)
    }
}

/** remove this listener to avoid to make another party or to override the current game*/
game.addEventListener('mouseover',addListeners)
