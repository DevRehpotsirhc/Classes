const datosVentas = [];

document.getElementById('formularioventa').addEventListener('submit', function(event) {
    event.preventDefault();

    const producto = document.getElementById('producto').value;
    const cantidadVenta = parseInt(document.getElementById('cantidadventa').value);
    const fecha = new Date(document.getElementById('fecha').value);

    // Verificar si la fecha es fin de semana
    //const findesemana = (date.getDay() === 0 || date.getDay() === 6);
    //if (cantidadventa) {
    //    alert("No se pueden registrar ventas durante el fin de semana.");
    //    return;
    //}

    // Agregar la venta al arreglo
    datosVentas.push({ producto, cantidadVenta, fecha });

    // Calcular ventas totales
    const totalVentas = calcularTotalVentas();
    const ventasProductos = calcularVentasProductos();

    // Mostrar resultados
    mostrarresultados(totalVentas, ventasProductos);
});

function calcularTotalVentas() 
{
    return datosVentas.reduce((total, venta) => total + venta.cantidadventa, 0);
}


 function calcularVentasProductos() 
 {
    const ventaproductos = {};
        for (let i = 0; i < datosVentas.length; i++) {
            const venta = datosVentas[i];
            ventaproductos[venta.producto] = (ventaproductos[venta.producto] || 0) + 
            venta.cantidadventa;
        }
        return ventaproductos;
}

function mostrarresultados(totalVentas, ventasProductos)
{
    const resultDiv = document.getElementById('resultado');
    resultDiv.innerHTML = `<h2>Resultados</h2>
                           <p>Total Ventas: ${totalVentas}</p>
                           <h3>Ventas por Producto:</h3>
                           <ul>
                               ${Object.entries(ventasProductos).map(([producto, cantidadventa]) => `<li>${producto}: 
                                ${cantidadventa}</li>`).join('')}
                           </ul>`;
}