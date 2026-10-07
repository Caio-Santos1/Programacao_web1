alert("Olá, qual será seu pedido hoje?")


let escolha = Number(prompt("Digite 1 para Combo Bug (Hambúrguer + Refri), 2 para  Combo Deploy (Pizza + Suco) ou 3 para Combo Sênior (Salada + Água)"))


switch(escolha){
    case 1 :
        alert("Ok. Seu pedido é Combo Bug (Hambúrguer + Refri).")
        break


        case 2:
           alert("Ok. Seu pedido é Combo Deploy (Pizza + Suco)")


            break


            case 3:
                alert("Ok. Seu pedido é Combo Sênior (Salada + Água).")
            default:
                console.log("ERRO! Escolha inválida")
}
