/* Traccia:
Crea un array vuoto.Chiedi per 6 volte all’utente di inserire un 
numero,se è dispari inseriscilo nell’array.
*/
// Primi step creare la array vuota per poi inserire un prompt in un ciclo
// Per poi fare una condizione per controllare se è dispari

num = [];

for (var n = 1; n <= 6; n++) {
    var inputNumber = parseInt(prompt('Inserisci un numero'))
    if (inputNumber % 2 === 1) {
        num.push(inputNumber)
    }
}
document.getElementById('result').innerHTML += num; 
