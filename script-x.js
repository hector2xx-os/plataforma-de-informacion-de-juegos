let slides = document.querySelectorAll(".slides");

let indice = 0;

function mostrarSlide(n){

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[n].classList.add("active");
}

function siguiente(){

    indice++;

    if(indice >= slides.length){
        indice = 0;
    }

    mostrarSlide(indice);
}

function anterior(){

    indice--;

    if(indice < 0){
        indice = slides.length - 1;
    }

    mostrarSlide(indice);
}

/* CAMBIO AUTOMATICO */

setInterval(() => {
    siguiente();
}, 4000);
