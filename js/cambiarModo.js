var raiz = document.documentElement;
var btnCambiarModo = document.getElementById("modo-oscuro");
var primerEnlace = document.getElementById('primer-nlc')
var segundoEnlace = document.getElementById('segundo-nlc')
var tercerEnlace = document.getElementById('tercer-nlc')
var cuartoEnlace = document.getElementById('cuarto-nlc')
var quintoEnlace = document.getElementById('quinto-nlc')
var sextoEnlace = document.getElementById('sexto-nlc')

var activo = false

btnCambiarModo.onclick = () => {
    activarModoOscuro()
}

function activarModoOscuro() {

    if(activo == false){
        raiz.style.setProperty("--colorSection", "linear-gradient(to right top, #051937, #001b4a, #001a5c, #0a176d, #270b7b)")
        raiz.style.setProperty("--colorFuenteSection", "white")
        raiz.style.setProperty("--imagenFondo", "url(../img/fondoOscuro.jpg)")
        raiz.style.setProperty("--colorMenu", "linear-gradient(to right, #201a25, #241732, #26143f, #25114d, #200d5c)")
        raiz.style.setProperty("--colorFuenteMenu", "white")
        raiz.style.setProperty("--colorEtiquetaAfterMenu", "rgb(223, 217, 217)")
        raiz.style.setProperty("--colorFuenteEtiquetaAfterMenu", "black")
        raiz.style.setProperty("--colorFuenteMenuHover", "#F72323")
        raiz.style.setProperty("--colorCabezeraTabla", "#7920DE")
        raiz.style.setProperty("--colorCeldasTabla", "#686868")
        raiz.style.setProperty("--colorFuenteCeldasTabla", "white")
        raiz.style.setProperty("--colorTarjetaPokemon", "#577B83")
        raiz.style.setProperty("--colorTituloTarjetaPokemon", "#E6F1F0")
        raiz.style.setProperty("--colorFuenteTarjetaPokemon", "white")


        primerEnlace.onclick = () => {
            seccion1.setAttribute('style', 'display:block')
            seccion2.setAttribute('style', 'display:none')
            seccion3.setAttribute('style', 'display:none')
            seccion4.setAttribute('style', 'display:none')
            seccion5.setAttribute('style', 'display:none')
            seccion6.setAttribute('style', 'display:none')
        }

        segundoEnlace.onclick = () => {
            console.log("primer enlace")
            seccion1.setAttribute('style', 'display:none')
            seccion2.setAttribute('style', 'display:block')
            seccion3.setAttribute('style', 'display:none')
            seccion4.setAttribute('style', 'display:none')
            seccion5.setAttribute('style', 'display:none')
            seccion6.setAttribute('style', 'display:none')
        }

        tercerEnlace.onclick = () => {
            console.log("primer enlace")
            seccion1.setAttribute('style', 'display:none')
            seccion2.setAttribute('style', 'display:none')
            seccion3.setAttribute('style', 'display:block')
            seccion4.setAttribute('style', 'display:none')
            seccion5.setAttribute('style', 'display:none')
            seccion6.setAttribute('style', 'display:none')
        }

        cuartoEnlace.onclick = () => {
            console.log("primer enlace")
            seccion1.setAttribute('style', 'display:none')
            seccion2.setAttribute('style', 'display:none')
            seccion3.setAttribute('style', 'display:none')
            seccion4.setAttribute('style', 'display:block')
            seccion5.setAttribute('style', 'display:none')
            seccion6.setAttribute('style', 'display:none')
        }

        quintoEnlace.onclick = () => {
            console.log("primer enlace")
            seccion1.setAttribute('style', 'display:none')
            seccion2.setAttribute('style', 'display:none')
            seccion3.setAttribute('style', 'display:none')
            seccion4.setAttribute('style', 'display:none')
            seccion5.setAttribute('style', 'display:block')
            seccion6.setAttribute('style', 'display:none')
        }

        sextoEnlace.onclick = () => {
            console.log("primer enlace")
            seccion1.setAttribute('style', 'display:none')
            seccion2.setAttribute('style', 'display:none')
            seccion3.setAttribute('style', 'display:none')
            seccion4.setAttribute('style', 'display:none')
            seccion5.setAttribute('style', 'display:none')
            seccion6.setAttribute('style', 'display:block')
        }

        activo = true

    }else{
        raiz.style.setProperty("--colorSection", "linear-gradient(to right top, #f3880d, #f49605, #f5a401, #f4b203, #f3c00d)");
        raiz.style.setProperty("--colorFuenteSection", "black");
        raiz.style.setProperty("--imagenFondo", "url(../img/pkm2.jpg)");
        raiz.style.setProperty("--colorMenu", "linear-gradient(to bottom, #f3880d, #f3900b, #f3980a, #f39f0a, #f3a70d)");
        raiz.style.setProperty("--colorFuenteMenu", "black");
        raiz.style.setProperty("--colorEtiquetaAfterMenu", "rgb(45, 45, 45)");
        raiz.style.setProperty("--colorFuenteEtiquetaAfterMenu", "azure");
        raiz.style.setProperty("--colorFuenteMenuHover", "white");
        raiz.style.setProperty("--colorCabezeraTabla", "rgb(0, 17, 255)");
        raiz.style.setProperty("--colorCeldasTabla", "rgb(229, 232, 236)");
        raiz.style.setProperty("--colorFuenteCeldasTabla", "black");
        raiz.style.setProperty("--colorTarjetaPokemon", "#fff");
        raiz.style.setProperty("--colorTituloTarjetaPokemon", "#555");
        raiz.style.setProperty("--colorFuenteTarjetaPokemon", "black");

        activo = false
    }
}
