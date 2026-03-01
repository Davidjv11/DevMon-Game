//Botones para elegir devmon
let spanDevmonPlayer
let spanDevmonPc

function iniciarJuego( ){
    spanDevmonPlayer = document.getElementById("DevmonPlayer")

    spanDevmonPc = document.getElementById("DevmonPc")

    let botonSalmonoque = document.getElementById("botonSalmonoque")
    botonSalmonoque.addEventListener("click", seleccionarSalmonoque)

    let botonDragonaitor = document.getElementById("botonDragonaitor")
    botonDragonaitor.addEventListener("click", seleccionarDragonaitor)


    let botonTortugor = document.getElementById("botonTortugor")
    botonTortugor.addEventListener("click", seleccionarTortugor)

    let botonTiburoncin = document.getElementById("botonTiburoncin")
    botonTiburoncin.addEventListener("click", seleccionarTiburoncin)

    let botonPalmon = document.getElementById("botonPalmon")
    botonPalmon.addEventListener("click", seleccionarPalmon)

    let botonLeñon = document.getElementById("botonLeñon")
    botonLeñon.addEventListener("click", seleccionarLeñon)
 }
//alerta por seleccionar un devmon


    function seleccionarSalmonoque() {
        alert("Selecionaste a Salmonoque")
        spanDevmonPlayer.innerHTML = "Salmonoque" 
        seleccionarDevmonEnemigo()
    }
    function seleccionarDragonaitor() {
        alert("Selecionaste a Dragonaitor")
        spanDevmonPlayer.innerHTML ="Dragonaitor"
        seleccionarDevmonEnemigo()
    }
    function seleccionarTortugor() {
        alert("Selecionaste a Tortugor")
        spanDevmonPlayer.innerHTML = "Tortugor" 
        seleccionarDevmonEnemigo()
    }   

    function seleccionarTiburoncin() {
        alert("Selecionaste a Tiburoncin")
        spanDevmonPlayer.innerHTML = "Tiburoncin" 
        seleccionarDevmonEnemigo()
    }

    function seleccionarPalmon() {
        alert("Selecionaste a Palmon")
        spanDevmonPlayer.innerHTML = "Palmon"
        seleccionarDevmonEnemigo()
    }

    function seleccionarLeñon() {
        alert("Selecionaste a Leñon")
        spanDevmonPlayer.innerHTML = "Leñon" 
        seleccionarDevmonEnemigo()
    }

   


//PC elige devmon aleatoriamente

function seleccionarDevmonEnemigo(){
    let seleccionRandom = random(1,6)
 

    if (seleccionRandom == 1 ){
        spanDevmonPc.innerHTML = "Salmonoque"
        // Salmonoque

    } else if (seleccionRandom == 2 ){
        spanDevmonPc.innerHTML = "Dragonaitor"
        // Dragonaitor 

    } else if (seleccionRandom == 3 ){
        spanDevmonPc.innerHTML = "Tortugor"
        // Tortugor

    } else if (seleccionRandom == 4 ){
        spanDevmonPc.innerHTML = "Tiburoncin"
        // Tiburoncin

    } else if (seleccionRandom == 5 ){
        spanDevmonPc.innerHTML = "Palmon"
        // Palmon
        
    } else if (seleccionRandom == 6 ){
        spanDevmonPc.innerHTML = "Leñon"
        // Leñon
        
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max-min+1)+min)
}


window.addEventListener("load",iniciarJuego)