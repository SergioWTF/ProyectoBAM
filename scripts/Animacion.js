window.onload = function() {
    var gifContainer = document.getElementById('gif-container');
    var content = document.getElementById('content');

    // Mostrar el GIF durante 3 segundos (ajusta el tiempo según tus necesidades)
    setTimeout(function() {
    gifContainer.style.display = 'none';
    content.style.display = 'block';
    }, 1500);
};