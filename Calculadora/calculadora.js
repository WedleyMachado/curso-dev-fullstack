
let n1 = document.querySelector('#n1')
let n2 = document.querySelector('#n2')
let resultado = document.querySelector('span')
let label = document.querySelector('label')

function somar() {
    resultado.innerHTML = parseInt(n1.value) + parseInt(n2.value)
    label.style.display = "none";
}

function subtrair() {
    resultado.innerHTML = parseInt(n1.value) - parseInt(n2.value)
    label.style.display = "none";
}

function multiplicar() {
    resultado.innerHTML = parseInt(n1.value) * parseInt(n2.value)
    label.style.display = "none";
}

function dividir() {
    resultado.innerHTML = parseInt(n1.value) / parseInt(n2.value)
    label.style.display = "none";
}

