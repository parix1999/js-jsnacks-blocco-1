/* Traccia:
il software deve chiedere per 10 volte all’utente
di inserire un numero. Il programma stampa la somma di tutti
i numeri inseriti.
*/

/* C'è una ripetizione di una richiesta, quindi potrebbe esserci una
automazione */
// Ciclo for:

calc = 0;

for (var i = 1; i <= 10; i++) {
    var numero = parseInt(prompt('Inserisci il numero da sommare'));
    calc += numero;
}
document.getElementById('result').innerHTML = calc; 