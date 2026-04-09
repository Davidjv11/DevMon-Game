//Variables globales
let spanDevmonPlayer
let ataquePlayer

let spanDevmonPc
let ataquePc
let sectionMensajes

let vidasPlayer = 3
let vidasPc = 3

let resultadoActual

//Funcion para iniciar el juego

function iniciarJuego( ){

    function seleccionarDevmon(nombreDevmon) {
        spanDevmonPlayer.innerHTML = nombreDevmon
        seleccionarDevmonPC()
    }

    //Botones para elegir devmon
    spanDevmonPlayer = document.getElementById("DevmonPlayer")

    spanDevmonPc = document.getElementById("DevmonPc")

    sectionMensajes = document.getElementById("mensajes")

    // Botones para elegir devmon jugador
    let botonSalmonoque = document.getElementById("botonSalmonoque")
    botonSalmonoque.addEventListener("click", () => seleccionarDevmon("Salmonoque"))

    let botonDragonaitor = document.getElementById("botonDragonaitor")
    botonDragonaitor.addEventListener("click", () => seleccionarDevmon("Dragonaitor")   )


    let botonTortugor = document.getElementById("botonTortugor")
    botonTortugor.addEventListener("click", () => seleccionarDevmon("Tortugor"))

    let botonTiburoncin = document.getElementById("botonTiburoncin")
    botonTiburoncin.addEventListener("click", () => seleccionarDevmon("Tiburoncin"))

    let botonPalmon = document.getElementById("botonPalmon")
    botonPalmon.addEventListener("click", () => seleccionarDevmon("Palmon"))

    let botonLeñon = document.getElementById("botonLeñon")
    botonLeñon.addEventListener("click", () => seleccionarDevmon("Leñon"))

    // Botones para elegir ataque jugador
    let botonAtaqueFuego = document.getElementById("boton-Fuego")
    botonAtaqueFuego.addEventListener("click", () => seleccionarAtaque("Fuego")
    )

    let botonAtaqueAgua = document.getElementById("boton-Agua")
    botonAtaqueAgua.addEventListener("click", () => seleccionarAtaque("Agua")
    )

    let botonAtaquePlanta = document.getElementById("boton-Planta")
    botonAtaquePlanta.addEventListener("click", () => seleccionarAtaque("Planta"))

    // Boton para reiniciar el juego
    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

//Funciones para elegir ataque Player
function seleccionarAtaque(tipoAtaque) {
    ataquePlayer = tipoAtaque
    seleccionarAtaquePC()
    crearmensaje()
    revisarVidas()
}

//Funciones para elegir ataque PC y ciclo if para mostrar el ataque ramdom del PC
function seleccionarAtaquePC() {
    let seleccionRandom = random(1,3)
        if (seleccionRandom == 1 ){
            ataquePc = "Fuego"
        } else if (seleccionRandom == 2 ){
            ataquePc = "Agua"
        } else if (seleccionRandom == 3 ){  
            ataquePc = "Planta"
    }
    resultadoActual = resultadoCombate()

}
//Funcion que muestra el resultado del combate
function resultadoCombate() {

    let spanVidasPlayer = document.getElementById("vidasPlayer")
    let spanVidasPc = document.getElementById("vidasPc")

    let resultado

    if (ataquePlayer == ataquePc) {
        resultado = "Empate" 
      

    } else if (ataquePlayer == "Fuego" && ataquePc == "Planta") {
        resultado = "Ganaste"
        vidasPc--
        spanVidasPc.innerHTML = vidasPc
       
    }
    else if (ataquePlayer == "Agua" && ataquePc == "Fuego") {
        resultado = "Ganaste"
        vidasPc--
        spanVidasPc.innerHTML = vidasPc
    
    }
    else if (ataquePlayer == "Planta" && ataquePc == "Agua") {
        resultado = "Ganaste"
        vidasPc--
        spanVidasPc.innerHTML = vidasPc
        
    }
    else {
        resultado = "Perdiste"
        vidasPlayer--
        spanVidasPlayer.innerHTML = vidasPlayer   
    }
    return resultado
    }

    //Funcion para revisar las vidas de ambos jugadores y mostrar el resultado final del combate
     function revisarVidas() {
        if (vidasPlayer <= 0) {
            alert("Perdiste el combate")
            mensajeFinal("Perdiste el combate")
        } else if (vidasPc <= 0) {
            alert("Felicidades, ganaste el combate")
            mensajeFinal("Felicidades, ganaste el combate")
        }
    }   

//Funcion para mostrar el resultado del combate en el HTML
function  crearmensaje() {
   let resultado = resultadoActual
   let parrafo = document.createElement("p")

    parrafo.innerHTML = "Tu devmon ataca con " + ataquePlayer + " y el ataque del  devmon enemigo es " + ataquePc + ". " + resultado

    sectionMensajes.appendChild(parrafo)
}

//Funcion para mostrar el resultado final del combate en el HTML
function mensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById("mensajes")
  
    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)
}


//alerta por seleccionar un devmon

    function seleccionarSalmonoque() {
        spanDevmonPlayer.innerHTML = "Salmonoque" 
        seleccionarDevmonPC()
    }
    function seleccionarDragonaitor() {
        spanDevmonPlayer.innerHTML ="Dragonaitor"
        seleccionarDevmonPC()
    }
    function seleccionarTortugor() {
        spanDevmonPlayer.innerHTML = "Tortugor" 
        seleccionarDevmonPC()
    }   

    function seleccionarTiburoncin() {
        spanDevmonPlayer.innerHTML = "Tiburoncin" 
        seleccionarDevmonPC()
    }

    function seleccionarPalmon() {
        spanDevmonPlayer.innerHTML = "Palmon"
        seleccionarDevmonPC()
    }

    function seleccionarLeñon() {
        spanDevmonPlayer.innerHTML = "Leñon" 
        seleccionarDevmonPC()
    }

   


//Funcion para que el PC seleccione un devmon enemigo de forma aleatoria

function seleccionarDevmonPC(){
    let seleccionRandom = random(1,6)
 
// Ciclo if para mostrar el devmon elegido por la PC dependiendo del numero aleatorio generado
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
// Funcion para reiniciar el juego
function reiniciarJuego() {
    location.reload()
}

//Funcion para generar un numero aleatorio entre un rango
function random(min, max) {
    return Math.floor(Math.random() * (max-min+1)+min)
}

//Iniciar el juego al cargar la pagina
window.addEventListener("load",iniciarJuego) 

