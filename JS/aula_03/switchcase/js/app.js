alert("Welcome to switch case class!")
let num1 = Number(prompt("Type the first number."))
let num2 = Number(prompt("Type the second number."))

let escolha = Number(prompt("Type 1 for sum or 2 for multi "))

switch(escolha){
    case 1 :
        let sum = num1 + num2
        console.log("you chose sum. the value of sum is: ${sum}" +soma)
        console.log(`you chose sum. the value of sum is: ${sum}`)
        break

        case 2:
            let multi = num1 * num2

            console.log(`you chose multi. the value of product is: ${multi}`)
            break
            default:
                console.log("ERRO! Escolha inválida")
}