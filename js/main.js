// Dado con class y constructor
class Dado {
  constructor() {
    this.numCaras = 6;
  }

  lanzar() {
    return Math.floor(Math.random() * this.numCaras) + 1;
  }
}

const miDado = new Dado();

let puntaje = 0;
let historial = [];

// Función para simular tirar el dado
function simularLanzamientos(numLanzamientos) {
  const resultados = [];
  for (let i = 0; i < numLanzamientos; i++) {
    const resultado = miDado.lanzar();
    resultados.push(resultado);
    historial.push(resultado);
    puntaje += resultado; // Sumar resultado al puntaje
  }
  return resultados;
}

// Esto es para mostrar el resultado en el HTML
function mostrarResultadoEnHTML(resultado) {
  const resultadoNumero = document.getElementById("resultadoNumero");
  resultadoNumero.textContent = resultado;
}

//Actualizar el puntaje en el HTML
function actualizarPuntajeEnHTML() {
  const puntajeElemento = document.getElementById("puntaje");
  puntajeElemento.textContent = `Puntaje: ${puntaje}`;
}

// Guardar resultados en localStorage
function guardarHistorial() {
  localStorage.setItem("historial", JSON.stringify(historial));
}

// Usar el historial desde localStorage
function obtenerHistorial() {
  const historialString = localStorage.getItem("historial");
  return historialString ? JSON.parse(historialString) : [];
}

// Mostrar historial en el HTML
function mostrarHistorialEnHTML() {
  const historialDiv = document.getElementById("historial");
  historialDiv.innerHTML = ""; // Limpiar historial anterior

  historial.forEach((resultado, index) => {
    const p = document.createElement("p");
    p.textContent = `Lanzamiento ${index + 1}: ${resultado}`;
    historialDiv.appendChild(p);
  })
}

// Cargar la página
document.addEventListener("DOMContentLoaded", function() {
  historial = obtenerHistorial();
  mostrarHistorialEnHTML();
  actualizarPuntajeEnHTML();
})

// Click en el botón "Jugar"
document.getElementById("btnJugar").addEventListener("click", function() {
  const numLanzamientos = parseInt(document.getElementById("numLanzamientos").value);
  if (isNaN(numLanzamientos) || numLanzamientos <= 0) {
    alert("Por favor, ingresa un número válido mayor que cero.");
    return;
  }

  const resultadosLanzamientos = simularLanzamientos(numLanzamientos);
  const resultado = resultadosLanzamientos.join(", ");
  mostrarResultadoEnHTML(resultado);

  guardarHistorial();
  mostrarHistorialEnHTML();

  actualizarPuntajeEnHTML();
})

// Click en el botón "Reiniciar"
document.getElementById("btnReiniciar").addEventListener("click", function() {
  puntaje = 0;
  historial = [];
  actualizarPuntajeEnHTML();
  localStorage.removeItem("historial");
  mostrarHistorialEnHTML();
  mostrarResultadoEnHTML("-");
})