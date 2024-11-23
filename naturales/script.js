let menu=0
document.querySelector(".materias svg").addEventListener("click",()=>{
    if (menu===0) {
        document.querySelector(".materias svg path").style.fill="#fff"
        document.querySelector("#menu").style="z-index: 5;"
        document.querySelector(".menuHamburquesa").style="width: 10rem;padding-left: 2rem;left: 0rem;"
        document.querySelector("#tibook").style.display="flex"  
        menu=1
    } else {
        document.querySelector(".materias svg path").style.fill="#000"
        document.querySelector(".menuHamburquesa").style="width: 0rem;padding-left: 0rem;left: -10rem;"
        document.querySelector("#tibook").style.display="none" 
        menu=0
    }

})

const noti = document.getElementById('noti');
const notificaciones = document.getElementById('notificaciones');

noti.addEventListener('click', function() {
    if (!notificaciones.open) {
        notificaciones.show();
    } else {
        notificaciones.close();
    }
});

document.querySelector("#regalo").addEventListener("click",()=>{    
    document.querySelector("#dialogRegalo").showModal();
    document.querySelector(".question").innerHTML="hola"
    
    document.querySelector("#exit").addEventListener("click",()=>{
        document.querySelector("#dialogRegalo").close();
    })
    console.log("hola");
    
})
//------------------------------------------------------------------
const LeftBox = document.getElementById("left");
const QuestionModal = document.getElementById("QuestionModal");
const AnswerModal = document.getElementById("AnswerModal");
const IconBusqueda = document.getElementById("busqueda");
const SendModal = document.getElementById("Send");
const salir_question = document.getElementById("salir");
let Question = document.getElementById("Question");
let Answer = document.getElementById("Answer");
QuestionModal.style="display:none;"
CierreF = document.getElementById("CierreF");

salir_question.addEventListener("click",()=>{
    QuestionModal.close()
    QuestionModal.style="display:none;"
})

CierreF.addEventListener("click",()=>{
    AnswerModal.close()
})

function ViewFetch(){
    fetch("https://66fe4aa42b9aac9c997b3402.mockapi.io/Feria/Naturales")
    .then(res => res.json())
    .then(data =>{
        let contador=1;
        document.querySelector(".seccionQuestion").innerHTML=''
        data.forEach(obj => {
            if(sessionStorage.getItem("Categoria") === "Profesor" ){
                document.querySelector(".seccionQuestion").innerHTML+=`
                <div class="pregunta">
                    <div class="user">
                        <div class="user_name">
                            <img src="${obj.perfil}" alt="">
                            <p class="name">${obj.user}</p>
                        </div>
                        <div class="date">${obj.fecha}</div>
                    </div>
                    <div class="question">${obj.pregunta}</div>
                    <div class="responder">
                        
                        <button class="verRespuestasButton" id="ver" data-id="${obj.id}">Ver Respuestas</button>
                    </div>
                    <div class="respuestas" id="CajaR${obj.id}">
                        
                    </div>
                </div>
            `
            }
            else{
                document.querySelector(".seccionQuestion").innerHTML+=`
                <div class="pregunta">
                    <div class="user">
                        <div class="user_name">
                            <img src="${obj.perfil}" alt="">
                            <p class="name">${obj.user}</p>
                        </div>
                        <div class="date">${obj.fecha}</div>
                    </div>
                    <div class="question">${obj.pregunta}</div>
                    <div class="responder">
                        <button class="responderButton" data-id="${obj.id}">Responder</button>
                        <button class="verRespuestasButton" id="ver" data-id="${obj.id}">Ver Respuestas</button>
                    </div>
                    <div class="respuestas" id="CajaR${obj.id}">
                        
                    </div>
                </div>
                `
            }
            
            const BoxAnswer = document.getElementById(`CajaR${obj.id}`);
            ShowAnswers()
            function ShowAnswers(){
                obj.respuestas.forEach(Respuestas =>{
                    BoxAnswer.innerHTML+=`
                        <div class="respuestaC">
                            <div class="rUser">
                                <div class="rUSer_name">
                                    <img src=${Respuestas.perfil} alt="">
                                    <p class="rName">${Respuestas.user}</p>
                                </div>
                                <div class="dateAnswers">${Respuestas.fecha}</div>
                            </div>
                            <div class="rRespuesta">
                                ${Respuestas.respuesta}
                            </div>
                            </div>
                            <div class="stars${contador}" data-id="${Respuestas.user}" id="stars" onclick="estrellas(${contador},${Respuestas.id})" >
                                <svg id="star1" data-id="0"xmlns="http://www.w3.org/2000/svg" width="2vw" viewBox="0 0 24 24" style="fill: #888888;transform: msFilter;"><path d="m6.516 14.323-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107zm2.853-4.326a.998.998 0 0 0 .832-.586L12 5.43l1.799 3.981a.998.998 0 0 0 .832.586l3.972.315-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385-3.736-2.491a.995.995 0 0 0-1.109 0l-3.904 2.603 1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962 4.09-.326z"></path></svg>
                            </div>
                        </div>
                    `
                    contador+=1;
                })
                document.querySelectorAll("#ver").forEach(VerAnswer=>{
                    VerAnswer.addEventListener("click", Show)
                    
                })
                function Show(e){
                    const id = e.target.getAttribute("data-id");
                    const Boton = e.srcElement;

                    const caja = document.querySelector(`#CajaR${id}`);
                    if (caja.style.height === "auto"){
                        caja.style.height = 0
                        Boton.textContent = "Ver Respuestas";
                    }
                    else{
                        caja.style.height = "auto"
                        Boton.textContent = "Ocultar Respuestas";
                    }
                }
            }
        });
        document.querySelectorAll(".responderButton").forEach(Res => {
            Res.addEventListener("click", (e) => {
            
            AnswerModal.showModal();
    
            const Answer = document.getElementById("Answer");
            Answer.value = ''; 
    
            const currentId = e.target.getAttribute("data-id");
    
            console.log('ID de la pregunta:', currentId);
    
            const sendButton = document.getElementById("SendR");
    
            sendButton.onclick = async () => {
                AnswerModal.close();

                if (Answer.value.trim() === '') {
                    console.error('La respuesta está vacía.');
                    return;
                }
                
                console.log('Respuesta a enviar:', Answer.value);
                console.log('Enviando a ID:', currentId);
    
                try {
                    await AddNewAnswer(Answer.value, currentId);
                } catch (error) {
                    console.error('Error al enviar la respuesta:', error);
                }
            };
        });
    });

    })
    document.getElementById("question").addEventListener("click",()=>{
        Verificador()
        QuestionModal.style="display:flex;"
        QuestionModal.showModal()
        Question.addEventListener("change",(e)=>{
            SendModal.addEventListener("click",()=>{
                AddNewQuestion(e.target.value)
                QuestionModal.style="display:none;"
                QuestionModal.close()
            })
        })
    })  
};

async function AddNewAnswer(Q,id) {
    
    const response = await fetch(`https://66fe4aa42b9aac9c997b3402.mockapi.io/Feria/Naturales/${id}`);
    const data= await response.json()

    let idAnterior = Number(data.id)+1
    

    let Nueva = {
        "id": `${idAnterior}`,
        "fecha": DateF(),
        "user": Nombre,
        "respuesta": Q,
        "perfil": FotoUser
    }
    
    const NuevasRespuestas = data.respuestas
    NuevasRespuestas.push(Nueva)
    console.log(data);
    
    
    const task = Q;
    if(task.trim() === ''){
        return;
    }
    
    await fetch(`https://66fe4aa42b9aac9c997b3402.mockapi.io/Feria/Naturales/${id}`,{
        method: 'PUT',
        headers:{
            'Content-Type' : 'application/json',
        },
        body:JSON.stringify({respuestas : NuevasRespuestas})
    });
    Q.value = '';
    ViewFetch()
};

async function AddNewQuestion(Q) {    
    const task = Q;
    if(task.trim() === ''){
        return;
    }
    
    await fetch('https://66fe4aa42b9aac9c997b3402.mockapi.io/Feria/Naturales',{
        method: 'POST',
        headers:{
            'Content-Type' : 'application/json',
        },
        body:JSON.stringify({
            "user": Nombre,
            "fecha": DateF(),
            "perfil": FotoUser,
            "pregunta": task,
            "respuestas": [
            ]
        })
    });
    Q.value = '';
    ViewFetch()
};
ViewFetch();

let NombreUser = sessionStorage.getItem("Nombre");
let Nombre = sessionStorage.getItem("Name");
let FotoUser = sessionStorage.getItem("Foto");

console.log(FotoUser);


document.addEventListener("DOMContentLoaded", Verificador)

function Verificador(){
    if (sessionStorage.getItem("Nombre") === ""){
        window.location.href="/index.html";
    }
    else {
        EliminarQuestion()
    }
}
// Verificador para eliminar proceso de preguntas para docentes.
function EliminarQuestion(){
    if (sessionStorage.getItem("Categoria") === "Profesor"){
        document.getElementById("question").remove();
    }
}

function DateF(){
    const fechaActual = new Date();
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1; 
    const año = fechaActual.getFullYear();
    const hora = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();
    let Fecha_Actual = (`${dia}/${mes}/${año} - ${hora}:${minutos}`);
    return Fecha_Actual
}

function estrellas(id_estrella,id){
    const stars = document.querySelector(".stars"+id_estrella);


    const estrellaSvg = document.querySelector(".stars"+id_estrella+" svg");
    if(estrellaSvg.getAttribute('data-id')==0){
        stars.innerHTML = `
        <svg id="star1" data-id="1" xmlns="http://www.w3.org/2000/svg" width="2vw" viewBox="0 0 24 24" style="fill: #30BF54;transform: msFilter;"><path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path></svg>
        `

        var nombre_user=stars.getAttribute('data-id')
        console.log(nombre_user);
        
        fetch('https://66e0bd7e2fb67ac16f2a7a28.mockapi.io/v')
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            data.forEach(us=>{
                if (us.Nombre==nombre_user) {
                    let numero_estrellas_user=us.Stars
                    fetch(`https://66e0bd7e2fb67ac16f2a7a28.mockapi.io/v/${us.id}`, {
                        method: 'PUT', // Utilizamos PATCH para actualizaciones parciales
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            Stars:  numero_estrellas_user+1 // Nuevo valor para el campo 'Stars'
                        })
                    });
                }
            })
        })
    }else{
        stars.innerHTML = `
        <svg id="star1" data-id="0"xmlns="http://www.w3.org/2000/svg" width="2vw" viewBox="0 0 24 24" style="fill: #888888;transform: msFilter;"><path d="m6.516 14.323-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107zm2.853-4.326a.998.998 0 0 0 .832-.586L12 5.43l1.799 3.981a.998.998 0 0 0 .832.586l3.972.315-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385-3.736-2.491a.995.995 0 0 0-1.109 0l-3.904 2.603 1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962 4.09-.326z"></path></svg>`
        
        var nombre_user=stars.getAttribute('data-id')
        console.log(nombre_user);
        
        fetch('https://66e0bd7e2fb67ac16f2a7a28.mockapi.io/v')
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            data.forEach(us=>{
                if (us.Nombre==nombre_user) {
                    let numero_estrellas_user=us.Stars
                    fetch(`https://66e0bd7e2fb67ac16f2a7a28.mockapi.io/v/${us.id}`, {
                        method: 'PUT', // Utilizamos PATCH para actualizaciones parciales
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            Stars:  numero_estrellas_user-1 // Nuevo valor para el campo 'Stars'
                        })
                    });
                }
            })
        })
    }
    console.log(id_estrella, id);
    console.log(estrellaSvg.getAttribute('data-id'))
    
}

function SubirEstrellas(User) {
    console.log(User);
    
}
    