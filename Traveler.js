module.exports = class Traveler {
    matrix_island = null;
    banana_mount = 0;

    constructor(matrix) {
        this.matrix_island = matrix;
        this.banana_mount = 0;
    }

    /* Constraints:
        1. Allowed Moves = Right, Right + Up, Right + Dowm
        2. Only positive integers, so we might walk the longest path possible
    */
    monkey_walking() {
        let sum = 0, max_sum = 0, matrix = this.matrix_island;
        for (let i = 0; i < matrix.length - 1; i++) {
            // first, we collect the bananas from first position, always in the first column
            sum = matrix[i][0];
            for (let j = 0; j < matrix[i].length - 1; j++) {
                // 3 possible moves
                if (matrix[i - 1] != undefined && matrix[i + 1] != undefined) {
                    console.log('i: ' + i + ' j: ' + j);
                    let first_max_compare = Math.max(matrix[i - 1][j + 1], matrix[i][j + 1]);
                    sum += Math.max(matrix[i + 1][j + 1], first_max_compare);
                    // first row, only 2 moves
                } else if (matrix[i - 1] == undefined) {
                    sum += Math.max(matrix[i][j + 1], matrix[i + 1][j + 1]);
                    // last row, only 2 moves
                } else if (matrix[i + 1] == undefined) {
                    sum += Math.max(matrix[i][j + 1], matrix[i - 1][j]);
                }
            }
            if (sum > max_sum) max_sum = sum;
        }
        console.log('VALOR MATRIX? ' + matrix[0][1])
        console.log('maxxxx ' + max_sum)
        return max_sum;
    }
};