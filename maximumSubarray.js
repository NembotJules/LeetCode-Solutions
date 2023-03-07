// Key Idea:  Use Kadane's algorithm to find the maximum subarray...
// The maximum subarray at an index i, is either the element at i, or the previous maximum subarray + the element at i...
const maxSubArray = (nums) => {
    let maxSoFar = nums[0]; 
    let globalMax = nums[0]; 

    for(var i = 1; i < nums.length; i++) {
        maxSoFar = Math.max(nums[i], nums[i] + maxSoFar)
        if(maxSoFar > globalMax) {
            globalMax = maxSoFar
        }
    }

    return globalMax; 
}

console.log(maxSubArray( [-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray([1] ))
console.log(maxSubArray([5,4,-1,7,8]))
console.log(maxSubArray([-1]))
console.log(maxSubArray([-2, -3, -1]))
console.log(maxSubArray([-1, -2]))