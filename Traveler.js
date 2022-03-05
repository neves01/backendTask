module.exports = class Traveler {
    matrix_island = null;
    max_banana_mount = 0;

    constructor(matrix) {
        this.matrix_island = matrix;
        this.max_banana_mount = 0;
    }

    /* Constraints:
        1. Allowed Moves = Right, Right + Up, Right + Dowm
        2. Only positive integers, so we might walk the longest path possible
    */

    monkey_walking_refatored() {
        let matrix = this.matrix_island, compare_num = 0, max_sum = 0;
        // fixing column first
        for (let j = 1; j < matrix[0].length; j++) {
            for (let i = 0; i < matrix.length; i++) {
                // 3 possible moves
                if (matrix[i - 1] != undefined && matrix[i + 1] != undefined) {
                    compare_num = Math.max(matrix[i - 1][j - 1], matrix[i][j - 1]);
                    matrix[i][j] += Math.max(matrix[i + 1][j - 1], compare_num);
                    // first row, 2 moves
                } else if (matrix[i - 1] == undefined) {
                    matrix[i][j] += Math.max(matrix[i][j - 1], matrix[i + 1][j - 1])
                    // last row, 2 moves
                } else if (matrix[i + 1] == undefined) {
                    matrix[i][j] += Math.max(matrix[i][j - 1], matrix[i - 1][j - 1])
                }

                if (matrix[i][j] > max_sum)
                    max_sum = matrix[i][j];
            }
        }
        this.max_banana_mount = max_sum;
        return max_sum;
    }

    monkey_walking() {
        let sum = 0, max_sum = 0, matrix = this.matrix_island, cur_x = 0, cur_y = 0, biggest = 0;
        for (let i = 0; i < matrix.length; i++) {
            // first, we collect the bananas from the first position, always in the first column
            sum = matrix[i][0];
            cur_x = i;
            cur_y = 0;
            // walking to the right
            for (let j = 0; j < matrix[i].length - 1; j++) {
                // 3 possible moves
                if (matrix[cur_x - 1] != undefined && matrix[cur_x + 1] != undefined) {
                    biggest = Math.max(matrix[cur_x - 1][cur_y + 1], Math.max(matrix[cur_x][cur_y + 1], matrix[cur_x + 1][cur_y + 1]));
                    if (biggest == matrix[cur_x - 1][cur_y + 1]) cur_x -= 1;
                    else if (biggest == matrix[cur_x + 1][cur_y + 1]) cur_x += 1;

                    // first row, only 2 moves
                } else if (matrix[cur_x - 1] == undefined) {
                    biggest = Math.max(matrix[cur_x][cur_y + 1], matrix[cur_x + 1][cur_y + 1]);
                    if (biggest == matrix[cur_x + 1][cur_y + 1]) cur_x += 1;

                    // last row, only 2 moves
                } else if (matrix[cur_x + 1] == undefined) {
                    biggest = Math.max(matrix[cur_x][cur_y + 1], matrix[cur_x - 1][cur_y + 1]);
                    if (biggest == matrix[cur_x - 1][cur_y + 1]) cur_x -= 1;
                }
                // He always go to the right
                cur_y += 1;
                // acm for the biggest value founded
                sum += biggest;
            }

            // keep the bigger sum
            if (sum > max_sum) max_sum = sum;
        }

        this.max_banana_mount = max_sum;
        return max_sum;
    }
};