// 2D array = multi-dimentional array that stores a matrix of data in rows and columns
// Useful for games, spreadsheets or representing images.

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
  [13, 14, 15],
];

// To access individual element in the matrix

matrix[0][0] = 'X'
matrix[0][1] = 'O'
matrix[0][2] = 'X'

matrix[1][0] = 'O'
matrix[1][1] = 'X'
matrix[1][2] = 'O'

matrix[2][0] = 'X'
matrix[2][1] = 'O'
matrix[2][2] = 'X'

matrix[3][0] = 'O'
matrix[3][1] = 'X'
matrix[3][2] = 'O'

matrix[4][0] = 'X'
matrix[4][1] = 'O'
matrix[4][2] = 'X'

// To print the elements of this array

// for (let row of matrix) {
//   console.log(row);
// }

// Print the individual values

for (let row of matrix){
  const rowString = row.join(' ');
  console.log(rowString);
}

