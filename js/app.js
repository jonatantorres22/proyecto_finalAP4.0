function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_habilidades = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_habilidades >=20){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("react").classList.add("barra-progreso3");
        document.getElementById("vue").classList.add("barra-progreso4");
    }
}

window.onscroll = function(){
    efectoHabilidades();
}