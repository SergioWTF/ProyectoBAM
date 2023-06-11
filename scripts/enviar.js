function enviar() {
    window.alert('Se envio correctamente');
}

const formulario=document.getElementById('formulario');
const inputs=document.querySelectorAll('#formulario input');

const validarFormulario = (e) => {
    switch(e.target.name){
        case "nombre":
            console.log('Funciona!')
        break;

        case "edad":
            console.log('Funciona!')
        break;

        case "telefono":
            console.log('Funciona!')
        break;

        case "email":
            console.log('Funciona!')
        break;

        case "mensaje":
            console.log('Funciona!')
        break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup',validarFormulario);
    input.addEventListener('blur',validarFormulario);
});

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
})