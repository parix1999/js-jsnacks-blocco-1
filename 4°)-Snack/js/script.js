/* Traccia:
In un array sono contenuti i nomi degli invitati alla festa del grande
Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare 
o no alla festa.
*/

/* Serve sempre un ciclo, dentro ad una array per controllare se
il nome dell'invitato è presente al suo interno per poi stamparlo a
video. */

var invitati = ['Edoardo', 'Marco','Francesco','Robert','Piero','Laura'];
var tuoNome = prompt('Inserisci il tuo nome per vedere se puoi andare alla festa del grande Gatsby:')


for (var i = 0; i < invitati.length; i++) {
    if (invitati.includes(tuoNome)) {
        document.getElementById('result').innerHTML = 'Si ci sei';
    }else{
        document.getElementById('result').innerHTML = 'No mi dispiace';
    }
}