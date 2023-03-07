const countOdd = (low, high) => {
    let n = high-low + 1; 

    if( (n%2)  == 0) {
        return n/2
    }

    else if ( (n%2 !== 0) && (low%2 !==0)) {
        return Math.round(n/2)
    }
    else if ( (n%2 !== 0) && (low%2 ==0)) {
        return Math.floor(n/2)
    }
}

console.log(countOdd(8, 10))