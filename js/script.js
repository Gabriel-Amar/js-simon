/*
Visualizzare in pagina 5 numeri casuali (in un range tra 1 e 100). Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


esercizio oggi
html numeri casuali div
range da 1 a 100
array vuoto es. let numeriGenerati = [];
imposto un ciclo while numeriGenerati.lenght < 5;
stampo l'array innerHTML join carattere separazione 
parte timer funzione set timout che chiama un altra funzione 
alla fine dei 30 sec cancella tutti i numeri dalla pagina con innerHTML = ""
e dico all'utente inserisci i 5 numeri che hai visto 1 alla volta con un prompt ciclo for da 1 a 5
mettere questi numeri in un array dell'utente
ora si hanno 2 array: numeri generati e numeri utente
ora software deve confrontare i due array 
per esempio con un altro array numeri indovinati 
*/
function getRandom(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

let numeriGenerati = [];

while(numeriGenerati.length < 5){
    numeriGenerati.push(getRandom(1, 100));
}

let numeriSeparati = numeriGenerati.join('-');
let numeri = document.getElementById("numeriSeparati")

numeri.innerHTML = numeriSeparati
console.log(numeriGenerati)

let time = document.getElementById('divTempo');

let timer = function(num) {
    if(num === 0) {
        azione()
        return;
    }
    time.innerHTML = num;
    return setTimeout(() => {timer(--num)}, 1000)
}
timer(4);

let rimuoviNumeri = setTimeout(function(){
    time.innerHTML = ""
    numeri.innerHTML = ""
}, 4000);

numeriInseriti = []

function azione(){
    for(let i = 0; i < 5; i++){
        numeriInseriti.push(parseInt(prompt("Inserisci i 5 numeri che hai visto")));
    }
    console.log(numeriInseriti)
}

let numeriIndovinati = []

// for(let i = 1; i < numeriGenerati.length; i++){
//     if(numeriGenerati.includes(numeriInseriti)){
//         numeriInseriti.push(numeriIndovinati)
//         console.log(numeriIndovinati)
//     }
// }







