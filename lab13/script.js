// Завдання 1: calculateSum(n)
function calculateSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  
  console.log("Завдання 1:");
  console.log("Сума чисел від 1 до 5:", calculateSum(5)); // Виведе: 15
  
  // Завдання 2: multiply(a, b) - функціональний вираз
  const multiply = function(a, b) {
    return a * b;
  };
  
  console.log("\nЗавдання 2:");
  console.log("Добуток 3 та 4:", multiply(3, 4)); // Виведе: 12
  
  // Завдання 3: power(a, b) - стрілкова функція
  const power = (a, b) => a ** b;
  
  console.log("\nЗавдання 3:");
  console.log("2 в степені 3:", power(2, 3)); // Виведе: 8
  
  // Завдання 4: harmonicSeries(n) - рекурсивна функція
  function harmonicSeries(n) {
    if (n === 1) {
      return 1;
    } else if (n > 1) {
      return 1 / n + harmonicSeries(n - 1);
    } else {
      return 0; // Або можна викинути помилку для некоректного n
    }
  }
  
  console.log("\nЗавдання 4:");
  console.log("Сума перших 4 членів гармонійного ряду:", harmonicSeries(4)); // Виведе: 2.083333333333333
  
  // Завдання 5: createMultiplier(multiplier) - функція-замикання
  function createMultiplier(multiplier) {
    return function(number) {
      return number * multiplier;
    };
  }
  
  const double = createMultiplier(2);
  const triple = createMultiplier(3);
  
  console.log("\nЗавдання 5:");
  console.log("Подвоєння 5:", double(5)); // Виведе: 10
  console.log("Потроєння 5:", triple(5)); // Виведе: 15
  
  // Завдання 6: applyFunction(value, func)
  function applyFunction(value, func) {
    return func(value);
  }
  
  function doubleValue(x) {
    return x * 2;
  }
  
  const squareValue = (x) => x ** 2;
  
  console.log("\nЗавдання 6:");
  console.log("Подвоєння 7:", applyFunction(7, doubleValue)); // Виведе: 14
  console.log("Піднесення 3 до квадрату:", applyFunction(3, squareValue)); // Виведе: 9
  
  // Завдання 7*: processSet(set, callback)
  function processSet(set, callback) {
    for (const element of set) {
      callback(element);
    }
  }
  
  const mySet = new Set([10, 20, 30, 40]);
  function printElement(element) {
    console.log("Елемент множини:", element);
  }
  
  console.log("\nЗавдання 7*:");
  processSet(mySet, printElement);
  // Виведе:
  // Елемент множини: 10
  // Елемент множини: 20
  // Елемент множини: 30
  // Елемент множини: 40