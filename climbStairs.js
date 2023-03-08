// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

const climbStairs = (n) => {
   
    let result = new Array(n+1); 
    result[0] = 1 ; 
    result[1] = 1; 

    for(var i = 2; i <=n ; i++) {
       result[i] = result[i-1] + result[i-2]
    }
   return result[n]
}

console.log(climbStairs(3))
console.log(climbStairs(2))
console.log(climbStairs(45))