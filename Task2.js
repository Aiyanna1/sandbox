let array = [1, 2, 3, 4, 5, 6, 7, 8,];

let largest = array.reduce(function (a, b) {
    return (a > b) ? a : b;
}); 
    
console.log(largest);