const addToDo = document.querySelector('.addToDo')
const listToDo = document.querySelector('.listToDo')

addToDo.addEventListener('submit', event => {
    event.preventDefault()
    const inputValue = event.target.add.value.trim()

    if(inputValue.length){
        listToDo.innerHTML += `<li class="listItems">
        <span class="item">${inputValue}</span>
        <i class="fa-solid fa-trash trash"></i>
        </li>` 

        event.target.reset()
    }
})

listToDo.addEventListener('click', event =>{
    const clickedElement = event.target
    if(Array.from(clickedElement.classList).includes('trash')){
        clickedElement.parentElement.remove()
    }
})