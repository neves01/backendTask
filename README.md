# BACK-END TEST -- Henrique Neves

## How to use

1. Install node in your machine.

2. From a terminal, enter in project's directory and execute:

```
npm install
npm test
```

3. File `test.js` is reponsible to test diferent inputs.

## Thoughts

1. We only have positive values, therefore we want explore the largest path. Once we can only move to the right, the start position is always the first column.

2. The movement to the right is always for the biggest value. Once moved, I store de value and update the current position.

3. The complexity is O(MxN), each time that I enter in the `i` iteration, the second is always entire executed.

4. NOW: Try more inputs to validation.

5. Founded an input (number 6) which break the solution. A very large number isolated by small numbers is not found by the algorithm.

6. For the new solution: each matrix cell can hold the largest value from the previous column. 

7. At the end of the algorithm, the last column represents the possible best paths.

8. The time complexity remains O(NxM), but this time we find the path that maximizes the amount of banana.

9. The file `visual_simulation` has a simplify iteration (test input 7).