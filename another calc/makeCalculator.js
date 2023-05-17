

function makeCalculator() {
    const reset = 0;
    let result = 0;
  
    const object = {
      add: (newNum) => { result = result + newNum },
      subtract: (newNum) => { result = result - newNum },
      multiply: (a, b) => {a * b},
      devide: (a, b) => {a / b},
      operate: (action, newNum) => { action(newNum) },
      getResult: () => { return result }
    }
    return object;
  };
  
  const calculator = makeCalculator();

  calculator.operate(calculator.add, 21);
  
  console.log(calculator.getResult());