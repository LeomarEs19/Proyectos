let boxMinus = document.getElementById("boxMinus");
let boxCantidad = document.getElementById("boxCantidad");
let boxPlus = document.getElementById("boxPlus");
let valorproducto = 28;
let auxvalorproducto = new Intl.NumberFormat("de-DE").format(valorproducto)
document.getElementById("preciounidad").innerHTML = auxvalorproducto;
    
boxPlus.addEventListener("click",function(){
let auxCant= boxCantidad.innerHTML
if(auxCant < 10){
    auxCant++;
    boxCantidad.innerHTML = auxCant
    calcularsubtotal()
    cantidadproducto()
}
})

boxMinus.addEventListener("click",function(){
    let auxCant= boxCantidad.innerHTML
    if(auxCant > 0){
        auxCant--;
        boxCantidad.innerHTML = auxCant
        calcularsubtotal()
        cantidadproducto()
    }
})

function calcularsubtotal(){
    let auxCant = boxCantidad.innerHTML
    document.getElementById("subtotal").innerHTML = valorproducto * Number(boxCantidad.innerHTML)
}

function cantidadproducto(){
    let auxCant = boxCantidad.innerHTML
    document.getElementById("numeroProductos").innerHTML = auxCant
}