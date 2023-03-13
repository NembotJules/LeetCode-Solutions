

var longestCommonSubsequence = function(text1, text2) {
    const memo = new Map();
    return recursion(text1, text2, text1.length - 1, text2.length - 1, memo);
};

function recursion(text1, text2, index1, index2, memo) {
    // base cases
    if (index1 < 0 || index2 < 0) return 0;
    
    const key = index1 + '#' + index2;
    
    if (memo.has(key)) return memo.get(key);
    
    let result;

    if (text1.charAt(index1) === text2.charAt(index2)) {
        result = recursion(text1, text2, index1 - 1, index2 - 1, memo) + 1;
    } else {
        result = Math.max(recursion(text1, text2, index1, index2 - 1, memo), recursion(text1, text2, index1 - 1, index2, memo));
    }
    
    memo.set(key, result);
    return result;
}
// Dynammic Programming Solution...
// var longestCommonSubsequence = function(text1, text2) {
//     let dp = new Array(text1.length+1).fill(null).map(() => new Array(text2.length+1).fill(0));

//     for (let i = 1; i <= text1.length; i++) {
//         for (let j = 1; j <= text2.length; j++) {
//             if (text1[i-1] === text2[j-1]) {
//                 dp[i][j] = dp[i-1][j-1] + 1;
//             } else {
//                 dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
//             }
//         }
//     }
    
//     return dp[text1.length][text2.length];
// };

console.log(longestCommonSubsequence("abc" , "abc"))
console.log(longestCommonSubsequence("abcde" , "ace"))
console.log(longestCommonSubsequence("abc" , "def"))