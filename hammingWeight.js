

const hammingWeight = (n) => {  
  return n.toString(2).split("").filter((e)=> e== '1').length
}

console.log(hammingWeight(11111111111111111111111111111101)); 


