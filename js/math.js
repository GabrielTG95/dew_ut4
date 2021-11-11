function redondeo_decimales() {
  let numero = document.getElementById('numero').value;
  let decimales = document.getElementById('redondeo').value;
  var resultado1 = numero * Math.pow(10, decimales);
  var resultado2 = Math.round(resultado1);
  var resultado3 = resultado2 / Math.pow(10, decimales);
  document.getElementById("funcionRedondeo").value = resultado3;
}

function areaCirculo() {
  let radio = document.getElementById('radio').value;
  var pi = Math.PI;
  radio = radio * radio;
  document.getElementById("funcionArea").value = (pi * radio);
}

document.getElementById("euler").value = Math.E;
document.getElementById("pi").value = Math.PI;
document.getElementById("valorAbsoluto").value = Math.abs(-45);
document.getElementById("max").value = Math.max(5, 60, 40, 100);
document.getElementById("min").value = Math.min(5, 60, 40, 100);
document.getElementById("pow").value = Math.pow(2, 5);
document.getElementById("signNegativo").value = Math.sign(-50);
document.getElementById("signPositivo").value = Math.pow(50,0);
document.getElementById("random").value = Math.random() * 100;
document.getElementById("round").value = Math.round(4.3);
document.getElementById("floor").value = Math.floor(4.3, 2);
document.getElementById("ceil").value = Math.ceil(4.8);
document.getElementById("trunc").value = Math.trunc(4.82);
