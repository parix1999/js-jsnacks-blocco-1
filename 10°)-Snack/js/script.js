/* Traccia:
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
*/

// Versione con il for:

/* var conto = 0;

for (var i = 0; i < 5; i++) {
    var richiestaNumero = parseInt(prompt('Inserisci un numero da sommare'));
    conto += richiestaNumero;
}

document.getElementById('result').innerHTML = conto; */

// Versione con il while: 

var x = 0;
var conto2 = 0;

while (x < 5) {
    var inputNumero = parseInt(prompt('Inserisci un numero da sommare'));
    conto2 += inputNumero;
    x++;
}
document.getElementById('result').innerHTML = conto2; 
    








