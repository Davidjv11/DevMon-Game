//Variables globales
let spanDevmonPlayer
let ataquePlayer

let spanDevmonPc
let ataquePc
let sectionMensajes

//Funcion para iniciar el juego

function iniciarJuego( ){

    //Botones para elegir devmon
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

    // Botones para elegir ataque jugador
    let botonAtaqueFuego = document.getElementById("boton-Fuego")
    botonAtaqueFuego.addEventListener("click", ataqueFuego)

    let botonAtaqueAgua = document.getElementById("boton-Agua")
    botonAtaqueAgua.addEventListener("click", ataqueAgua)

    let botonAtaquePlanta = document.getElementById("boton-Planta")
    botonAtaquePlanta.addEventListener("click", ataquePlanta)

    // Botones para elegir ataque PC

    let botonAtaqueFuegoPc = document.getElementById("boton-Fuego")
    botonAtaqueFuegoPc.addEventListener("click", ataqueFuego)

    let botonAtaqueAguaPc = document.getElementById("boton-Agua")
    botonAtaqueAguaPc.addEventListener("click", ataqueAgua)

    let botonAtaquePlantaPc = document.getElementById("boton-Planta")
    botonAtaquePlantaPc.addEventListener("click", ataquePlanta)

    sectionMensajes = document.getElementById("mensajes")
}

//Funciones para elegir ataque Player
function ataqueFuego() {
    alert("Seleccionaste el ataque de Fuego")
    ataquePlayer = "Fuego"
    seleccionarAtaquePC()
    alert("Tu " + spanDevmonPlayer.innerHTML + " ataco con " + ataquePlayer + " y el ataque del " + spanDevmonPc.innerHTML + " enemigo es " + ataquePc)
}

function ataqueAgua() {
    alert("Seleccionaste el ataque de Agua")
    ataquePlayer = "Agua"
    seleccionarAtaquePC()
    alert("Tu " + spanDevmonPlayer.innerHTML + " ataco con " + ataquePlayer + " y el ataque del " + spanDevmonPc.innerHTML + " enemigo es " + ataquePc)
}                 
function ataquePlanta() {
    alert("Seleccionaste el ataque de Planta")
    ataquePlayer = "Planta"
    seleccionarAtaquePC()
    alert("Tu " + spanDevmonPlayer.innerHTML + " ataco con " + ataquePlayer + " y el ataque del " + spanDevmonPc.innerHTML + " enemigo es " + ataquePc)   
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
    crearmensaje()
}
//Funcion que muestra el resultado del combate
function resultadoCombate() {
    if (ataquePlayer == ataquePc) {
        resultado = "Empate"    
    } else if (ataquePlayer == "Fuego" && ataquePc == "Planta") {
        resultado = "Ganaste"
    }
    else if (ataquePlayer == "Agua" && ataquePc == "Fuego") {
        resultado = "Ganaste"
    }
    else if (ataquePlayer == "Planta" && ataquePc == "Agua") {
        resultado = "Ganaste"
    }
    else {
        resultado = "Perdiste"
    }   
}
//Funcion para mostrar el resultado del combate en el HTML
function  crearmensaje(resultado) {
    resultadoCombate()
    

    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu devmon ataca con " + ataquePlayer + " y el ataque del  devmon enemigo es " + ataquePc + ". " + resultado

    sectionMensajes.appendChild(parrafo)
}

//alerta por seleccionar un devmon


    function seleccionarSalmonoque() {
        alert("Selecionaste a Salmonoque")
        spanDevmonPlayer.innerHTML = "Salmonoque" 
        seleccionarDevmonPC()
    }
    function seleccionarDragonaitor() {
        alert("Selecionaste a Dragonaitor")
        spanDevmonPlayer.innerHTML ="Dragonaitor"
        seleccionarDevmonPC()
    }
    function seleccionarTortugor() {
        alert("Selecionaste a Tortugor")
        spanDevmonPlayer.innerHTML = "Tortugor" 
        seleccionarDevmonPC()
    }   

    function seleccionarTiburoncin() {
        alert("Selecionaste a Tiburoncin")
        spanDevmonPlayer.innerHTML = "Tiburoncin" 
        seleccionarDevmonPC()
    }

    function seleccionarPalmon() {
        alert("Selecionaste a Palmon")
        spanDevmonPlayer.innerHTML = "Palmon"
        seleccionarDevmonPC()
    }

    function seleccionarLeñon() {
        alert("Selecionaste a Leñon")
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
//Funcion para generar un numero aleatorio entre un rango
function random(min, max) {
    return Math.floor(Math.random() * (max-min+1)+min)
}

//Iniciar el juego al cargar la pagina
window.addEventListener("load",iniciarJuego) 
