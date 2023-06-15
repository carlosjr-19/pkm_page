//Obteniendo los enlaces para las distintas secciones del documento html
var primerEnlace = document.getElementById('primer-nlc')
var segundoEnlace = document.getElementById('segundo-nlc')
var tercerEnlace = document.getElementById('tercer-nlc')
var cuartoEnlace = document.getElementById('cuarto-nlc')
var quintoEnlace = document.getElementById('quinto-nlc')
var sextoEnlace = document.getElementById('sexto-nlc')

//obteniendo las secciones del documento html
var seccion1 = document.getElementById('sec1')
var seccion2 = document.getElementById('sec2')
var seccion3 = document.getElementById('sec3')
var seccion4 = document.getElementById('sec4')
var seccion5 = document.getElementById('sec5')
var seccion6 = document.getElementById('sec6')


primerEnlace.onclick = () => {
    console.log("primer enlace")
    seccion1.setAttribute('style', 'display:block')
    seccion2.setAttribute('style', 'display:none')
    seccion3.setAttribute('style', 'display:none')
    seccion4.setAttribute('style', 'display:none')
    seccion5.setAttribute('style', 'display:none')
    seccion6.setAttribute('style', 'display:none')
}

segundoEnlace.onclick = () => {
    console.log("segundo enlace")
    seccion1.setAttribute('style', 'display:none')
    seccion2.setAttribute('style', 'display:block')
    seccion3.setAttribute('style', 'display:none')
    seccion4.setAttribute('style', 'display:none')
    seccion5.setAttribute('style', 'display:none')
    seccion6.setAttribute('style', 'display:none')
}


tercerEnlace.onclick = () => {
    console.log("tercer enlace")
    seccion1.setAttribute('style', 'display:none')
    seccion2.setAttribute('style', 'display:none')
    seccion3.setAttribute('style', 'display:block')
    seccion4.setAttribute('style', 'display:none')
    seccion5.setAttribute('style', 'display:none')
    seccion6.setAttribute('style', 'display:none')
}


cuartoEnlace.onclick = () => {
    console.log("cuarto enlace")
    seccion1.setAttribute('style', 'display:none')
    seccion2.setAttribute('style', 'display:none')
    seccion3.setAttribute('style', 'display:none')
    seccion4.setAttribute('style', 'display:block')
    seccion5.setAttribute('style', 'display:none')
    seccion6.setAttribute('style', 'display:none')
}


quintoEnlace.onclick = () => {
    console.log("quinto enlace")
    seccion1.setAttribute('style', 'display:none')
    seccion2.setAttribute('style', 'display:none')
    seccion3.setAttribute('style', 'display:none')
    seccion4.setAttribute('style', 'display:none')
    seccion5.setAttribute('style', 'display:block')
    seccion6.setAttribute('style', 'display:none')
}


sextoEnlace.onclick = () => {
    console.log("sexto enlace")
    seccion1.setAttribute('style', 'display:none')
    seccion2.setAttribute('style', 'display:none')
    seccion3.setAttribute('style', 'display:none')
    seccion4.setAttribute('style', 'display:none')
    seccion5.setAttribute('style', 'display:none')
    seccion6.setAttribute('style', 'display:block')
}

