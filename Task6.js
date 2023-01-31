const numbers = [1, 2, 3, 4, 5, 6, 7, 8,]

const oddNumbersArray = oddNumbers(numbers);

function oddNumbers(numbers){
    const odds = [];
    for (const number of numbers){
        if (number % 2 !== 0){
            odds.push(number);
        }
    }
    return odds;
}

console.log(oddNumbersArray);