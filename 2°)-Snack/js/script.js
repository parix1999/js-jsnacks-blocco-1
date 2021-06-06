/*Traccia:
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/



var primaParola = prompt('Inserisci la prima parola');
var secondaParola = prompt('Inserisci la seconda parola');

if (primaParola.length < secondaParola.length) {
    var risultatoUno = 'La parola più corta è: ' + primaParola + ' <br> Quella più lunga è: ' + secondaParola;
    document.getElementById('risultato').innerHTML = risultatoUno; 

}else{
    var risultatoDue = ('La parola più corta è: ' + secondaParola + ' <br> Quella più lunga è: ' + primaParola);
    document.getElementById('risultato').innerHTML = risultatoDue; 
}