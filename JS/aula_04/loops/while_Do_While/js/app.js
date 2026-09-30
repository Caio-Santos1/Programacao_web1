/*
Diferença do while para dowhile
1- while
1.1 verifica a condição antes de entrar no loop
1.2 tem um contador e uma variavel do loop
*/
 alert("LEGAL")
let num1 = 0
let numindf = Number(prompt("Digite um número."))

while(num1 <=10){
    console.log(`${numindf} x ${num1} = ${num1*numindf}`)
    num1 = num1++
}