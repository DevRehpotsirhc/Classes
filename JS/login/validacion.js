const username = "Christopher";
const password = "1234";

document.getElementById("validacion").addEventListener("submit", function(event) {
    // Mantiene en stand by el formulario
    event.preventDefault();

    const inUsername = document.getElementById("username").value;
    const inPassword = document.getElementById("password").value;

    if (inUsername == username && inPassword == password){
        console.log(inUsername)
        console.log(inPassword)
        // Almacena un "mensaje" para mostrar después
        sessionStorage.setItem("mensaje", "Ha iniciado sesión correctamente.")

        // Cambiar la localización de la ventana
        window.location.href = "main.html";
    } else {
        alert("Error al iniciar sesión.")
    }
})