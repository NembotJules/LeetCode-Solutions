// Suppose an array of length n sorted in ascending order is rotated between 1 and n times.
// For example, the array nums = [0,1,2,4,5,6,7] might become:
// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
// Given the sorted rotated array nums of unique elements, return the minimum element of this array.
// You must write an algorithm that runs in O(log n) time.

// Key Idea : Since the input array is a sorted rotated array it will exist a point in the array ,that will break the order
// for example in [4,5,6,7,0,1,2] the point that break the order is 0. We we call this point the inflection point.
// Now notice that the inflection point is necesserarly the minimum if it is a sorted rotated array.
// Everything on the left of the inflection point is ordered and grearter than the first element ,
// same for the element on the right except that they are less than the first element.
// Everytime there is a change in the order it means we have pass through the inflection point.
// This will basically happens when nums[Index + 1] < nums [Index] --- the min will be nums[Index + 1]
// It will also happen when nums[index -1] > nums[index] -- the min will be nums[index]
// Now let's code it using a binary search approach...
// Time Complexity : O(logn)
// Space Complexity : O(1)

var findMin = function(nums) {
   
   // If the array is not rotated then the min is the first element
    if(nums[nums.length - 1] > nums[0] ) return nums[0] ; 
    // Now let's start binary search...

    let min = 0; 
    let max = nums.length - 1; 


    while (min < max) {
        let middleIndex  = Math.floor((min + max) / 2)

        if(nums[middleIndex] > nums[middleIndex + 1]) {
            return nums[middleIndex + 1]
        }

        else if ( nums[middleIndex]  < nums[middleIndex - 1]) {
            return nums[middleIndex]
        }

        else if (nums[middleIndex]  > nums[0]) {
            min= middleIndex + 1
        }

         else if ( nums[middleIndex] < nums[0]) {
            max= middleIndex
        }

      
    }
    return nums[0]
};