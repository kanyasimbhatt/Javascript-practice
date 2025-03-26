let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

/*
[
[7, 4, 1],
[8, 5, 2],
[9, 6, 3]
]
*/

function rotateMatrix(mat) {
  let newMat = mat;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (2 - i == 1) newMat[j][i] = mat[i][j];
      else {
        newMat[j][2 - i] = mat[i][j];
      }
    }
  }
  return newMat;
}
console.log(rotateMatrix(matrix));
