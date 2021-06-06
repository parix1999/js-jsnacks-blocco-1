/* Traccia:
Calcola la somma e la media dei primi 10 numeri.
*/

/* Vabbè la somma è l'addizione e la media è il risultato della
somma diviso il numero dei numeri sommati.
Quindi inizio col sommarli per poi dividerli per le volte della somma
utilizzo un ciclo.
*/

var max = 10;
var conto = 0;

for (var n = 1; n <= max; n++) {
    var som = conto += n;
    var media = som / max;
}
document.getElementById('result').innerHTML = 'La somma è: ' + conto;
document.getElementById('result').innerHTML += '<br> La media è: ' + media;

