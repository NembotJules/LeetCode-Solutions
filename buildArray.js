

const buildArray = (nums) => {
    let n = nums.length ; 

    for(var i = 0; i < nums.length; i++) {
        nums[i] = nums[i] + n * (nums[nums[i]] % n)
    }

    for(var i = 0; i < nums.length; i++) {
        nums[i] = Math.floor(nums[i] / n)
    }

    return nums
}

console.log(buildArray([0,2,1,5,3,4])); 
console.log(buildArray([5,0,1,2,3,4]));