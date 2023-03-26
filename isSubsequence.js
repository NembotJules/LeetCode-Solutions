

const isSubsequence = (s,t) => {
    let index = 0; 

    for(var i = 0; i < t.length; i++) {
        if(s[index] == t[i]) {
            index++
        }
    }

    return index === s.length; 
}

console.log(isSubsequence('abc', 'abcddf')); // true
console.log(isSubsequence('acd','heheakvricd')); // true
console.log(isSubsequence('adf', 'jfjfjr')) // false