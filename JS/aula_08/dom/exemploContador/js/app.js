let valorElemento = document.getElementById("valor")
let btnMais = document.getElementById("mais")
let btnMenos = document.getElementById("menos")

let contador = 0
btnMais.addEventListener('click', ()=>{
    contador++
    valorElemento.textContent= contador
})

btnMenos.addEventListener('click', ()=>{
    contador--
    valorElemento.textContent= contador
})