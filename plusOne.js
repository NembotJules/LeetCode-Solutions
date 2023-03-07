// You are given a large integer represented as an integer array digits,
// where each digits[i] is the ith digit of the integer. The digits are 
// ordered from most significant to least significant in left-to-right order.
// The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.


const plusOne = (digits) => {
    let n = digits.length; 
    let i = n; 
    let result = [0, ...digits]

    let sum =  result[i] + 1 
    if(digits.length == 1 && sum == 10) return [1, 0] // case when we have [9]

    if(sum < 10) {
        result[i]+= 1; 
        return result.slice(1) // We just need to add  one to the last element and stop if the sum is less than 10
    }

    while(sum >= 10) { // We need to keep adding the retenue to the next digit until sum became less than 10
        
        let retenue = Math.floor(sum/10) ; 
        let num = sum%10
        result[i] = num ; 
        result[i-1] += retenue; 
        sum = result[i-1]
       i--
    }
    
   return  result[0] == 0? result.slice(1): result
}

console.log(plusOne([4, 3, 9, 9]))
console.log(plusOne([1, 2, 3]))
console.log(plusOne([9]))
console.log(plusOne([9,9]))