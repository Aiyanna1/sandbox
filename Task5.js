const numbers = [1, 2, 3, 4, 5, 6, 7, 8,];
const evenNumbersArray = evenNumbers(numbers);

function evenNumbers(numbers){
    const evens = [];
    for (const number of numbers){
        if (number % 2 === 0){
            evens.push(number);
        }
    }
    return evens;
}

console.log(evenNumbersArray);