function iniciarJuego() {
    let botonSalmonoque = document.getElementById("botonSalmonoque")
    botonSalmonoque.addEventListener("click",seleccionarSalmonoque)

    let botonDragonaitor = document.getElementById("botonDragonaitor")
    botonDragonaitor.addEventListener("click",seleccionarSalmonoque)


    let botonTortugor = document.getElementById("botonTortugor")
    botonTortugor.addEventListener("click",seleccionarTortugor)

    let botonTiburoncin = document.getElementById("botonTiburoncin")
    botonTiburoncin.addEventListener("click",seleccionarTiburoncin)

    let botonPalmon = document.getElementById("botonPalmon")
    botonPalmon.addEventListener("click",seleccionarPalmon)

    let botonLeñon = document.getElementById("botonLeñon")
    botonLeñon.addEventListener("click",seleccionarLeñon)

}

function seleccionarSalmonoque() {
    alert("Selecionaste a Salmonoque")
}
function seleccionarDragonaitor() {
    alert("Selecionaste a Dragonaitor")
}
function seleccionarTortugor() {
    alert("Selecionaste a Tortugor")
}

function seleccionarTiburoncin() {
    alert("Selecionaste a Tiburoncin")
    }

function seleccionarPalmon() {
    alert("Selecionaste a Palmon")
    }

function seleccionarLeñon() {
    alert("Selecionaste a Leñon")
}



window.addEventListener("load",iniciarJuego)