/* Traccia:
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo.
*/

var inserisciNumero = parseInt(prompt('Inserisci un numero'));

var output = document.getElementById('result');

if (inserisciNumero % 2 === 0) {
    output.innerHTML = inserisciNumero;
}else{
    output.innerHTML = inserisciNumero + 1; 
}