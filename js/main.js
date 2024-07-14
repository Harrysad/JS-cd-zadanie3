// Funkcja, która oblicza sumę oraz iloczyn
function calculateSumAndProduct(array) {
    // Tworzenie zmiennych
    let sum = 0;
    let product = 1;

    // Użycie pętli forEach z funkcją anonimową do zsumowania oraz wymnożenia elementów w tablicy
    array.forEach(function(element) {
        sum += element;
        product *= element;
    });

    console.log("Sum:", sum);
    console.log("Product:", product);
}

let numbers = [1, 2, 3, 4, 5, 6];
calculateSumAndProduct(numbers);