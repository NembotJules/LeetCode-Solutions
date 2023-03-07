// An integer n is strictly palindromic if, for every base b between 2 and n - 2 (inclusive), the string representation of the integer n in base b is palindromic.
// Given an integer n, return true if n is strictly palindromic and false otherwise.
// A string is palindromic if it reads the same forward and backward.

// Key Idea : Intiution plays a huge role for me to solve this problem... First the base b go from 2 to n-2 why?
// When we represent a number n  in base b the base can go from 2 to n-1. So why in this problem the base stop at n-2...
// Let's try to see what is n in base n-1. n in base n-1 is always 11 which is actually a palindrome...
// Now let's try to see what is n in base n-2. n in base n-2 is always 12 which is not a palindrome...
// We can stop here we have just shown that for a given number n,  n in base n-2 is 12 which is not a palindrome...
// So there's a base b between 2 and n-2 such that n in that base b is not a palindrome...
// Conclusion n is not a strictly palindromic integer and we can just return false...

const strictlyPalindromic = (n) => {
    return false; 
}