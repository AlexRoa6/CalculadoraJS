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
    // En caso de pulsar botones numericos
    if (boton.className === "numero") {
      cajaResultado.value += boton.textContent;
    } else {
      // Boton de borrar el ultimo caracter
      switch (boton) {
        case botonBorrar:
          cajaResultado.value = cajaResultado.value.slice(0, -1);
          break;
        case botonLimpiar:
          cajaResultado.value = null;
          resultadoOperacion = 0;
          break;
        case botonIgual:
          calcularResultado();
          break;
      }

      if (!operacionActiva) {
        switch (boton) {
          case botonSumar:
            operacionActiva = true;
            num1 = parseFloat(cajaResultado.value);
            operador = "+";
            cajaResultado.value = "";
            break;
          case botonRestar:
            operacionActiva = true;
            num1 = parseFloat(cajaResultado.value);
            operador = "-";
            cajaResultado.value = "";
            break;
          case botonMultiplicar:
            operacionActiva = true;
            num1 = parseFloat(cajaResultado.value);
            operador = "*";
            cajaResultado.value = "";
            break;
          case botonDividir:
            operacionActiva = true;
            num1 = parseFloat(cajaResultado.value);
            operador = "/";
            cajaResultado.value = "";
            break;
          case botonResto:
            operacionActiva = true;
            num1 = parseFloat(cajaResultado.value);
            operador = "%";
            cajaResultado.value = "";
            break;
          case botonPotencia:
            operacionActiva = true;
            num1 = parseFloat(cajaResultado.value);
            operador = "^";
            cajaResultado.value = "";
            break;
        }
      }
    }
  });
});

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
