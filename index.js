'use strict';

/**
 * @param {number[][]} board
 *
 * @returns {number}
 */
function validateSudoku(board) {
  const counts = {};

  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 9; i++) {
      if (j === 0) {
        counts[`r${i}`] = [];
      } else if (j === 1) {
        counts[`c${i}`] = [];
      } else {
        counts[`b${i}`] = [];
      }
    }
  }

  for (let j = 0; j < 9; j++) {
    for (let i = 0; i < 9; i++) {
      if (!board[j][i]) {
        return false;
      }

      if (counts[`r${j}`].includes(board[j][i])) {
        return false;
      }

      if (counts[`c${i}`].includes(board[j][i])) {
        return false;
      }

      if (i < 3) {
        if (j < 3) {
          if (counts.b0.includes(board[j][i])) {
            return false;
          }
          counts.b0.push(board[j][i]);
        } else if (j < 6) {
          if (counts.b3.includes(board[j][i])) {
            return false;
          }
          counts.b3.push(board[j][i]);
        } else {
          if (counts.b6.includes(board[j][i])) {
            return false;
          }
          counts.b6.push(board[j][i]);
        }
      } else if (i < 6) {
        if (j < 3) {
          if (counts.b1.includes(board[j][i])) {
            return false;
          }
          counts.b1.push(board[j][i]);
        } else if (j < 6) {
          if (counts.b4.includes(board[j][i])) {
            return false;
          }
          counts.b4.push(board[j][i]);
        } else {
          if (counts.b7.includes(board[j][i])) {
            return false;
          }
          counts.b7.push(board[j][i]);
        }
      } else {
        if (j < 3) {
          if (counts.b2.includes(board[j][i])) {
            return false;
          }
          counts.b2.push(board[j][i]);
        } else if (j < 6) {
          if (counts.b5.includes(board[j][i])) {
            return false;
          }
          counts.b5.push(board[j][i]);
        } else {
          if (counts.b8.includes(board[j][i])) {
            return false;
          }
          counts.b8.push(board[j][i]);
        }
      }

      counts[`r${j}`].push(board[j][i]);
      counts[`c${i}`].push(board[j][i]);
    }
  }

  return true;
}
