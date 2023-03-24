
const howSum = (targetSum, numbers, memo = new Map()) => {

    if(memo.has(targetSum)) return memo.get(targetSum); 
    let key = targetSum; 

    if(targetSum == 0) return [] ; 
    if(targetSum < 0) return null; 

    for(let num of numbers) {

        let remainder = targetSum - num ; 
        let remainderResult = howSum(remainder, numbers, memo) ; 

        if(remainderResult != null) {
            memo.set(key, [...remainderResult, num]); 
            return memo.get(key)
        }
    }
    memo.set(key, null)
    return memo.get(key) ;
}

// let n = numbers.length ; 
// let m = targetSum 
// Time Complexity : O(n*m^2) ; 
// Space Complexity : O(m^2)

console.log(howSum(7, [2, 3]));  // [3, 2, 2]
console.log(howSum(7, [5, 3, 4, 7])); // [4, 3]
console.log(howSum(7, [2, 4])) ;    // null
console.log(howSum(300, [7, 14]))   // null