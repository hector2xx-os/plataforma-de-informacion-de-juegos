const miBoton = document.querySelector(".btn-games")
const menu = document.querySelector(".menu-lateral")

miBoton.addEventListener("click", function(){

    menu.classList.toggle("menu-activado")

})


const slides = document.querySelectorAll(".slides");

let indice = 0;
let intervalo;

/* MOSTRAR SLIDE */

function mostrarSlide(n){

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[n].classList.add("active");
}

/* SIGUIENTE */

function siguiente(){

    indice++;

    if(indice >= slides.length){
        indice = 0;
    }

    mostrarSlide(indice);
}

/* ANTERIOR */

function anterior(){

    indice--;

    if(indice < 0){
        indice = slides.length - 1;
    }

    mostrarSlide(indice);
}

/* AUTO PLAY */

function iniciarSlider(){

    intervalo = setInterval(() => {
        siguiente();
    }, 4000);

}

/* DETENER AUTO PLAY */

function detenerSlider(){
    clearInterval(intervalo);
}

/* INICIAR */

iniciarSlider();

/* PAUSA CON MOUSE */

const slider = document.querySelector(".slider");

slider.addEventListener("mouseenter", detenerSlider);

slider.addEventListener("mouseleave", iniciarSlider);