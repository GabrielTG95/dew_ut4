var html = document.querySelector("link[rel='import']").import;
var text = html.getElementById("text");

document.body.appendChild(text.cloneNode(true));


/*-----------------------------------------------
                    Math
-------------------------------------------------*/



/*-----------------------------------------------
                    Boolean
-------------------------------------------------*/



/*-----------------------------------------------
                    Number
-------------------------------------------------*/

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

/*-----------------------------------------------
            Number, Cambios de base
-------------------------------------------------*/








