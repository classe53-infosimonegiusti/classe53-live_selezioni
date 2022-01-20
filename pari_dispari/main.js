
// chiedere se puntiamo su pari o dispari
let pariDispari = prompt('Inserisci pari o dispari');
console.log(pariDispari);

// chiedo un numero
let numeroGiocatore = parseInt(prompt('Inserisci un numero da 1 a 9'));
console.log(numeroGiocatore);

if (numeroGiocatore > 9 || numeroGiocatore < 1) {
    alert('Errore');
    numeroGiocatore = 5;
}

// computer pensa ad un numero casuale
let numeroComputer = Math.floor(Math.random() * 9) + 1;
console.log(numeroComputer);


// sommo il mio numero a quello del computer
let somma = numeroGiocatore + numeroComputer;

let risultato;

if (somma % 2 == 0) {
    risultato = "pari";
} else {
    risultato = "dispari";
}

// se il numero risultate è uguale a quello su cui ho puntato, vinco io, altrmenti vince il computer

if ( pariDispari == risultato) {
    alert('Il giocatore ha vinto');
} else {
    alert("Ha vinto il computer");
}

// per arrotondare alla posizione decimale desiderata
console.log(numero.toFixed(2));
