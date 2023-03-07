// Write an algorithm to determine if a number n is happy.
// A happy number is a number defined by the following process:
// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

// Key Idea : There are tree main things to think about in this problem....
// The sum of the square of each digits can eventually get to one...
// It can goes up to Infinity (this will not happen... check the maximum number we can have for every num length)
// We get into a cycle which means the number is not happy so we will return false...


var isHappy = function(n) {
    let set = new Set() ; // Create a set to detect cycle, since a set contains not duplicate numbers...
    let sum = n ; 
  
    while(sum !== 1) {
        let digitSum = 0
        String(sum).split('').forEach((e) => digitSum+= e*e)
        if(set.has(digitSum)) return false // if an elementis already in the set, we should return false because it will create a cycle
        set.add(digitSum) // if it is not we need to add it...
        sum = digitSum // then sum become digitSum and we repeat this process until sum ==1
    }
    return true // at this point it means that sum == 1 so we return true...
  };