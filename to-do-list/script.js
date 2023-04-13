const addToDo = document.querySelector('.addToDo')
const listToDo = document.querySelector('.listToDo')
const searchToDo = document.querySelector('.formSearch input')

//Adiciona o to-do a ul
addToDo.addEventListener('submit', event => {

    //evita que a pagina recarregue
    event.preventDefault()

    //armazena o valor do input
    const inputValue = event.target.add.value.trim()
    
    //verifica se o input esta vazio, caso não esteja vai adicionar o valor que o usuário digitou no input na Ul/Li 
    if (inputValue.length) {
        listToDo.innerHTML += `<li class="listItems">
        <span class="item">${inputValue}</span>
        <i class="fa-solid fa-trash trash"></i>
        </li>`

        //restaura o valor padrão do elemento form
        event.target.reset()
    }
})


//adiciona um evento na lixeira quando for clicado 

listToDo.addEventListener('click', event => {

    //armazena o elemento clicado
    const clickedElement = event.target
    
    //verifica se o elemento clicado foi a lixeira 
    if (Array.from(clickedElement.classList).includes('trash')) {

        //remove o elemento clicado
        clickedElement.parentElement.remove()
    }
})

//filtra a lista de to-do
searchToDo.addEventListener('input', event => {

    //armazena o valor do input 
    const inputValue = event.target.value.trim().toLowerCase()

    //verificar se o valor digitado não e compativel com o armazenado na ul/li
    Array.from(listToDo.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(inputValue))
        .forEach(todo => {

            //adiciona a class e deixa a li invisivel
            todo.classList.add('hidden')
        })

    //vereifica se o valor é compativel com o armazenado na ul/li
    Array.from(listToDo.children)
        .filter(todo => todo.textContent.toLowerCase().includes(inputValue))
        .forEach(todo => {
            
            //remove a class e deixa a li visivel
            todo.classList.remove('hidden')
        })

})