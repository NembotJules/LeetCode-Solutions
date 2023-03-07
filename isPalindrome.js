// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and
// removing all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

// Key Idea : use a regex to remove all non alphanumeric character from the string, then use the usual palindrome check...
// The regex for alphanumeric character is: /[a-z0-9]/gi
// The regex for non alphanumeric character is :  /[^a-z0-9]/gi
// /g is for a global match, all the characters not just the first one...
// /i is for making the match not case sensitive...
// So, /gi is for global match and the match are not case sensitive...
var isPalindrome = function(s) {
  return  s.replace(/[^a-z0-9]/gi, '').toLowerCase().split('').reverse('').join('') ===  s.replace(/[^a-z0-9]/gi, '').toLowerCase()
   
};

console.log(isPalindrome("ab_a"))