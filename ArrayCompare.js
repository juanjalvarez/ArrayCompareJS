'use strict';

/**
 * Compares the two given arrays and yields two new arrays containing only the unique values of the respective arrays.
 * @param  {function} getPrimary Given a single argument, an arbitrary element from one of the arrays, it returns the primary value from said element. A primary value is considered the value of the element to sort/hash. For example, if your array contains only numeric values your getPrimary function would simply return the element, but if your array contains objects you would return the particular attribute you wish to use as the primary value. A primary value could also be seen as an ID.
 * @param  {Array} Arr2      Array of elements to compare with the second array of elements.
 * @param  {Array} Arr2      Array of elements to compare with the first array of elements.
 * @return {Object}            Returns an object with two attributes: obj.firstDiff is an array containing the values of Arr1 that are not present in Arr2, obj.secondDiff is an array containing the values of Arr2 that are not present in Arr1.
 */
function compareArrays(getPrimary, Arr1, Arr2) {
  let ArrA = {},
    ArrB = {};
  let ArrADiff = [],
    ArrBDiff = [];
  Arr1.forEach((elem) => ArrA[getPrimary(elem)] = elem);
  Arr2.forEach((elem) => ArrB[getPrimary(elem)] = elem);
  for (let val in ArrA)
    if (!ArrB[val])
      ArrADiff.push(ArrA[val]);
  for (let val in ArrB)
    if (!ArrA[val])
      ArrBDiff.push(ArrB[val]);
  return {
    firstDiff: ArrADiff,
    secondDiff: ArrBDiff
  };
}

module.exports = compareArrays;
