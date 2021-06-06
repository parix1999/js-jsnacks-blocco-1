/* Traccia:
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

outPut = document.getElementById('result');

var primoNumero = parseInt(prompt('Inserisci il primo numero'));
var secondoNumero = parseInt(prompt('Inserisci il secondo numero'));

if (primoNumero > secondoNumero) {
    outPut.innerHTML = 'Il numero maggiore è: ' + primoNumero;
}else{
    outPut.innerHTML = 'Il numero maggiore è: ' + secondoNumero;
}