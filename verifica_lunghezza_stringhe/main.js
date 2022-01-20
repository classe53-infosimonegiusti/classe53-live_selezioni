let stringa1 = prompt("Inserisci una prima parola");
let stringa2 = prompt("Inserisci una seconda parola");

if (stringa1.length > 10) {
    alert('la prima stringa è troppo lunga')
}

if (stringa1.length > stringa2.length) {
    alert('la prima parola è più lunga')
} else if (stringa2.length > stringa1.length) {
    alert('la seconda parola è più lunga')
} else {
    alert('le due stringhe hanno la stessa lunghezza')
}