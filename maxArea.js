// LeetCode 11 : Container with must waters...
// Key Idea : Use a two pointers approach if the element at a certain pointer index is less than the other
// We need to move the pointer forward since our goal is to increase the volume...
// And we repeat this until collision...
// Time Complexity : O(n) 
// Space Complexity : O(1)
const maxArea = (height) => {
    let left = 0 ; 
    let right = height.length - 1 ; 
    let area = 0; 
    let maximumArea = 0 ;


    while (left < right ) {
        if(height[left] < height[right]) {
            area = (right-left)* height[left] ;
            maximumArea = Math.max(area, maximumArea); 
            left++
        }
        else {
            area = (right-left)* height[right] ;
            maximumArea = Math.max(area, maximumArea); 
            right--
        }
           
    }

    return maximumArea; 
}

console.log(maxArea([1, 3, 5, 7, 9]))