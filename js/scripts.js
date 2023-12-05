// 1 ) Chiedi all'utente il numero di chilometri
const chilometri = parseFloat(prompt('Inserisci il numero di km'));
console.log('chilometri', chilometri, typeof chilometri);

// 2) chiedi all'utente la sua età
const eta = parseInt(prompt('Quanti anni hai?'));
console.log('Eta', eta, typeof eta);

// Funzione per calcolare la tariffa in base a chilometri ed età
function calcolaTariffa(chilometri, eta) {
    var costoBasePerChilometro = 0.21;
    var costoTotale = chilometri * costoBasePerChilometro;

    // Applica sconti in base all'età
    if (eta < 18) {
        // Sconto del 20% per i minorenni
        costoTotale *= 0.8;
    } else if (eta >= 65) {
        // Sconto del 40% per gli anziani
        costoTotale *= 0.6;
    }

    return costoTotale;
}

// Calcola il costo totale
const costoTotale = calcolaTariffa(chilometri, eta);

// Mostra il risultato
alert("Il costo del biglietto è: " + costoTotale.toFixed(2) + " euro");