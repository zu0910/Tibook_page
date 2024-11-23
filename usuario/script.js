
var apis=['https://66fe4aa42b9aac9c997b3402.mockapi.io/Feria/Matematicas',
    'https://66e0bd7e2fb67ac16f2a7a28.mockapi.io/Espaniol',
    'https://66fe547d2b9aac9c997b6369.mockapi.io/Ingles',
    'https://66fe4aa42b9aac9c997b3402.mockapi.io/Feria/Naturales',
    'https://66fe547d2b9aac9c997b6369.mockapi.io/Sociales'
];

// los sesionStorage son para obtener los datos del usuario que ingreso y eso se obtiene en la carpeta logiaSesion el archivo .js
document.querySelector('.nombre').innerHTML=sessionStorage.getItem("Name")
document.querySelector('.foto').innerHTML=`<img src="${sessionStorage.getItem("Foto")}" alt=""></div>`

var user_activo= sessionStorage.getItem("Name")

var cantidad_res_html=document.getElementById('cant_respuestas')

var contidadPreguntas_respuesats=document.querySelector('#p_r')

respuestas()
estrellas()
function estrellas(){
    fetch('https://66e0bd7e2fb67ac16f2a7a28.mockapi.io/v')
    .then(res=> res.json())
    .then(data=>{
        data.forEach(us=>{
            if (us.Nombre==user_activo) {
                document.querySelector('#punto_res').innerHTML=us.Stars
                console.log(us.Stars);   
            }
        })
    })
}

// funcion para buscar las preguntas que a hecho el usuario
function preguntas() {
    estrellas()
    var cont_preguntas=0
    let cuadro_preguntas = document.getElementById("cont_preguntas")

    cuadro_preguntas.innerHTML=''

    apis.forEach(ap=>{

        fetch (ap)
        .then (res => res.json())
        .then (data=>{
            data.forEach(e => {
                if (e.user==user_activo){
                    cuadro_preguntas.innerHTML+=`<div class="texto">${e.pregunta}</div>`
                    cont_preguntas++
                }        
            });
            contidadPreguntas_respuesats.innerHTML=`<p id="p_r">Preguntas</p>`
            cantidad_res_html.innerHTML=`<p id="cant_respuestas" class="punto_res">${cont_preguntas}</p>`
        });
    })
    
}

function respuestas() {
    estrellas()
    let cont_respuestas=0
    var cuadro_preguntas = document.getElementById("cont_preguntas")

    cuadro_preguntas.innerHTML=''

    apis.forEach(ap=>{

        fetch (ap)
        .then (res => res.json())
        .then (data=>{
            data.forEach(e => {
                e.respuestas.forEach(r=>{
                    if (r.user==user_activo) {
                        cuadro_preguntas.innerHTML+=`<div class="texto">${r.respuesta}</div`
                        cont_respuestas++
                    }
                })     
                
            });
            
            contidadPreguntas_respuesats.innerHTML=`<p id="p_r">Respuestas</p>`
            cantidad_res_html.innerHTML=`<p id="cant_respuestas" class="punto_res">${cont_respuestas}</p>`
        });
    })
    
}

const botones = document.querySelectorAll('.botones button');

botones.forEach(boton => {
    boton.addEventListener('click', () => {

        botones.forEach(b => b.removeAttribute('id'));

        boton.id = 'activo';
        if (boton.className == 'preguntas'){
            preguntas()
        }
        if (boton.className == 'respuestas'){
            respuestas()
        }
    });
});

//Cerrar Sesion
function CerrarSesion(){
    sessionStorage.setItem("Nombre","");
    window.location.href="/index.html";
    console.log("hola");
    
}

// Verificar si la sesion esta iniciada

document.addEventListener("DOMContentLoaded", Verificador)

function Verificador(){
    if (sessionStorage.getItem("Nombre") === ""){
        window.location.href="/index.html";
    }
}
