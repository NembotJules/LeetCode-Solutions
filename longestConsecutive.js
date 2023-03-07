// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time
// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Key Idea : The key idea of this problem is to understand that a sequence begin with a number that don't have a prefix.
// So if we find an element with no prefix it means that element is the begin of a sequence. Therefore we must check it's suffix
// and count them... repeat that process for each element of the array at the end just return the biggest Count.

// Time Complexity : O(n) 
// Space Complexity : O(n)
// Data Structures : Set() ;

const longestConsecutive = (nums) => {
   let mySet = new Set(nums) ; 
   let longestLength = 0;  

   for(var i = 0 ; i < nums.length ; i++) {
        if ( !(mySet.has(nums[i] - 1)) ) {
            let sequenceLength = 0
            while(mySet.has(nums[i] + sequenceLength)) {
                sequenceLength++
            }
            longestLength = Math.max(longestLength, sequenceLength)
        }
   }
   return longestLength; 
}
console.log(longestConsecutive( [100,4,200,1,3,2]))
console.log(longestConsecutive( [0,3,7,2,5,8,4,6,0,1]))
console.log(longestConsecutive([1]))
console.log(longestConsecutive([1,2 ,3, 0, -1, 0, 1, 2, 3, 4 ,5]))
console.log(longestConsecutive([9,1,4,7,3,-1,0,5,8,-1,6]))