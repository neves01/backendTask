const Traveler = require("./Traveler");

describe('matrix basic operations', () => {

    it('created successfully?', () => {
        let matrix = [[1, 1], [2, 2]];
        let traveler = new Traveler(matrix);
        expect(traveler.matrix_island.length).toEqual(2);
    });

});

describe('matrix walking', () => {

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

    it('maximum amount, input 3', () => {
        let matrix = [[10, 33, 13, 15], [22, 21, 4, 1], [5, 0, 2, 3], [0, 6, 14, 2]];
        let traveler = new Traveler(matrix);
        let max_banana_stack = traveler.monkey_walking();
        expect(max_banana_stack).toEqual(83);
    });

    it('maximum amount, input 4', () => {
        let matrix = [[100, 33, 13, 15], [22, 21, 4, 1], [5, 0, 2, 3], [0, 6, 14, 2]];
        let traveler = new Traveler(matrix);
        let max_banana_stack = traveler.monkey_walking();
        expect(max_banana_stack).toEqual(161);
    });

    it('maximum amount, input 5', () => {
        let matrix = [[100, 33, 13, 15], [22, 21, 4, 1], [5, 0, 2, 3], [0, 6, 14, 2000]];
        let traveler = new Traveler(matrix);
        let max_banana_stack = traveler.monkey_walking();
        expect(max_banana_stack).toEqual(2020);
    });

    /*
    it('maximum amount, input 6', () => {
        let matrix = [[1, 1, 0, 700], [1, 5, 1, 1], [2, 3, 4, 7], [1, 6, 5, 1]];
        let traveler = new Traveler(matrix);
        let max_banana_stack = traveler.monkey_walking();
        expect(max_banana_stack).toEqual(708);
    });
    */

});

describe('matrix refatored walking', () => {

    it('maximum amount, input 1', () => {
        let matrix = [[1, 3, 3], [2, 1, 4], [0, 6, 4]];
        let traveler = new Traveler(matrix);
        let max_banana_stack = traveler.monkey_walking_refatored();
        expect(max_banana_stack).toEqual(12);
    });

    it('maximum amount, input 2', () => {
        let matrix = [[1, 3, 1, 5], [2, 2, 4, 1], [5, 0, 2, 3], [0, 6, 1, 2]];
        let traveler = new Traveler(matrix);
        let max_banana_stack = traveler.monkey_walking_refatored();
        expect(max_banana_stack).toEqual(16);
    });

    it('maximum amount, input 3', () => {
        let matrix = [[10, 33, 13, 15], [22, 21, 4, 1], [5, 0, 2, 3], [0, 6, 14, 2]];
        let traveler = new Traveler(matrix);
        let max_banana_stack = traveler.monkey_walking_refatored();
        expect(max_banana_stack).toEqual(83);
    });

    it('maximum amount, input 4', () => {
        let matrix = [[100, 33, 13, 15], [22, 21, 4, 1], [5, 0, 2, 3], [0, 6, 14, 2]];
        let traveler = new Traveler(matrix);
        let max_banana_stack = traveler.monkey_walking_refatored();
        expect(max_banana_stack).toEqual(161);
    });

    it('maximum amount, input 5', () => {
        let matrix = [[100, 33, 13, 15], [22, 21, 4, 1], [5, 0, 2, 3], [0, 6, 14, 2000]];
        let traveler = new Traveler(matrix);
        let max_banana_stack = traveler.monkey_walking_refatored();
        expect(max_banana_stack).toEqual(2123);
    });

    it('maximum amount, input 7', () => {
        let matrix = [[1, 1, 0, 700], [1, 5, 1, 1], [2, 3, 4, 7], [1, 6, 5, 1]];
        let traveler = new Traveler(matrix);
        let max_banana_stack = traveler.monkey_walking_refatored();
        expect(max_banana_stack).toEqual(708);
    });

});
