// The time complexity of this solution is O(m * n), where m and n are the lengths of num1 and num2, respectively.
// This is because the code uses two nested for loops to iterate through each digit of both numbers.
// The idea behind this problem is to code how we used to multiply numbers in primary school...
function multiply(num1, num2) {
   let m = num1.length;
   let n = num2.length;
   let pos = new Array(m + n).fill(0);
   
   for (let i = m - 1; i >= 0; i--) {
       for (let j = n - 1; j >= 0; j--) {
           let mul = (num1[i] - '0') * (num2[j] - '0');
           let p1 = i + j;
           let p2 = i + j + 1;
           let sum = mul + pos[p2];
           
           pos[p1] += Math.floor(sum / 10);
           pos[p2] = sum % 10;
       }
   }
   
   let result = pos.join('');
   while (result.length > 1 && result[0] === '0') result = result.substring(1);
   return result;
}

console.log((multiply("2", "3")))

