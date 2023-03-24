
const canSum = (targetSum, numbers, memo = new Map()) => {

    let key = targetSum; 
    if(memo.has(key)) return memo.get(key) ;

    if(targetSum == 0) return true; 
    if(targetSum < 0) return false ; 

    for(let num of numbers) {
        const remainder =  targetSum - num; 

        if(canSum(remainder , numbers, memo) == true) {
            memo.set(key, true)
            return true; 
        }
    }
    memo.set(key, false)
    return false; 
}

console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [5, 3, 4, 7])); // true
console.log(canSum(7, [2, 4])) ;       // false
console.log(canSum(8, [2, 3, 5 ])) // true
console.log(canSum(300, [7, 14])) // false
console.log(canSum(1000, [7, 14])) // false
console.log(canSum(1000, [7, 14,10])) // true