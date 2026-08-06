function sumArray(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  return total;
}

// Example array of numbers
const myNumbers = [1, 2, 3];
console.log('Sum: ' + sumArray(myNumbers));
