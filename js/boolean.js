function ejemplo() {

    var b1 = new Boolean(0);
    var b2 = new Boolean(1);
    var b3 = new Boolean("");
    var b4 = new Boolean(null);
    var b5 = new Boolean(NaN);
    var b6 = new Boolean("false");

    document.write("0 es el boolean " + b1 + "<br>");
    document.write("1 es el boolean " + b2 + "<br>");
    document.write("Una string vacía es el boolean " + b3 + "<br>");
    document.write("null es el boolean " + b4 + "<br>");
    document.write("NaN es el boolean " + b5 + "<br>");
    document.write("La string 'false' es el boolean " + b6 + "<br>");
}

var primitiva = new Array(6);

function GenerarNumeros() {
    var i, j, k;
    var intnumero;
    var blnrepetido = new Boolean();
    document.getElementById("txtNumeros").value = "";
    for (i = 0; i < 6; i++) {
        do {
            blnrepetido = false;
            intnumero = Math.floor(Math.random() * 49) + 1;
            j = 0;
            while ((j < i) && (!blnrepetido)) {
                if (primitiva[j] == intnumero)
                    blnrepetido = true;
                j++;
            }
        } while (blnrepetido);
        primitiva[i] = intnumero;
    }
    primitiva.sort(Comparar);
    for (i = 0; i < 6; i++) {
        document.getElementById("txtNumeros").value += primitiva[i] + " ";
    }

    function Comparar(a, b) {
        return a - b;
    }
}