const pesoIMC = document.querySelector('#pesoIMC')
const alturaIMC = document.querySelector('#alturaIMC')
const form = document.querySelector('.formulario')
const resultado = document.querySelector('#resultado')
const alertPeso = document.querySelector('.alert-Peso')
const alertAltura = document.querySelector('.alert-Altura')
const interrogacao = document.querySelector('.info')
const popup = document.querySelector('.popup')
const exitTable = document.querySelector('.exitTable')
const infoHover = document.querySelector('.infoHover')


//Funcionamento do Formulario

form.addEventListener('submit', event => {
    event.preventDefault()
    const peso = Number(pesoIMC.value)
    const altura = Number(alturaIMC.value)

    if (peso === 0) {
        alertPeso.style.display = 'block'
    } else if (altura === 0) {
        alertAltura.style.display = 'block'

    } else {
        const expressaoImc = peso / (altura ** 2)
        resultado.style.display = 'block'
        resultado.innerHTML = (`Seu IMC é : ${expressaoImc}`)
    }
})

//Executar a tabela no display

interrogacao.addEventListener('click', () => {
    popup.style.display = 'block'
})

//Remover a tabela do dispaly

exitTable.addEventListener('click', () => {
    popup.style.display = 'none'
})
