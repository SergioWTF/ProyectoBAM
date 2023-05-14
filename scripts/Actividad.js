let producto = prompt("Ingrese el precio del producto: ");
let descuento = prompt("Ingrese el porcentaje de descuento: ");
let mensaje = "";

function calcularDescuento(producto,descuento){
    let descuentoFinal=(producto*(descuento/100))
    let total=(producto-descuentoFinal);

    if(total<=0){
        mensaje="No posee ningun tipo de descuento";
        total=0;
    }else{
        mensaje="Posee descuento, lo que deja un total de: $"+ total;
    }
    return alert(mensaje);
}

calcularDescuento(producto,descuento);