/* Traccia:
Stampa le potenze di 2 fino a 1000.
*/

for (var n = 0; n <= 1000; n++) {
    var conto = Math.pow(2, n)
    document.getElementById('result').innerHTML += '<br>' + conto; 
}