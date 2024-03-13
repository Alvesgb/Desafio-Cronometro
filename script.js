const visor = document.getElementById('visor')
let segundos = 0
let minutos = 0
let horas = 0
let contador

//iniciar
function iniciar() {
    cronometro();
    contador = setInterval(cronometro, 1000)
}
//pausar
function parar() {
    clearInterval(contador)
}
//reiniciar
function resetar(){
    clearInterval(contador)
    segundos = 0
    minutos = 0
    horas = 0
    visor.innerHTML = "00:00:00"
}

//manter sempre com 2 digitos >> 00:00:00
function digitoZero(digito){
    if (digito < 10) {
        return `0${digito}`
    } else {
        return `${digito}`
    }
}

//contagem
function cronometro() {
    segundos++

    if (segundos === 60) {
        minutos++
        segundos = 0
    }

    if (minutos === 60) {
        horas++
        minutos = 0
    }

    visor.innerHTML = digitoZero(horas) + ":" + digitoZero(minutos) + ":" + digitoZero(segundos)
}   