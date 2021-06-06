/* Traccia:
Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente attraverso un prompt.
*/ 

var input = parseInt(prompt('Inserisci per quanti numeri vuoi fare il suo cubo'))

for (var n = 1; n <= input; n++){
    var calc = Math.pow(n, 3);
    document.getElementById('result').innerHTML += calc + ' ';
}

     

