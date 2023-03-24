
const bestSum = (targetSum, numbers, memo = new Map()) => {
    let key = targetSum ; 
    if(memo.has(key)) return memo.get(key);
    if(targetSum == 0) return [] ;
    if(targetSum < 0) return null ;  

  
    let shortestCombination = null ; 

    for(let num of numbers) {
        let remainder = targetSum - num ; 
        const remainderCombination = bestSum(remainder, numbers, memo) ;

        if(remainderCombination != null) {
            const combination = [...remainderCombination, num] ; 

            if(shortestCombination == null || combination.length < shortestCombination.length) {
                shortestCombination = combination
            }
        }
    }
    memo.set(key, shortestCombination); 
    return memo.get(key)
}

console.log(bestSum(7, [5, 3, 4, 7]))
console.log(bestSum(8, [2, 3, 5]))
console.log(bestSum(8, [1, 4, 5]))
console.log(bestSum(100, [1, 2, 5, 25]))