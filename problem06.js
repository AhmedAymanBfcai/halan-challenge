// Problem 06

function transpose(matrix) {
    // Get the number of rows and columns of the matrix
    const rows = matrix.length;
    const cols = matrix[0].length;

    // Initialize a new transposed matrix with empty arrays
    let transposed = [];
    for (let i = 0; i < cols; i++) {
        transposed.push([]);
    }

    // Fill the transposed matrix with values from the original matrix
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            transposed[j].push(matrix[i][j]);
        }
    }

    return transposed;
}

// Example usage:
console.log(transpose([[1, 2], [3, 4]])); // Output: [[1, 3], [2, 4]]
console.log(transpose([[1, 2, 3, 4], [5, 6, 7, 8]])); // Output: [[1, 5], [2, 6], [3, 7], [4, 8]]

// Time Complexity: O(n) where n is the total number of elements in the matrix