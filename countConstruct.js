
const countConstruct = (target, wordBank, memo = new Map()) => {
    if(target === '') return 1; 
    let key = target ; 
    if(memo.has(key)) return memo.get(key); 

    let totalNumsWays = 0; 
    for(let word of wordBank) {
        if(target.indexOf(word) == 0) {
           let numsWaysForRest = countConstruct(target.slice(word.length), wordBank, memo)
            totalNumsWays += numsWaysForRest ; 
        }
    }
    memo.set(key, totalNumsWays)
    return totalNumsWays;
}

console.log(countConstruct("abcdef", ['ab', 'abc', 'cd', 'def', 'abcd'])) // 1
console.log(countConstruct("skateboard", ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])) // 0
console.log(countConstruct("enterapotentpot", ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])) // 4
console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"])) // 2
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])) // 0