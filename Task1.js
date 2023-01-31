let array = [1, 2, 3, 4, 4, 6];

let sum = array.reduce(function(a, b){
    return a + b;
});

console.log(sum);