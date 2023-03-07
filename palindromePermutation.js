// Key Idea : A palindrome only have one character with an odd count, all other character have an even count


const isPermutationPalindrome = (str) => {
    let charCount = {} ;
    str = str.toLowerCase()
    for(let char of str) {
        if(char.charCodeAt(0) < 97 || char.charCodeAt(0) > 122) continue // Avoiding whitespaces character...
        charCount[char] = charCount[char] + 1 || 1 ; // Creating the charCount Object...
    }

    // Now we need to count how many characters have an odd count. if it is more than 1, return false, else return true.
    let oddCount = 0; 
    for (let count of Object.values(charCount)) {
       if (count % 2 == 1) {
        oddCount++;
       }
    }

    return oddCount <= 1 ;
}

console.log(isPermutationPalindrome("Tact Coa"))