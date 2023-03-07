const oneAway = (str1 , str2) => {
    let diff = 0;
    for(let char of str1) {
        if(!str2.includes(char)) {
            diff++
        }
    } 
    return diff <= 1;
}

console.log(oneAway("hello" , "hello"))   // true
console.log(oneAway("hello" , "helo")) // false
console.log(oneAway("hello" , "helllo")) // true
console.log(oneAway("hello" , "helol")) // true
console.log(oneAway("" , "a")) // true
console.log(oneAway("hello" , "world")) // false