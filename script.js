'use strict'

const botaoAdicao = document.getElementById('adicao')
const botaoSubtracao = document.getElementById('subtracao')
const botaoMultiplicacao = document.getElementById('multiplicacao')
const botaoDivisao = document.getElementById('divisao')

function somar(){
    const numero1 = Number(document.getElementById('numero1').value)
    const numero2 = Number(document.getElementById('numero2').value)
    const resultado = document.getElementById('resultado')
    resultado.textContent = numero1 + numero2
}

function subtracao(){
    const numero1 = Number(document.getElementById('numero1').value)
    const numero2 = Number(document.getElementById('numero2').value)
    const resultado = document.getElementById('resultado')
    resultado.textContent = numero1 - numero2
}

function multiplicacao(){
    const numero1 = Number(document.getElementById('numero1').value)
    const numero2 = Number(document.getElementById('numero2').value)
    const resultado = document.getElementById('resultado')
    resultado.textContent = numero1 * numero2
}

function divisao(){
    const numero1 = Number(document.getElementById('numero1').value)
    const numero2 = Number(document.getElementById('numero2').value)
    const resultado = document.getElementById('resultado')
    resultado.textContent = numero1 / numero2
}

botaoAdicao.onclick = somar
botaoSubtracao.onclick = subtracao
botaoMultiplicacao.onclick = multiplicacao
botaoDivisao.onclick = divisao