
function palindromo() {
    document.getElementById("resultado").innerText = ""
    document.getElementById("primeraPalabra").innerText = ""
    document.getElementById("segundaPalabra").innerText = ""
    var palabra = document.getElementById("palabra").value.toLowerCase()
    var lon = palabra.length
    if (lon < 3) {

        error.style.display = "flex"
        document.getElementById("resultado").innerText = ""
        document.getElementById("primeraPalabra").innerText = ""
        document.getElementById("segundaPalabra").innerText = ""
    } else if (lon >= 3) {
        
        error.style.display = "none"
        var y = lon
        var a = ""
        var b = ""
        var y2 = 0
        for (i = 0; i < lon; i++) {
            y -= 1
            a += palabra[y]
            b += palabra[y2]
            y2 += 1
        }
        if (a == b) {
            document.getElementById("resultado").innerText = "La palabra es un palíndromo"
        }
        document.getElementById("segundaPalabra").innerText = "La palabra al derecho es: " + b
        document.getElementById("primeraPalabra").innerText = "La palabra al revés es: " + a
        document.getElementById("palabra").value = ""
    }
}

function borrar() {
    document.getElementById("palabra").value = ""
    document.getElementById("resultado").innerText = ""
    document.getElementById("primeraPalabra").innerText = ""
    document.getElementById("segundaPalabra").innerText = ""
}

function tecla(event) {
    if (event.key === 'Enter') {
        palindromo()
    } else if (event.key === 'Delete') {
        borrar()
    }
}
