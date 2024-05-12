const nombreProducto = "Libros"
const precioUnitario = 5000

let cantidadDeseada = parseInt(prompt(`¿Cuántos ${nombreProducto} desea comprar?`))
let costoTotal = precioUnitario * cantidadDeseada

alert(`El costo total de los ${cantidadDeseada} ${nombreProducto} es de $${costoTotal}`)