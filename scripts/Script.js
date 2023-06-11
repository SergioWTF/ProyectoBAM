window.onload = function() {
    var gifContainer = document.getElementById('gif-container');
    var content = document.getElementById('content');

    setTimeout(function() {
    gifContainer.style.display = 'none';
    content.style.display = 'block';
    }, 1500);
};

function volverInicio(pxPantalla){
    window.addEventListener('scroll',() => {
        var scroll = document.documentElement.scrollTop;
        var botonInicio = document.getElementById('botonInicio');
        
        if(scroll>pxPantalla){
            botonInicio.style.right = 20 + "px";
        } else {
            botonInicio.style.right = -100 + "px";
        }
    })
}

volverInicio(7426);

const nav= document.querySelector("#nav")
const abrir= document.querySelector("#abrir")
const cerrar= document.querySelector("#cerrar")

abrir.addEventListener("click",() => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click",() => {
    nav.classList.remove("visible");
})
