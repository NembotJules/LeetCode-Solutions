// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word
//  or phrase, typically using all the original letters exactly once.

const isAnagram = (s, t) => {
    if(s.length != t.length) return false; 
    let charCountS = {}
    let charCountT = {}

    for (var i = 0; i < s.length; i++) {
        charCountS[s[i]] = charCountS[s[i]] + 1 || 1
        charCountT[t[i]] = charCountT[t[i]] + 1 || 1
    }

    for(let char of t ) {
        if(charCountT[char] != charCountS[char]) {
            return false
        }
    }

    return true; 
}

console.log(isAnagram("anagram", "nagaram")) // true
console.log(isAnagram("rat", "car"))  // false