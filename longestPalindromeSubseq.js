// const longestPalindromeSubseq = (s) => {
//     let memo = new Map() ; 
//     return recursion(s, 0, s.length-1, memo)
// }

// const recursion = (s, start, end, memo) => {
//     // let start = 0 ; 
//     // let end = s.length -1 ; 

//     if(start == end)  return 1 ; 
//     let key = start + "#" + end ; 

//     if(memo.has(key)) return memo.get(key) ; 
//     let result; 

//     if(s[start] == s[end]) {
//         if (start + 1 == end) {
//             result = 2
//         }

//         else {
//             result =  2 + longestPalindromeSubseq(s.slice(start + 1, end))
//         }
//     }

//     else {
//         result =  Math.max(longestPalindromeSubseq(s.slice(start + 1, end+1)) , longestPalindromeSubseq(s.slice(s, end)))
//     }

//     memo.set(key, result)
//     return result
// }  

const longestPalindromeSubseq = (s) => {
    let memo  = new Map() ; 
    
    const recursion = (start, end, memo) => {
   
        if( start==end )  return 1; 
        if( start > end ) return 0;
        
        let key = start+'#' + end 
        if(memo.has(key)) return memo.get(key) ;
    
        let result; 
    
        if(s[start] == s[end]) {
            result = 2 + recursion(start+1, end-1, memo)
        }
        else {
            result = Math.max(recursion(start+1, end, memo), recursion(start, end-1, memo))
        }
    
        memo.set(key, result); 
        return result; 
    }

    return recursion(0, s.length-1, memo);
}



console.log(longestPalindromeSubseq("bbbab"))
console.log(longestPalindromeSubseq("cbbd"))