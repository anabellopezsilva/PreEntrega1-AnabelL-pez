// constante para el número de caras del dado
const NUM_CARAS_DADO = 6;

// función para un dado de 6 caras
function lanzarDado() {
  return Math.floor(Math.random() * NUM_CARAS_DADO) + 1;
}
  
// mostrar los resultados del dado
function mostrarResultadosEnVentana(resultados) {
    let mensaje = "Tu suerte fue de:\n\n";
    resultados.forEach((resultado, index) => {
      mensaje += `Lanzamiento ${index + 1}: ${resultado}\n`;
    });
    alert(mensaje);
}
  
// pedir cuántas veces quiere tirar el dado
function obtenerCantidadLanzamientos() {
    let cantidad = prompt("¿Cuántas veces querés tirar el dado?");
    cantidad = parseInt(cantidad);
    if (isNaN(cantidad) || cantidad <= 0) {
      alert("Eso no es un número, che. :/ Poné un número mayor que cero.");
      return obtenerCantidadLanzamientos();
    }
    return cantidad;
}
  
// tirar dados y preguntar al usuario si quiere volver a tirar
function simularYVolverATirar() {
    let seguirTirando = true;
  
    while (seguirTirando) {
      let cantidadLanzamientos = obtenerCantidadLanzamientos();
      let resultadosLanzamientos = simularLanzamientos(cantidadLanzamientos);
      mostrarResultadosEnVentana(resultadosLanzamientos);
  
      let respuesta = confirm("¿Querés volver a tirar el dado?");
      seguirTirando = respuesta;
    }
}
  
// resultados
function simularLanzamientos(numLanzamientos) {
    let resultados = [];
    for (let i = 0; i < numLanzamientos; i++) {
      resultados.push(lanzarDado());
    }
    return resultados;
}
  
simularYVolverATirar();