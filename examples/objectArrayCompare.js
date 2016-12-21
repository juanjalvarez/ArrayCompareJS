// module.exports yields the ArrayCompare function.
const ArrayCompare = require('../ArrayCompare');

// We initialize a helper function to create our example data.
function person(firstName, lastName, age, job) {
  return {
    firstName: firstName,
    lastName: lastName,
    age: age,
    job: job
  }
}

// We initialize our example data.
let a = person('Juan', 'Alvarez', 19, 'Software Developer');
let b = person('Bat', 'Man', 43, 'Vigilante');
let c = person('Ronald', 'McDonald', '?', 'Entrepreneur');
let d = person('John', 'Doe', '?', '?');

// We declare our example arrays.
let firstArr = [a, b, c];
let secondArr = [a, b, d];

// We declare our primary value yielding function. In this case the primary value will be the combination of the firstName and the lastName separated by a single space.
let primary = elem => `${elem.firstName} ${elem.lastName}`;

// Results are yielded and stored here.
let result = ArrayCompare(primary, firstArr, secondArr);

// Print the elements in the first array that are not in the second array.
console.log(result.firstDiff);

// Print the elements in the second array that are not in the first array.
console.log(result.secondDiff);
