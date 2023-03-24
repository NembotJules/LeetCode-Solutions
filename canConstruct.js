
const canConstruct = (target, wordBank, memo = new Map()) => {
    if(target === '') return true;
    let key = target; 
    if(memo.has(key)) return memo.get(key)
    
    
    for(let word of wordBank) {
        if(target.indexOf(word) === 0) {
            const suffix = target.slice(word.length); 
            if(canConstruct(suffix, wordBank, memo) === true) {
                memo.set(key, true)
                return true; 
           } 
        }
    }

    memo.set(key, false)
    return false; 
}

console.log(canConstruct("abcdef", ['ab', 'abc', 'cd', 'def', 'abcd'])) // true
console.log(canConstruct("skateboard", ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])) // false
console.log(canConstruct("enterapotentpot", ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])) // true
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])) // false