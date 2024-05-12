const nombreProducto = "Camperas"
const precioUnitario = 500

let cantidadDeseada = parseInt(prompt(`¿Qué cantidad de ${nombreProducto} desea comprar?`))
let costoTotal = cantidadDeseada * precioUnitario

if (cantidadDeseada >= 5){
    costoTotal = costoTotal * 0.9
}

alert(`El costo total de las ${cantidadDeseada} ${nombreProducto} es de ${costoTotal}`)
