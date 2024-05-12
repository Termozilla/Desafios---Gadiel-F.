let productos = ["Remeras", "Pantalones", "Camperas", "Shorts", "Zapatillas"];

console.log(`STOCK:`);
for (let i = 0; i < productos.length; i++){
    console.log(`${i + 1}º Producto: ${productos[i]}`);
}

console.log(`NUEVO STOCK:`);
productos.pop()
for (let i = 0; i < productos.length; i++){
    console.log(`${i + 1}º Producto: ${productos[i]}`);
}