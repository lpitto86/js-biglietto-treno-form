const km = document.getElementById('km');
console.log('km', km, typeof km);

const age = document.getElementById('age');
console.log('age', age, typeof age);

const calcButton = document.getElementById('calc-button');
console.log('calcButton', calcButton, typeof calcButton);

calcButton.addEventListener('click', function() {
    console.log('km.value', km.value, typeof km.value);
    console.log('age.value', age.value, typeof age.value);

    const kmInNumber = parseInt(km.value);
    const ageInNumber = parseInt(age.value);

    let price = (kmInNumber * 0.21);

    // Applica sconti in base all'età
    if (ageInNumber < 18) {
        // Sconto del 20% per i minorenni
        price *= 0.8;
    } else if (ageInNumber > 65) {
        // Sconto del 40% per gli anziani
        price *= 0.6;
    }

    console.log('price', price, typeof price);

    price = price.toFixed(2);
});