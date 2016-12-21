// module.exports yields the ArrayCompare function.
const ArrayCompare = require('../ArrayCompare');

// We declare our example arrays.
let firstArray = [1, 2, 3];
let secondArray = [1, 2, 4];

// We declare our primary value yielding function.
let primaryFunction = (elem) => elem;

// Results are yielded and stored here.
let result = ArrayCompare(primaryFunction, firstArray, secondArray);

// Print the elements in the first array that are not in the second array.
console.log(result.firstDiff);

// Print the elements in the second array that are not in the first array.
console.log(result.secondDiff);
