const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  return matrix.reduce((sum, row, rowIndex) => {
    return sum + row.reduce((rowSum, value, colIndex) => {
        return rowSum + (rowIndex === 0 || matrix[rowIndex - 1][colIndex] !== 0 ? value : 0);
    }, 0);
}, 0);
}

module.exports = {
  getMatrixElementsSum
};
