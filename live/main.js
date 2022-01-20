//let number = 'ciao';

/*
 Questa sintassi mi permette di eseguire il blocco di codice della prima condizione vera, 
 se più di una condizione è vera, eseguo solo la prima
*/
/*
if (number > 3) {
    alert('** il numero è maggiore di 3');
} else if (number >= 5) {
    alert('** il numero è maggiore o uguale a 5');
} else if (number > 10) {
    alert('** il numero > 10');
}
*/
/* ogni volta che una condizione sia vera, eseguo il blocco di codice */
/*
if (number > 3) {
    alert('++ il numero è maggiore di 3');
}

if (number >= 5) {
    alert('++ il numero è maggiore o uguale a 5');
}

if (number > 10) {
    alert('++ il numero > 10');
}
*/


/* if e switch a confronto */

//let fruit = prompt('Inserisci il nome di un frutto');

/* caso con if */

/*
if (fruit == 'arancia') {
    console.log('arancia');
} else if (fruit == 'fragola') {
    console.log('fragola');
} else if (fruit == 'kiwi') {
    console.log('kiwi');
} else {
    console.log('non conosco questo frutto!');
}
*/

/* implementazione con switch */

/*
switch (fruit) {
    case "arancia":
        console.log('arancia');
        break;
    case "fragola":
        console.log('fragola');
        break;
    case "kiwi":
        console.log('kiwi');
        break;
    default:
        console.log('non conosco questo frutto!');
}



var foo = 3;

var output = 'Output: ';

switch (foo) {
  case 0:
    output = output + 'So ';
  case 1:
    output = output + 'What ';
    output = output + 'Is ';
  case 2:
    output = output + 'Your ';
  case 3:
    output = output + 'Name';
  case 4:
    output = output + '?';
    console.log(output);
    break;
  case 5:
    output = output + '!';
    console.log(output);
    break;
  default:
    console.log('Please pick a number from 0 to 5!');
}
*/

/*
let utenteLoggato = true;

if (utenteLoggato) {
    
} else {
    //rimando l'utente alla pagina di login
}

if (!utenteLoggato) {
    //rimando l'utente alla pagina di login
}


let name = "simone";
let eta = 40;
let colore = "verde";

if (name == 'simone' && eta == 40 && colore == "verde") {
    console.log('sono all\'interno del blocco if in condizione di AND');
}

if (name == 'simone' || eta == 40 || colore == "verde") {
    console.log('sono all\'interno del blocco if in condizione di OR');
}


if (name=='simone' || (eta==40 && colore == 'verde')) {
    console.log('ultimo caso');
}
*/


let numero = 5;
// con === si verifica contenuto della variabile e tipo
if (numero === "5") {
    console.log('Perfetto!');
}

// con == si verifica contenuto della variabile
if (numero == "5") {
    console.log('Perfetto!');
}