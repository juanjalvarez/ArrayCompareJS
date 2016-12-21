'use strict';

/**
 * Compares the two given arrays and yields two new arrays containing only the unique values of the respective arrays.
 * @param  {function} primary Given a single argument, an arbitrary element from one of the arrays, it returns the primary value from said element. A primary value is considered the value of the element to sort/hash. For example, if your array contains only numeric values your primary function would simply return the element, but if your array contains objects you would return the particular attribute you wish to use as the primary value. A primary value could also be seen as an ID.
 * @param  {Array} arr1      Array of elements to compare with the second array of elements.
 * @param  {Array} arr2      Array of elements to compare with the first array of elements.
 * @return {Object}            Returns an object with two attributes: obj.firstDiff is an array containing the values of arr1 that are not present in arr2, obj.secondDiff is an array containing the values of arr2 that are not present in arr1.
 */
function compareArrays(primary, arr1, arr2) {
  if (!(arr1 instanceof Array))
    throw new Error('arr1 is not an Array');
  if (!(arr2 instanceof Array))
    throw new Error('arr2 is not an Array');
  if (typeof primary !== 'function')
    throw new Error('primary is not a function');
  let arrA = {},
    arrB = {};
  let arrADiff = [],
    arrBDiff = [];
  arr1.forEach((elem) => arrA[primary(elem)] = elem);
  arr2.forEach((elem) => arrB[primary(elem)] = elem);
  for (let val in arrA)
    if (!arrB[val])
      arrADiff.push(arrA[val]);
  for (let val in arrB)
    if (!arrA[val])
      arrBDiff.push(arrB[val]);
  return {
    firstDiff: arrADiff,
    secondDiff: arrBDiff
  };
}

module.exports = compareArrays;
