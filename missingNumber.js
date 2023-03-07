

const missingNumber = (nums) => {
    let actualSum = 0; 
    let expectedSum = 0; 

    for(var i = 0; i < nums.length; i++) {
        actualSum+= nums[i]
    }

    for( var i = 0; i <= nums.length; i++) {
        expectedSum += i;
    }

    return expectedSum- actualSum;
}

console.log(missingNumber([3, 0, 1]))
console.log(missingNumber([0,1]))
console.log(missingNumber([4, 3, 1, 2]))