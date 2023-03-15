var resultado = document.getElementById('resultado')


function insert(num){
    
    resultado.innerHTML += num
}

function clean(){
    resultado.innerHTML = ''
}

function back(){
    var resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1)
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    } else{
        resultado = 'Digite um valor...'
    }
}
