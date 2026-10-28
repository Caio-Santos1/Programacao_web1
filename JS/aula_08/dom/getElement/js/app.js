let paragrafo = document.getElementById("primParag")
  let segParagrafo = document.getElementById("segParag")
let div1 = document.getElementById("div1")


function mudarCor(){
    div1.style.backgroundColor="pink"
    segParagrafo.textContent = "vc entrou na div"
}

function MudarCorSaida(){
    div1.style.backgroundColor="purple"
    segParagrafo.textContent = "vc saiu da div"
}