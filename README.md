# BACK-END TEST -- Henrique Neves

## How to use

1. Install node in your machine.

2. From a terminal, enter in project's directory and execute:

```
npm install
npm test
```

3. File test.js is reponsible to test diferent inputs

## Thoughts

1. We only have positive values, therefore we want explore the largest path. Once we can only move to the right, the start position is always the first column.

2. The move to the right is always for the biggest value. Once moved, I store de value and update the current position.

3. The complexity is O(MxN), each time that I enter in the `i` iteration, the second is always entire executed.

4. NOW: Try more inputs to validation.