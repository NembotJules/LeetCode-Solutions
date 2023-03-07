// Implement a method to perform basic string compression using the count of repeated character
// Example : "aabcccccaaa" should return a2b1c5a3

const stringCompression = (str) => {
   let count = 1;
   let compress = ""

   for(var i= 0 ; i < str.length ; i++) {
    if(str[i] === str[i+1]) {
        count++
    }
    else {
        compress += str[i] + count ;
        count = 1
    }
   }

   return compress.length < str.length ? compress:str
}

console.log(stringCompression("aabcccccaaa"))