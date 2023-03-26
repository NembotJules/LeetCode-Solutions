
const kClosestPoints = (points, k) => {
    let n = points.length; 
    let distances = new Array(n); 
    let closesPointIndexes = new Array(k); 
    let result = new Array(k); 
    let pointDistances = {}; 

    for(var i = 0; i < n; i++) {
        distances[i] = Math.floor(Math.sqrt(Math.pow(points[i][0], 2) + Math.pow(points[i][1],2)))
    }

   for( var i = 0; i < n; i++) {
    pointDistances[distances[i]] = i; 
   }

   distances.sort((a,b) => a-b); 
   for(var i = 0; i < k; i++) {
        closesPointIndexes.push(pointDistances[distances[i]])
   }
   for(var i = 0; i < closesPointIndexes.length; i++) {
        result.push(points[closesPointIndexes[i]])
   }

    return result; 
}

console.log(kClosestPoints([[-2, 4], [0, -2], [-1, 0], [3, 5], [-2, -3], [3, 2]], 2))