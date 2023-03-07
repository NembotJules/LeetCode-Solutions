// There is an integer array nums sorted in ascending order (with distinct values).
// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length)
// such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
// For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums,
//  or -1 if it is not in nums.
// You must write an algorithm with O(log n) runtime complexity.

//------------------------------------------------------------------------------------
// Key Idea: This problem is in some way similar to the find minimum of a rotated sorted array problem...
// The array can be divide into two ordered part, one is on the left of the pivot element...
// And one is one the right. Because the array was rotated we know that the right part is less than the left part...
// If an element is greater than the first element it must be in the right part...
// If an element is less than the first element it must be in the left part...
// After you find the where an element belongs you can easily find him with binary search...

const search = (nums, target) => {
   if(nums.length == 0) return -1

   let low = 0; 
   let high = nums.length - 1; 
   let first = nums[0]

   while (low <= high) {
    let mid = Math.floor( (low + high) / 2)
    let value = nums[mid]

    if(value == target) {
        return mid; 
    }

    let bigValue = value >= first ; // if the value element is on the left part...
    let bigTarget = target >= first; // if the target element is on the left part...

    if(bigValue == bigTarget) { // if the target and the value element are on the same part....
        if (target > value) { // simply binary search...
            low = mid + 1
        }
        else {
            high = mid - 1
        }
    }

    else { // the elements are on different part...
        if(bigValue) { // Simply binary search
            low = mid + 1
        }
        else { // Simply binary search...
            high = mid - 1 
        }
    }

   }

    return -1
}

console.log(search([4,5,6,7,0,1,2], 0)) // 4
console.log(search([4,5,6,7,0,1,2], 3)) // -1
console.log(search([1], 0 )) // -1
console.log(search([1, 3], 3 )) // 1
console.log(search([1, 3, 5], 1 )) // 0