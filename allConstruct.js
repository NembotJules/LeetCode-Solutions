
const allConstruct = (target, wordBank, memo = new Map()) => {
    
    if(target === '') return [[]]; 
    let key = target; 
    if(memo.has(key)) return memo.get(key)
    
    let result = []; 

    for(let word of wordBank) {
        if(target.indexOf(word) == 0) {
            const suffix = target.slice(word.length); 
            const suffixWays = allConstruct(suffix, wordBank, memo);
            const targetWays = suffixWays.map(way => [word, ...way]);
           result.push(...targetWays)
        }
    }
    memo.set(key, result)
    return result; 
}

console.log(allConstruct("enterapotentpot", ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])) // 4
console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"])) // 2
console.log(allConstruct("abcdef", ['ab', 'abc', 'cd', 'def', 'abcd'])) // 1
console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])) // 0