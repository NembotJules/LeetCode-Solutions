// Given an image represented by an NxN matrix,where each pixel in the image is 4 bytes,
//write a method to rotate the image by 90 degrees.Can you do this in place?

// const rotateMatrix = (matrix) => {
//     let n  = matrix.length; 
//     let rotatedMatrix = (new Array(n).fill(0)).map(() => new Array(n).fill(0)) ; 

//     for(var i = 0; i < n; i++) {
//         for(var j = 0; j < n; j++) {
//             rotatedMatrix[i][j] = matrix[n-1-j][i]
//         }
//     }

//     return rotatedMatrix; 
// } 

const rotateMatrix = (matrix) => {
   let l = 0; 
   let r = matrix.length - 1; 

   while(l <r) {
    for(var i = 0; i < r-l; i++) {
        let top = l; 
        let bottom = r; 
        // save the topleft 
        let topleft = matrix[top][l+i] ; 

        //move the bottom left into top left
        matrix[top][l+i] = matrix[bottom - i][l]; 

        //move the bottom right into the bottom left...
        matrix[bottom - i][l] = matrix[bottom][r-i]

        //move top right into bottom right position...
        matrix[bottom][r-i] = matrix[top+i][r]

        //move the top left into the top right
        matrix[top+i][r] = topleft; 
    }
    r-- ; 
    l++; 
   }

   return matrix
}

console.log(rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))