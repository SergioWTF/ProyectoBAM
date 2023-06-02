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