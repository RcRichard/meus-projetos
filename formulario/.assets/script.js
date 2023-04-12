const form = document.querySelector('.form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const passworConfirm = document.querySelector('#passworConfirm')
const buttom = document.querySelector('.submit')
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;


form.addEventListener('submit', event =>{
    event.preventDefault()
    checkInputs()
})

function checkInputs() {
    const usernameValue = username.value
    const emailValue = email.value
    const passwordValue = password.value
    const passwordConfirmValue = passworConfirm.value
    
    if(usernameValue === ''){
        setErrorFor(username, 'O nome do usario obrigatrio');
        
    }
}

function setErrorFor(input, message){
  const formControl = input.parentElement
  const small = formControl.querySelector('small')

  small.innertext = message;

  formControl.className = 'form-control.error'

}