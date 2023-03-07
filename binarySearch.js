const binarySearch = (array, target) => {
    let min = 0; 
    let max = array.length - 1; 

    while (min <= max) {
        let middleIndex = Math.floor((min + max) / 2 )

        if( array[middleIndex] == target) {
            return middleIndex; 
        }
        else if ( array[middleIndex] > target) {
            max = middleIndex - 1
        }
        else if(array[middleIndex] < target) {
            min = middleIndex + 1
        }
    }

    return -1; 
}

console.log( binarySearch([1, 2, 3, 4, 5], 3) )
console.log( binarySearch([1, 2, 3, 4, 5], 4) )
console.log( binarySearch([1, 2, 3, 4, 5], 5) )
console.log( binarySearch([1, 2, 3, 4, 5], 2) )
console.log( binarySearch([1, 2, 3, 4, 5], 6) )
console.log( binarySearch([5], 5) )