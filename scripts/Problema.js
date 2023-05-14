function calculo(){
    var peso = parseInt(document.getElementById("peso").value);
    var altura = parseInt(document.getElementById("altura").value);
    var alturadecimal = altura/100;
    var resultado = peso/((alturadecimal*alturadecimal));

if(resultado<=18.5){
    resultado="Peso Inferior";
}
else if(resultado>=18.5&&resultado<=24.9){
    resultado="Peso Normal";
}
else if(resultado>=25&&resultado<=29.9){
    resultado="Sobrepeso";
}
else if(resultado>=30&&resultado<=34.9){
    resultado="Obesidad";
}
document.getElementById("resultado").innerHTML=resultado;
}

let pesoPersona = prompt("Ingrese su peso en kg");
let alturaPersona = prompt("Ingrese su altura en m");
let mensaje="";

function calculoImc(altura,peso){
    let resultadoImc= (peso/(altura*altura)).toFixed(2);
    
    if(resultadoImc< 18.5){
        mensaje= "Su IMC es de: " + resultadoImc + "; Usted tiene un peso inferior al normal.";
    }else if(resultadoImc>=18.5&&resultadoImc<25){
        mensaje= "Su IMC es de: " + resultadoImc + "; Usted tiene un peso normal.";
    }else if(resultadoImc>=25&&resultadoImc<30){
        mensaje= "Su IMC es de: " + resultadoImc + "; Usted tiene sobrepeso.";
    }else if(resultadoImc=isNaN){
        mensaje = "Ingrese valores válidos";
    }else{
        mensaje= "Su IMC es de: " + resultadoImc + "; Usted tiene tiene obesidad.";
    }
    return alert(mensaje);
}

calculoImc(pesoPersona,alturaPersona);