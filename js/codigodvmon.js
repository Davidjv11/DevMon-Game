//Botones para elegir devmon
let spanDevmonPlayer


function iniciarJuego( ){
    spanDevmonPlayer = document.getElementById("DevmonPlayer")

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
    }
    function seleccionarDragonaitor() {
        alert("Selecionaste a Dragonaitor")
        spanDevmonPlayer.innerHTML ="Dragonaitor"
    }
    function seleccionarTortugor() {
        alert("Selecionaste a Tortugor")
        spanDevmonPlayer.innerHTML = "Tortugor" 
    }   

    function seleccionarTiburoncin() {
        alert("Selecionaste a Tiburoncin")
        spanDevmonPlayer.innerHTML = "Tiburoncin" 
    }

    function seleccionarPalmon() {
        alert("Selecionaste a Palmon")
        spanDevmonPlayer.innerHTML = "Palmon" 
    }

    function seleccionarLeñon() {
        alert("Selecionaste a Leñon")
        spanDevmonPlayer.innerHTML = "Leñon" 
    }   

   


//PC elige devmon aleatoriamente
let selectDevmonPc

    spanDevmonPc = document.getElementById("DevmonPc")


function selectDevmonPc(){
    let DevmonPc = ramdom(1,6)
    let spanDevmonPc = document.getElementById("DevmonPc")

    if (DevmonPc == 1 ){
        spanDevmonPc.innerHTML = "Salmonoque"
        // Salmonoque

    } else if (DevmonPc == 2 ){
        spanDevmonPc.innerHTML = "Dragonaitor"
        // Dragonaitor

    } else if (DevmonPc == 3 ){
        spanDevmonPc.innerHTML = "Tortugor"
        // Tortugor

    } else if (DevmonPc == 4 ){
        spanDevmonPc.innerHTML = "Tiburoncin"
        // Tiburoncin

    } else if (DevmonPc == 5 ){
        spanDevmonPc.innerHTML = "Palmon"
        // Palmon
        
    } else if (DevmonPc == 6 ){
        spanDevmonPc.innerHTML = "Leñon"
        // Leñon
        
    }
}

function ramdom(min, max) {
    return Math.floor(Math.random() * (max-min+1)+min)
}


window.addEventListener("load",iniciarJuego)