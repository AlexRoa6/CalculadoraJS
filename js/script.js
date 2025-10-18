const cajaResultado = document.getElementById("cajaResultado");
const cajaOperacion = document.getElementById("cajaOperacion");
const botones = document.querySelectorAll("button");
let operacionActiva = false;
let guardarEnSegundoNumero = false;
let num1="";
let num2="";
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
  if (boton.classList.contains("numero")) manejarNumeros(boton);
  else if (boton.classList.contains("operar") && !operacionActiva && num1 !=="")
    manejarOperador(boton.textContent);
  else if (boton.id === "igual" && operacionActiva) calcularResultado();
  else if (boton.classList.contains("eliminar")) manejarEliminar(boton.id);
}

function manejarNumeros(boton) {
  if (operacionCompletada) reinicarValores();
  if (!guardarEnSegundoNumero) {
    num1 += boton.textContent;
    cajaResultado.value = num1;
  } else {
    num2 += boton.textContent;
    cajaResultado.value = num2;
  }
}

function manejarOperador(op) {
  operador = op;
  guardarEnSegundoNumero = true;
  cajaOperacion.value += num1 + op;
  operacionActiva = true;
}

// Funcion que calcula el resultado de la operacion
function calcularResultado() {
  let resultado;
  cajaOperacion.value = num1 + operador + num2;
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
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
  cajaResultado.value = resultado;
  operacionCompletada = true;
}

function manejarEliminar(id) {
  if (id === "borrar") {
  } else if (id === "limpiar") {
    reinicarValores();
    cajaResultado.value = 0;
  }
}

function reinicarValores() {
  operacionActiva = false;
  guardarEnSegundoNumero = false;
  num1 = "";
  num2 = "";
  operador = null;
  operacionCompletada = false;
  cajaOperacion.value = "";
}
