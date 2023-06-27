const lightOn = document.querySelector('[data-js="light-on"]')
const lightOff = document.querySelector('[data-js="light-off"]')

lightOff.addEventListener('click', ()=>{
    lightOn.classList.remove('light-on')
    lightOff.classList.add('light-off')
})

lightOn.addEventListener('click', ( )=>{
    lightOff.classList.remove('light-off')
    lightOn.classList.add('light-on')
})