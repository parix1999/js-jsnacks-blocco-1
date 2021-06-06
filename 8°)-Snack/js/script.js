/* Traccia :
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
(bonus: controllate che il numero sia realmente di 4 cifre 
altrimenti restituite un alert)
*/

/* Devo chiedere un numero di 4 cifre all'utente, quindi con un prompt,
in più devo controllare se effettivamente mette 4 cifre, per poi calcolare
i vari numeri inseriti una sola SecurityPolicyViolationEvent. */

var richiestaNumero = prompt('Inserisci un numero di 4 cifre per farli la sommma');

while (richiestaNumero.length < 4 || richiestaNumero.length > 4) {
    alert('no devono essere quattro cifre');
    richiestaNumero = prompt('Inserisci un numero di 4 cifre per farli la sommma');
}

var partenzaCalc = 0;
for (var n = 0; n < richiestaNumero.length;n++) {
    partenzaCalc += parseInt(richiestaNumero[n]);
}
document.getElementById('result').innerHTML = partenzaCalc;










