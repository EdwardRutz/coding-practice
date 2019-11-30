// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // Split string into an array
  const arr = str.split('');

  // Call reverse()
  arr.reverse();

  // Join back into a string
  newString = arr.join('');

  // Return string
  return newString;
}

module.exports = reverse;


// Print to console
console.log('The reversed string is ', reverse('abcd'));
console.log('The reversed string is ', reverse('Edward'));
console.log('The reversed string is ', reverse('Hello World!'));
