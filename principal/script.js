document.addEventListener("DOMContentLoaded", Verificador)

function Verificador(){
    if (sessionStorage.getItem("Nombre") === ""){
        window.location.href="/index.html";
    }
}
let Nombre = document.getElementById("Nombre");

Nombre.textContent = sessionStorage.getItem("Name")
