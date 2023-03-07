// Key Idea: For each element divide the array in two parts the prefix and the suffix array the result at a given index
// Is just the multiplication of the prefix and suffix at that position...

const productExceptSelf = (nums) => {
    let prefixProduct = [1]; // 1 is the neutral element of multiplication, so adding one doesn't change anything...
    let suffixProduct = new Array(nums.length + 1); 
    let answer = new Array(nums.length)

    for(var i = 1; i < nums.length; i++) {
        prefixProduct[i] = prefixProduct[i-1] * nums[i-1]
    }

    console.log('This is the prefixProduct array', prefixProduct)
    suffixProduct[nums.length] = 1; 

    for (var i = nums.length-1; i >=0; i--) {
        suffixProduct[i] = nums[i] * suffixProduct[i+1]
    }
    console.log('This is the suffixProduct array', suffixProduct)

    for(var i=0; i < nums.length; i++) {
        answer[i] = suffixProduct[i+1] * prefixProduct[i]
    }

    return answer; 
}

console.log(productExceptSelf([0, 0]))
