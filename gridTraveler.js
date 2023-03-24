
// const gridTraveler = (m, n) => {

//    let grid = (new Array(m+1).fill(0)).map(() => new Array(n+1).fill(0));

//     for(var i = 0; i <=n; i++) {
//         grid[0][i] = 1; 
//     }
//     for(var i = 0; i <= m ; i++) {
//         grid[i][0] = 1; 
//     }

//     for(var i = 1; i<= m; i++) {
//         for(var j = 1; j <= n; j++) {
//             grid[i][j] = grid[i-1][j] + grid[i][j-1]; 
//         }
//     }

//     return grid[m-1][n-1]; 

// }

// Recursive approach... 

const gridTraveler = (m, n, memo = new Map()) => {
    if(m == 1 && n == 1) return 1; 
    if( m == 0 || n == 0) return 0; 

   
    let key = m + "#" + n; 

    if(memo.has(key)) return memo.get(key); 
    let result; 
    result = gridTraveler(m-1, n, memo) + gridTraveler(m, n-1, memo); 
    memo.set(key, result); 
    return result;
}
console.log(gridTraveler(3, 2)) // 3
console.log(gridTraveler(2, 3)) // 3
console.log(gridTraveler(3, 3)) // 6
console.log(gridTraveler(18, 18)) // 2333606220
