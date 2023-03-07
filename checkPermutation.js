// Given two strings, write a method to decide if one is a permutation of the other

const checkPermutation = (str1, str2) => {
    if(str1.length !== str2.length) return false 
    for(var i = 0; i < str1.length ; i++) {
        if(!str2.includes(str1[i])){
            return false
        }
    }
    return true;
}

console.log(checkPermutation("abc", "abC"))