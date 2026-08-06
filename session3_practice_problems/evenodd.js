function evenodd(num) {
  if (num % 2 == 0) {
    console.log('The number is evem');
  } else {
    console.log('The number is odd');
  }
}

// input from terminal
const n = process.argv[2];
evenodd(n);
