const perfil = {
    nome: "Joana",
    status: false
}

const alterarStatus = function(elemento){
    perfil.status = !perfil.status;
    if(perfil.status){
        elemento.classList.add("active");
    }else{
        elemento.classList.remove("active");
    }
}