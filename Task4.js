let numbers = [1, 2, 3, 4];
const averageValue = average(numbers);

function average(numbers){
    let sum = 0;
    for (const number of numbers){
        sum += number;
    }
    return sum / numbers.length;
}

console.log (averageValue);