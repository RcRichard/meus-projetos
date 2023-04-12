const sec = document.querySelector('#sec')
const min = document.querySelector('#min')
const start = document.querySelector('.start')
const stop = document.querySelector('.stop')
const reset = document.querySelector('.reset')

let counterMin = 0
let counterSec = 0
let timer = null

start.addEventListener('click', () => (

    timer = setInterval(() => {
        sec.textContent = counterSec + 1
        counterSec++

        if (counterSec < 10) {
            sec.textContent = '0' + counterSec
        }

        if (counterSec === 60) {
            min.textContent = counterMin + 1
            counterMin++
            counterSec = 0

            if (counterSec < 10) {
                min.textContent = '0' + counterMin
            }
        }

    }, 1000)

))

stop.addEventListener('click', () => {
    clearInterval(timer)
})

reset.addEventListener('click', () => {
    clearInterval(timer)
    min,textContent = '00'
    sec.textContent = '00'
    counterSec = 0
    counterMin = 0
})
