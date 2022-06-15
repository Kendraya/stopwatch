//Begin stopwatch program
const stopwatchDisplay = document.querySelector('.stopwatch-display')
const stopwatchStartBtn = document.querySelector('.btn-stopwatch-start')
const stopwatchStopBtn = document.querySelector('.btn-stopwatch-stop')
const stopwatchResetBtn = document.querySelector('.btn-stopwatch-reset')

let stopwatchSeconds = 0
let stopwatchMinutes = 0
let stopwatchMiliseconds = 0

function runTimer() {
    stopwatchMiliseconds+=100

    if(stopwatchMiliseconds ===1000) {
        stopwatchSeconds++
        stopwatchMiliseconds = 0
    }

    if(stopwatchSeconds === 60) {
        stopwatchMinutes++
        stopwatchSeconds = 0
    }
    stopwatchDisplay.innerText = `${stopwatchMinutes}:${stopwatchSeconds}:${stopwatchMiliseconds}`
    //console.log(stopwatchMiliseconds, stopwatchSeconds, stopwatchMinutes)
}

function startStopwatch() {
    setInterval(runTimer, 100)
}

stopwatchStartBtn.addEventListener('click', startStopwatch)
