const miBoton = document.querySelector(".btn-games")
const menu = document.querySelector(".menu-lateral")

miBoton.addEventListener("click", function(){

    menu.classList.toggle("menu-activado")

})

const botonXbox = document.querySelector(".btn-xbox")
const lluvia = document.querySelector(".lluvia-container")

botonXbox.addEventListener("click", function(){

    for(let i = 0; i < 25; i++){

        const logo = document.createElement("img")

        logo.src = "imagenes/logo2.png"

        logo.classList.add("logo-lluvia")

        logo.style.left = Math.random() * 100 + "%"

        logo.style.animationDuration = Math.random() * 3 + 2 + "s"

        lluvia.appendChild(logo)

        setTimeout(function(){

            logo.remove()

        }, 5000)

    }

})
const botonPlay = document.querySelector(".btn-play")

botonPlay.addEventListener("click", function(){

    for(let i = 0; i < 25; i++){

        const logo = document.createElement("img")

        logo.src = "imagenes/plays.png"

        logo.classList.add("logo-lluvia")

        logo.style.left = Math.random() * 100 + "%"

        logo.style.animationDuration =
        Math.random() * 3 + 2 + "s"

        lluvia.appendChild(logo)

        setTimeout(function(){

            logo.remove()

        }, 5000)

    }

})

const botonNintendo = document.querySelector(".btn-nin")

botonNintendo.addEventListener("click", function(){

    for(let i = 0; i < 25; i++){

        const logo = document.createElement("img")

        logo.src = "imagenes/nintendo.png"

        logo.classList.add("logo-lluvia")

        logo.style.left = Math.random() * 100 + "%"

        logo.style.animationDuration =
        Math.random() * 3 + 2 + "s"

        lluvia.appendChild(logo)

        setTimeout(function(){

            logo.remove()

        }, 5000)

    }

})

const botonSteam = document.querySelector(".btn-steam")

botonSteam.addEventListener("click", function(){

    for(let i = 0; i < 25; i++){

        const logo = document.createElement("img")

        logo.src = "imagenes/steam.png"

        logo.classList.add("logo-lluvia")

        logo.style.left = Math.random() * 100 + "%"

        logo.style.animationDuration =
        Math.random() * 3 + 2 + "s"

        lluvia.appendChild(logo)

        setTimeout(function(){

            logo.remove()

        }, 5000)

    }

})