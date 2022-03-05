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

        return max_sum;
    }
};