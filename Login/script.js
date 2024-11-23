document.querySelector(".dontHave span").addEventListener("click",()=>{
    if (document.querySelector(".log").clientHeight<=640) {

        document.querySelector(".Log2").style.marginTop="-25rem"
        
    } else {
        document.querySelector(".Log2").style.marginTop="-33rem"
        console.log(document.querySelector(".log").clientHeight);
        
    }

    document.querySelector("#sigIn").style.display="flex"
    document.querySelector(".dontHave").style.display="none"
    document.querySelector(".pSignin").style.marginTop="-5rem"
})
document.querySelector("#sigIn").addEventListener("click",()=>{

    if (document.querySelector(".log").clientHeight<=640) {

        document.querySelector(".Log2").style.marginTop="3rem"
        
    } else {
        
        document.querySelector(".Log2").style.marginTop="9rem"
    }
    document.querySelector("#sigIn").style.display="none"
    document.querySelector(".dontHave").style.display="flex"
    document.querySelector(".pSignin").style.marginTop=""
})

fetch("https://66e0bd7e2fb67ac16f2a7a28.mockapi.io/v")
.then(Res => Res.json())
.then(Data =>{
    console.log(Data);

    document.getElementById("Log").addEventListener("submit",(e)=>{
        e.preventDefault()

        let VeUser = document.querySelector(".user").value;
        let VePass = document.querySelector(".password").value;

        Data.forEach(Users => {
            if (VeUser === Users.User && VePass===Users.Password ){
                if (Users.Categoria === "Profesor") {
                    window.location.href="../Bienvenida_profesor/index.html";
                    SaveUserT(Users.User, Users.id, Users.Nombre, Users.Categoria, Users.FotoUser, Users.Stars)
                }
                else{
                    window.location.href="../principal/index.html";
                    SaveUserT(Users.User, Users.id, Users.Nombre, Users.Categoria, Users.FotoUser, Users.Stars)
                }
            }else{
                document.getElementById("Modal").showModal();
                document.getElementById("CerrarModal").addEventListener("click",()=>{
                    document.getElementById("Modal").close();
                })
            };
        });
    });
});

document.getElementById("mostrar").addEventListener("change",(e)=>{
    if(e.target.checked){
        document.querySelector(".password").type="text"
    }else{
        document.querySelector(".password").type="password"   
    }    
})