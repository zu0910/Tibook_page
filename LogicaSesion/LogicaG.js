function SaveUserT (User, id, Name, Categoria, Foto, Stars){
    sessionStorage.setItem("Nombre",User)
    sessionStorage.setItem("id",id)
    sessionStorage.setItem("Name",Name);
    sessionStorage.setItem("Categoria",Categoria);
    sessionStorage.setItem("Foto",Foto);
    sessionStorage.setItem("Stars",Stars);
}

if (sessionStorage.getItem("Nombre")){

}else{
    sessionStorage.setItem("Nombre","");
}   



