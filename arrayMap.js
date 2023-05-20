/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const map = (arr, fn)=>{

    for(var i = 0; i< arr.length; i++) {
        arr[i] = fn(arr[i], i)
    }  

    return arr; 
};