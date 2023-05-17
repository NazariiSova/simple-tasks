
const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;
const subtraction = (a, b) => a - b;
const division = (a, b) => a / b;

function calculate([a, b], action) {
return (
   action(a,b) 
);
    
};


const calc = calculate([1, 4], multiply); 
console.log(calc);