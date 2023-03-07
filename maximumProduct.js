// leetcode No 152
// Given an integer array nums, find the contiguous subarray within an array(containing at least one number) which has the largest product.

// Problem: Find the maximum subarray product given an input array...
// Key Idea : the key idea behind this problem is to keep track of  the maximum product so far at each index.
            // We also need to keep track of the minimum product so far at each index. because the input array can
            // contains both positive and  negative number, what is the minimum product can later become the maximum product...
            // Also the maximum product value at a given index is either the number at that index, the number at that index times
            // the previous max product, or the element at that index times the previous minimum product...
            // We also need to update our previous max product and our previous min product because what is the current max or min
            // product at a given index will become the previous max product, previous min product at the next index...
            // Finally we need to take the maximum between our result, and the current max product...

// Complexity Analysis :  Time O(N), Space O(1)
                                        
const maxProduct = (nums) => {
   let prevMax = nums[0]
   let prevMin = nums[0]
   let result =  nums[0]

   for(var i = 1; i < nums.length; i++){
        let currMax = Math.max(nums[i], nums[i] * prevMax, nums[i] * prevMin)
        let currMin = Math.min(nums[i], nums[i] * prevMax, nums[i] * prevMin)

        prevMax = currMax; 
        prevMin = currMin; 
        result = Math.max(result, currMax)
        
   }
   
    return result;  
}


console.log(maxProduct([2, 3, -2, 4]))
console.log(maxProduct([-2, 0, -1]))
console.log(maxProduct([3]))
console.log(maxProduct([-2, 3, -1]))
console.log(maxProduct([1, 2, 3]))
console.log(maxProduct([-2, 3, 2, -1]))
console.log(maxProduct([-4,-3,-2]))

