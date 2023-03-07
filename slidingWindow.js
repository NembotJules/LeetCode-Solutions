// Say you have an array for which the ith element is the price of a given stock on day i.
// If you were only permitted to complete at most one transaction (i.e, buy one and sell one share of the stock), 
//design an algorithm to find the maximum profit.
// Note that you cannot sell a stock before you buy one.


const slidingWindow = (arr) => {
    let left = 0
    let right = 1
    let maxProfit = 0

    while (right < arr.length){
        if (arr[left] < arr[right]){
            let profit = arr[right] - arr[left]
            maxProfit = Math.max(maxProfit, profit)
        }
        else {
            left = right
           
        }
        right+=1
    }

    return maxProfit;
}

// Time Complexity : O(n)
// Space Complexity : O(1)
console.log(slidingWindow([7,6,4,3,1]))