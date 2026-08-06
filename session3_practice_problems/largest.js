function largest(numbers) {
  let largest = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }

  return largest;
}

// Example array of numbers
const myNumbers = [34, 12, 67, 88, 32, 11];
console.log('Largest in the array is: ' + largest(myNumbers));
