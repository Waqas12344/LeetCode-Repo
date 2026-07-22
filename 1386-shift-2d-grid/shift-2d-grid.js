/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    let m = grid.length;        // number of rows
    let n = grid[0].length;     // number of columns
    let total = m * n;          // total elements in grid

    // Step 1: Flatten the grid into a 1D array
    let flat = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            flat.push(grid[i][j]);
        }
    }

    // Step 2: Rotate the array by k steps
    k = k % total;  // handle cases where k >= total
    let shifted = flat.slice(-k).concat(flat.slice(0, total - k));

    // Step 3: Rebuild the 2D grid
    let result = [];
    for (let i = 0; i < m; i++) {
        let row = shifted.slice(i * n, (i + 1) * n);
        result.push(row);
    }

    return result;
};
