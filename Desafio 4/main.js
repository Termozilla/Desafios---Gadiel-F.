let sumarProductos = (precioUnitario, cantidadDeseada) => {
    return precioUnitario * cantidadDeseada
}

let precio = 500
let cantidad = parseInt(prompt(`¿Qué cantidad de productos desea comprar?`))
let costoTotal = sumarProductos(precio, cantidad)

alert(`El costo total de su compra es de $${costoTotal}`)
console.log(`El costo total de su compra es de $${costoTotal}`)