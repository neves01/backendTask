const Traveler = require("./Traveler");

describe('matrix basic operations', () => {

    it('created successfully?', () => {
        let matrix = [[1, 1], [2, 2]];
        let traveler = new Traveler(matrix);
        expect(traveler.matrix_island.length).toEqual(2);
    });

    it('maximum amount, input 1', () => {
        let matrix = [[1, 3, 3], [2, 1, 4], [0, 6, 4]];
        let traveler = new Traveler(matrix);
        let max_banana_stack = traveler.monkey_walking();
        expect(max_banana_stack).toEqual(12);
    });

    it('maximum amount, input 2', () => {
        let matrix = [[1, 3, 1, 5], [2, 2, 4, 1], [5, 0, 2, 3], [0, 6, 1, 2]];
        let traveler = new Traveler(matrix);
        let max_banana_stack = traveler.monkey_walking();
        expect(max_banana_stack).toEqual(16);
    });

});