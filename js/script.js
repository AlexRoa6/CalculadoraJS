const cajaResultado = document.getElementById("cajaResultado");
const cajaOperacion = document.getElementById("cajaOperacion");
const botones = document.querySelectorAll("button");
let operacionActiva = false;
let guardarEnSegundoNumero = false;
let num1 = "";
let num2 = "";
let operador;
let operacionCompletada = false;
// Añadir listenner a cada boton.
botones.forEach(function (boton) {
  boton.addEventListener("click", function () {
    // Funcion principal
    manejarClick(boton);
  });
});

// Funcion que define que hace en caso de pulsar los distintos botones
function manejarClick(boton) {
  //Pulsar un numero
  if (boton.classList.contains("numero")) manejarNumeros(boton);
  // Pulsar un operador comprobar que ya hay num1 y que no se ha pulsado ningun otro operador antes
  else if (
    boton.classList.contains("operar") &&
    !operacionActiva &&
    num1 !== ""
  )
    manejarOperador(boton.textContent);
  // Pulsar boton de igual comprobar que ya hay un operador pulsado
  else if (boton.id === "igual" && operacionActiva) calcularResultado();
  // Pulsar algun boton con accion de eliminar
  else if (boton.classList.contains("eliminar")) manejarEliminar(boton.id);
}

function manejarNumeros(boton) {
  if (operacionCompletada) reiniciarValores(); //Si ya se ha realizado una operacion al pulsar de nuevo un boton reinicar Valores
  if (!guardarEnSegundoNumero) { // Guardar los numeros pulsados en num1 hasta que se pulse un operador
    num1 += boton.textContent;
    cajaResultado.value = num1;
  } else { // Los valores se guardan en num2 si ya se ha pulsado un operador
    num2 += boton.textContent;
    cajaResultado.value = num2;
  }
}

// Al pulsarse un operador se ejecuta esta funcion
function manejarOperador(op) {
  operador = op; // Guarda el operador pulsado en una variable
  guardarEnSegundoNumero = true; // Activa la variable para guardar los valores en num2
  cajaOperacion.value += num1 + op; // Muestra en la pantalla de arriba la operacion en marcha
  operacionActiva = true; // Activa la variable para desactivar los botones de operadores
}

// Funcion que calcula el resultado de la operacion
function calcularResultado() {
  let resultado;
  cajaOperacion.value = num1 + operador + num2; // Muestra en la pantalla de arriba la operacion completa
  num1 = parseFloat(num1); 
  num2 = parseFloat(num2);
  // Evalua el operador activo y realiza la operacion correspondiente 
  switch (operador) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      resultado = num1 / num2;
      break;
    case "^":
      resultado = num1 ** num2;
      break;
    case "%":
      resultado = num1 % num2;
      break;
  }
  cajaResultado.value = resultado; // Muestra el resultado en la pantalla de abajo
  operacionCompletada = true; // Activa la variable para en la siguiente interaccion que se haga reiniciar los valores
}

// Define la accion que realizar en caso de pulsar los botones de "C" o "Borrar"
function manejarEliminar(id) {
  if (id === "borrar") {
  } else if (id === "limpiar") { // Al pulsar el boton "C" reinicar Valores y la pantalla de abajo
    reiniciarValores();
    cajaResultado.value = 0;
  }
}

function reiniciarValores() {
  operacionActiva = false;
  guardarEnSegundoNumero = false;
  num1 = "";
  num2 = "";
  operador = null;
  operacionCompletada = false;
  cajaOperacion.value = "";
}
