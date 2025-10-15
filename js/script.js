const cajaResultado = document.getElementById("cajaResultado");
const botones = document.querySelectorAll("button");
const botonBorrar = document.getElementById("borrar");
const botonLimpiar = document.getElementById("limpiar");
const botonIgual = document.getElementById("igual");
const botonSumar = document.getElementById("sumar");
const botonRestar = document.getElementById("restar");
const botonMultiplicar = document.getElementById("multiplicar");
const botonDividir = document.getElementById("dividir");
const botonResto = document.getElementById("resto");
const botonPotencia = document.getElementById("potencia");
let operacionActiva = false;
let num1 = 0;
let operador;

botones.forEach(function (boton) {
  boton.addEventListener("click", function () {
    manejarClick(boton);
  });
});

function manejarClick(boton) {
  if (boton.className === "numero") {
    if (
      cajaResultado.value != 0 ||
      boton.id == "decimal" ||
      cajaResultado.value.slice(-1) == "."
    ) {
      cajaResultado.value += boton.textContent;
    } else {
      cajaResultado.value = boton.textContent;
    }
  } else {
    pulsarBotonDeEliminarOIgual(boton);

    if (!operacionActiva) {
      pulsarBotonDeOperacion(boton);
    }
  }
}

function calcularResultado() {
  let resultado;
  let num2 = parseFloat(cajaResultado.value);
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
    case "%":
      resultado = num1 % num2;
      break;
    case "^":
      resultado = num1 ** num2;
      break;
  }

  cajaResultado.value = resultado;
  operacionActiva = false;
  num1 = 0;
  operador = "";
}

function pulsarBotonDeOperacion(boton) {
  num1 = parseFloat(cajaResultado.value);

  switch (boton) {
    case botonSumar:
      operacionActiva = true;
      operador = "+";
      cajaResultado.value = "";
      break;
    case botonRestar:
      operacionActiva = true;
      operador = "-";
      cajaResultado.value = "";
      break;
    case botonMultiplicar:
      operacionActiva = true;
      operador = "*";
      cajaResultado.value = "";
      break;
    case botonDividir:
      operacionActiva = true;
      operador = "/";
      cajaResultado.value = "";
      break;
    case botonResto:
      operacionActiva = true;
      operador = "%";
      cajaResultado.value = "";
      break;
    case botonPotencia:
      operacionActiva = true;
      operador = "^";
      cajaResultado.value = "";
      break;
  }
}

function pulsarBotonDeEliminarOIgual(boton) {
  switch (boton) {
    case botonBorrar:
      if (cajaResultado.value != 0) {
        cajaResultado.value = cajaResultado.value.slice(0, -1);
      } else if (cajaResultado.value.length == 0) {
        cajaResultado.value = 0;
      }
      break;
    case botonLimpiar:
      cajaResultado.value = 0;
      resultadoOperacion = 0;
      break;
    case botonIgual:
      if (operacionActiva) {
        calcularResultado();
      }
      break;
  }
}
