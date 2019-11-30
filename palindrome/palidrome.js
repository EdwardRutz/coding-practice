// --- Directions ---
// Given a string, return true if the string is a palindrome
// or false if it is not.
// Palindromes are strings that form the same word if it is reversed.
// *Do* include spaces and punctuation in determining if the string is a palindrome.
// --- Examples ---
//   palindrome("anna") === true
//   palindrome("abcdefg") === false

// Refactored...
function palindrome(str) {
  const reversed = str
    .split('')
    .reverse()
    .join('');
  return str === reversed;
}


// function palindrome(str) {
//   const arr = str.split('');
//   arr.reverse();
//   const newStr = arr.join('');
//   return str === newStr;
// }

module.exports = palindrome;
