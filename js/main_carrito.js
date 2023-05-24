function renderProductosCarrito() {
    const productos = cargarProductosCarrito(); //? productos
    let salida = "";

    if (totalProductosCarrito() > 0) {
        salida += `<table class="table">
`;
        

        for (producto of productos) {
            salida += `<tr>
            <td><img src="${"../img/" + producto.imagen}" alt="${producto.alt}" width="80" /></td>
            <td class="alinear">${producto.nombre}</td>
            <td class="alinear">${producto.cantidad} X $${producto.precio}</td>
            <td class="alinear">$${producto.cantidad * producto.precio}</td>
            <td class="contendor-boton alinear">
                <button class="carrito boton-vaciar" onclick="eliminarProducto(${producto.id});" title="Eliminar Producto">
                Eliminar producto 
                    <i class="fa-solid fa-delete-left" style="color: #000000;"></i>
                </button>
            </td>
            </tr>`;
        }

        salida += `<tr class="totales">
        <td colspan="3" >Total a Pagar</td>
        <td>$${totalPagarCarrito()}</td>
        <td>&nbsp;</td>
        </tr>`;
        salida += `</table>`;
    } else {
        salida = `<div class="alerta" role="alert">No se agregaron Productos en el Carrito!</div>
      `
    }

    document.getElementById("productos").innerHTML = salida;
}

renderProductosCarrito();
renderBotonCarrito();

        // <tr>
        // <td colspan="5" class="contendor-boton"><button class="carrito boton-vaciar" onclick="vaciarCarrito()">Vaciar Carrito</button></td>
        // <tr>