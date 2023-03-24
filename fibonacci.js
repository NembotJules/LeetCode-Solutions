

const fib = (n) => {
    let fibArray = new Array(n+1) ; 
     fibArray[0] = 0; 
     fibArray[1] = 1; 

     for(var i = 2; i < fibArray.length; i++) {
        fibArray[i] = fibArray[i-1] + fibArray[i-2]; 
     }

     return fibArray[n]; 
}

console.log(fib(50))