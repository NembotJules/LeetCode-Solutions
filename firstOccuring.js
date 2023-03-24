// Given a particular string return the first Occuring character, if there is no one return null

const firstRecurringChar  = (str) => {

    let charCount = {}; 

    for(let char of str) {
        charCount[char] =  charCount[char] + 1 || 1; 
        console.log(charCount[char])

        if(charCount[char] > 1) {
            return char; 
        }
    }
    return null
}

console.log(firstRecurringChar('ABCA'))
console.log(firstRecurringChar('ABBA'))
console.log(firstRecurringChar('ABCD'))
console.log(firstRecurringChar(''))