/* Traccia:
Generatore di “nomi cognomi” casuali: prendendo una lista 
di nomi e una lista di cognomi, Gatsby vuole generare una falsa 
lista di 3 invitati.
*/

/* dati di cui si ha bisogno:
- Una lista con i nomi,
- Una lista con i cognomi,
- Una lista vuota da riempire con gli invitati.
*/

// Prima versione con il for:

/*

var listaNomi = ['Edoardo','Marco','Piero','Laura','Anna','Alice'];
var listaCognomi = ['Parisotto','Rossi','Bianchi','Verdi','Garibaldi'];
var invitati = [];

for (var n = 0; n < 3; n++) {
    var randomName = listaNomi[Math.floor(Math.random() * listaNomi.length)];
}

for (var i = 0; i < 3; i++) {
    var randomSurname = listaCognomi[Math.floor(Math.random() * listaCognomi.length)];
    document.getElementById('result').innerHTML += '<li>' + randomName + ' ' + randomSurname + '</li>';
}  */

// Versione con il while in modo tale che i nomi e cognomi non si ripetano se già scelti :

var listaNomi = ['Edoardo','Marco','Piero','Laura','Anna','Alice'];
var listaCognomi = ['Parisotto','Rossi','Bianchi','Verdi','Garibaldi'];
var listaInvitati = [];

while (listaInvitati.length < 3) {
    var nome = listaNomi[Math.floor(Math.random()* listaNomi.length)];
    var cognome = listaCognomi[Math.floor(Math.random()* listaCognomi.length)];
    var invitato = nome + " " + cognome;

    if (!listaInvitati.includes(invitato)) {
        document.getElementById('result').innerHTML += '<li>'+ invitato + '</li>';
        listaInvitati.push(invitato);
    }

}

