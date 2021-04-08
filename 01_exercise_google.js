//find a way to determine if a pair of numbers if your array matches the sum given

//accepts 2 parameters array and sum

//Test scenarios

const array1 = [1, 2, 3, 9]; // should return false
const array2 = [1, 4, 4, 2]; // should return true

const sum = 8;

// brute force method - O(n)

/**
 *
 * @param {*} arrayOfNums
 * @param {*} sum
 * @returns {boolean}
 */
const hasPairWithSum = function (arrayOfNums, sum) {
  for (let i = 0; i < arrayOfNums.length; i++) {
    for (let j = 0; j < arrayOfNums.length; j++) {
      if (arrayOfNums[i] + arrayOfNums[j] === sum) {
        return true;
      }
    }
  }

  return false;
};

console.log(hasPairWithSum(array1, sum));
console.log(hasPairWithSum(array2, sum));
// refactored solution with better time complexity

/**
 *
 * @param {*} arrayOfNums
 * @param {*} sum
 * @returns {boolean}
 */
const hasPairWithSum2 = function (arrayOfNums, sum) {
  //create a new set and add the sum - the current value in the array, if the array has that current value in it return true because you know that those two will equal the sum
  const mySet = new Set();

  for (let i = 0; i < arrayOfNums.length; i++) {
    if (mySet.has(arrayOfNums[i])) {
      return true;
    }

    mySet.add(sum - arrayOfNums[i]);
  }

  return false;
};

console.log(hasPairWithSum2(array1, sum));
console.log(hasPairWithSum2(array2, sum));
