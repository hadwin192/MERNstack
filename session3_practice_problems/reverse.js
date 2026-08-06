function reverseString(text) {
  return text.split('').reverse().join('');
}

// input from terminal as argument
const s = process.argv[2];
rs = reverseString(s);
console.log('Reverse: ' + rs);
