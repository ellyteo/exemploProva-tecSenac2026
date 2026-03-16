// function
// getElementById
// addEventListener

//-------------------------------QUESTÃO 1-------------------------------//

function questao1() {
    // ESCREVE O ENUNCIADO AQUI
    // SOME 2 NÚMEROS
    const numero = Number(prompt("Digite um número:"))
    const Outronumero = Number(prompt("Digite outro número:"))
    alert(numero+Outronumero)
}
const buttonquestao1 = document.getElementById("questao1")
buttonquestao1.addEventListener('click', () => { questao1() })
