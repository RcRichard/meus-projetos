const sizePassword = document.querySelector('#valor')
const sliderElement = document.querySelector('#slider')
const buttonElement = document.querySelector('#input-button')
const containerPassword = document.querySelector('#container-password')
const password = document.querySelector('#password')


const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@$'

sizePassword.innerHTML = sliderElement.value
slider.oninput = function () {
    sizePassword.innerHTML = this.value
}

buttonElement.addEventListener('click', () => {
    let newPassword = ''
    for(let i = 0, n = charset.length; i < sliderElement.value; i++){
        newPassword += charset.charAt(Math.floor(Math.random() * n));
    }

    password.innerHTML = newPassword
    containerPassword.classList.remove('hide')
    copyPassword(newPassword)
})


function copyPassword(newPassword){    
    navigator.clipboard.writeText(newPassword)
}

containerPassword.addEventListener('click', () => {
    alert('Sua Senha foi copiada com sucesso!')
} )






