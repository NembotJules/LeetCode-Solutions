// You are given an integer array cost where cost[i], is the cost of ith step on a staircase. Once you pay
// cost, you can either climb one or two steps. You can either start from the step with index 0, or the step 
// with index 1.

// Way to solve this : Draw the recursion tree, and use a bottom-up approach...
// Rearrange the array so that cost[i] represent the minimum cost for getting to the ith position to the 
//top of the floor

const minCostStairs = (cost) => {
    let n = cost.length ; 

    for(var i = n-3 ; i>=0; i--) {
        cost[i] = Math.min(cost[i] + cost[i+2] ,  cost[i] + cost[i+1]) ;
    }

    return Math.min(cost[0], cost[1]); 
}

console.log(minCostStairs([10, 15, 20]))
console.log(minCostStairs([1,100,1, 1, 1, 100, 1, 1, 100, 1]))