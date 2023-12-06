// Dichiarazione di calcForm all'inizio
const calcForm = document.getElementById('calcForm');
const resultName = document.getElementById('resultName');
const resultKm = document.getElementById('resultKm');
const resultAge = document.getElementById('resultAge');
const resultPrice = document.getElementById('resultPrice');
const resetButton = document.getElementById('reset-button');

calcForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const kmInNumber = parseInt(document.getElementById('km').value);
    const ageInNumber = parseInt(document.getElementById('age').value);

    let price = kmInNumber * 0.21;

    // Applica sconti in base all'età
    if (ageInNumber < 18) {
        // Sconto del 20% per i minorenni
        price *= 0.8;
    } else if (ageInNumber > 65) {
        // Sconto del 40% per gli anziani
        price *= 0.6;
    }

    // Mostra i risultati nel Milestone2
    resultName.textContent = name;
    resultKm.textContent = kmInNumber;
    resultAge.textContent = ageInNumber;
    resultPrice.textContent = price.toFixed(2) + " euro";
});

resetButton.addEventListener('click', function() {
    // Pulisci i risultati quando viene premuto il pulsante "Annulla"
    resultName.textContent = '';
    resultKm.textContent = '';
    resultAge.textContent = '';
    resultPrice.textContent = '';
});