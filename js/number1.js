function valorMaximo(){
  let maximo = Number.MAX_VALUE;
  document.getElementById("maximo").innerHTML = maximo;
}

function valorMinimo() {
  let minimo = Number.MIN_VALUE;
  document.getElementById("minimo").innerHTML = minimo;
}

function valorEpsilon() {
  let Epsilon = Number.EPSILON;
  document.getElementById("Epsilon").innerHTML = Epsilon;
}

function valorNaN() {
  let Nan = Number.NaN;
  document.getElementById("Nan").innerHTML = Nan;
}

function valorinfinito() {
  let infinito = Number.POSITIVE_INFINITY;
  document.getElementById("infinito").innerHTML = infinito;
}
function valor_menos_infinito() {
  let menos_infinito = Number.NEGATIVE_INFINITY;
  document.getElementById("menos_infinito").innerHTML = menos_infinito;
}

function met_ParseInt() {
  let valor = document.getElementById("valor").value;
  let numero = parseInt(valor);
  document.getElementById("numero_entero").innerHTML = numero;
}

function met_ParseFloat() {
  let valor = document.getElementById("valor2").value;
  let numero = parseFloat(valor);
  document.getElementById("numero_decimal").innerHTML = numero;
}

function met_toExponential() {
  let valor = document.getElementById("valor3").value;
  let exponencial = document.getElementById("exponencial").value;
  let numero = parseFloat(valor);
  document.getElementById("numero_exponencial").innerHTML = numero.toExponential(exponencial);
}

function met_toFixed() {
  let valor = document.getElementById("valor4").value;
  let redondeo = document.getElementById("redondeo").value;
  let numero = parseFloat(valor);
  document.getElementById("numero_redondeado").innerHTML = numero.toFixed(redondeo);
}

function met_isInteger() {
  let valor = document.getElementById("valor5").value;
  let numero = parseFloat(valor);
  document.getElementById("numero_comprobacion").innerHTML = Number.isInteger(numero);
}

function met_isFinite() {
  let valor = document.getElementById("valor6").value;
  let numero = parseFloat(valor);
  document.getElementById("numero_comprobacion2").innerHTML = Number.isFinite(numero);
  document.getElementById("numero_comprobacion22").innerHTML = numero;
}

function met_isNaN() {
  let valor = document.getElementById("valor7").value;
  let numero = parseFloat(valor);
  document.getElementById("numero_comprobacion3").innerHTML = Number.isNaN(numero);
}