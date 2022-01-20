let eta1 = parseInt(prompt("inserisci età della prima persona"));
let eta2 = parseInt(prompt("inserisci età della seconda persona"));

if (isNaN(eta1) || isNaN(eta2)) {

    alert('Devi inserire un numero valido!');

} else {

    if (eta1 > eta2) {
        alert("La prima persona è piu grande");
    } else if (eta2 > eta1) {
        alert("La seconda persona è più grande");
    } else {
        alert("Le due persone hanno la stessa eta")
    }

}

