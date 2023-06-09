const cellElement = document.querySelectorAll('[data-cell]')
const board = document.querySelector('[data-board]')
const winningMessage = document.querySelector('[data-winning-message]')
const winningMessageText = document.querySelector('[data-winning-p]')
const restartButton = document.querySelector('[data-wining-message-button]')
let isCircle;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];


const startGame = () => {
    const isCircleValue = [false, true]
    for (let cell of cellElement) {
        cell.classList.remove('x')
        cell.classList.remove('circle')
        cell.addEventListener('click', handleClick, { once: true })
    }

    /*Selecionar player Aleatorio*/
    setHoverBoardClass()
    const randomPlayer = isCircleValue[Math.floor(Math.random() * isCircleValue.length)];
    isCircle = randomPlayer
    const selectedPlayer = isCircle ? 'circle' : 'x'
    board.classList.add(selectedPlayer)
    winningMessage.style.display = 'none'
}

const endGame = (isDraw) => {
    if (isDraw) {
        winningMessageText.innerText = 'Empate!'
    } else {
        winningMessageText.innerText = isCircle ? 'O Venceu !' : 'X venceu !'
    }

    winningMessage.style.display = 'flex'
}

const checkForWin = (currentPlayer) => {
    return winningCombinations.some(combination => {
        return combination.every((index) => {
            return cellElement[index].classList.contains(currentPlayer)
        })
    })
}

const checkForDraw = () => {
    return [...cellElement].every((cell) => {
        return cell.classList.contains("x") || cell.classList.contains("circle");
    });
};


const placeMark = (cell, classToAdd) => {
    cell.classList.add(classToAdd)
}

const setHoverBoardClass = () => {
    board.classList.remove('x')
    board.classList.remove('circle')
    if (isCircle) {
        board.classList.add('circle')
    } else {
        board.classList.add('x')
    }
}

const swapTurns = () => {
    isCircle = !isCircle
    setHoverBoardClass()
}

const handleClick = (e) => {
    const cell = e.target
    const classToAdd = isCircle ? 'circle' : 'x';
    placeMark(cell, classToAdd)

    /* verificar por vitória*/
    const isDraw = checkForDraw()
    
    const isWin = checkForWin(classToAdd)
    if (isWin) {
        endGame(false)
    } else if(isDraw){
        endGame(true)
    } else{
        swapTurns()

    }

    /*Mudar simbolos*/

}

startGame()
restartButton.addEventListener('click', startGame)

