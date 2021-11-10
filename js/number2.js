/*=============================================*/
/*================== BINARIO ==================*/
/*=============================================*/
function esBinario(valor){
  let pattern = /^[0-1]*$/;
  return pattern.test(valor);
}
function bide(valor){
  let result = document.getElementById('bideResult');
  if(valor == ""){
    result.value = '';
  }else{
    if(esBinario(valor)){
      result.value = parseInt(valor,2);
    }else{
      result.value = 'Debes insertar un número binario';
    }    
  }
}
function bioc(valor){
  let result = document.getElementById('biocResult');
  if(valor == ""){
    result.value = '';
  }else{
    if(esBinario(valor)){
      result.value = parseInt(valor,2).toString(8);
    }else{
      result.value = 'Debes insertar un número binario';
    }    
  }
}
function bihe(valor){
  let result = document.getElementById('biheResult');
  if(valor == ""){
    result.value = '';
  }else{
    if(esBinario(valor)){
      result.value = parseInt(valor,2).toString(16);
    }else{
      result.value = 'Debes insertar un número binario';
    }    
  }
}
/*=============================================*/
/*================== DECIMAL ==================*/
/*=============================================*/
function esDecimal(valor){  
  let pattern = /^[0-9]*$/;
  return pattern.test(valor);
}
function debi(valor){
  let result = document.getElementById('debiResult');
  if(valor == ""){
    result.value = '';
  }else{
    if(esDecimal(valor)){
      valor = parseInt(valor);
      result.value = valor.toString(2);
    }else{
      result.value = 'Debes insertar un número decimal';
    }    
  }
}
function deoc(valor){
  let result = document.getElementById('deocResult');
  if(valor == ""){
    result.value = '';
  }else{
    if(esDecimal(valor)){
      valor = parseInt(valor);
      result.value = valor.toString(8);
    }else{
      result.value = 'Debes insertar un número decimal';
    }    
  }
}
function dehe(valor){
  let result = document.getElementById('deheResult');
  if(valor == ""){
    result.value = '';
  }else{
    if(esDecimal(valor)){
      valor = parseInt(valor);
      result.value = valor.toString(16);
    }else{
      result.value = 'Debes insertar un número decimal';
    }    
  }
}
/*===========================================*/
/*================== OCTAL ==================*/
/*===========================================*/
function esOctal(valor){  
  let pattern = /^[0-7]*$/;
  return pattern.test(valor);
}
function ocbi(valor){
  let result = document.getElementById('ocbiResult');
  if(valor == ""){
    result.value = '';
  }else{
    if(esOctal(valor)){
      result.value = parseInt(valor,8).toString(2);
    }else{
      result.value = 'Debes insertar un número octal';
    }    
  }
}
function ocde(valor){
  let result = document.getElementById('ocdeResult');
  if(valor == ""){
    result.value = '';
  }else{
    if(esOctal(valor)){
      result.value = parseInt(valor,8);
    }else{
      result.value = 'Debes insertar un número octal';
    }    
  }
}
function oche(valor){
  let result = document.getElementById('ocheResult');
  if(valor == ""){
    result.value = '';
  }else{
    if(esOctal(valor)){
      result.value = parseInt(valor,8).toString(16);
    }else{
      result.value = 'Debes insertar un número octal';
    }    
  }
}
/*=================================================*/
/*================== HEXADECIMAL ==================*/
/*=================================================*/
function esHexadecimal(valor){  
  let pattern = /[A-F]*[0-9]*/;
  return pattern.test(valor);
}
function hebi(valor){
  let result = document.getElementById('hebiResult');
  if(valor == ""){
    result.value = '';
  }else{
    if(esHexadecimal(valor)){
      result.value = parseInt(valor,16).toString(2);
    }else{
      result.value = 'Debes insertar un número octal';
    }    
  }
}
function hede(valor){
  let result = document.getElementById('hedeResult');
  if(valor == ""){
    result.value = '';
  }else{
    if(esHexadecimal(valor)){
      result.value = parseInt(valor,16);
    }else{
      result.value = 'Debes insertar un número octal';
    }    
  }
}
function heoc(valor){
  let result = document.getElementById('heocResult');
  if(valor == ""){
    result.value = '';
  }else{
    if(esHexadecimal(valor)){
      result.value = parseInt(valor,16).toString(8);
    }else{
      result.value = 'Debes insertar un número octal';
    }    
  }
}