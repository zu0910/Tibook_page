let Nombre = document.getElementById("Nombre");

Nombre.textContent = sessionStorage.getItem("Name");

// Verificar si la sesion esta iniciada

document.addEventListener("DOMContentLoaded", Verificador)

function Verificador(){
    if (sessionStorage.getItem("Nombre") === ""){
        window.location.href="/index.html";
    }
}