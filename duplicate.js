// Given an integer array nums, return true if any value appears at least twice in the array, 
//and return false if every element is distinct.

const containDuplicate = (nums) => {
    let set = new Set(nums);
    return nums.length > set.size? true:false
}

// Time Complexity : depends on the complexity of new Set() but i think it is O(n)
// Space Complexity  : O(n)

console.log(containDuplicate([1,2,3,1])) // true
console.log(containDuplicate([1,2,3,4])) // false
console.log(containDuplicate([1,1,1,3,3,4,3,2,4,2])) // true