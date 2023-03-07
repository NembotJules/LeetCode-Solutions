// Key concept : 
// Sorting: Sort the input array in non-descending order to make it easier to find triplets that sum up to 0.
            // Sorting the array allows us to skip over duplicates and narrows down the search space.

// Two-pointer approach: Use a two-pointer approach to search for triplets that sum up to 0.
                        // We can start with the first element and then use two pointers to 
                        //search for the remaining two elements in the sorted array.

// Avoiding duplicates: Use while loops to avoid duplicates. When we find a valid triplet, 
                        //we increment the left pointer and decrement the right pointer to
                        // find the next possible triplet. To avoid duplicates, we check if
                        // the next element is the same as the previous element and skip it if it is.

// Time and space complexity: The time complexity of the solution is O(n^2) since we iterate through
                                // the array once and perform a two-pointer search on the remaining 
                                //elements for each element in the array. The space complexity is O(n)
                                // because we use an array to store the result.

const threeSum = (nums) => {
   const result = [] ; 
   nums.sort((a,b) => a-b) ; // sort the array so that we can find duplicates more easily...

   for(var i = 0; i < nums.length -2; i++) {
    if( i > 0 && nums[i] == nums[i-1]) continue // skipping duplicates number...


    let left = i+1 ; 
    let right = nums.length - 1

    while(left < right) {
        let sum = nums[i] + nums[left] + nums[right] 

         if (sum < 0) {
            left++
        }
        else if (sum > 0){
            right--
        }
        else {
            result.push([nums[i], nums[left], nums[right]]) // add the triplet to the result if they sum up to 0.

            while(left < right && nums[left] === nums[left + 1]) left++ // Checking if we encounter a duplicate with our left pointer...
            while(left < right && nums[right] === nums[right-1]) right-- // Checking if we encounter a duplicate with our right pointer...
            left++ // moving the left pointer forward
            right-- // moving the right pointer backward
        }
    }
   }
   return result
}

console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([0,0, 0]))
console.log(threeSum([0,1,1]))
console.log(threeSum([-2,0,1,1,2]))