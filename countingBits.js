// Given an integer n ,return an array ans of length n+1 such that for each
// i (0<=i<=n), ans[i] is the number of 1's in the binary representation of i.


const countBits = (n) => {
    let arr = new Array(n+1) ; 

    for(var i = 0; i < arr.length; i++) {
        arr[i] = i.toString(2).split("").filter((e) => e=='1').length
    }
    return arr
}

console.log(countBits(16))