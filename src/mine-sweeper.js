const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  return matrix.map((row, rowIndex) =>
      row.map((_, colIndex) => {
          return [-1, 0, 1]
              .flatMap(dx => [-1, 0, 1].map(dy => [dx, dy]))
              .filter(([dx, dy]) => dx !== 0 || dy !== 0)
              .reduce((count, [dx, dy]) => {
                  const x = rowIndex + dx;
                  const y = colIndex + dy;
                  return count + (matrix[x]?.[y] ? 1 : 0);
              }, 0);
      })
  );
}

module.exports = {
  minesweeper
};
